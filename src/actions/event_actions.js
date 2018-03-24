export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});
