import React from 'react';
import Map from './utils/Map';
import interativeMap from '../images/Map.png';
import {Link} from 'react-router-dom';

function Location() {
  return (
    <div>
      <h2 className="location__title">Location</h2>
      <p className="location__text">Where are you sending this Smilevery?</p>
      <Link to="/smilevery-react/shop">
        <img className="location__map" src={interativeMap} />
      </Link>
      {/* <Map/> */}
    </div>
  );
}

export default Location;
