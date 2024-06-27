import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { PrivacyBlock } from '../components/PrivacyBlock/PrivacyBlock'

import useImage from '../services/useImage'

export const PrivacyPage: React.FC = () => {
  const privacyBanner = useImage('main', 'banner-bg.avif')
  return (
    <>
      <PageBanner title="Политика конфиденциальности" background={ privacyBanner } />
      <PrivacyBlock />
    </>
  )
}

export default PrivacyPage
