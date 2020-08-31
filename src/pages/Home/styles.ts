import styled from 'styled-components';
import theme from '../../styles/theme';

import bg from '../../assets/bg2.jpg';
import bgContact from '../../assets/bg-contact.jpg';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Intro = styled.header`
  background: url(${bg}) center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;

  section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    margin-right: 20px;

    @media (max-width: 576px) {
      margin-right: 5px;
    }

    div {
      padding: 10px 30px 20px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-right: 4px solid ${theme.colors.primary};
      @media (max-width: 576px) {
        padding: 20px;
      }
      h1 {
        font-size: 72px;
        margin: -8px 0 8px 0;
        font-family: ${theme.font.family.secondary};
        color: red;
        text-shadow: ${theme.textShadow};
        font-weight: 500;
        @media (max-width: 576px) {
          text-align: right;
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
  }
`;

export const About = styled.section`
  transition: all 0.35s;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 50px 0;

    div {
      flex: 1;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      img {
        border-radius: 5px;
        box-shadow: ${theme.boxShadow};
        width: 100%;
        min-width: 260px;
        max-width: 370px;
        transition: all 0.3s;
        z-index: -1;
        :hover {
          opacity: 0.85;
          z-index: -1;
        }
      }
    }

    cite {
      flex: 2;

      h3 {
        padding: 0 40px 10px;
        font-size: 24px;
      }

      p {
        padding: 10px 40px;
        line-height: 1.5;
        font-size: 16px;
        font-weight: 300;
        text-align: justify;
      }
    }
  }
`;

export const Streak = styled.section`
  background: url(${bg}) center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  padding: 50px;

  article {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 576px) {
      padding: 0px;
    }

    h2 {
      font-size: 32px;
      color: #fff;
      display: flex;
      text-align: center;
      align-items: center;
      text-shadow: 0px 0px 3px rgba(46, 46, 46, 0.5);
    }

    h2 span img {
      width: 32px;
      margin: 10px;

      @media (max-width: 576px) {
        display: none;
      }
    }

    p {
      color: #fff;
      font-weight: 300;
      font-style: italic;
      margin-top: 20px;
      text-shadow: 0px 0px 3px rgba(46, 46, 46, 0.5);
    }
  }
`;

export const Program = styled.section`
  padding: 50px 0 50px;

  div div {
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;

    div {
      width: 100%;
      min-width: 250px;
      padding: 30px;
      height: 100%;
      min-height: 200px;
      margin: 15px;
      border-radius: ${theme.borderRadius};
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: ${theme.boxShadow};
      transition: opacity 0.3s;

      :nth-child(1) {
        background-color: ${theme.colors.yellow};
      }

      :nth-child(2) {
        background-color: ${theme.colors.red};
      }

      :nth-child(3) {
        background-color: ${theme.colors.green};
      }

      :hover {
        opacity: 0.8;
      }

      img {
        width: 50px;
        margin-bottom: 15px;
      }

      p {
        color: ${theme.colors.white};
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
`;

export const Recipes = styled.section`
  padding: 50px 0 50px;
  width: 100%;
  background-color: #deeff7;

  div article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Contact = styled.section`
  padding: 50px 0 30px;
  background-image: url(${bgContact});
  background-position: center;
  background-attachment: no-repeat;
  background-size: cover;
  color: ${theme.colors.white};
  text-shadow: ${theme.textShadow};

  div {
    div {
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;

      span {
        margin: 20px;
        @media (max-width: 576px) {
          display: none;
        }
      }

      > div {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        max-width: 600px;
        min-height: 450px;
        margin-bottom: 40px;
        width: 100%;
        color: ${theme.colors.dark};
        border-radius: 4px;
        background-color: #fff;
        text-shadow: ${theme.textShadow};
        ul li {
          border-radius: 4px;
          margin: 10px;
          h4 {
            font-size: ${theme.font.sizes.L};
            margin-bottom: 10px;
          }
          p {
            font-weight: 300;
            line-height: 1.5;
          }
        }
        a {
          margin: 10px;
          display: flex;
          align-items: center;
          color: ${theme.colors.dark};
          transition: opacity 0.3s;
          :hover {
            opacity: 0.7;
          }
          img {
            width: 60px;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;
