import React, { Suspense } from 'react';

// Lazy load the components
const HeaderBanner = React.lazy(() => import('../components/HeaderBanner/HeaderBanner'));
const MusicBlock = React.lazy(() => import('../components/MusicBlock/MusicBlock'));
const Special = React.lazy(() => import('../components/Special/Special'));
const FaqBlock = React.lazy(() => import('../components/FaqBlock/FaqBlock'));

function IndexPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderBanner />
      <MusicBlock />
      <Special />
      <FaqBlock />
    </Suspense>
  );
}

export default IndexPage;
