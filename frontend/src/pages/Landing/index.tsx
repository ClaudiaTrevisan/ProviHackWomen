import React from 'react';

import { Container, SectionFull } from './styles';

const Landing: React.FC = () => (
  <Container>
    <header>
      <div>Logo</div>
      <nav>Para Candidatos Para Empresas</nav>
      <button type="button">Login</button>
    </header>

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

    <footer>
      Feito por mulheres incríves ❤
      <br />
      2021. Todos os direitos reservados.
      <br />
      redes sociais
    </footer>
  </Container>
);

export default Landing;
