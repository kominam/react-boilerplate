import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Suspense fallback={<p>Loading ...</p> }>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Suspense>
    </Fragment>
  </BrowserRouter>
);

export default App;
