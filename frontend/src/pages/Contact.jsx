import {PageBanner} from '../components/PageBanner/PageBanner'
import {FaqBlock} from '../components/FaqBlock/FaqBlock'
import { ContactBlock } from '../components/ContactBlock/ContactBlock'
import ContactBanner from '../assets/images/landingpage/banners/contact_banner.avif'

export function ContactPage() {
  return (
    <>
      <PageBanner title="Контакты" background={ContactBanner} />
      <ContactBlock />
      <FaqBlock />
    </>
  )
}
