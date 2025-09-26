import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import APIModal from './ApiModal'

export default function DeleteProduct() {
    // State variables 
    const [productId, setProductId] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setProductId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);
        setError(null);
        setResponse(null);

        if (!productId || isNaN(productId) || Number(productId) < 1) {
            setError('Please enter a valid product ID.');
            return;
        }

        try {
            const res = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
            setResponse(res.data);
            setSubmitted(true);
            setShowModal(true);
        } catch (err) {
            setError(`Failed to delete product: ${err.message}`);
        }
    };

    return (
        <Container className="mt-5">
            <h2>Delete Product</h2>
            <APIModal product={response} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} request={'delete'} />
            {submitted && <Alert variant="success" dismissible>{response.title} deleted successfully!</Alert>}
            {error && <Alert variant="danger" dismissible>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="deleteProductId" label="Product ID" className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Enter product ID to delete"
                        value={productId}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </FloatingLabel>
                <Button variant="danger" type="submit">
                    Delete
                </Button>
            </Form>
        </Container>
    );
}