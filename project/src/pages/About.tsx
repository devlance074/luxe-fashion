import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Sustainable Pieces', value: '10,000+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Years of Excellence', value: '8+', icon: Heart },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about sustainable fashion and timeless design.'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Sustainability',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading our mission for ethical and eco-friendly fashion.'
    },
    {
      name: 'Sofia Chen',
      role: 'Customer Experience',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensuring every customer feels confident and beautiful.'
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-100 to-cream-200 dark:from-neutral-900 dark:to-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              About Luxe Fashion
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We're redefining luxury fashion through sustainable practices, timeless design, 
              and an unwavering commitment to quality and ethics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-cream-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  Founded in 2016, Luxe Fashion began with a simple yet powerful vision: 
                  to create beautiful, sustainable fashion that doesn't compromise on style or ethics.
                </p>
                <p>
                  What started as a small atelier in New York has grown into a global movement, 
                  championing slow fashion, fair trade practices, and timeless design. We believe 
                  that true luxury lies in quality, craftsmanship, and conscious choices.
                </p>
                <p>
                  Today, we're proud to work with artisans worldwide, using only sustainable materials 
                  and ethical production methods. Every piece tells a story of care, creativity, and 
                  commitment to a better future for fashion.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              The principles that guide our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainable Luxury',
                description: 'We believe luxury and sustainability go hand in hand. Every piece is crafted with eco-friendly materials and ethical practices.',
                icon: '🌱'
              },
              {
                title: 'Timeless Design',
                description: 'Our designs transcend trends, focusing on classic silhouettes and quality that lasts for years to come.',
                icon: '✨'
              },
              {
                title: 'Ethical Production',
                description: 'We partner with artisans and manufacturers who share our commitment to fair wages and safe working conditions.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-cream-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              The passionate people behind Luxe Fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover sustainable luxury fashion that makes you look good and feel even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-cream-50 transition-colors"
              >
                Shop Collection
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;