import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Event from './Event';
import EventDetailPage from './EventDetailPage';
import '../App.css';

// import './App.css';
// import $ from 'jquery';


class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowEventDetails: false,
    };
    this.showEventDetails = this.showEventDetails.bind(this);
    this.closeEventDetails = this.closeEventDetails.bind(this);
  }

  showEventDetails() {
    this.setState({
      shouldShowEventDetails: true,
    });
  }

  closeEventDetails() {
    this.setState({
      shouldShowEventDetails: false,
    });
  }



  render() {

    return (

        <div className="event-page">

          <div className="event-page-title">Events</div>
          {
            this.state.shouldShowEventDetails?
              <div>
                <EventDetailPage eventImg="../images/event-img-1.jpg" eventTitle="Woodard" eventID="1" eventDetail="This is event details" closeEventDetails={this.closeEventDetails}/>
              </div>
              :
              <div>
                <Event eventImg="../images/event-img-1.jpg" eventTitle="Woodard" eventID="1" showEventDetails={this.showEventDetails}/>
                <Event eventImg="../images/event-img-2.jpg" eventTitle="Jacquelyn" eventID="2" showEventDetails={this.showEventDetails}/>
                <Event eventImg="../images/event-img-3.jpg" eventTitle="Daugherty" eventID="3" showEventDetails={this.showEventDetails}/>
                <Event eventImg="../images/event-img-3.jpg" eventTitle="Branch" eventID="4" showEventDetails={this.showEventDetails}/>
                <Event eventImg="../images/event-img-3.jpg" eventTitle="Rhoda" eventID="5" showEventDetails={this.showEventDetails}/>
                <Event eventImg="../images/event-img-3.jpg" eventTitle="Potter" eventID="6" showEventDetails={this.showEventDetails}/>
              </div>
          }



          <div>

          </div>

        </div>
    )
  }
}

export default EventPage;
