import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Stream from './components/stream/stream'
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';

<<<<<<< HEAD
const App = () => (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/test" component={TestComponent}/>
=======
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <LambdaDemo/>
        {/* <Stream credentials={ this.props.credentials }/> */}
        <Splash />
        <EventIndex/>
>>>>>>> 28ed57a5c52dc8e7869fb21fb7880d98b85e8a77
      </div>
    </Router>
);

const TestComponent = () => ( <div>Test Component Show Pg</div> );

const Main = () => (<div><Splash /> <EventIndex /></div>);
// const App = () => {
//   render() {
//     return (
//       <div className="App">
//         <Splash />
//         <EventIndex/>
//       </div>
//     );
//   }
// }

export default App;
