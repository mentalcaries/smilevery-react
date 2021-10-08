import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.6918,
      lng: 61.2225,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{height: '50vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDtVnre6-I5BHmKL0-e3DSpzhfPZb3X7wg'}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={10.6918} lng={61.2225} text="Smile Shop" />
      </GoogleMapReact>
    </div>
  );
}
