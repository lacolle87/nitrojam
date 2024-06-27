import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import FaqBlock from '../components/FaqBlock/FaqBlock'
import { AboutUsBlock } from '../components/AboutUsBlock/AboutUsBlock'
import useImage from '../services/useImage'

const AboutPage: React.FC = () => {
  const aboutUsBanner = useImage('banners', 'about_us_banner.avif')

  return (
    <>
      <PageBanner title="О нас" background={ aboutUsBanner } />
      <AboutUsBlock />
      <FaqBlock />
    </>
  )
}

export default AboutPage
