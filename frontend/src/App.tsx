import React, { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const IndexPage = lazy(() => import('./pages/Index'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));

function AppLayout() {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}><IndexPage /></Suspense>} />
        <Route path="about_us" element={<Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<div>Loading...</div>}><ServicesPage /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
        <Route path="privacy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPage /></Suspense>} />
      </Route>
    </Routes>
  );
}
