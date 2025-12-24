import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
    <Container fluid className='align-items-center'>
        <div className='homepage-hero text-center'>
            <h3>🎉 Shop Like a Billionaire! 🎉</h3>
            <p>Unbeatable deals, amazing products, incredible prices - Your shopping paradise awaits!</p>
            <Button 
              variant="primary"
              size="lg"
              onClick={() => navigate('/Products')}
              className="mt-3">
                Start Shopping Now!
            </Button>
        </div>
    </Container>
    </div>
  );
}