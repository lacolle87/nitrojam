import {PageBanner} from '../components/PageBanner/PageBanner'
import {FaqBlock} from '../components/FaqBlock/FaqBlock'
import {AboutUsBlock} from '../components/AboutUsBlock/AboutUsBlock'
import AboutUsBanner from '../assets/images/landingpage/banners/about_us_banner.avif'

export function AboutPage() {
  return (
    <>
      <PageBanner title="О нас" background={AboutUsBanner} />
      <AboutUsBlock />
      <FaqBlock />
    </>
  )
}
