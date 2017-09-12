/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomeContainer from './containers/home';
import DashBoard from './containers/DashBoard';
import store from './store';

const App = () => (
  <BrowserRouter >
    <div>
      Project Level Up
      <Route exact path="/" component={HomeContainer} />
      <Route path="/dashboard" component={DashBoard} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
