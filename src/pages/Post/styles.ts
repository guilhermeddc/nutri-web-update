import styled from 'styled-components';
import theme from '../../styles/theme';
import {FiUser} from 'react-icons/fi';

export const Container = styled.div`
  max-width: 1140px;
  margin: 80px auto 40px;
  padding: 0 15px 40px;
  border-bottom: 1px solid ${theme.colors.light};

  div {
    display: flex;
    justify-content: center;
  }
`;

export const Description = styled.p`
  text-indent: 50px;
  line-height: 1.4;
  width: 100%;
  text-align: justify;
  font-size: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  box-shadow: ${theme.boxShadow};
  border-radius: 4px;
  margin: 10px auto 40px;
`;

export const Content = styled.p`
  font-size: 16px;
  text-indent: 50px;
  line-height: 1.6;
  width: 100%;
  text-align: justify;
  font-weight: 300;
`;

export const Author = styled.h3`
  margin-top: 20px;
  font-weight: 300;
`;

export const Commentaries = styled.div`
  max-width: 1140px;
  margin: 0 auto 40px;
  padding: 0 15px 40px;
  border-bottom: 1px solid ${theme.colors.light};

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 30px;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.colors.light};
  }
`;

export const IconFiUser = styled(FiUser).attrs({
  color: theme.colors.light,
  size: 32,
})`
  background: ${theme.colors.primary};
  border-radius: 40px;
  padding: 6px;
  margin-right: 10px;
`;

export const PostCommentary = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px 40px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    padding: 10px 0;
    font-weight: 300;
    font-size: 16px;
  }
  input {
    margin-top: 10px;
    border: none;
    padding: 10px;
    font-weight: 300;
    background: ${theme.colors.light};
    font-size: 16px;
    border-radius: 4px;
    :focus {
      outline: none;
    }
  }
  textarea {
    margin-top: 10px;
    border: none;
    padding: 10px;
    font-weight: 300;
    font-size: 16px;
    background: ${theme.colors.light};
    border-radius: 4px;
    :focus {
      outline: none;
    }
  }
  div {
    align-self: flex-end;
  }
  button {
    border: none;
    margin-top: 10px;
    margin-left: 10px;
    padding: 15px 40px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 2px;
    text-transform: uppercase;
    transition: opacity 0.3s;
    cursor: pointer;
    :last-child {
      background-color: ${theme.colors.primary};
    }
    :hover {
      box-shadow: ${theme.boxShadow};
      opacity: 0.7;
    }
    :focus {
      outline: none;
    }
  }
`;
