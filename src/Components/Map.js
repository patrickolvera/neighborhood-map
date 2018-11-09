import React from 'react';
import { compose, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = compose(
  withStateHandlers(() => ({
    isMarkerShown: true,
    })),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat:  -37.809982, lng: 144.957488 }}
  >
  {props.isMarkerShown &&
    props.showingLocations.map((location) => (
      <Marker
        key={location.name}
        position={location.position}
        onMouseOver={()=> {props.toggleInfo(location)}}
        onMouseOut={()=> {props.toggleInfo(location)}}
      >
       {location.isInfoOpen &&
         <InfoWindow onCloseClick={()=> {props.toggleInfo(location)}}>
          <div>
            {location.name}:<br/>
            TODO: Put some info here
          </div>
        </InfoWindow>
       }
      </Marker>
    ))
  }
  </GoogleMap>
)

const MapContainer = (props) => (
  // All props from MapContainer need to be passed to Map
  <div id="map-container">
    <Map
      locations={props.locations}
      showingLocations={props.showingLocations}
      toggleInfo={props.toggleInfo}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPr7UgAY_V5HaPPrE166-lqxqT1_6JV0Q"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

export default MapContainer;