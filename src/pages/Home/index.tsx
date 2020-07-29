import React, {useState, useCallback, useEffect} from 'react';

import api from '../../services/api';

import {
  Container,
  Intro,
  About,
  Streak,
  Program,
  Recipes,
  Contact,
} from './styles';

import photoAbout from '../../assets/about.jpeg';
import quoteLeft from '../../assets/icons/quote_left.png';
import quoteRight from '../../assets/icons/quote_right.png';
import Apple from '../../assets/icons/apple.png';
import Avocado from '../../assets/icons/avocado.png';
import Pineapple from '../../assets/icons/pineapple.png';
import Facebook from '../../assets/icons/color_Facebook.png';
import Instagram from '../../assets/icons/color_instagram.png';
import Mail from '../../assets/icons/color_message.png';
import Whatsapp from '../../assets/icons/color_whatsapp.png';
import Youtube from '../../assets/icons/color_youtube.png';

import Title from '../../components/Title';
import RecipeCard from '../../components/RecipeCard';

interface IRecipes {
  id: number;
  title: string;
  image: string;
  types: {
    icon: string;
    color: string;
    name: string;
  };
  description: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);

  const getRecipes = useCallback(async () => {
    const response = await api.get('/recipes/');
    setRecipes(response.data.results);
  }, []);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <>
      <Intro id="top">
        <Container>
          <section>
            <div>
              <p>Nutricionista</p>
              <h1>Cassiana Della Pace</h1>
              <p>CRN-2 14472</p>
              <a href="#about">Saiba Mais</a>
            </div>
          </section>
        </Container>
      </Intro>
      <About id="about">
        <Title title="SOBRE MIM" />
        <Container>
          <article>
            <div>
              <img src={photoAbout} alt="Nutricionista Cassiana Della Pace" />
            </div>
            <cite>
              <h3>Ola, eu sou Cassiana Della Pace - Nutricionista</h3>
              <p>
                Olá sou Cassiana, nutricionista em São Pedro do Sul, RS, esposa,
                evangélica e apaixonada por pessoas e cuidar de pessoas! Fico
                muito feliz com a sua visita ao meu blog, como disse antes sou
                apaixonada por pessoas e por cuidar de pessoas, então em tudo
                que eu puder ajudar eu quero ajudar! Seja com uma palavra de
                motivação, com uma receita diferente, com um novo jeito de ver a
                vida ou com a descoberta de novas prazeres e alegrias
                cotidianas! Será um prazer fazer parte da sua vida!
              </p>
            </cite>
          </article>
        </Container>
      </About>
      <Streak>
        <Container>
          <article>
            <h2>
              <span>
                <img src={quoteLeft} alt="Nutricionista Cassiana Della Pace" />
              </span>
              A Fé é o que nos sustenta nos momentos amargos da vida.
              <span>
                <img src={quoteRight} alt="Nutricionista Cassiana Della Pace" />
              </span>
            </h2>
            <p>~ Bispo Macedo.</p>
          </article>
        </Container>
      </Streak>
      <Program>
        <Container>
          <Title
            title="Minha missão"
            subtitle="Minha missão é espalhar qualidade de vida através de uma alimentação
          saudável."
          />
          <div>
            <div>
              <img src={Apple} alt="Nutricionista" />
              <p>Nutricionista</p>
            </div>
            <div>
              <img src={Avocado} alt="Coach" />
              <p>Coach</p>
            </div>
            <div>
              <img src={Pineapple} alt="Apaixonada por nutrição e por gente" />
              <p>Apaixonada por nutrição e por gente</p>
            </div>
          </div>
        </Container>
      </Program>
      <Recipes>
        <Container>
          <Title title="Orientação para receitas" />
          <article>
            {recipes?.slice(0, 3).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                tagImage={recipe.types.icon}
                title={recipe.title}
                color={recipe.types.color}
                tag={recipe.types.name}
                description={recipe.description}
                link={recipe.id}
              />
            ))}
          </article>
        </Container>
      </Recipes>
      <Contact id="contact">
        <Container>
          <Title title="Entre em contato!" />
          <div>
            <div>
              <ul>
                <li>
                  <h4>Atendimentos Clínicos</h4>
                  <p>Cassiana Della Pace</p>
                  <p>Nutricionista </p>
                  <p>CRN 2 14427</p>
                  <p>Especialização em Nutrição Aplicada a Saúde Mulher </p>
                  <p>Especialização em Vigilância Sanitária </p>
                </li>
                <br />
                <li>
                  <h4>Telefone</h4>
                  <p>(55) 99903 5896</p>
                </li>
                <br />
                <li>
                  <h4>E-mail</h4>
                  <p>cassiana.dellapace@hotmail.com</p>
                </li>
              </ul>
            </div>
            <span />
            <div>
              <a
                href="https://www.facebook.com/nutricionistacassiana/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" /> Me encontre no Facebook
              </a>
              <a
                href="https://www.instagram.com/nutri_cassianadellapace/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" /> Me encontre no Instagram
              </a>
              <a
                href="mailto:cassiana.dellapace@hotmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Mail} alt="E-mail" /> Me mande sua duvida por E-mail
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=55055999035896"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Whatsapp} alt="Whatsapp" /> Converse comigo pelo
                Whatsapp
              </a>
              <a
                href="https://www.youtube.com/channel/UC5NeAQdEvspQx4oPZj2gcIQ"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Youtube} alt="Youtube" /> E veja meus últimos videos
                no Youtube
              </a>
            </div>
          </div>
        </Container>
      </Contact>
    </>
  );
};

export default Home;
