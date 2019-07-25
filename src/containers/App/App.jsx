import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from '@pages/Home';

const App = () => (
  <BrowserRouter>
    <Helmet defaultTitle="🍟 React Boilerplate">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Helmet>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
);

export default App;
