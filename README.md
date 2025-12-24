# FakeStore E-Commerce Application

A modern, full-featured e-commerce web application built with React, showcasing CRUD operations with the FakeStore API. This project demonstrates professional frontend development practices, including state management, routing, API integration, and responsive design.

## 🚀 Features

- **Product Browsing**: View all products with detailed information
- **Product Details**: Individual product pages with comprehensive details
- **CRUD Operations**: 
  - ➕ Add new products
  - ✏️ Edit existing products
  - 🗑️ Delete products with confirmation modal
- **Responsive Design**: Temu-inspired UI with vibrant gradients and modern aesthetics
- **Navigation**: Intuitive navigation with React Router
- **API Integration**: Full integration with FakeStore API
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Visual feedback during asynchronous operations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 6
- **Routing**: React Router DOM 7
- **HTTP Client**: Axios
- **UI Framework**: React Bootstrap 5
- **Styling**: Custom CSS with Temu-inspired design
- **Linting**: ESLint with React plugins

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CT_FakeStore_E-Commerce_App
   ```

2. **Navigate to the application directory**
   ```bash
   cd fakestore-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Usage

### Viewing Products
- Navigate to the "Products" page from the homepage or navigation bar
- Browse through all available products
- Click on any product card to view detailed information

### Adding a Product
- Navigate to "Add Product" from the navigation menu
- Fill in the product details (title, price, description, image URL, category)
- Submit the form to add the product

### Editing a Product
- Navigate to "Edit Product" from the navigation menu
- Enter the product ID you wish to edit
- Update the product details
- Submit to save changes

### Deleting a Product
- Navigate to "Delete Product" from the navigation menu
- Enter the product ID to delete
- Confirm deletion in the modal dialog

## 📁 Project Structure

```
fakestore-app/
├── src/
│   ├── components/
│   │   ├── Homepage.jsx         # Landing page
│   │   ├── NavBar.jsx           # Navigation component
│   │   ├── ProductListings.jsx # Product grid view
│   │   ├── ProductDetails.jsx  # Individual product page
│   │   ├── AddProduct.jsx      # Add product form
│   │   ├── EditProduct.jsx     # Edit product form
│   │   ├── DeleteProduct.jsx   # Delete product with confirmation
│   │   └── APIModal.jsx        # Response modal component
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # Global styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Base styles
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🎨 Design Features

- **Temu-Inspired Theme**: Vibrant orange gradients and modern UI elements
- **Responsive Cards**: Interactive product cards with hover effects
- **Floating Labels**: Modern form inputs with floating labels
- **Animated Elements**: Smooth transitions and hover animations
- **Modal Dialogs**: Confirmation and response modals
- **Custom Alerts**: Styled success and error notifications

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API

This application uses the [FakeStore API](https://fakestoreapi.com/) for all product data and CRUD operations.

**Base URL**: `https://fakestoreapi.com`

**Endpoints Used**:
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## 📝 Notes

- This is a demonstration project using the FakeStore API
- API operations may not persist data permanently (API simulation)
- All CRUD operations are functional but may return simulated responses

## 📄 License

This project is created for educational purposes as part of the Coding Temple Software Engineering Course.

## 👨‍💻 Author

Developed as a Module Project for Coding Temple Software Engineering Course by Matthew Arney

---

**Happy Shopping! 🛍️**
