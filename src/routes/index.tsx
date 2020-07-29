import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import RecipeList from '../pages/RecipeList';
import Recipe from '../pages/Recipe';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:id" exact component={Post} />
      <Route path="/recipe" exact component={RecipeList} />
      <Route path="/recipe/:id" exact component={Recipe} />
    </Switch>
  );
};

export default Routes;
