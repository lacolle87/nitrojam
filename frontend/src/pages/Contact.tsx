import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { FaqBlock } from '../components/FaqBlock/FaqBlock'
import ContactBlock from '../components/ContactBlock/ContactBlock'

import UseImage from '../services/UseImage'

const ContactPage: React.FC = () => {
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
