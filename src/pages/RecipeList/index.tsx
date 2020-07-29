import React, {useState, useCallback, useEffect} from 'react';
import moment from 'moment/moment';

import api from '../../services/api';

import {Intro, Container, BodyContainer} from './styles';

import Pagination from '../../components/Pagination';
import Recipe from '../../components/Recipe';
import Title from '../../components/Title';

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
  date: string;
}

const RecipeList: React.FC = () => {
  const [data, setData] = useState<IRecipe[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const getRecipes = useCallback(async () => {
    const response = await api.get(`/recipes/?page=${page}`);
    setTotal(Math.ceil(response.data.count / 8));
    setData(response.data.results);
  }, [page]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes, page]);

  return (
    <>
      <Intro>
        <Container>
          <header>
            <p>Conheça receitas criadas especialmente para voce</p>
            <h1>Nutricionista</h1>
            <span>CRN-2 14472</span>
            <a href="#recipes">Continue lendo</a>
          </header>
        </Container>
      </Intro>
      <Container id="recipes">
        <Title title="Orientação de receita" />
        <BodyContainer>
          {data?.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipeImg={recipe.image}
              imageType={recipe.types.icon}
              color={recipe.types.color}
              link={recipe.id}
              type={recipe.types.name}
              title={recipe.title}
              description={`${recipe.description.slice(0, 150)}...`}
              date={moment(recipe.date).format('DD/MM/YYYY')}
            />
          ))}
        </BodyContainer>
        <Pagination
          page={page}
          total={total}
          next={() => setPage(page + 1)}
          previus={() => setPage(page - 1)}
        />
      </Container>
    </>
  );
};

export default RecipeList;
