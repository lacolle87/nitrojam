import PageBanner from '../components/PageBanner/PageBanner'
import FaqBlock from '../components/FaqBlock/FaqBlock'
import ServicesBlock from '../components/ServicesBlock/ServicesBlock'

import UseImage from '../services/UseImage'

function ServicesPage() {
  const servicesBanner = UseImage('banners', 'services_banner.avif')
  return (
    <>
      <PageBanner title="Услуги" background={ servicesBanner } />
      <ServicesBlock />
      <FaqBlock />
    </>
  )
}

export default ServicesPage
