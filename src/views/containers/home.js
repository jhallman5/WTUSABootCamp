import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Home from '../components/home.js'
import { User } from '../actions'


export default class HomeContainer extends React.Component {
  fetchUser() {
    this.props.dispatch(User.fetch())
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
