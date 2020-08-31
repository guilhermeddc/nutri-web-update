import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  padding: 0 5px;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 350px;
  width: 100%;
  margin: 15px 15px 40px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  box-shadow: ${theme.boxShadow};

  @media (max-width: 576px) {
    min-width: 350px;
    width: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    img {
      width: 24px;
      height: 24px;
      margin: 20px 5px;
      box-shadow: none;
    }
  }

  span p {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
  }

  > p {
    line-height: 1.5;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    padding: 25px;
  }

  a {
    padding: 15px 40px;
    background-color: ${theme.colors.dark};
    margin-bottom: 30px;
    color: ${theme.colors.white};
    border-radius: 2px;
    text-transform: uppercase;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
  }

  img {
    width: 340px;
    height: 250px;
    margin: -10px 10px 0 10px;
    border-radius: 5px;
    box-shadow: ${theme.boxShadow};
    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
`;
