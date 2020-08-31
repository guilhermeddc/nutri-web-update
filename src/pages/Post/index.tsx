import React, {useState, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import moment from 'moment/moment';

import {
  Container,
  Image,
  Content,
  Author,
  Commentaries,
  PostCommentary,
  IconFiUser,
  Form,
} from './styles';

import Title from '../../components/Title';

import api from '../../services/api';

interface IPost {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
}

interface IParagraph {
  id: number;
  paragraph: string;
}

interface IComents {
  id: number;
  name: string;
  body: string;
}

const Blog: React.FC = () => {
  const {id} = useParams();

  const [data, setData] = useState<IPost>({} as IPost);
  const [paragraph, setParagraph] = useState<IParagraph[]>([]);
  const [comments, setcomments] = useState<IComents[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    body: '',
  });

  const handleGetPost = useCallback(async () => {
    const response = await api.get(`/posts/${id}/`);
    setData(response.data);
  }, [id]);

  const handleGetParagraph = useCallback(async () => {
    const response = await api.get(`/p-paragraph/${id}/`);
    setParagraph(response.data);
  }, [id]);

  const handleGetCommentary = useCallback(async () => {
    const response = await api.get(`/p-comments/${id}/`);
    setcomments(response.data);
  }, [id]);

  const handleInputChange = useCallback(
    (event) => {
      const {name, value} = event.target;

      setFormData({...formData, [name]: value});
    },
    [formData],
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const data = {
        name: formData.name,
        body: formData.body,
        posts: id,
      };

      await api.post('p-comments/', data);

      document.getElementById('btn-reset')?.click();

      setFormData({
        name: '',
        body: '',
      });

      handleGetCommentary();
    },
    [formData.body, formData.name, handleGetCommentary, id],
  );

  useEffect(() => {
    handleGetPost();
    handleGetParagraph();
    handleGetCommentary();
  }, [handleGetCommentary, handleGetParagraph, handleGetPost, id]);

  return (
    <>
      <Container>
        <Title title={data?.title} />
        <div>
          <Image src={data?.image} alt={data?.title} />
        </div>
        <Content>{data?.description}</Content>

        {paragraph?.map((item) => (
          <Content key={item.id}>{item.paragraph}</Content>
        ))}

        <Author>
          Criado por: <strong>{data?.author}</strong>
        </Author>

        <Author>
          No dia: <strong>{moment(data?.date).format('DD/MM/YYYY')}</strong>
        </Author>
      </Container>
      {comments[0] && (
        <Commentaries>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h3>
                <IconFiUser />
                {comment.name}
              </h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </Commentaries>
      )}
      <PostCommentary>
        <Title title="Comentar" />
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            onChange={handleInputChange}
          />
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={5}
            placeholder="Digite seu comentário aqui"
            onChange={handleInputChange}
          />
          <div>
            <button id="btn-reset" type="reset">
              Limpar
            </button>
            <button type="submit">Comentar</button>
          </div>
        </Form>
      </PostCommentary>
    </>
  );
};

export default Blog;
