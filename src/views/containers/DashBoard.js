import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Home from '../components/home.js'
import { Customers } from '../actions'
import store from '../store'
import { CustomerInfo } from '../components/customer-info'
import { CustomerHeader } from '../components/customer-header'

@connect((store) => {
  return {
    customer: store.customers.customer,
    customers: store.customers.customers,
  }
})
export default class DashBoardContainer extends React.Component {
  fetchUser() {
    this.props.dispatch(Customers.fetchCustomer())
  }

  //mock test
  fetchAll() {
    this.props.dispatch(Customers.fetchAll())
  }

  //mock test
  fetchJoinedUsers(){
    this.props.dispatch(Customers.fetchSteven())
  }

  //mock test
  fetchRejectedUsers(){
    this.props.dispatch(Customers.fetchLisa())
  }

  //mock test
  fetchJohn(){
    this.props.dispatch(Customers.fetchJohn())
  }

  render() {
    {console.log('this.props', this.props)}
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
            <li><a onClick={this.fetchJohn.bind(this)}>john</a></li>
            <li><a onClick={this.fetchAll.bind(this)}>Show All</a></li>
          </ul>
        </div>

        Current User: {this.props.customer.username || this.props.customer.name}

          <br />
          ---------------------------------------------------------------
            <div >
              <CustomerHeader />
              {this.props.customers
                ? this.props.customers.map(person =>
                  <CustomerInfo customer={person} key={person.id}/> )
                : 'Loading...'
              }
            </div>
      </div>
    )
  }
}
