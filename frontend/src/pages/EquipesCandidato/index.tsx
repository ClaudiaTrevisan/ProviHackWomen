import React from 'react';

import { Container, CardTeamContainer } from './styles';

import Header from '../../components/HeaderCandidato';
import Footer from '../../components/Footer';

import teamCardIcon from '../../assets/team-card-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';

const EquipesCandidato: React.FC = () => (
  <Container>
    <Header />

    <main>
      <section>
        <h2>Equipes disponíveis</h2>
        <h4>
          Parece que tem equipe procurando por UI Designer!
          <br />
          Que tal checar os grupos?
        </h4>

        <CardTeamContainer>
          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Queens</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Queens</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Queens</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>
        </CardTeamContainer>

        <button type="button" className="more">
          Ver mais
        </button>
      </section>

      <section>
        <h2>Quero criar uma equipe</h2>
        <h4>Convide outros profissionais para participar!</h4>

        <button type="button" className="plus">
          <img src={plusIcon} alt="Criar equipe" />
        </button>
      </section>
    </main>

    <Footer />
  </Container>
);

export default EquipesCandidato;
