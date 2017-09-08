import React from 'react';

export const Status = () => ( // eslint-disable-line
  <div>
    <div className="button">
      <span className="icon is-small">
        <i className="fa fa-thumbs-o-up" style={{ color: 'blue' }} />
      </span>
      <span>Join</span>
    </div>
    <div className="button">
      <span className="icon is-small ">
        <i className="fa fa-thumbs-o-down " style={{ color: 'red' }} />
      </span>
      <span>Reject</span>
    </div>
  </div>
);
