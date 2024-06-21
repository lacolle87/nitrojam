import {PageBanner} from '../components/PageBanner/PageBanner'
import {FaqBlock} from '../components/FaqBlock/FaqBlock'
import {ServicesBlock} from '../components/ServicesBlock/ServicesBlock'
import ServicesBanner from '../assets/images/landingpage/banners/services_banner.jpg'

export function ServicesPage() {
  return (
    <>
      <PageBanner title="Услуги" background={ServicesBanner}/>
      <ServicesBlock />
      <FaqBlock />
    </>
  )
}
