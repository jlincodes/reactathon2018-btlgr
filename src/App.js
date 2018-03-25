import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import EventIndex from './components/events/event_index';
import Splash from './components/splash/splash';

const App = () => (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/test" component={TestComponent}/>
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
