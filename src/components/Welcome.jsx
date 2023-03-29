import Carousel from 'react-bootstrap/Carousel';

function Welcome() {
  return (
    <Carousel className='h-20' variant="dark">
      <Carousel.Item >
        <img
         className="d-block w-100" 
          src="https://www.lafeltrinelli.it/assets/2023/03/20230328091821-feltrinell1p1-slideshow-left-.webp" 
          alt="First slide"
          height='600px'
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lafeltrinelli.it/assets/2023/03/20230320094418-pennacmalaussenewelcome-.webp"
          alt="Second slide"
          height='600px'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Welcome;