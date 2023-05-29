import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  const SliderComponent = ({children}) => {
    return (
      <Slider {...settings} style={{marginLeft: '2%', marginBottom: '2%', width: "95%" }}>
        {children}
      </Slider>
    );
  };
  
  export default SliderComponent;
  