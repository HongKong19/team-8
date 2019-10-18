import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


class EventDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="event-details-page">

          <div className="event-details">

              <div className="event-details-title">
                <h1>{this.props.eventTitle}</h1>
              </div>

              <img className="event-details-img" src={this.props.eventImg} alt="event icon load failed!"/>

              <div className="event-details-text">
                <div className="event-details-title">
                  <p>{this.props.eventTitle}</p>
                </div>

                <div className="event-details-desc">
                  <p>{this.props.eventDetail}</p>
                </div>
              </div>

          </div>


          <div className="event-details-people">
            <div className="event-details-people-donors">donors</div>
            <div className="event-details-people-possible-donors">possible donors</div>
          </div>

          <button onClick={this.props.closeEventDetails}>Go back</button>
        </div>
    )
  }
}

export default EventDetailPage;
