import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem, openCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link
            to="/products"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    openCart();
  };

  const features = [
    { icon: Truck, text: 'Free shipping on orders over $50' },
    { icon: Shield, text: '2-year warranty included' },
    { icon: RotateCcw, text: '30-day return policy' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Red'];

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <li><Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary-600 dark:hover:text-primary-400">Products</Link></li>
            <li>/</li>
            <li className="text-neutral-900 dark:text-white">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-primary-600 dark:border-primary-400'
                      : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-neutral-300 dark:text-neutral-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-neutral-600 dark:text-neutral-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-neutral-500 dark:text-neutral-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-sm font-medium rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.category === 'Clothing' && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Size</h3>
                <div className="flex space-x-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                          : 'border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {(product.category === 'Clothing' || product.category === 'Accessories') && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Color</h3>
                <div className="flex space-x-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedColor === color
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                          : 'border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-neutral-300 dark:border-neutral-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-4 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-neutral-600 dark:text-neutral-400">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;