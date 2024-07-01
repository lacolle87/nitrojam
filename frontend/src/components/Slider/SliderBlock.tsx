import {Container} from 'reactstrap'
import Slider from './Slider'
import UseImage from '../../services/UseImage'

export function SliderBlock() {
  const slideImages = [
    UseImage('slider_photos', 'slide1.avif'),
    UseImage('slider_photos', 'slide2.avif'),
    UseImage('slider_photos', 'slide3.avif'),
    UseImage('slider_photos', 'slide4.avif'),
    UseImage('slider_photos', 'slide5.avif'),
    UseImage('slider_photos', 'slide6.avif'),
    UseImage('slider_photos', 'slide7.avif'),
    UseImage('slider_photos', 'slide8.avif'),
    UseImage('slider_photos', 'slide9.avif'),
    UseImage('slider_photos', 'slide10.avif'),
    UseImage('slider_photos', 'slide11.avif'),
    UseImage('slider_photos', 'slide12.avif'),
    UseImage('slider_photos', 'slide13.avif'),
  ];

  return (
  <Container className="swiperContainer">
    <Slider slides={slideImages} />
  </Container>
)
}

export default SliderBlock