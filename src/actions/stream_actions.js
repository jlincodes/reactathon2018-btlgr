export const RECEIVE_STREAMS = "RECEIVE_STREAMS";
export const RECEIVE_STREAM = "RECEIVE_STREAM";

export const receiveStreams = (streams) => ({
  type: RECEIVE_STREAMS,
  streams
});

export const receiveStream = (stream) => ({
  type: RECEIVE_STREAM,
  stream
});
