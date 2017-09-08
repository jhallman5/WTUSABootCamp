import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Link to={'/dashboard'}>Dashboard</Link>
      </div>
    );
  }
}
