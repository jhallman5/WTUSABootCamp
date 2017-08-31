import React from 'react';
import PropTypes from 'prop-types';

export const CustomerInfo = (props) => {
  return (
    <div className="columns">
      {(props.customer.status != 'open') ?
            <div className="column">
              {props.customer.status}
            </div>
            :  <div className="column">
               {props.customer.status} 1
             </div>
      }
      <div className="column">
        {props.customer.name}
      </div>
      <div className="column">
        {props.customer.concern}
      </div>
      <div className="column">
        {props.customer.email}
      </div>
      <div className="column">
        {props.customer.phone}
      </div>
      <div className="column">
        {props.customer.interview_date}
      </div>
      <div className="column">
        {props.customer.created_on}
      </div>
    </div>
  );
}

CustomerInfo.propTypes = {
  customer: PropTypes.object,
}
