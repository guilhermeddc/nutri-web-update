import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
  h2 {
    font-size: ${theme.font.sizes.X};
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  p {
    line-height: 1.5;
    font-size: ${theme.font.sizes.SM};
    font-weight: 300;
    padding: 0 15px;
    text-align: center;
  }
`;
