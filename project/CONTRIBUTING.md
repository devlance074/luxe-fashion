# Contributing to Luxe Fashion Template

Thank you for your interest in contributing to the Luxe Fashion Template! We welcome contributions from the community and are grateful for any help you can provide.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Issue Guidelines](#issue-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@luxefashion.com](mailto:conduct@luxefashion.com).

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/luxe-fashion.git
   cd luxe-fashion
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/luxe-fashion.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🤝 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Tests**
- 🌐 **Translations**

### Before You Start

1. **Check existing issues** to see if your idea is already being worked on
2. **Create an issue** to discuss major changes before implementing
3. **Keep changes focused** - one feature or fix per pull request
4. **Follow the coding standards** outlined below

## 🔄 Pull Request Process

### 1. Prepare Your Changes

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/amazing-feature

# Make your changes
# ... code, code, code ...

# Test your changes
npm run test
npm run build
```

### 2. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add amazing new feature"

# Push to your fork
git push origin feature/amazing-feature
```

### 3. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Fill out the PR template
4. Link any related issues
5. Request review from maintainers

### 4. PR Review Process

- Maintainers will review your PR
- Address any feedback or requested changes
- Once approved, your PR will be merged

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names

```typescript
// ✅ Good
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// ❌ Bad
interface Props {
  data: any;
  onClick: any;
}
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Handle loading and error states

```typescript
// ✅ Good
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = useCallback(() => {
    onAddToCart(product);
  }, [product, onAddToCart]);

  return (
    <div className="product-card">
      {/* Component content */}
    </div>
  );
};

// ❌ Bad
const ProductCard = (props) => {
  return <div>{props.product.name}</div>;
};
```

### Styling

- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use semantic class names for custom CSS
- Support both light and dark modes

```typescript
// ✅ Good
<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">

// ❌ Bad
<div style={{ backgroundColor: 'white', padding: '16px' }}>
```

### File Organization

- Keep files under 300 lines
- Use descriptive file names
- Group related functionality
- Follow the established folder structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
└── types/            # Type definitions
```

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```bash
# Feature
git commit -m "feat(cart): add quantity selector to cart items"

# Bug fix
git commit -m "fix(search): resolve search dropdown positioning issue"

# Documentation
git commit -m "docs: update installation instructions"

# Breaking change
git commit -m "feat!: change product API structure"
```

## 🐛 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check the documentation** for answers
3. **Try the latest version** to see if the issue is already fixed

### Bug Reports

Include the following information:

- **Description**: Clear description of the bug
- **Steps to reproduce**: Detailed steps to reproduce the issue
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests

Include the following information:

- **Description**: Clear description of the feature
- **Use case**: Why this feature would be useful
- **Proposed solution**: How you think it should work
- **Alternatives**: Alternative solutions you've considered

### Issue Templates

Use the provided issue templates when creating new issues:

- 🐛 Bug Report
- ✨ Feature Request
- 📚 Documentation
- ❓ Question

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Update tests when modifying existing code
- Use descriptive test names
- Test both happy path and edge cases

```typescript
// ✅ Good
describe('ProductCard', () => {
  it('should display product name and price', () => {
    // Test implementation
  });

  it('should handle add to cart click', () => {
    // Test implementation
  });

  it('should show out of stock state when product is unavailable', () => {
    // Test implementation
  });
});
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Include usage examples for new components

```typescript
/**
 * ProductCard component for displaying product information
 * 
 * @param product - Product data to display
 * @param onAddToCart - Callback when add to cart is clicked
 * @param className - Additional CSS classes
 * 
 * @example
 * <ProductCard 
 *   product={product} 
 *   onAddToCart={handleAddToCart}
 *   className="mb-4"
 * />
 */
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  className?: string;
}
```

### README Updates

- Update README.md for new features
- Add examples for new functionality
- Keep installation instructions current

## 🏷️ Release Process

### Versioning

We use [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Create release notes
- [ ] Tag the release
- [ ] Deploy to production

## 🎉 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page
- Special mentions for significant contributions

## 📞 Getting Help

If you need help with contributing:

- 💬 Join our [Discord community](link-to-discord)
- 📧 Email us at [contributors@luxefashion.com](mailto:contributors@luxefashion.com)
- 📖 Check the [documentation](link-to-docs)
- 🐛 Create an issue with the "question" label

## 🙏 Thank You

Thank you for contributing to Luxe Fashion Template! Your contributions help make this project better for everyone.

---

**Happy contributing! 🚀**