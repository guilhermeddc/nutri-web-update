import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  max-width: 1140px;
  margin: 60px auto;
  padding: 0 15px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 100px 0 50px;
  font-size: 32px;
  text-transform: uppercase;
`;

export const InfoView = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

export const InfoRecipe = styled.div`
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 20px 0;
  border-bottom: 1px solid ${theme.colors.light};
`;

export const RecipeType = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-size: 24px;
`;

export const RecipeTypeImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

export const Description = styled.p`
  font-weight: 300;
  line-height: 1.6;
`;

export const Time = styled.p`
  font-weight: 300;
`;
export const Income = styled.p`
  font-weight: 300;
`;

export const RecipeImage = styled.img`
  width: 100%;
  min-width: 320px;
  max-width: 380px;
  height: 250px;
  border-radius: 4px;
  box-shadow: ${theme.boxShadow};
  margin: 0 30px 0 0;
`;

export const SubTitle = styled.h3`
  padding: 20px;
`;

export const RecipeList = styled.ul`
  padding: 20px;
  li {
    line-height: 1.8;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
`;
