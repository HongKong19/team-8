import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="event clickable" onClick={this.props.showEventDetails}>
          <div>
            <img className="event-img" src={this.props.eventImg} alt="star icon load failed!"/>
          </div>
          <div>
            <p className="event-title">{this.props.eventTitle}</p>
          </div>
        </div>
    )
  }
}

export default Event;
