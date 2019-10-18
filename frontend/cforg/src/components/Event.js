import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import $ from 'jquery';


class Event extends Component {
  constructor() {
    super(props);
    this.state = {
      eventImg : "default.jpg",
      eventTitle : "default title",

    };
  }

  render() {

    return (
        <div className="event">
          <div className="eventImg">
            <img src={this.state.eventImg} alt="event icon load failed!" onClick=""/>
          </div>
          <div>
            <p>{this.state.ventTitle}</p>
          </div>
        </div>
    )

  }


}
