import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/esm/Button";
import Alert from 'react-bootstrap/Alert';

export default function ProductDetails ({loading, setLoading, error, setError}) {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        image: "",
        description: "",
        category: "",
        price: 0,
        rating: {rate: 0,
                count: 0,},
    });
    const [cartSuccess, setCartSuccess] = useState(false);
    const [cartError, setCartError] = useState(null);
    
    useEffect(() => { 
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${productId}`)   
        .then(response => {
            const data = response.data
            setProduct({
                id: data.id,
                title: data.title,
                image: data.image,
                description: data.description,
                category: data.category,
                price: data.price,
                rating: data.rating,
            });
            setLoading(false);
        }).catch(e => {
            setError(`Failed to fetch product: ${e.message}`);
            setLoading(false);
        })
    },[productId]);

    const handleAddToCart = async () => {
        setCartSuccess(false);
        setCartError(null);
        
        try {
            const cartData = {
                userId: 1,
                date: new Date().toISOString(),
                products: [{ productId: product.id, quantity: 1 }]
            };
            
            const response = await axios.post('https://fakestoreapi.com/carts', cartData);
            setCartSuccess(true);
            setTimeout(() => setCartSuccess(false), 3000);
        } catch (e) {
            setCartError(`Failed to add to cart: ${e.message}`);
            setTimeout(() => setCartError(null), 3000);
        }
    };

    return(
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
            <div className="product-details-container text-center">
                <h1 className="mb-4">{product.title}</h1>
                {cartSuccess && <Alert variant="success">Product added to cart successfully!</Alert>}
                {cartError && <Alert variant="danger">{cartError}</Alert>}
                <img className="product-details-image m-3 p-2" src={product.image} alt={product.title} />
                <h4>{product.description}</h4>
                <div className="d-flex justify-content-center">
                    <Table striped hover className="w-25 fw-bold">
                        <tbody>
                            <tr>
                                <td>Category:</td>
                                <td>{product.category}</td>
                            </tr>
                            <tr>
                                <td>Price(USD):</td>
                                <td>${product.price.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <td>{product.rating.rate} from {product.rating.count} users</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="mt-3 d-flex gap-2 justify-content-center">
                    <Button variant="success" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                    <Link to="/DeleteProduct" state={{ productId: product.id }}>
                        <Button variant="danger">Delete Product</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}