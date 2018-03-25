import React from 'react';

import EventListItem from './event_list_item';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true, events: [] });
    // fetch('/.netlify/functions/eventbrite')
      fetch('/.netlify/functions/discovery')
      // .then(response => console.log("response", response))
      .then(response => response.json())
      // .then(resp => console.log("events", resp));
      .then(resp => this.setState({ loading: false, events: resp }));
  }

  render() {
    let {loading, events} = this.state;
    console.log("events", events);

    let eventItems = events ? Object.keys(events).map( idx => (
      <EventListItem
        key={idx}
        event={events[idx]} />
    )) : <span>Loading Events...</span>;

    return (
      <div>
        <ul className="event-list">
          {eventItems}
        </ul>
      </div>
    );
  }
}
