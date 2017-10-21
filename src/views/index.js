/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './containers/Home';
import DashBoard from './containers/DashBoard';
import Calendar1 from './containers/Calendar';
import store from './store';
import Nav from './components/nav';


const App = () => (
  <BrowserRouter >
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/calendar" component={Calendar1} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
