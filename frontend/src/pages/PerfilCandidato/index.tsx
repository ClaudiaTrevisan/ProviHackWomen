import React from 'react';

import {
  Container,
  Perfil,
  Atividade,
  BarraProgresso,
  CardChallengeContainer,
  TagContainer,
} from './styles';

import Header from '../../components/HeaderCandidato';
import Footer from '../../components/Footer';

import challengeCompleteCardIcon from '../../assets/trophy-icon.svg';
import challengeAcceptedCardIcon from '../../assets/rocket-icon.svg';

import avatarImg from '../../assets/applicant-avatar.svg';
import instagramImg from '../../assets/logo-instagram.svg';
import linkedinImg from '../../assets/logo-linkedin.svg';

const DashboardCandidato: React.FC = () => (
  <Container>
    <Header />

    <main>
      <Perfil>
        <div>
          <img src={avatarImg} alt="Ellie Braga" />
          <h1>Ellie Braga</h1>
          <h2>UI Designer</h2>
          <h4>São José dos Campos, SP</h4>
        </div>

        <h4>Sobre mim</h4>
        <p>
          Eu sou iniciante na área de UI Design, passei um tempo buscando vagas,
          mas todas exigiam uma experiência que eu não possuia.
        </p>
        <p>
          Eu sou uma pessoa extremamente esforçada e amo trabalhar em equipe,
          sou bem-humorada e estou cheia de vontade de abalar o mercado com os
          meus conhecimentos!
        </p>
        <p>Eu ouvi 10 pontos para a sonserina ?</p>

        <h4>Me encontre aqui:</h4>
        <div>
          <img src={instagramImg} alt="Instagram" />
          <img src={linkedinImg} alt="Linkedin" />
        </div>
      </Perfil>

      <Atividade>
        <h2>Meu nível de stamina é</h2>
        <h4>Me desafia que eu gosto!</h4>
        <p>
          Isso quer dizer que Ellie já completou&nbsp;
          <strong>4 de 5 desafios</strong>
          &nbsp;por aqui.
        </p>
        <BarraProgresso />
        <p>
          <strong>Próximo nível:</strong>
          &nbsp;Pode vir quente que eu estou fervendo!
        </p>

        <h2>Meus projetos</h2>
        <CardChallengeContainer>
          <div>
            <button type="button">
              <img src={challengeCompleteCardIcon} alt="Projeto Finalizado" />
            </button>
            <h4>Meu projeto Supimpa</h4>
            <TagContainer>
              <span>x Finalizado</span>
              <span>x Grupo</span>
            </TagContainer>
          </div>
          <div>
            <button type="button">
              <img src={challengeCompleteCardIcon} alt="Projeto Finalizado" />
            </button>
            <h4>Meu projeto Supimpa</h4>
            <TagContainer>
              <span>x Finalizado</span>
              <span>x Individual</span>
            </TagContainer>
          </div>

          <div>
            <button type="button">
              <img src={challengeAcceptedCardIcon} alt="Projeto em andamento" />
            </button>
            <h4>Meu projeto Supimpa</h4>
            <TagContainer>
              <span>x Em andamento</span>
              <span>x Grupo</span>
            </TagContainer>
          </div>

          <div>
            <button type="button">
              <img src={challengeAcceptedCardIcon} alt="Projeto em andamento" />
            </button>
            <h4>Meu projeto Supimpa</h4>
            <TagContainer>
              <span>x Em andamento</span>
              <span>x Individual</span>
            </TagContainer>
          </div>
        </CardChallengeContainer>
      </Atividade>
    </main>

    <Footer />
  </Container>
);

export default DashboardCandidato;
