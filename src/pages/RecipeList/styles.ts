import styled from 'styled-components';
import theme from '../../styles/theme';

import bg from '../../assets/bg-contact.jpg';

export const Intro = styled.div`
  background: url(${bg}) center center;
  background-attachment: fixed;
  background-size: cover;
  height: 70vh;
  width: 100%;
  display: flex;
  place-content: center;
  place-items: center;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        font-size: 38px;
      }
    }
    p {
      font-size: 42px;
      margin: 0 0 24px 0;
      color: ${theme.colors.primary};
      text-shadow: ${theme.textShadow};
      text-transform: uppercase;
      @media (max-width: 576px) {
        font-size: 24px;
      }
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

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto 60px;
  padding: 0 15px;
`;

export const BodyContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const RecipeTitle = styled.div`
  text-align: center;
  h1 {
    padding: 100px 0 50px;
    font-size: 32px;
    text-transform: uppercase;
  }
  p {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;
    padding: 0 0 100px;
    max-width: 750;
    margin: 0 auto;
  }
`;

export const PaginationDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40px;
`;

export const ButtonStyled = styled.button`
  width: 35px;
  height: 35px;
  border: ${(props) =>
    props.disabled ? '1px solid ' + theme.colors.primary : 'none'};
  color: ${(props) =>
    props.disabled ? theme.colors.primary : theme.colors.white};
  background: ${(props) =>
    props.disabled ? theme.colors.light : theme.colors.dark};
  margin-left: 1px;
`;
