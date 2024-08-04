import { Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import React from 'react'

const IndexPage = React.lazy(() => import('./pages/Index'));
const AboutPage = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const PhotoPage = React.lazy(() => import('./pages/Photo'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <IndexPage />
          </React.Suspense>
        } />
        <Route path="about_us" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </React.Suspense>
        } />
        <Route path="services" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ServicesPage />
          </React.Suspense>
        } />
        <Route path="contact" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
          </React.Suspense>
        } />
        <Route path="privacy" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <PrivacyPage />
          </React.Suspense>
        } />
        <Route path="photos" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <PhotoPage />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
