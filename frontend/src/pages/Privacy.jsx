import { PageBanner } from "../components/PageBanner/PageBanner"
import { PrivacyBlock } from "../components/PrivacyBlock/PrivacyBlock"

import PrivacyBanner from '../assets/images/landingpage/banner-bg.avif'

export function PrivacyPage() {
  return (
    <>
        <PageBanner title="Политика конфиденциальности" background={PrivacyBanner} />
        <PrivacyBlock />
    </>
  )
}
