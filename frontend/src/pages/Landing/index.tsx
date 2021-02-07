import React from 'react';

import { Container, SectionFull } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Landing: React.FC = () => (
  <Container>
    <Header />

    <main>
      <SectionFull>
        <h1>Landing</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit similique
          tempore eum mollitia tempora laborum debitis adipisci.
        </h2>
        <button type="button">Candidatos</button>
        <button type="button">Empresas</button>
      </SectionFull>
    </main>

    <Footer />
  </Container>
);

export default Landing;
