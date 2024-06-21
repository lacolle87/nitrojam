import {useState} from 'react'
import {useRef, useEffect} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from 'reactstrap'

import logo from '../../assets/images/logos/white-text.png'

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="topbar" id="top">
      <div
        className="header6"
        style={{
          transition: '.5s ease',
          backgroundColor: navBackground ? 'black' : 'transparent',
        }}
      >
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand>
              <Link to={"/"} onClick={scrollToTop}>
                <img src={logo} alt="nitrojam" />
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            >
              <Nav navbar className="ms-auto">
                <NavItem>
                  <Link className="nav-link" to={'/'} onClick={scrollToTop}>
                    Главная
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={'/about_us'} onClick={scrollToTop}>
                    О нас
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={'/services'} onClick={scrollToTop}>
                    Услуги
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={'/#photos'}>
                    Фотографии
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <Link
                  to="/contact"
                  className="btn btn-warning-gradiant font-14"
                  onClick={scrollToTop}
                >
                  Связаться
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  )
}
