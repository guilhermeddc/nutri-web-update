import React from 'react';

import Facebook from '../../assets/icons/Facebook.png';
import Instagram from '../../assets/icons/Instagram.png';
import WhatsApp from '../../assets/icons/WhatsApp.png';
import YouTube from '../../assets/icons/YouTube.png';

import {FooterStyled, Container, SocialLinks, Copyright} from './styles';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <hr />
      <Container>
        <SocialLinks>
          <a
            href="https://www.facebook.com/nutricionistacassiana/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/nutri_cassianadellapace/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5NeAQdEvspQx4oPZj2gcIQ"
            target="_blank"
            rel="noopener noreferrer">
            <img src={YouTube} alt="youtube" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=55055999035896"
            target="_blank"
            rel="noopener noreferrer">
            <img src={WhatsApp} alt="whatsapp" />
          </a>
        </SocialLinks>
        <hr />
        <Copyright>
          <p>© 2020 Copyright: Cassiana Della Pace - Nutricionista</p>
        </Copyright>
      </Container>
      <hr />
    </FooterStyled>
  );
};

export default Footer;
