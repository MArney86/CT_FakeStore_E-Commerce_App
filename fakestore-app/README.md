# FakeStore App

A React-based e-commerce application built with Vite, featuring full CRUD functionality with the FakeStore API.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Built With

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **React Router DOM 7** - Client-side routing
- **React Bootstrap 5** - UI components
- **Axios** - HTTP client
- **Bootstrap 5** - CSS framework

## 🎯 Features

### Core Functionality
- Browse all products from FakeStore API
- View detailed product information
- Add new products
- Edit existing products
- Delete products with confirmation

### UI/UX
- Responsive design for all screen sizes
- Temu-inspired vibrant color scheme
- Interactive product cards with hover effects
- Loading states and error handling
- Modal dialogs for confirmations and responses
- Floating form labels
- Smooth animations and transitions

## 📂 Component Structure

```
src/
├── components/
│   ├── Homepage.jsx         # Landing page with hero section
│   ├── NavBar.jsx           # Navigation bar with dropdown menus
│   ├── ProductListings.jsx # Grid display of all products
│   ├── ProductDetails.jsx  # Detailed view of single product
│   ├── AddProduct.jsx      # Form to create new products
│   ├── EditProduct.jsx     # Form to update existing products
│   ├── DeleteProduct.jsx   # Delete interface with confirmation
│   └── APIModal.jsx        # Reusable modal for API responses
├── App.jsx                  # Main component with route configuration
├── App.css                  # Global styles and theme
├── main.jsx                 # React app entry point
└── index.css                # Base CSS reset and utilities
```

## 🎨 Styling

The application features a custom Temu-inspired design with:
- CSS custom properties for consistent theming
- Gradient backgrounds on cards and buttons
- Smooth transitions and hover effects
- Responsive breakpoints for mobile, tablet, and desktop
- Box shadows for depth and visual hierarchy

## 🔌 API Integration

All API calls are made to [FakeStore API](https://fakestoreapi.com/):

```javascript
GET    /products       // Fetch all products
GET    /products/:id   // Fetch single product
POST   /products       // Create new product
PUT    /products/:id   // Update product
DELETE /products/:id   // Delete product
```

## 🧩 Key Components

### Homepage
- Hero section with call-to-action button
- Gradient background with animated overlay
- Responsive text sizing

### ProductListings
- Grid layout of product cards
- Loading spinner during data fetch
- Error handling with user-friendly messages
- Click-through to product details

### ProductDetails
- Full product information display
- Image with zoom effect
- Price, rating, and category badges
- Back navigation

### CRUD Forms
- **AddProduct**: Create new products with validation
- **EditProduct**: Update existing product data
- **DeleteProduct**: Remove products with confirmation modal

### APIModal
- Reusable component for displaying API responses
- Shows operation results (add/edit/delete)
- Dismissible with close button

## ⚙️ Configuration

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
})
```

### ESLint Config
- React hooks rules
- React refresh warnings
- Modern ECMAScript support

## 🐛 Troubleshooting

### React Version Issues
This app uses React 18. If experiencing compatibility issues with React 19, downgrade:
```bash
npm install react@18 react-dom@18
```

## 📝 Development Notes

- Hot Module Replacement (HMR) enabled for instant updates
- ESLint configured for code quality
- React Bootstrap components for consistent UI
- Axios for simplified HTTP requests
- React Router for declarative routing

## 🔄 State Management

State is managed using React hooks:
- `useState` for component-level state
- `useEffect` for side effects and data fetching
- `useNavigate` for programmatic navigation
- `useParams` for route parameters
- `useLocation` for accessing route state

## 🎓 Learning Outcomes

This project demonstrates:
- React component architecture
- RESTful API integration
- Form handling and validation
- Client-side routing
- State management
- CSS styling and responsive design
- Error handling and user feedback
- Modern build tools (Vite)

## 📦 Dependencies

### Production
- `react` & `react-dom` - Core React libraries
- `react-router-dom` - Routing functionality
- `react-bootstrap` - Bootstrap components for React
- `bootstrap` - CSS framework
- `axios` - Promise-based HTTP client

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Code linting
- `eslint-plugin-react-hooks` - React hooks rules
- `eslint-plugin-react-refresh` - Fast Refresh support

## 🚀 Deployment

To deploy this application:

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files

3. Deploy to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Heroku

## 📄 License

Educational project for Coding Temple Software Engineering Course.

---

**Built with ❤️ using React + Vite**
