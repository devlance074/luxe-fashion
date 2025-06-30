import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderNumber, total } = location.state || { orderNumber: 'ORD123456', total: '0.00' };

  const orderSteps = [
    {
      icon: CheckCircle,
      title: 'Order Confirmed',
      description: 'Your order has been received and confirmed',
      status: 'completed'
    },
    {
      icon: Package,
      title: 'Processing',
      description: 'We\'re preparing your items for shipment',
      status: 'current'
    },
    {
      icon: Truck,
      title: 'Shipped',
      description: 'Your order is on its way to you',
      status: 'upcoming'
    },
    {
      icon: Mail,
      title: 'Delivered',
      description: 'Your order has been delivered',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-lg text-neutral-500 dark:text-neutral-500">
            Order #{orderNumber}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Order Number</span>
                <span className="font-medium text-neutral-900 dark:text-white">#{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Order Date</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Total Amount</span>
                <span className="font-semibold text-neutral-900 dark:text-white text-lg">
                  ${total}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Payment Method</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  Credit Card (**** 3456)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Delivery Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Delivery Information
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-neutral-600 dark:text-neutral-400 block">Estimated Delivery</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-neutral-600 dark:text-neutral-400 block">Shipping Address</span>
                <div className="font-medium text-neutral-900 dark:text-white">
                  <p>John Doe</p>
                  <p>123 Main Street</p>
                  <p>City, State 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Order Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm mb-8"
        >
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
            Order Progress
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="space-y-8">
              {orderSteps.map((step, _) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex items-start">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      step.status === 'completed' 
                        ? 'bg-green-100 dark:bg-green-900' 
                        : step.status === 'current'
                        ? 'bg-primary-100 dark:bg-primary-900'
                        : 'bg-neutral-100 dark:bg-neutral-700'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        step.status === 'completed'
                          ? 'text-green-600 dark:text-green-400'
                          : step.status === 'current'
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`} />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold ${
                        step.status === 'upcoming' 
                          ? 'text-neutral-400 dark:text-neutral-500' 
                          : 'text-neutral-900 dark:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        step.status === 'upcoming'
                          ? 'text-neutral-400 dark:text-neutral-500'
                          : 'text-neutral-600 dark:text-neutral-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-2xl"
        >
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            What's Next?
          </h2>
          <div className="space-y-3 text-neutral-600 dark:text-neutral-400 mb-6">
            <p>• You'll receive an email confirmation shortly</p>
            <p>• We'll send you tracking information once your order ships</p>
            <p>• Your order will be delivered within 3-5 business days</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
              Track Your Order
            </button>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Need help with your order?
          </p>
          <Link
            to="/contact"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            Contact our support team
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;