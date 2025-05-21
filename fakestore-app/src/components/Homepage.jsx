import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homepage() {

  return (
    <div>
    <Container fluid className='align-items-center'>
        <div className='text-center'>
            <h3>Hi, welcome to the FakeStore App 🏠 page!</h3>
            <p>This app will let you view/edit/add/delete products using the FakeStoreAPI.</p>
        </div>
    </Container>
    </div>
  );
}