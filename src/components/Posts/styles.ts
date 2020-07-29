import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.article`
  display: flex;
  border-bottom: 1px solid ${theme.colors.gray};
  margin-bottom: 50px;
  padding-bottom: 50px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @media (max-width: 576px) {
        max-width: 100%;
        margin: 0 auto 10px;
      }
    }
    span img {
      width: 24px;
      margin-right: 5px;
    }
    span p {
      line-height: 1.5;
      font-size: 16px;
      font-weight: 400;
      color: red;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
      @media (max-width: 576px) {
        text-align: center;
      }
    }
    > p {
      line-height: 1.5;
      font-size: 16px;
      font-weight: 300;
      @media (max-width: 576px) {
        max-width: 100%;
        margin: 10px 0;
      }
    }
    a {
      padding: 15px 40px;
      max-width: 160px;
      background: ${theme.colors.dark};
      color: ${theme.colors.white};
      border-radius: 2px;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;
      @media (max-width: 576px) {
        max-width: 100%;
        margin: 10px 0;
      }
      :hover {
        box-shadow: ${theme.boxShadow};
      }
    }
  }
`;

export const PostImg = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 380px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: ${theme.boxShadow};
  margin: 0 30px 0 0;
  transition: all 0.3s;
  z-index: -1;
  @media (max-width: 576px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
  :hover {
    opacity: 0.9;
    box-shadow: ${theme.boxShadow};
    z-index: -1;
  }
`;
