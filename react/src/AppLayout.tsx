import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'

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

export default AppLayout