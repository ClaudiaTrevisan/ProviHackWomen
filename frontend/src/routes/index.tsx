import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CadastroCandidato from '../pages/CadastroCandidato';
import CadastroRecrutador from '../pages/CadastroRecrutador';
import Challenge from '../pages/DesafioSelecionadoCandidato';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
    <Route path="/cadastro-recrutador" exact component={CadastroRecrutador} />
    <Route path="/desafio-selecionado" exact component={Challenge} />
  </Switch>
);

export default Routes;
