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
    <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
    <Route path="/dashboard-candidato" exact component={DashboardCandidato} />
    <Route path="/desafio" exact component={DesafioCandidato} />
    <Route path="/cadastro-recrutador" exact component={CadastroRecrutador} />
  </Switch>
);

export default Routes;
