import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from './styles';

interface IRecipeCard {
  image: string;
  tagImage?: string;
  title: string;
  color: string;
  tag?: string;
  description: string;
  link: number;
}

const RecipeCard: React.FC<IRecipeCard> = ({
  image,
  tagImage,
  title,
  color,
  tag,
  description,
  link,
}) => {
  return (
    <Container>
      <img src={image} alt="foto da receita" />
      {tag && tagImage && (
        <span>
          <img src={tagImage} alt={title} />
          <p style={{color}}>{tag}</p>
        </span>
      )}
      <h3>{title}</h3>
      <p>{`${description.slice(0, 200)}...`}</p>
      <Link to={`/recipe/${link}`}>Mais detalhes</Link>
    </Container>
  );
};

export default RecipeCard;
