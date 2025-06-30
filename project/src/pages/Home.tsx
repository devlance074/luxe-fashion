import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      rating: 5,
      comment: 'Absolutely love the quality and style! The fabrics are luxurious and the fit is perfect.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Sofia Rodriguez',
      rating: 5,
      comment: 'Amazing customer service and beautiful pieces. My new favorite fashion destination!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Isabella Chen',
      rating: 5,
      comment: 'Sustainable fashion that doesn\'t compromise on style. Highly recommend!',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Premium materials and craftsmanship'
    },
    {
      icon: Headphones,
      title: 'Style Support',
      description: 'Personal styling advice available'
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      {/* Hero Section - Completely removed top padding and margin */}
      <section className="relative bg-gradient-to-br from-cream-100 to-cream-200 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden -mt-px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full"
                >
                  New Spring Collection
                </motion.span>
                <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                  Sustainable
                  <span className="text-primary-600 dark:text-primary-400"> Luxury Fashion</span>
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Discover timeless pieces crafted with care for the conscious fashionista. 
                  Sustainable materials, ethical production, and effortless style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors group"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-cream-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion Model"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cream-300 dark:bg-cream-900 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-cream-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover our handpicked selection of sustainable luxury pieces
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors group"
            >
              Shop All Styles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Spring Sale Event
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get 25% off on all spring essentials. Use code SPRING25 at checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products?category=Dresses"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-cream-50 transition-colors"
              >
                Shop Dresses
              </Link>
              <span className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg">
                Limited Time Only
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Join thousands of satisfied fashion lovers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream-50 dark:bg-neutral-800 p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;