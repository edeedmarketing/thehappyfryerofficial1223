import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Best fish and chips in Logan! Always fresh and the staff are so friendly. Been coming here for years.',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    comment: 'The gluten-free option is amazing! Finally a place where I can enjoy fish and chips without worry.',
  },
  {
    name: 'Emma Williams',
    rating: 5,
    comment: 'Family favorite! The portions are generous and the quality is always consistent. Highly recommend!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
