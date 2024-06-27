import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { FaqBlock } from '../components/FaqBlock/FaqBlock'
import ContactBlock from '../components/ContactBlock/ContactBlock'

import useImage from '../services/useImage'

const ContactPage: React.FC = () => {
  const contactBanner = useImage('banners', 'contact_banner.avif')

  return (
    <>
      <PageBanner title="Контакты" background={ contactBanner } />
      <ContactBlock />
      <FaqBlock />
    </>
  )
}

export default ContactPage
