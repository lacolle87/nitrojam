import React, {useState, useRef, useEffect, useCallback} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from 'reactstrap'
import { useLocation } from 'react-router-dom'

import UseImage from '../../services/UseImage'

import scrollToTop from '../ScrollToTop/ScrollToTop'

const Header = React.memo (function Header() {
  const logo = UseImage('logos', 'white-text.png')
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), []);

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef(navBackground)
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setNavBackground(show);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <div className="topbar" id="top">
      <div
        className="header6"
        style={{
          transition: 'background-color 0.5s ease',
          backgroundColor: navBackground ? 'black' : 'transparent',
        }}
      >
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand>
              <Link to={'/'} onClick={scrollToTop}>
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
                  <Link className="nav-link" smooth to={'/#top'} onClick={scrollToTop}>
                    Главная
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" smooth to={'/about_us#top'} onClick={scrollToTop}>
                    О нас
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" smooth to={'/services#top'} onClick={scrollToTop}>
                    Услуги
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" smooth to={'/#photos'}>
                    Фотографии
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <Link
                  to="/contact#top"
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
)

export default Header
