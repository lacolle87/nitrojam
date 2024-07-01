import React from 'react'
import { HeaderBanner } from '../components/HeaderBanner/HeaderBanner'
import MusicBlock from '../components/MusicBlock/MusicBlock'
import Special from '../components/Special/Special'
import {SliderBlock} from '../components/Slider/SliderBlock'

export const IndexPage: React.FC = () => {
  return (
    <>
      <HeaderBanner />
      <MusicBlock />
      <Special />
      <SliderBlock />
    </>
  )
}

export default IndexPage
