import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './containers/home'
import {Provider} from 'react-redux'

import store from './store'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter >
        <Route path={'/home'} component={Home} />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>, document.getElementById('app'));
