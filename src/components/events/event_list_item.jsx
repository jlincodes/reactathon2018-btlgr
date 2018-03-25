import React from 'react';
import { Link } from 'react-router-dom';
import './event.css';


const EventListItem = (props) => {
  console.log("props", props);
  const eventId = props.event.id;
  const eventName = props.event.Name;
  // const eventDesc = props.event.description.slice(0, 300);
  // const eventImg = props.event.image_url;
  // <img src={eventImg}></img>
  // <p>{eventDesc}...</p>
  return (
    <li>
      <div className='event-item'>
        <Link to={`events/${eventId}`}><h3>{eventName}</h3></Link>

      </div>
    </li>
  );
};

export default EventListItem;
