import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import APIModal from './ApiModal';
import axios from 'axios';

export default function AddProduct() {

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == 'id') {
            setFormData({
                ...formData,
                [name]: parseInt(value)
            });
        } else if (name == 'price') {
            setFormData({
                ...formData,
                [name]: parseFloat(value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                const response = await axios.post('https://fakestoreapi.com/products', formData);
                setProduct(response.data);
                setSubmitted(true);
                setShowModal(true);
                setError(null);
            } catch (err) {
                setError(`Error submitting the form. Please try again: ${err.message}`);
                setSubmitted(false);
            }
        }
        setValidated(true);
    };

    return (
        <>
            <Container className="mt-5">
                <h2>Add New Product</h2>
                <APIModal product={product} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} request={"post"} />

                {submitted && <Alert variant="success" dismissible>{product.title} created successfully!</Alert>}
                {error && <Alert variant="danger" dismissible>{error}</Alert>}

                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                    <Row>
                        <Col md="5">
                            <FloatingLabel controlId="formId" label="Product ID" className="mb-3 mt-2">
                                <Form.Control
                                    type="number"
                                    placeholder="Enter an ID (integer > 20) for your product"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                    min="21"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid ID ( &gt;20 ).
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col md="7">
                            <FloatingLabel controlId="formTitle" label="Product Title" className="mb-2 mt-2">
                                <Form.Control
                                    type="Text"
                                    placeholder="Please enter your product's title"
                                    name="title"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a title for your product.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="7">
                            <FloatingLabel controlId="formPrice" label="Product Price" className="mb-2 mt-2">
                                <Form.Control
                                    type="number"
                                    placeholder="Please enter your product's Price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    step={0.01}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a phone number.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col md="5">
                            <FloatingLabel controlId="formDescription" label="Product Description" className="mb-2 mt-2">
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    placeholder="Please enter a description for your product"
                                    value={formData.description}
                                    onChange={handleChange}
                                    style={{height:'6.25rem'}}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a description for your product.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="5">
                            <FloatingLabel controlId="formCategory" label="Product Category" className="mb-2 mt-2">
                                <Form.Control
                                    type="text"
                                    placeholder="Please enter the category of your product"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>
                                    Please enter a category for your product.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col md="7">
                            <FloatingLabel controlId="formImage" label="Product Image" className="mb-2 mt-2">
                                <Form.Control
                                    type="url"
                                    placeholder='https://placehold.co/600x400/png'
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}