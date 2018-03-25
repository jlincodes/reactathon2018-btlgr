import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT
} from '../actions/event_actions.js';
import merge from 'lodash/merge';

export const eventsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENTS:
    break;
    case RECEIVE_EVENT:
    break;
    default:
    break;
  }
};
