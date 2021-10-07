import React from "react";
import interativeMap from '../images/Map.png'

function Location() {
  return (
    <div>
      <h2 className="location__title">Location</h2>
      <p className="location__text">
        Where are you sending this Smilevery?
      </p>
      <img className="location__map" src={interativeMap}/>

    </div>
  )
}

export default Location