import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
// import $ from 'jquery';


class EventDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventImg : "default.jpg",
      eventTitle : "default title",
      eventDetails : "default details",
    };
  }

  render() {
    return (
        <div className="event-details-page">
          <div>
            <h1>{this.state.eventTitle}</h1>
          </div>
          <div className="event-img">
            <img src={this.state.eventImg} alt="event icon load failed!" onClick=""/>
          </div>
          <div>
            <p>{this.state.eventTitle}</p>
          </div>
          <div className="event-details-text">
            <p>{this.state.eventDetails}</p>
          </div>

          <div className="event-details-people">
            <div className="event-details-people-donors">donors</div>
            <div className="event-details-people-possible-donors">possible donors</div>
          </div>
        </div>
    )
  }
}

export default EventDetailPage;
