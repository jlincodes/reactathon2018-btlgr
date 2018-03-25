import React from 'react';
import './search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: [],
      terms: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('search params',this.state.terms);

    this.setState({ loading: true, events: [] });
      fetch('/.netlify/functions/eventbrite', { method: 'post', body: this.state.terms })
      .then(response => console.log(response))
      .then(response => window.alert("It worked?"))
      // .then(response => response.json())
      // .then(json => this.setState({loading: false, events: json.msg}))
      // .then(json => console.log(json))
  }

  update(e) {
    this.setState({terms: e.target.value});
  }

  render() {
    return(
      <div className='search-form'>
        <form onSubmit={e => this.handleClick(e)}>
          <span className='search-bar' >
            <input
              className='search-input'
              placeholder='Event name'
              value={this.state.terms}
              onChange={e => this.update(e)}
              />
            <input className='search-button' type='submit' value='FIND EVENTS'></input>
          </span>
        </form>
      </div>
    );
  }

}
