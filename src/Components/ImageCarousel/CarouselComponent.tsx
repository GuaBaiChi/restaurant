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
      <div className="carousel-container" style={{ backgroundImage: `url(${item.image})` }}>
        {/* Add any content or components you want to display inside the carousel item */}
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
