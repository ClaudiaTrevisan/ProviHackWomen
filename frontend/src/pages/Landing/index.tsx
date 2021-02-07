/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  SectionOne,
  LandingButton,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
} from './styles';

import HeaderLanding from '../../components/HeaderLanding';
import Footer from '../../components/Footer';

import backgroundImg from '../../assets/landing-background.svg';
import backgroundImg2 from '../../assets/landing-background-2.svg';
import backgroundImg3 from '../../assets/landing-background-3.svg';

import iconImg from '../../assets/landing-icon.svg';
import iconImg2 from '../../assets/landing-icon-2.svg';
import iconImg3 from '../../assets/landing-icon-3.svg';

import iconPersonImg from '../../assets/landing-icon-person.svg';
import iconPersonImg2 from '../../assets/landing-icon-person-2.svg';
import iconPersonImg3 from '../../assets/landing-icon-person-3.svg';

const Landing: React.FC = () => (
  <Container>
    <HeaderLanding />
    <main>
      <SectionOne>
        <div>
          <h2>#ColabBora!</h2>
          <h2>Ei, você aí... É você mesmo!</h2>
          <p>
            Sabe aquela sensação de estar&nbsp;
            <span className="highlight">iniciando na carreira</span>, ver uma
            vaga com júnior no título, a descrição falando de 300 skills
            diferentes e, pra fechar com chave de ouro, exigindo&nbsp;
            <span className="highlight">experiência</span>&nbsp; de no mínimo X
            anos na área? Bate o&nbsp;
            <span className="highlight">desespero</span>, nós sabemos.
          </p>

          <p>Como você faz então para conseguir essa tão falada experiência?</p>
          <p>
            Vem com a gente mostrar o seu{' '}
            <span className="highlight">potencial de resolver desafios</span>,
            com projetos práticos e ainda de maneira colaborativa, pra chegar
            abalando as estruturas do mercado.
          </p>

          <div className="center">
            <Link to="/cadastro-candidato">
              <LandingButton type="button">Quero começar!</LandingButton>
            </Link>
          </div>
        </div>
        <div>
          <img src={backgroundImg} alt="Mulher digitando tendo muitas ideias" />
        </div>
      </SectionOne>

      <SectionTwo>
        <div id="image-two">
          <img
            src={backgroundImg2}
            alt="Homem explicando gráficos para uma mulher"
          />
        </div>

        <div id="text-two">
          <h2>Encontre alguém incrível para integrar o seu time!</h2>
          <p id="description-one">
            Já pensou se houvesse uma maneira de{' '}
            <span className="highlight"> entender o processo técnico</span>{' '}
            desses profissionais, de uma maneira mais{' '}
            <span className="highlight">automatizada</span>, simples e, de
            quebra, contribuindo para a formação de pessoas incríveis? Pois nós
            pensamos nisso especialmente para você, acredita?
          </p>
          <p>
            Vamos te mostrar que existem{' '}
            <span className="highlight">
              pessoas dispostas a resolver seus desafios
            </span>
            , mais do que preparadas para fazer sua empresa decolar!
          </p>

          <div id="adopt">
            <p>
              É inovar o mercado de contratações na área de tecnologia que você
              quer, @?
            </p>
            <p>#AdoteUmJunior!</p>
          </div>

          <div className="center">
            <Link to="/cadastro-recrutador">
              <LandingButton type="button">Quero inovar!</LandingButton>
            </Link>
          </div>
        </div>
      </SectionTwo>

      <SectionThree>
        <div id="text-three">
          <div id="text-box">
            <h3>Plano Teste</h3>
            <p>1 publicação de desafio por mês</p>
            <p>Acesso limitado a 20 perfis de profissionais por mês</p>
            <h4>GRATUITO</h4>
            <div className="center">
              <LandingButton type="button">Quero esse!</LandingButton>
            </div>
          </div>
        </div>

        <div>
          <img src={backgroundImg3} alt="Homem digitando no computador" />
        </div>
      </SectionThree>

      <SectionFour>
        <div className="icon-section-title">
          <h2>Por aqui só vemos vantagens!</h2>
        </div>

        <div className="space-around">
          <div className="icons-info">
            <img src={iconImg} alt="Viemos para alavancar sua carreira!" />
            <p>Viemos para alavancar sua carreira!</p>
            <span>
              Planejamos tudo isso para te ajudar a adquirir experiência criando
              seu portfólio e o melhor, com a possibilidades de realizar
              desafios em equipe!
            </span>
          </div>
          <div className="icons-info">
            <img src={iconImg2} alt="Totalmente colaborativa!" />
            <p>Totalmente colaborativa!</p>
            <span>
              Estamos aqui para colaborar com profissionais em início de
              carreira e com empresas para encontrar o integrante que faltava na
              equipe.
            </span>
          </div>
          <div className="icons-info">
            <img
              src={iconImg3}
              alt="Nós cuidamos do desafio técnico para você!"
            />
            <p>Nós cuidamos do desafio técnico para você!</p>
            <span>
              Nossa plataforma é projetada para automatizar o processo de
              seleção de candidatos através do teste técnico com base no
              portifólio e soft skills.
            </span>
          </div>
        </div>
      </SectionFour>

      <SectionFive>
        <div className="icon-section-title">
          <h2>O que dizem sobre nós:</h2>
        </div>

        <div className="space-around">
          <div className="people-info">
            <img
              src={iconPersonImg}
              alt="Viemos para alavancar sua carreira!"
            />
            <h5>Juninho Portugal</h5>
            <p>Front-End</p>
            <span>
              Essa plataforma é maneira, me ajudou a conseguir meu primeiro
              emprego como dev!
            </span>
          </div>
          <div className="people-info">
            <img src={iconPersonImg2} alt="Totalmente colaborativa!" />
            <h5>Severina Monteiro</h5>
            <p>UX Designer</p>
            <span>
              Se não fosse a plataforma, eu estaria pausada no meu portfólio até
              hoje!
            </span>
          </div>
          <div className="people-info">
            <img
              src={iconPersonImg3}
              alt="Nós cuidamos do desafio técnico para você!"
            />
            <h5>Richaverson Costa</h5>
            <p>Recrutador</p>
            <span>
              Todos os meus recrutados tem vindo dessa plataforma, é simples e
              automático.
            </span>
          </div>
        </div>
      </SectionFive>
    </main>

    <Footer />
  </Container>
);

export default Landing;
