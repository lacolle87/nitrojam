import PageBanner from '../components/PageBanner/PageBanner'
import PrivacyBlock from '../components/PrivacyBlock/PrivacyBlock'

import UseImage from '../services/UseImage'

function PrivacyPage() {
  const privacyBanner = UseImage('main', 'banner-bg.avif')
  return (
    <>
      <PageBanner title="Политика конфиденциальности" background={ privacyBanner } />
      <PrivacyBlock />
    </>
  )
}

export default PrivacyPage
