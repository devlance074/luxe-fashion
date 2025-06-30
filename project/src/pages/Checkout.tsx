import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, MapPin, Package, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { useCart } from '../context/CartContext';
import { ShippingInfo, PaymentInfo } from '../types';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

  const { state, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = 0;
  const tax = getTotalPrice() * 0.08;
  const total = getTotalPrice() + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handleOrderSubmit = () => {
    // Simulate order processing
    clearCart();
    navigate('/order-confirmation', { 
      state: { 
        orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
        total: total.toFixed(2)
      }
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-24 h-24 text-neutral-300 dark:text-neutral-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Add some items to your cart before checking out.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Checkout
          </h1>
          <CheckoutSteps currentStep={currentStep} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Shipping Information
                  </h2>
                </div>
                
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Continue to Payment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <CreditCard className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Payment Information
                  </h2>
                </div>
                
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentInfo.cardholderName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardholderName: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Review Order
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <Package className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Review Your Order
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* Shipping Info */}
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Shipping Address</h3>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                      <p>{shippingInfo.address}</p>
                      <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                      <p>{shippingInfo.email}</p>
                      <p>{shippingInfo.phone}</p>
                    </div>
                  </div>
                  
                  {/* Payment Info */}
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Payment Method</h3>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      <p>**** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
                      <p>{paymentInfo.cardholderName}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Payment
                    </button>
                    <button
                      onClick={handleOrderSubmit}
                      className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
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
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                <span className="text-neutral-900 dark:text-white">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">Shipping</span>
                <span className="text-green-600 dark:text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">Tax</span>
                <span className="text-neutral-900 dark:text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-900 dark:text-white">Total</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;