import React, {useState, useCallback, useEffect} from 'react';
import moment from 'moment/moment';

import api from '../../services/api';

import {Intro, Container} from './styles';

import Title from '../../components/Title';
import Posts from '../../components/Posts';
import Pagination from '../../components/Pagination';

interface IPosts {
  id: number;
  image: string;
  tag: {
    icon: string;
    name: string;
  };
  title: string;
  description: string;
  author: string;
  date: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const getPosts = useCallback(async () => {
    const response = await api.get(`/posts/?page=${page}`);
    setTotal(Math.ceil(response.data.count / 8));
    setPosts(response.data.results);
  }, [page]);

  useEffect(() => {
    getPosts();
  }, [getPosts, page]);

  return (
    <>
      <Intro>
        <header>
          <p>Bem Vindo ao meu Blog</p>
          <h1>Nutricionista</h1>
          <span>CRN-2 14472</span>
          <a href="#blog">Continue lendo</a>
        </header>
      </Intro>
      <Container id="blog">
        <Title title="Posts Recentes" />
        {posts?.map((post) => (
          <Posts
            key={post.id}
            postImg={post.image}
            icon={post.tag.icon}
            tagName={post.tag.name}
            title={post.title}
            description={`${post.description.slice(0, 275)}...`}
            author={post.author}
            date={moment(post.date).format('DD/MM/YYYY')}
            link={post.id}
          />
        ))}
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

export default Blog;
