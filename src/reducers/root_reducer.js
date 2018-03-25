import { combineReducers } from 'redux';

import eventsReducer from './events_reducer';
import streamsReducer from './stream_reducer/stream_reducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  streams: streamsReducer
});

export default rootReducer;
