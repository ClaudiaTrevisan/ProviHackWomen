import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CadastroCandidato from '../pages/CadastroCandidato';
import CadastroRecrutador from '../pages/CadastroRecrutador';
import DesafioCandidato from '../pages/DesafioCandidato';
import DashboardCandidato from '../pages/DashboardCandidato';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/candidato/cadastro" exact component={CadastroCandidato} />
    <Route path="/candidato/dashboard" exact component={DashboardCandidato} />
    <Route path="/candidato/desafio" exact component={DesafioCandidato} />
    <Route path="/recrutador/cadastro" exact component={CadastroRecrutador} />
  </Switch>
);

export default Routes;
