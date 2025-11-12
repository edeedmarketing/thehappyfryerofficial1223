import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogNotification from './components/BlogNotification';
import OrderOnlineNotification from './components/OrderOnlineNotification';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderNow from './pages/OrderNow';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <BlogNotification />
        <OrderOnlineNotification />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-now" element={<OrderNow />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;