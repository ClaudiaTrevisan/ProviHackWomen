import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Header from '../../components/HeaderCandidato';
import Footer from '../../components/Footer';

import checkIcon from '../../assets/check-icon.svg';

const DesafioAceitoCandidato: React.FC = () => (
  <Container>
    <Header />

    <main>
      <section>
        <img src={checkIcon} alt="" />
        <h2>Bora colocar a mão na massa!</h2>
        <Link to="/candidato/dashboard">
          <button type="button" className="more">
            Voltar ao Dashboard
          </button>
        </Link>
      </section>
    </main>

    <Footer />
  </Container>
);

export default DesafioAceitoCandidato;
