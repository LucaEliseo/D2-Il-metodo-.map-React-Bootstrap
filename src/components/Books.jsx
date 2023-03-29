import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from '../Data/fantasy.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Books extends Component {
  render() {
    return (
      <Container className='mt-5'> 
        <h2 className=' mb-5'>Libri Fantasy</h2>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className='g-5'>
          {fantasy.map((item) => (
            <Col key={item.asin} className='mb-4'>
              <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant='top' src={item.img} className='card-img-top' style={{ height: '350px' }} />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.category} {item.price + '$'}
                  </Card.Text>
                  <div className='mt-auto'>
                    <Button variant='primary'>Acquista</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Books;

