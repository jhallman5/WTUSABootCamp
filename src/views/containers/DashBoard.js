import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Home from '../components/home.js'
import { User } from '../actions'
import store from '../store'
import { UserInfo } from '../components/user-info'
import { UserHeader } from '../components/user-header'

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

  //mock test
  fetchAll() {
    this.props.dispatch(User.fetchAll())
  }

  //mock test
  fetchJoinedUsers(){
    this.props.dispatch(User.fetchSteven())
  }

  //mock test
  fetchRejectedUsers(){
    this.props.dispatch(User.fetchLisa())
  }

  render() {
    return (
      <div>
        <div className="columns is-offset-1">
          <div className="column">
            Leads: 389
          </div>
          <div className="column">
            Scheduled: 246
          </div>
          <div className="column">
            Joined: 48
          </div>
        </div>
        <div className="tabs is-offset-1">
          <ul>
            <li className="is-active"><a onClick={this.fetchUser.bind(this)}>Open</a></li>
            <li><a onClick={this.fetchJoinedUsers.bind(this)}>Joined</a></li>
            <li><a onClick={this.fetchRejectedUsers.bind(this)}>Rejected</a></li>
            <li><a onClick={this.fetchAll.bind(this)}>Show All</a></li>
          </ul>
        </div>
        Current User: {this.props.user.username}

          <br />
          ---------------------------------------------------------------
            <div >
              <UserHeader />
              {this.props.users
                ? this.props.users.map(person =>
                  <UserInfo client={person} key={person.id}/> )
                : 'Loading...'
              }
            </div>
      </div>
    )
  }
}
