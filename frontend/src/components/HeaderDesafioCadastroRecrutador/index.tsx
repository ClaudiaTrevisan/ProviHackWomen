import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/logo-1.svg';
import avatar from '../../assets/mini-avatar.svg';
import notificationIcon from '../../assets/notification-icon.svg';

const HeaderDesafioCadastroRecrutador: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logoImg} alt="ProviHack Woman" />
    </Link>
    <nav>
      <Link to="/dashboard-recrutador">Dashboard</Link>
      <Link to="/dashboard-recrutador">Profissionais</Link>
      <Link to="/dashboard-recrutador">Equipes</Link>
    </nav>
    <img src={notificationIcon} alt="Notificação" />
    <img src={avatar} alt="Avatar" />
  </Container>
);

export default HeaderDesafioCadastroRecrutador;
