import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage';
import './App.css';
import ProductListings from './components/ProductListings';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" 
          element={
            <ProductListings 
              products={products} 
              setProducts={setProducts}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}/>} />
        <Route path="/Products/:productId" 
          element={
            <ProductDetails 
            products={products}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError} />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/EditProduct" element={<EditProduct />} />
        <Route path="/DeleteProduct" element={<DeleteProduct />} />
      </Routes>
    </>
  );
}