import React from 'react';
import { Link } from 'react-router-dom';

import { Container, UsuarioLogado } from './styles';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/applicant-avatar.svg';
import notificationImg from '../../assets/notification-icon.svg';

const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logoImg} alt="#COLABORA!" />
    </Link>
    <nav>
      <Link to="/candidato/dashboard">Feito para você</Link>
      <Link to="/candidato/perfil">Meus Projetos</Link>
      <Link to="/candidato/equipes">Equipes</Link>
    </nav>
    <UsuarioLogado>
      <img src={notificationImg} alt="Notificações" />
      <img src={avatarImg} alt="Olá Ellie!" />
    </UsuarioLogado>
  </Container>
);

export default Header;
