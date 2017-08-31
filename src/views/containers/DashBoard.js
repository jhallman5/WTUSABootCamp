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
  constructor(props) {
    super(props);
    this.state =  {
      tab: 'open'
    }
  }

  componentDidMount(){
    this.props.dispatch(Customers.fetchAll())
  }

  tabSelect(tab) {
    this.setState({ tab })
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
            <li className={this.state.tab === 'open' ? "is-active" : ""}>
              <a onClick={this.tabSelect.bind(this,'open')}>Open</a></li>
            <li className={this.state.tab === 'joined' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'joined')}>Joined</a></li>
            <li className={this.state.tab === 'rejected' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'rejected')}>Rejected</a></li>
            <li className={this.state.tab === 'all' ? "is-active": ""}>
              <a onClick={this.tabSelect.bind(this,'all')}>All</a></li>
          </ul>
        </div>

        Current User: {this.props.customer.username || this.props.customer.name}

          <br />
          ---------------------------------------------------------------
            <div >
              <CustomerHeader />
              {this.props.customers
                ? this.props.customers.map(person => {
                    if(this.state.tab === person.status || this.state.tab === 'all') {
                      return <CustomerInfo customer={person} key={person.id}/>
                    }
                  })
                : 'Loading...'
              }
            </div>
      </div>
    )
  }
}
