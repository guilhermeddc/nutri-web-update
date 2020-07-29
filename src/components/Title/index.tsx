import React from 'react';

import {Container} from './styles';

interface ITitle {
  title: string;
  subtitle?: string;
}

const Title: React.FC<ITitle> = ({title, subtitle}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Container>
  );
};

export default Title;
