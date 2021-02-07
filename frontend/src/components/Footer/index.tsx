import React from 'react';

import { Container } from './styles';

import linkedinImg from '../../assets/logo-linkedin.svg';
import instagramImg from '../../assets/logo-instagram.svg';

const Header: React.FC = () => (
  <Container>
    <div>
      <img src={linkedinImg} alt="Linkedin" />
      <img src={instagramImg} alt="Instagram" />
    </div>

    <p>Feito por mulheres incríveis! ❤</p>
    <p>© Todos os direitos reservados, 2021.</p>
  </Container>
);

export default Header;
