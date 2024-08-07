import PageBanner from '../components/PageBanner/PageBanner'
import FaqBlock from '../components/FaqBlock/FaqBlock'
import AboutUsBlock from '../components/AboutUsBlock/AboutUsBlock'
import UseImage from '../services/UseImage'

function AboutPage() {
  const aboutUsBanner = UseImage('banners', 'about_us_banner.avif')

  return (
    <>
      <PageBanner title="О нас" background={ aboutUsBanner } />
      <AboutUsBlock />
      <FaqBlock />
    </>
  )
}

export default AboutPage
