import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from '../Data/fantasy.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Books extends Component {
  render() {
    return (
      <Container className='mt-3'> 
        <h2 className='mt-5'>Libri Fantasy</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} >
          {fantasy.map((item) => (
            <Col  key={item.asin} className='justify-content-around'>
              <Card className='ms-5 mt-3 w-100' style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.category} {item.price + '$'}
                  </Card.Text>
                  <Button variant="primary">Acquista</Button>
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
