import React from 'react';

import {
  Container,
  ImageBackground,
  DivStyled,
  TypeStyled,
  Title,
  Description,
  DivType,
  ImageType,
  Date,
  LinkStyled,
} from './styles';

interface IRecipe {
  recipeImg: string;
  imageType: string;
  color: string;
  type: string;
  title: string;
  description: string;
  date: string;
  link: number;
}

const Recipe: React.FC<IRecipe> = ({
  recipeImg,
  link,
  color,
  type,
  imageType,
  title,
  description,
  date,
}) => {
  return (
    <LinkStyled to={`/recipe/${link}`}>
      <Container>
        <ImageBackground style={{backgroundImage: `url(${recipeImg})`}} />
        <DivStyled>
          <DivType>
            <ImageType src={imageType} alt={title} />
            <TypeStyled style={{color}}>{type}</TypeStyled>
          </DivType>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Date>{date}</Date>
        </DivStyled>
      </Container>
    </LinkStyled>
  );
};

export default Recipe;
