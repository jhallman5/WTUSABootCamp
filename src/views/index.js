import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Home from './containers/Home.js';
import DashBoard from './containers/DashBoard.js';
import store from './store'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter >
        <div>
          Project Level Up
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/dashboard'} component={DashBoard} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>, document.getElementById('app'));
