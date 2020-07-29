import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const FooterStyled = styled.div`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 300px;

  a img {
    width: 35px;
    :hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: ${theme.colors.white};
`;
