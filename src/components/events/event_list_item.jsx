import React from 'react';

const EventListItem = (props) => {
  console.log("props", props);
  const eventName = props.event.name.text;
  const eventDesc = props.event.description.text.slice(0, 300);
  const eventImg = props.event.logo.url;
  return (
    <li>
      <h3>{eventName}</h3>
      <img src={eventImg}></img>
      <p>{eventDesc}...</p>
    </li>
  );
};

export default EventListItem;
