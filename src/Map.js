import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -37.813628, lng: 144.963058 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -37.813628, lng: 144.963058 }} />}
  </GoogleMap>
))

const Map = ((props) =>
  <MyMapComponent
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAPr7UgAY_V5HaPPrE166-lqxqT1_6JV0Q"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)

export default Map;