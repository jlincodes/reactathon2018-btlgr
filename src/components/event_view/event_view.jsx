import React from 'react';
import StreamIndex from '../stream/stream_index';
import Display from '../stream/display';

class EventView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <StreamIndex />
        <Display />
      </div>
    );
  }

}

export default EventView;
