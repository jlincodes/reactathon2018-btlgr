import React from 'react';

import EventListItem from './event_list_item';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ loading: true, events: [] });
    fetch('/.netlify/functions/eventbrite')
      // .then(response => console.log("response", response))
      .then(response => response.json())
      // .then(resp => console.log("events", resp));
      .then(resp => this.setState({loading: false, events: resp}));
  }

  render() {
    let {loading, events} = this.state;
    events = events.msg ? events.msg : null;
    console.log("events", events);

    let eventItems = events ? events.map( (event, idx) => (
      <EventListItem
        key={idx}
        event={event} />
    )) : <span>Click the button to discover events happening right now.</span>;

    return (
      <div>
        <button
          className="discover-button"
          onClick={this.handleClick}>
          { loading ? 'Loading...' : 'Discover' }
        </button>
        <ul className="event-list">
          {eventItems}
        </ul>
      </div>
    );
  }
}
