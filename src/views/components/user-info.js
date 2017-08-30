import React from 'react';
import PropTypes from 'prop-types';

export const UserInfo = (props) => {
  return (
    <div className="columns">
      <div className="column">
        {props.customer.id}
      </div>
      <div className="column">
        {props.customer.username}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
}
