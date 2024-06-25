import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import { PrivacyBlock } from '../components/PrivacyBlock/PrivacyBlock'

import PrivacyBanner from '../assets/images/landingpage/banner-bg.avif'

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <PageBanner title="Политика конфиденциальности" background={PrivacyBanner} />
      <PrivacyBlock />
    </>
  )
}

export default PrivacyPage
