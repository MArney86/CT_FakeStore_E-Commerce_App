import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

export default function ProductListings ({products, setProducts, loading, setLoading, error, setError}) {
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                /*Products response object:
                    id: #,
                    title: str,
                    image: str,
                    description: str,
                    category: str,
                    price: #,
                    rating: obj:{
                                    rate: #,
                                    count: #,
                                },
                */
                setProducts(response.data);
                setLoading(false);
            }).catch(e => {
                setError(`Failed to fetch products: ${e.message}`)
                console.log(error)
            });
    },[])

    return(
        <div>
            {loading ? <Spinner animation='border' variant="success" /> : <>
                <h2>🛍️ Amazing Deals & Hot Products! 🔥</h2><br/>
                <Container fluid>
                    <Row  xs={2} sm={3} lg={4} xxl={5} g={3}>
                        {products.map(product => (
                            <Col key={product.id}>
                                <Link to={`/products/${product.id}`} className="text-decoration-none">
                                    <Card className='product-card content-justified-center text-center'>
                                        <Card.Header>{product.title.slice(0,20)}...</Card.Header>
                                        <Card.Body >
                                            <Card.Img variant="top" src={product.image} style={{maxHeight:'12.5rem', maxWidth: '100%', width:'auto', height:'auto'}} />
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Subtitle className='rating-badge mb-2 mt-2'>⭐ {product.rating.rate} ({product.rating.count} reviews)</Card.Subtitle>
                                            <Card.Text>{product.description.length > 100 ? <>{product.description.slice(0,140)}...</> : <>{product.description}</>}</Card.Text>
                                            <Card.Text><span className="category-tag">{product.category}</span></Card.Text>
                                            <Card.Text><span className="price-tag">${product.price.toFixed(2)}</span></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>}
            {error && <h1 className='text-danger'>{error}</h1>}
        </div>);
};