import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, removeItem, updateQuantity, getTotalPrice } = useCart();

  const shipping = 0; // Free shipping
  const tax = getTotalPrice() * 0.08; // 8% tax
  const total = getTotalPrice() + shipping + tax;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 dark:bg-neutral-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-neutral-300 dark:text-neutral-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {state.items.length} {state.items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="text-lg font-semibold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {item.product.category}
                    </p>
                    {(item.selectedSize || item.selectedColor) && (
                      <div className="flex space-x-4 text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm h-fit"
          >
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Shipping</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  Free
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Tax</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                to="/checkout"
                className="w-full block text-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/products"
                className="w-full block text-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Promo Code */}
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-3">
                Promo Code
              </h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;