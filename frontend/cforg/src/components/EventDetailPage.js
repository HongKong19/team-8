import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Chip} from "@material-ui/core";
import donorData from "../MainApp/donorData";


const Cols = [
  {
    Header: "Donors",
    accessor: 'name'
  },
  {
    Header: "Possible Donors",
    accessor: 'circle[0]'
  },
  {
    Header: "Tags",
    accessor: 'tags',
    Cell: (props) => (
      props.value.map((tag) => (
        <Chip label={tag}/>
      ))
    )
  },
  {
    Header: "Organization",
    accessor: 'org'
  }
];


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


          <ReactTable
            columns={Cols}
            data={donorData}
            defaultPageSize={5}
          />

          <button onClick={this.props.closeEventDetails}>Go back</button>
        </div>
    )
  }
}

export default EventDetailPage;
