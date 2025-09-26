import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

export default function APIModal({ product, submitted, showModal, handleCloseModal, request }) {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Submitted!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitted && product && (
                        <>
                            <p>Nice job! Here is the information returned from the API:</p>
                            <p><b>id: </b>{product.id}</p>
                            <p><b>title: </b>{product.title}</p>
                            <p><b>price: </b>${product.price.toFixed(2)}</p>
                            <p><b>description: </b>{product.description}</p>
                            <p><b>category: </b>{product.category}</p>
                            <p><b>image: </b><img src={product.image} alt={product.title || 'Product'} style={{maxWidth: '200px'}} /></p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}