/* eslint-disable */
//https://react.rocks/example/react-big-calendar

import React from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const myEventsList=[]

class Calendar1 extends React.Component {
  render() {
    return (
     <div>
      <BigCalendar
        events={myEventsList}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    </div>
    )
  }
}
export default Calendar1;
