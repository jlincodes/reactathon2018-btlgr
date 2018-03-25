import React from 'react';
import StreamIndex from '../stream/stream_index';
import Display from '../stream/display';

class EventView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    let eventId = this.props.match.params.id;
    fetch('/.netlify/functions/fetchEvent', { method: "POST", body: eventId })
      // .then(response => console.log("response", response));
      .then(response => response.json())
      // .then(response => console.log("events", response));
      .then(response => this.setState(response[0]));
  }

  render() {
    console.log(this.state);
    if (this.state) {
      const eventName = this.state.Name;
      const eventDesc = this.state.Description;
      return (
        <div>
          <h1>{eventName}</h1>
          <div>
            <StreamIndex />
            <Display />
          </div>
          <p>{eventDesc}</p>
        </div>
      );
    } else {
      return (
        <div>
          loading...
        </div>
      );
    }
  }

}

export default EventView;
