import React, { Suspense } from 'react';

const HeaderBanner = React.lazy(() => import('../components/HeaderBanner/HeaderBanner').then(module => ({ default: module.default })));
const MusicBlock = React.lazy(() => import('../components/MusicBlock/MusicBlock').then(module => ({ default: module.default })));
const Special = React.lazy(() => import('../components/Special/Special').then(module => ({ default: module.default })));
const SliderBlock = React.lazy(() => import('../components/Slider/SliderBlock').then(module => ({ default: module.default })));

export const IndexPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderBanner />
      <MusicBlock />
      <Special />
      <SliderBlock />
    </Suspense>
  );
}

export default IndexPage;
