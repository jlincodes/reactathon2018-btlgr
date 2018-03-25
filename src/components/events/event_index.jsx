import React from 'react';

import EventListItem from './event_list_item';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: [],
      extra: "karaoke"
    };
  }

  componentDidMount() {
    this.setState({ loading: true, events: [] });
    // fetch('/.netlify/functions/eventbrite')
      fetch('/.netlify/functions/discovery', { method: 'post', body: this.state.extra })
      // .then(response => console.log("response", response))
      .then(response => response.json())
      // .then(resp => console.log("events", resp));
      // .then(resp => this.setState({loading: false, events: resp}));
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    let {loading, events} = this.state;
    events = events.msg ? events.msg : null;
    console.log("events", events);

    let eventItems = events ? events.map( (event, idx) => (
      <EventListItem
        key={idx}
        event={event} />
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
