import React, { Component } from 'react';

class StreamIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      streams: []
    };
  }

  render() {
    let { streams } = this.props;
    streams = ["dummy data", "dummier data"];

    return (
      <div className='StreamIndex'>
        streams
      </div>
    );
  }
}

export default StreamIndex;
