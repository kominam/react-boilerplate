import React, { Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '@pages/Home';

import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Suspense fallback={<p>Loading ...</p> }>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </Provider>
      </Suspense>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);