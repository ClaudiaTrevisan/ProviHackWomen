import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CadastroCandidato from '../pages/CadastroCandidato';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
  </Switch>
);

export default Routes;
