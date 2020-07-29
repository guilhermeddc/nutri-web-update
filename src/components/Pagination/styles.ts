import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
`;

export const PreviusButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: ${theme.colors.white};
  background: ${(props) =>
    props.disabled ? theme.colors.light : theme.colors.dark};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;

export const NextButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  margin-left: 1px;
  color: ${theme.colors.white};
  background: ${(props) =>
    props.disabled ? theme.colors.light : theme.colors.dark};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;
