import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from '@pages/Home';

const App = () => (
  <BrowserRouter>
    <Helmet defaultTitle="🍟 React Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
);

export default App;
