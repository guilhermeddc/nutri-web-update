import styled, {css} from 'styled-components';
import theme from '../../styles/theme';

interface IContainer {
  active: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s;
  z-index: 30;

  ${(props) =>
    props.active &&
    css`
      width: 100%;
      background-color: ${theme.colors.light};
      box-shadow: ${theme.boxShadow};
    `}

  header {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    z-index: 30;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        width: 215px;
        margin: 5px 20px;

        a img {
          width: 170px;
        }
      }
    }
  }

  .menu {
    li {
      display: inline-flex;
      margin: 10px;
    }

    li a {
      font-weight: 400;
      font-display: optional;
      font-size: ${theme.font.sizes.M};
      color: ${theme.colors.primary};
      transition: all 0.3s;
      text-shadow: ${theme.textShadow};

      &:hover {
        opacity: 0.7;
      }
    }

    li a img {
      width: 24px;
    }
  }

  .navbarLinks {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.9s;
  }

  .menuDown {
    display: none;
  }

  @media screen and (max-width: 768px) {
    background-color: ${theme.colors.light};
    box-shadow: ${theme.boxShadow};

    .menuDown {
      display: flex;
      width: 50px;
      background-color: transparent;
      border: none;
      transition: all 0.9s;

      &:focus {
        outline: none;
      }

      img {
        width: 48px;
      }
    }

    .navbarLinks {
      display: none;
      flex-direction: column;
      background-color: ${theme.colors.light};
      align-items: flex-end;
      position: absolute;
      right: 0;
      width: 100%;
      top: 75px;
      padding: 20px;
      transition: all 0.9s;
      box-shadow: ${theme.boxShadow};

      li {
        display: flex;
        justify-content: flex-end;
        margin: 10px;
      }
      .down {
        display: flex;
      }
    }

    .navbarLinks.active {
      display: flex;
    }
  }
`;
