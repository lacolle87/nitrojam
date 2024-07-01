import React from 'react'

const HeaderBanner = React.lazy(() => import('../components/HeaderBanner/HeaderBanner'))
const MusicBlock = React.lazy(() => import( '../components/MusicBlock/MusicBlock'))

export const IndexPage: React.FC = () => {
  return (
    <>
      <HeaderBanner />
      <MusicBlock />
    </>
  )
}

export default IndexPage
