import styled from 'styled-components';
import theme from '../../styles/theme';
import {Link} from 'react-router-dom';

export const LinkStyled = styled(Link)`
  margin-bottom: 20px;
  flex: 1;
`;

export const Container = styled.article`
  min-width: 320px;
  max-width: 545px;
  width: 100%;
  display: flex;
  box-shadow: ${theme.boxShadow};
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ImageBackground = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: all 0.3s;
  z-index: -1;
  @media (max-width: 576px) {
    max-width: 100%;
  }
  :hover {
    opacity: 0.9;
    z-index: -1;
  }
`;

export const DivStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DivType = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageType = styled.img`
  width: 24px;
  margin-right: 5px;
`;

export const Title = styled.h2`
  font-size: ${theme.font.sizes.SM};
  color: ${theme.colors.primary};
`;

export const Description = styled.p`
  font-size: ${theme.font.sizes.S};
  color: ${theme.colors.dark};
  font-weight: 300;
`;

export const TypeStyled = styled.p``;

export const Date = styled.p`
  color: ${theme.colors.black};
`;
