import { Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import IndexPage from './pages/Index'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import PrivacyPage from './pages/Privacy'
import PhotoPage from './pages/Photo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="about_us" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="photos" element={<PhotoPage />} />
      </Route>
    </Routes>
  )
}

export default App
