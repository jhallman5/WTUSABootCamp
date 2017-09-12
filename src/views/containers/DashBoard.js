/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Customers } from '../actions';
import CustomerInfo from '../components/customer-info';
import CustomerHeader from '../components/customer-header';
import AmountOfCustomers from '../components/amount-of-customers';

const mapStateToProps = state => {
  return {customers: state.customers.customers}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(Customers.fetchAll())
  }
};

class DashBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'open',
    };
    this.tabSelect.bind(this);
  }

  componentWillMount() {
    this.props.fetchAll();
  }

  tabSelect(tab) {
    this.setState({ tab });
  }

  render() {
    return (
      <div>
        <div className="columns is-offset-1">
          <div className="column">
            Leads: <AmountOfCustomers customers={this.props.customers} status="open" />
          </div>
          <div className="column">
            Rejected: <AmountOfCustomers customers={this.props.customers} status="rejected" />
          </div>
          <div className="column">
            Joined: <AmountOfCustomers customers={this.props.customers} status="joined" />
          </div>
          <div className="column">
            Total: {this.props.customers.length}
          </div>
        </div>
        <div className="tabs is-offset-1">
          <ul>
            <li className={this.state.tab === 'open' ? 'is-active' : ''}>
              <a onClick={this.tabSelect.bind(this,'open')} role="presentation">Open</a></li>
            <li className={this.state.tab === 'joined' ? 'is-active' : ''}>
              <a onClick={this.tabSelect.bind(this,'joined')} role="presentation">Joined</a></li>
            <li className={this.state.tab === 'rejected' ? 'is-active' : ''}>
              <a onClick={this.tabSelect.bind(this,'rejected')} role="presentation" >Rejected</a></li>
            <li className={this.state.tab === 'all' ? 'is-active' : ''}>
              <a onClick={this.tabSelect.bind(this,'all')} role="presentation">All</a></li>
          </ul>
        </div>
        <div >
          <CustomerHeader />
          {this.props.customers.length
            ? this.props.customers.map((person) => { //eslint-disable-line
              if (this.state.tab === person.status || this.state.tab === 'all') {
                return <CustomerInfo customer={person} key={person.id} />;
              }
            })
            : 'Loading...'
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
