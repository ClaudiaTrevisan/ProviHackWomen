import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logoImg} alt="ProviHack Woman" />
    </Link>
    <nav>
      <Link to="/cadastro-candidato">Para Candidatos</Link>
      <Link to="/cadastro-recrutador">Para Empresas</Link>
    </nav>
    <button type="button">Login</button>
  </Container>
);

export default Header;
