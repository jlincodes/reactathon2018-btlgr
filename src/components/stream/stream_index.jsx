import React, { Component } from 'react'

class StreamIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      streams = []
    }
  }

  render() {
    let { streams } = this.props
    return (
      <div className='StreamIndex'>
        streams
      </div>
    )
  }
}