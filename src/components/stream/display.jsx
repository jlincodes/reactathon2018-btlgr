import React from 'react';
import Stream from './stream';

class Display extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log(this.props);
    const credentials = this.props.credentials;
    const sessionId = this.props.sessionId;
    const token = this.props.token;
    
    return (
      <div>
        <Stream
          sessionId={sessionId}
          token={token}
          credentials={this.props.credentials}
          />

      </div>
    );
  }

}

export default Display;
