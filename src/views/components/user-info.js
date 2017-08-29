import React from 'react';
import PropTypes from 'prop-types';

export const UserInfo = (props) => {
  return (
    <div className="columns">
      <div className="column">
        {props.client.id}
      </div>
      <div className="column">
        {props.client.username}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
}