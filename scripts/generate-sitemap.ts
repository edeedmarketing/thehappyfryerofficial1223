import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Warning: Supabase credentials not found. Generating sitemap with static pages only.');
}

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

interface BlogPost {
  slug: string;
  published_at: string;
  updated_at?: string;
}

async function generateSitemap() {
  const baseUrl = 'https://thehappyfryer.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: '/menu', lastmod: currentDate, changefreq: 'monthly', priority: '0.9' },
    { loc: '/order-now', lastmod: currentDate, changefreq: 'monthly', priority: '0.9' },
    { loc: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
  ];

  let blogPosts: BlogPost[] = [];

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('slug, published_at, updated_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else {
        blogPosts = data || [];
      }
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
    }
  }

  const blogUrls = blogPosts.map((post) => {
    const lastmod = post.updated_at || post.published_at;
    const formattedDate = new Date(lastmod).toISOString().split('T')[0];

    return {
      loc: `/blog/${post.slug}`,
      lastmod: formattedDate,
      changefreq: 'monthly',
      priority: '0.7',
    };
  });

  const allUrls = [...staticPages, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(outputPath, xml, 'utf-8');

  console.log(`✓ Sitemap generated successfully with ${allUrls.length} URLs`);
  console.log(`  - ${staticPages.length} static pages`);
  console.log(`  - ${blogPosts.length} blog posts`);
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error);
  process.exit(1);
});
