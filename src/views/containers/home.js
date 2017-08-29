import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Home from '../components/home.js'
import { User } from '../actions'
import store from '../store'

@connect((store) => {
  return {
    user: store.user.user,
    users: store.user.user
  }
})
export default class HomeContainer extends React.Component {
  fetchUser() {
    this.props.dispatch(User.fetch())
  }
  render() {
    return (
      <div>
        <button onClick={this.fetchUser.bind(this)}>Get User</button>
        <Home />
      </div>
    )
  }
}
