import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter >
        <Route path={'/home'} component={Home} />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
