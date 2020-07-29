import React from 'react';

import {WhatsappButton} from './styles';
import Image from '../../assets/icons/color_whatsapp.png';

const Whatsapp: React.FC = () => {
  return (
    <WhatsappButton
      href="https://api.whatsapp.com/send?phone=55055999035896"
      target="_blank"
      rel="noopener noreferrer">
      <img src={Image} alt="Whatsapp" />
    </WhatsappButton>
  );
};

export default Whatsapp;
