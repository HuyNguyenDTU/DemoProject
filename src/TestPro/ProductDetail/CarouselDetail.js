import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselDetail() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://baoquocte.vn/stores/news_dataimages/dangtuan/102020/15/14/bang-gia-xe-ferrari-2020-tai-viet-nam-moi-nhat-thang-102020_6.jpg?rt=20201015144127"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sohanews.sohacdn.com/zoom/480_300/160588918557773824/2022/7/9/photo1657352082975-16573520830551611108184.jpeg"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cms-i.autodaily.vn/du-lieu/2019/07/19/2020-chevrolet-corvette-stingray-6.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselDetail;