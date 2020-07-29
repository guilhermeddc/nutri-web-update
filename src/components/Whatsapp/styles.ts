import styled from 'styled-components';
import theme from '../../styles/theme';

export const WhatsappButton = styled.a`
  position: fixed;
  width: 68px;
  height: 68px;
  bottom: 40px;
  right: 40px;
  padding: 3px;
  border-radius: ${theme.borderRadius};
  transition: all 0.3s;
  background: ${theme.colors.primary}88;

  :hover {
    background: ${theme.colors.primary};
    border-radius: 50px 50px 50px ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
  }

  img {
    width: 64px;
  }

  @media (max-width: 576px) {
    width: 52px;
    height: 54px;
    bottom: 20px;
    right: 20px;
    border-radius: 50px 50px 50px ${theme.borderRadius};

    img {
      width: 48px;
    }
  }
`;
