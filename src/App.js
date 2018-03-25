import React, { Component } from 'react';
import './App.css';
import Stream from './components/stream/stream'
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';
import Search from './components/search/search';


import './App.css';

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {loading: false, msg: null, extra: "EXTRA"};
//   }
//
//   handleClick = (e) => {
//     e.preventDefault();
//
//     this.setState({loading: true});
//     // fetch('/.netlify/functions/eventbrite')
//     fetch('/.netlify/functions/hello', { method: 'post', body: this.state.extra })
//       .then(response => response.json())
//       .then(json => this.setState({loading: false, msg: json.msg}));
//   }
//
//   render() {
//     const {loading, msg} = this.state;
//
//     return <p>
//       <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
//       <span>{msg}</span>
//     </p>
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Stream credentials={ this.props.credentials }/> */}
        <Splash />
        <Search />
        <EventIndex/>
      </div>
    );
  }
}

export default App;
