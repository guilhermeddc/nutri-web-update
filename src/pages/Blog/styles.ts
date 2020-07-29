import styled from 'styled-components';
import theme from '../../styles/theme';

import bg from '../../assets/bg-contact.jpg';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Intro = styled.div`
  background: url(${bg}) center center;
  background-attachment: fixed;
  background-size: cover;
  height: 70vh;
  width: 100%;
  display: flex;
  place-items: center;
  place-content: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 72px;
      margin: -18px 0 8px 0;
      font-family: 'Brush Script MT';
      color: ${theme.colors.secondary};
      text-shadow: ${theme.textShadow};
      font-weight: 500;
      border-bottom: 4px solid ${theme.colors.primary};
      padding-left: 50px;
      padding-right: 50px;

      @media (max-width: 576px) {
        font-size: 42px;
      }
    }

    p {
      font-size: 42px;
      margin: 0 0 24px 0;
      color: ${theme.colors.primary};
      text-shadow: ${theme.textShadow};
      text-transform: uppercase;
    }

    span {
      padding: 10px;
      color: ${theme.colors.primary};
    }

    a {
      padding: 15px 40px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 2px;
      text-transform: uppercase;
      cursor: pointer;

      :hover {
        box-shadow: ${theme.boxShadow};
      }
    }
  }
`;
