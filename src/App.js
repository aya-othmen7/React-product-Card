import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';


function App() {
  return (
    <>
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '22rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
    </Container>
    </>
  );
}

export default App;
