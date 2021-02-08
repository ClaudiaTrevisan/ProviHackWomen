import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

const HeaderLanding: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logoImg} alt="#COLABORA!" />
    </Link>
    <nav>
      <Link to="/candidato/cadastro">Para Candidatos</Link>
      <Link to="/recrutador/cadastro">Para Empresas</Link>
    </nav>
    <button type="button">Login</button>
  </Container>
);

export default HeaderLanding;
