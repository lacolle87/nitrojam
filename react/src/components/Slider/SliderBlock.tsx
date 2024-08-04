import {Container} from 'reactstrap'
import Slider from './Slider'
import UseImage from '../../services/UseImage'

function SliderBlock() {
  const slideImages = [
    UseImage('slider_photos', 'slide1.avif'),
    UseImage('slider_photos', 'slide2.avif', 500),
    UseImage('slider_photos', 'slide3.avif', 1500),
    UseImage('slider_photos', 'slide4.avif', 2000),
    UseImage('slider_photos', 'slide5.avif', 2500),
    UseImage('slider_photos', 'slide6.avif', 2500),
    UseImage('slider_photos', 'slide7.avif', 2500),
    UseImage('slider_photos', 'slide8.avif', 2500),
    UseImage('slider_photos', 'slide9.avif', 2500),
    UseImage('slider_photos', 'slide10.avif', 2500),
    UseImage('slider_photos', 'slide11.avif', 2000),
    UseImage('slider_photos', 'slide12.avif', 1500),
    UseImage('slider_photos', 'slide13.avif', 500),
  ];

  return (
  <Container className="swiperContainer">
    <Slider slides={slideImages} />
  </Container>
)
}

export default SliderBlock