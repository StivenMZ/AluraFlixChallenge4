import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ children }) => {
  const totalSlides = children.length;
  const slidesToShow = totalSlides >= 3 ? 3.15 : totalSlides;

  const settings = {
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <Slider {...settings} style={{ marginLeft: '2%', marginBottom: '2%', width: "95%" }}>
      {children.map((child, index) => (
        <CustomSlide key={index}>
          {child}
        </CustomSlide>
      ))}
    </Slider>
  );
};

const CustomSlide = ({ children }) => {
  // Aquí puedes personalizar el tamaño o las props de cada elemento dentro del slider
  return (
    <div style={{ width: "100%", height: "100%", padding: "10px" }}>
      {children}
    </div>
  );
};

export default SliderComponent;
