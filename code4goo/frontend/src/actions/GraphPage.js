import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import './App.css';
// import $ from 'jquery';


class GraphPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
        <div className="event" onClick={this.props.showEventDetails}>
          <p>This is Graph Page</p>
        </div>
    )
  }
}

export default GraphPage;
