import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ children }) => {

  const [screen, setScreen] = useState(window.innerWidth);


  const [slidesToShow, setSlidesToShow] = useState(3);
  const [sliderWidth, setSliderWidth] = useState('95%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setSliderWidth('90%');
      } else {
        setSlidesToShow(3.1);
        setSliderWidth('94%');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <Slider {...settings} style={{ marginLeft: '2%', marginBottom: '2%', width: sliderWidth }}>
      {children.map((child, index) => (
        <CustomSlide key={index}>{child}</CustomSlide>
      ))}
    </Slider>
  );
};

const CustomSlide = ({ children }) => {
  return <div style={{ width: '100%', height: '100%', padding: '10px' }}>{children}</div>;
};

export default SliderComponent;
