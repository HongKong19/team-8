import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Event from './Event';

// import './App.css';
// import $ from 'jquery';


class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
        <div className="event-page">
          <Event eventImg="../images/event-img.jpg" eventTitle="Woodard" eventID="1" onClick=""/>
          <Event eventImg="../images/event-img-2.jpg" eventTitle="Jacquelyn" eventID="2"/>
          <Event eventImg="../images/event-img-3.jpg" eventTitle="Daugherty" eventID="3"/>
          <Event eventImg="../images/event-img-3.jpg" eventTitle="Branch" eventID="4"/>
          <Event eventImg="../images/event-img-3.jpg" eventTitle="Rhoda" eventID="5"/>
          <Event eventImg="../images/event-img-3.jpg" eventTitle="Potter" eventID="6"/>

          <div>

          </div>

        </div>
    )
  }
}

export default EventPage;
