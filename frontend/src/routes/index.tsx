import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CadastroCandidato from '../pages/CadastroCandidato';
import CadastroRecrutador from '../pages/CadastroRecrutador';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
    <Route path="/cadastro-recrutador" exact component={CadastroRecrutador} />
  </Switch>
);

export default Routes;
