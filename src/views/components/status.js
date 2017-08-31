import React from 'react'

export const Status = () => {
  return (
    <div>
      <div className="button">
        <span className="icon is-small">
          <i className="fa fa-thumbs-o-up" style={{color: "blue"}}></i>
        </span>
         <span>Join</span>
      </div>
      <div className="button">
        <span className="icon is-small ">
          <i className="fa fa-thumbs-o-down " style={{color: "red"}}></i>
        </span>
         <span>Reject</span>
      </div>
    </div>
  )
}
