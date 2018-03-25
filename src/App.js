import React, { Component } from 'react';

import './App.css';
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <EventIndex/>
      </div>
    );
  }
}

export default App;
