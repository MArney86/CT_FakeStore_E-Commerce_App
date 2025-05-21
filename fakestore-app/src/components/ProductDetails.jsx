import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table'

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

    return(
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
            <div className="text-center w-75">
                <h1 className="mb-4">{product.title}</h1>
                <img  className="border border-3 rounded-3 border-secondary-subtle m-3 p-2" src={product.image} />
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
                            <   td>{product.rating.rate} from {product.rating.count} users</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}