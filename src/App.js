import React, { Component } from 'react';

import './App.css';
<<<<<<< HEAD
import Stream from './components/stream/stream'

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
    </p>
  }
}
=======
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';
>>>>>>> ab9c6341bcdf2e8441e49a76a518414dddc39b85



class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <LambdaDemo/>
        <Stream credentials={ this.props.credentials }/>
=======
        <Splash />
        <EventIndex/>
>>>>>>> ab9c6341bcdf2e8441e49a76a518414dddc39b85
      </div>
    );
  }
}

export default App;
