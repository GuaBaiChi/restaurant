import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

type CarouselItem = {
  image: string;
}

type CarouselProps = {
  items: CarouselItem[];
}

function CarouselComponent({ items }: CarouselProps) {
  const carouselItemData = items.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="row">
        {/* First Column */}
        <div className="col-md-4">
          <div className="carousel-container" style={{ backgroundImage: `url(${items[(index - 1 + items.length) % items.length].image})` }}>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-md-4">
          <div className="carousel-container" style={{ backgroundImage: `url(${item.image})` }}>
          </div>
        </div>
        {/* Third Column */}
        <div className="col-md-4">
          <div className="carousel-container" style={{ backgroundImage: `url(${items[(index + 1) % items.length].image})` }}>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ));

  return (
    <div>
      <Carousel>
        {carouselItemData}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
