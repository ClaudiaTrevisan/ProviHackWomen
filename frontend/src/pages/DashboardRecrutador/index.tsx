import React from 'react';

import { Container } from './styles';

import Header from '../../components/HeaderCandidato';
import Footer from '../../components/Footer';

import planosImg from '../../assets/planos.svg';
import plusIcon from '../../assets/plus-gray-icon.svg';

const DashboardRecrutador: React.FC = () => (
  <Container>
    <Header />

    <main>
      <section>
        <h2>Olá Empresa! :)</h2>
        <h4>
          Parece que você não lançou nenhum desafio ainda...
          <br />
          &nbsp;O que acha de começar?
        </h4>
        <button type="button" className="plus">
          <img src={plusIcon} alt="Criar equipe" />
        </button>
      </section>

      <section>
        <h2>O que acha de destacar o seu processo seletivo?</h2>
        <p>
          As vagas publicadas pela empresa, podem aparecer no feed inicial em
          posição de destaque, para ganhar uma visibilidade
        </p>
        <p>
          É incrível para você que precisa realizar o processo de seleção com o
          dobro de agilidade!
        </p>

        <img src={planosImg} alt="Planos" className="planos" />
      </section>
    </main>

    <Footer />
  </Container>
);

export default DashboardRecrutador;
