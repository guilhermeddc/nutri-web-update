import React, {useState, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

import logo from '../../assets/logos/logo-teste-cm.png';
import Facebook from '../../assets/icons/Facebook-g.png';
import Instagram from '../../assets/icons/Instagram-g.png';
import WhatsApp from '../../assets/icons/WhatsApp-g.png';
import YouTube from '../../assets/icons/YouTube-g.png';
import Menu from '../../assets/icons/menu.png';

import {Container} from './styles';

const Navbar: React.FC = () => {
  const [isClassActive, setIsClassActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleScroll = useCallback(() => {
    if (document.documentElement.scrollTop > 70) {
      setIsClassActive(true);
    } else {
      setIsClassActive(false);
    }
  }, []);

  const handleTapMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, [handleScroll]);

  return (
    <Container active={isClassActive}>
      <header>
        <nav>
          <div className="logo">
            <HashLink to="/#top">
              <img src={logo} alt="Nutri Logo" />
            </HashLink>
          </div>
          <nav className={`navbarLinks ${isActive ? 'active' : ''}`}>
            <ul className="menu">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/recipe">Receitas</Link>
              </li>
              <li>
                <HashLink to="/#about">Sobre</HashLink>
              </li>
              <li>
                <HashLink to="/#contact">Contato</HashLink>
              </li>
            </ul>
            <ul className="menu down">
              <li>
                <a
                  href="https://www.facebook.com/nutricionistacassiana/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nutri_cassianadellapace/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC5NeAQdEvspQx4oPZj2gcIQ"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={YouTube} alt="YouTube" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=55055999035896"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleTapMenu}
            data-menu="button"
            aria-expanded="false"
            aria-controls="menu"
            className="menuDown">
            <img src={Menu} alt="Icon Menu" />
          </button>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
