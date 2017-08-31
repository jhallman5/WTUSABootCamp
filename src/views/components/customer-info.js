import React from 'react';
import PropTypes from 'prop-types';
import { Status } from './status'

export const CustomerInfo = (props) => {
  return (
    <div>
      <div className="columns is-centered">
        {(props.customer.status != 'open') ?
              <div className="column">
                {props.customer.status}
              </div>
              :  <div className="column">
                 <Status />
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
      <div className="columns">
        <div className="column" style={{borderTop:'1px solid black'}}>

        </div>
      </div>
    </div>
  );
}

CustomerInfo.propTypes = {
  customer: PropTypes.object,
}
