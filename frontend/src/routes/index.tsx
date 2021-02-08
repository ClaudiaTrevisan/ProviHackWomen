import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

import CadastroCandidato from '../pages/CadastroCandidato';
import CadastroRecrutador from '../pages/CadastroRecrutador';
import DashboardCandidato from '../pages/DashboardCandidato';
import DashboardRecrutador from '../pages/DashboardRecrutador';
import DesafioAceitoCandidato from '../pages/DesafioAceitoCandidato';
import DesafioCadastroRecrutador from '../pages/DesafioCadastroRecrutador';
import DesafioCandidato from '../pages/DesafioCandidato';
import EquipesCandidato from '../pages/EquipesCandidato';
import PerfilCandidato from '../pages/PerfilCandidato';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/candidato/cadastro" exact component={CadastroCandidato} />
    <Route path="/recrutador/cadastro" exact component={CadastroRecrutador} />

    <Route path="/candidato/dashboard" exact component={DashboardCandidato} />
    <Route path="/recrutador/perfil" exact component={DashboardRecrutador} />

    <Route path="/candidato/desafio" exact component={DesafioCandidato} />
    <Route
      path="/candidato/desafio/confirmado"
      exact
      component={DesafioAceitoCandidato}
    />
    <Route path="/candidato/equipes" exact component={EquipesCandidato} />
    <Route path="/candidato/perfil" exact component={PerfilCandidato} />
    <Route
      path="/recrutador/desafio"
      exact
      component={DesafioCadastroRecrutador}
    />
  </Switch>
);

export default Routes;
