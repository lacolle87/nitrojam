import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { FaqBlock } from '../components/FaqBlock/FaqBlock'
import ContactBlock from '../components/ContactBlock/ContactBlock'
import ContactBanner from '../assets/images/landingpage/banners/contact_banner.avif'

const ContactPage: React.FC = () => {
  return (
    <>
      <PageBanner title="Контакты" background={ContactBanner} />
      <ContactBlock />
      <FaqBlock />
    </>
  )
}

export default ContactPage
