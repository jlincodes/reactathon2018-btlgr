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
    // console.log(this.props);
    const credentials = this.props.credentials;

    if (this.state && this.state.session_id) {
      const eventName = this.state.Name;
      const eventDesc = this.state.Description;
      const token = this.state.token;
      const sessId = this.state.session_id;

      return (
        <div>
          <h1>{eventName}</h1>
          <div>
            <StreamIndex />
            <Display
              token={token}
              sessionId={sessId}
              credentials={credentials}
              />
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
