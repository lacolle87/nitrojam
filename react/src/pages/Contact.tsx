import PageBanner from '../components/PageBanner/PageBanner'
import FaqBlock from '../components/FaqBlock/FaqBlock'
import ContactBlock from '../components/ContactBlock/ContactBlock'

import UseImage from '../services/UseImage'

function ContactPage(){
  const contactBanner = UseImage('banners', 'contact_banner.avif')

  return (
    <>
      <PageBanner title="Контакты" background={ contactBanner } />
      <ContactBlock />
      <FaqBlock />
    </>
  )
}

export default ContactPage
