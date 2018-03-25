import React, { Component } from 'react';
<<<<<<< HEAD
=======
import {BrowserRouter as Router, Route} from 'react-router-dom';

>>>>>>> 6fa0f0d90313c2918efe71a8362dfa099eb3b6c5
import './App.css';
import Stream from './components/stream/stream';
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';
import Search from './components/search/search';

<<<<<<< HEAD

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
=======
// {/* <Stream credentials={ this.props.credentials }/> */}

const TestComponent = () => ( <div>Test Component Show Pg</div> );

const Main = () => (
  <div>
    <Splash />
    <EventIndex />
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Main}/>
      <Route exact path="/test" component={TestComponent}/>
    </div>
  </Router>
);
>>>>>>> 6fa0f0d90313c2918efe71a8362dfa099eb3b6c5

export default App;
