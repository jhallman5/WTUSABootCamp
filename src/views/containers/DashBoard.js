import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Home from '../components/home.js'
import { User } from '../actions'
import store from '../store'

@connect((store) => {
  return {
    user: store.user.user,
    users: store.user.users,
  }
})
export default class DashBoardContainer extends React.Component {
  fetchUser() {
    this.props.dispatch(User.fetch())
  }

  componentWillMount(){
    this.props.dispatch(User.fetchAll())
  }

  render() {
    console.log( "=-=-=-> this.props", this.props )
    return (
      <div>
        dash
        <button onClick={this.fetchUser.bind(this)}>Get User</button>
        <ul>{this.props.users.map(function (person,i) {
          console.log( "=-=-=-> person", person)
            return <li key={i} >1</li>
          })}
        </ul>
        <Home />
      </div>
    )
  }
}