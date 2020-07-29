import React, {useState, useCallback, useEffect} from 'react';
import {FiHash} from 'react-icons/fi';
import {useParams} from 'react-router-dom';

import api from '../../services/api';
import theme from '../../styles/theme';

import {
  Container,
  Title,
  InfoView,
  RecipeType,
  RecipeTypeImg,
  InfoRecipe,
  Description,
  Time,
  Income,
  RecipeImage,
  SubTitle,
  RecipeList,
} from './styles';

interface IRecipe {
  id: number;
  title: string;
  image: string;
  types: {
    color: string;
    icon: string;
    name: string;
  };
  description: string;
  time: string;
  income: string;
}

interface IIngredients {
  id: number;
  name: string;
}

interface ISteps {
  id: number;
  step: number;
  title: string;
}

const Recipe: React.FC = () => {
  const {id} = useParams();
  const [data, setData] = useState<IRecipe>({} as IRecipe);
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const [steps, setSteps] = useState<ISteps[]>([]);

  const getRecipe = useCallback(async () => {
    const response = await api.get(`/recipes/${id}/`);

    setData(response.data);
  }, [id]);

  const getIngredients = useCallback(async () => {
    const response = await api.get(`/r-ingredients/${id}/`);

    setIngredients(response.data);
  }, [id]);

  const getSteps = useCallback(async () => {
    const response = await api.get(`/r-steps/${id}/`);

    setSteps(response.data);
  }, [id]);

  useEffect(() => {
    getRecipe();
    getIngredients();
    getSteps();
  }, [getIngredients, getRecipe, getSteps, id]);

  return (
    <Container>
      <Title>{data.title}</Title>
      <InfoView>
        <RecipeImage src={data.image} alt={data.title} />
        <InfoRecipe>
          {data.types && (
            <RecipeType style={{color: data.types.color}}>
              <RecipeTypeImg src={data.types.icon} alt={data.types.name} />
              {data.types.name}
            </RecipeType>
          )}
          <Description>{data.description}</Description>
          <Time>
            Tempo de preparo: <strong>{data.time}</strong>
          </Time>
          <Income>
            Rende: <strong>{data.income}</strong>
          </Income>
        </InfoRecipe>
      </InfoView>

      {ingredients[0] && <SubTitle>Ingredientes:</SubTitle>}
      <RecipeList>
        {ingredients &&
          ingredients.map((item) => (
            <li key={item.id}>
              <FiHash
                color={theme.colors.secondary}
                style={{marginRight: 10}}
              />{' '}
              {item.name}
            </li>
          ))}
      </RecipeList>

      {steps[0] && <SubTitle>Modo de preparo:</SubTitle>}
      <RecipeList>
        {steps &&
          steps.map((item) => (
            <li key={item.id}>
              {item.step} - {item.title}
            </li>
          ))}
      </RecipeList>
    </Container>
  );
};

export default Recipe;
