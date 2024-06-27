import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { FaqBlock } from '../components/FaqBlock/FaqBlock'
import { ServicesBlock } from '../components/ServicesBlock/ServicesBlock'

import useImage from '../services/useImage'

export const ServicesPage: React.FC = () => {
  const servicesBanner = useImage('banners', 'services_banner.avif')
  return (
    <>
      <PageBanner title="Услуги" background={ servicesBanner } />
      <ServicesBlock />
      <FaqBlock />
    </>
  )
}

export default ServicesPage
