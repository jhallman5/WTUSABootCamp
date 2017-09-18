import React from 'react';

const amountOfCustomers = props => (
  <div className="column is-narrow">
    {props.customers.filter(customer => customer.status === props.status).length}
  </div>
);

export default amountOfCustomers;
