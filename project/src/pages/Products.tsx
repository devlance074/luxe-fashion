import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const searchMatch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return categoryMatch && priceMatch && searchMatch;
    });

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => a.id.localeCompare(b.id));
      default:
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
          >
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </motion.h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {searchQuery 
              ? `Found ${filteredAndSortedProducts.length} products matching your search`
              : 'Discover our complete collection of sustainable luxury fashion'
            }
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-cream-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Price Range
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 px-3 py-2 border border-cream-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    placeholder="Min"
                  />
                  <span className="text-neutral-500 dark:text-neutral-400">to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 px-3 py-2 border border-cream-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    placeholder="Max"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center px-4 py-2 border border-cream-300 dark:border-neutral-600 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-cream-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </button>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {filteredAndSortedProducts.length} products found
                </span>
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-cream-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-cream-300 dark:border-neutral-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredAndSortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Filter className="w-16 h-16 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {searchQuery 
                    ? `No products match "${searchQuery}". Try adjusting your search or filters.`
                    : 'Try adjusting your filters or search criteria'
                  }
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 500]);
                    setSortBy('featured');
                  }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;