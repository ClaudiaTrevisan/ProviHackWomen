import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

import CadastroCandidato from '../pages/CadastroCandidato';
import PerfilCandidato from '../pages/PerfilCandidato';
import DashboardCandidato from '../pages/DashboardCandidato';
import DesafioCandidato from '../pages/DesafioCandidato';
import DesafioAceitoCandidato from '../pages/DesafioAceitoCandidato';
import EquipesCandidato from '../pages/EquipesCandidato';

import CadastroRecrutador from '../pages/CadastroRecrutador';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />

    <Route path="/candidato/cadastro" exact component={CadastroCandidato} />
    <Route path="/candidato/perfil" exact component={PerfilCandidato} />
    <Route path="/candidato/dashboard" exact component={DashboardCandidato} />
    <Route path="/candidato/desafio" exact component={DesafioCandidato} />
    <Route
      path="/candidato/desafio/confirmado"
      exact
      component={DesafioAceitoCandidato}
    />
    <Route path="/candidato/equipes" exact component={EquipesCandidato} />

    <Route path="/recrutador/cadastro" exact component={CadastroRecrutador} />
  </Switch>
);

export default Routes;
