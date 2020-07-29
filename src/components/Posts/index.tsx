import React from 'react';
import {Link} from 'react-router-dom';

import {Container, PostImg} from './styles';

interface IPosts {
  postImg: string;
  icon: string;
  tagName: string;
  title: string;
  description: string;
  author: string;
  date: string;
  link: number;
}

const Posts: React.FC<IPosts> = ({
  postImg,
  icon,
  tagName,
  title,
  description,
  author,
  date,
  link,
}) => {
  return (
    <Container>
      <PostImg style={{backgroundImage: `url(${postImg})`}} />
      <div>
        <span>
          <img src={icon} alt="icon" />
          <p>{tagName}</p>
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Por</strong> {author}, <strong>{date}</strong>
        </p>
        <Link to={`/blog/${link}`}>Leia Mais</Link>
      </div>
    </Container>
  );
};

export default Posts;
