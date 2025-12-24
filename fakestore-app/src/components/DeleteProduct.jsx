import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import APIModal from './APIModal'

export default function DeleteProduct() {
    const location = useLocation();
    // State variables 
    const [productId, setProductId] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        if (location.state?.productId) {
            setProductId(location.state.productId.toString());
        }
    }, [location.state]);

    const handleChange = (e) => {
        setProductId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);
        setError(null);
        setResponse(null);

        if (!productId || isNaN(productId) || Number(productId) < 1) {
            setError('Please enter a valid product ID.');
            return;
        }
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            setShowConfirmModal(false);
            const res = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
            setResponse(res.data);
            setSubmitted(true);
            setShowModal(true);
        } catch (err) {
            setError(`Failed to delete product: ${err.message}`);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
    };

    return (
        <Container className="mt-5">
            <h2>Delete Product</h2>
            <APIModal product={response} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} request={'delete'} />
            
            {/* Confirmation Modal */}
            <Modal show={showConfirmModal} onHide={handleCancelDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete product with ID <strong>{productId}</strong>?</p>
                    <p className="text-danger mb-0">This action cannot be undone.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete Product
                    </Button>
                </Modal.Footer>
            </Modal>

            {submitted && <Alert variant="success" dismissible>Product {response.id} deleted successfully!</Alert>}
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