import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cashmere Blend Sweater',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Knitwear',
    description: 'Luxuriously soft cashmere blend sweater with a relaxed fit. Perfect for layering or wearing on its own. Made from sustainable materials with attention to every detail.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    tags: ['cashmere', 'sustainable', 'luxury']
  },
  {
    id: '2',
    name: 'Silk Midi Dress',
    price: 299.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536620/pexels-photo-1536620.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Dresses',
    description: 'Elegant silk midi dress with a timeless silhouette. Features a flattering A-line cut and delicate button details. Perfect for both day and evening wear.',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ['silk', 'elegant', 'versatile']
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Basics',
    description: 'Soft, comfortable, and sustainable. Made from 100% organic cotton with a perfect fit for everyday wear. Available in multiple colors.',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    tags: ['organic', 'comfortable', 'sustainable']
  },
  {
    id: '4',
    name: 'Tailored Blazer',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Outerwear',
    description: 'Perfectly tailored blazer with a modern cut. Features structured shoulders and a flattering silhouette. Ideal for professional and casual settings.',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
    tags: ['tailored', 'professional', 'versatile']
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Accessories',
    description: 'Handcrafted genuine leather crossbody bag perfect for daily use. Features multiple compartments and adjustable strap. Timeless design meets functionality.',
    rating: 4.8,
    reviews: 67,
    inStock: true,
    tags: ['leather', 'handcrafted', 'versatile']
  },
  {
    id: '6',
    name: 'High-Waisted Jeans',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Denim',
    description: 'Classic high-waisted jeans with a flattering fit. Made from premium denim with stretch for comfort. Perfect for creating effortless everyday looks.',
    rating: 4.5,
    reviews: 91,
    inStock: true,
    tags: ['denim', 'high-waisted', 'classic']
  },
  {
    id: '7',
    name: 'Wool Coat',
    price: 399.99,
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Outerwear',
    description: 'Luxurious wool coat with a timeless design. Features a double-breasted closure and elegant silhouette. Perfect for cold weather styling.',
    rating: 4.9,
    reviews: 45,
    inStock: true,
    featured: true,
    tags: ['wool', 'luxury', 'timeless']
  },
  {
    id: '8',
    name: 'Ankle Boots',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Shoes',
    description: 'Stylish ankle boots with a comfortable heel. Crafted from premium leather with a modern design. Perfect for both casual and dressy occasions.',
    rating: 4.7,
    reviews: 178,
    inStock: true,
    tags: ['leather', 'comfortable', 'versatile']
  }
];

export const categories = [
  'All',
  'Dresses',
  'Knitwear',
  'Outerwear',
  'Denim',
  'Basics',
  'Accessories',
  'Shoes'
];