import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homepage() {

  return (
    <div>
    <Container fluid className='align-items-center'>
        <div className='homepage-hero text-center'>
            <h3>🎉 Shop Like a Billionaire! 🎉</h3>
            <p>Unbeatable deals, amazing products, incredible prices - Your shopping paradise awaits!</p>
        </div>
    </Container>
    </div>
  );
}