import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Real-time search without delay
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 4); // Show up to 4 results for compact design

    setSearchResults(filtered);
  }, [searchQuery]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/10 z-40"
          />

          {/* Search Dropdown - Positioned under search icon */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-neutral-800 border border-cream-200 dark:border-neutral-700 rounded-xl shadow-lg z-50 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-cream-200 dark:border-neutral-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-9 pr-9 py-2.5 bg-cream-50 dark:bg-neutral-700 border border-cream-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm"
                />
                <button
                  onClick={handleClose}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-600 rounded-full transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-64 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-4 text-center text-neutral-500 dark:text-neutral-400 text-sm">
                  Start typing to search...
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-4 text-center text-neutral-500 dark:text-neutral-400 text-sm">
                  No products found for "{searchQuery}"
                </div>
              ) : (
                <div className="p-2">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1 mb-1">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </div>
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={handleClose}
                      className="flex items-center p-2 hover:bg-cream-50 dark:hover:bg-neutral-700 rounded-lg transition-colors group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0 ml-3">
                        <h3 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-right ml-2 flex-shrink-0">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                          ${product.price.toFixed(2)}
                        </p>
                        {product.originalPrice && (
                          <p className="text-xs text-neutral-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                  
                  {/* View All Results Link */}
                  {searchResults.length > 0 && (
                    <div className="mt-1 pt-2 border-t border-cream-200 dark:border-neutral-700">
                      <Link
                        to={`/products?search=${encodeURIComponent(searchQuery)}`}
                        onClick={handleClose}
                        className="block w-full p-2 text-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors font-medium text-sm"
                      >
                        View all results
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchDropdown;