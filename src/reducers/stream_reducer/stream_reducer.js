import merge from 'lodash/merge';

import { RECEIVE_STREAMS, RECEIVE_STREAM } from '../../actions/stream_actions'

const streamReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STREAMS:
      return action.streams;
    case RECEIVE_STREAM:
      // this needs to be figured out more about how we want this slice
      // of state to look. I am still unsure what our data will look like
      return merge({}, state, action.stream);
    default:
      return state;
  }
};

export default streamReducer;
