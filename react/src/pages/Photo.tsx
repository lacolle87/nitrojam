import SliderBlock from '../components/Slider/SliderBlock'
import PageBanner from '../components/PageBanner/PageBanner'
import UseImage from '../services/UseImage'
import FaqBlock from '../components/FaqBlock/FaqBlock'

function IndexPage() {
  const aboutUsBanner = UseImage('aboutus_photos', 'photo4.avif')

  return (
    <>
      <PageBanner title="Фотографии" background={ aboutUsBanner } />
      <SliderBlock />
      <FaqBlock />
    </>
  )
}

export default IndexPage