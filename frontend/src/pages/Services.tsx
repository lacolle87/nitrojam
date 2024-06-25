import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { FaqBlock } from '../components/FaqBlock/FaqBlock'
import { ServicesBlock } from '../components/ServicesBlock/ServicesBlock'

import ServicesBanner from '../assets/images/landingpage/banners/services_banner.avif'

export const ServicesPage: React.FC = () => {
  return (
    <>
      <PageBanner title="Услуги" background={ServicesBanner} />
      <ServicesBlock />
      <FaqBlock />
    </>
  )
}

export default ServicesPage
