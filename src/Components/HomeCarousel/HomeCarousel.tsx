import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

type CarouselItem = {
  image: string;
}

type CarouselProps = {
  items: CarouselItem[];
}

function HomeCarousel({ items }: CarouselProps) {
  const carouselItemData = items.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="carousel-container">
        <div className="carousel-background" style={{ backgroundImage: `url(${item.image})` }}></div>
      </div>
    </Carousel.Item>
  ));

  return (
    <div>
      <Carousel prevLabel="" nextLabel="">
        {carouselItemData}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
