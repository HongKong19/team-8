import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import graph from './graph.jpeg';

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
          <img src={graph} alt='graph'/>
        </div>
    )
  }
}

export default GraphPage;
