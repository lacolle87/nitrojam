import {Routes, Route, Outlet} from 'react-router-dom'
import {IndexPage} from './pages/Index'
import {AboutPage} from './pages/About'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import { ServicesPage } from './pages/Services'
import { ContactPage } from './pages/Contact'
import { PrivacyPage } from './pages/Privacy'

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
  )
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<IndexPage />} />
        <Route path="about_us" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
      </Route>
    </Routes>
  )
}
