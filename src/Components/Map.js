import React from 'react';
import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const Map = compose(
  withScriptjs,
  withGoogleMap,
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat:  -37.809982, lng: 144.957488 }} // Map Center
  >
  {props.showingLocations.map((location) => (
    <Marker
      key={location.name}
      position={location.position}
      onClick={() => {props.toggleInfo(location)}}
      onMouseOver={() => {props.toggleAnimate(location)}}
      onMouseOut={() => {props.toggleAnimate(location)}}
      animation={location.isAnimated ? window.google.maps.Animation.BOUNCE : null}
    >
      {location.isInfoOpen &&
        <InfoWindow onCloseClick={()=> {props.toggleInfo(location)}}>
          <div>
            {location.name}<br/>
            {location.img &&
              <div className="attribution">
                <img src={location.img} alt={location.name}></img><br/>
                <i>Image Courtesy of <a href="https://foursquare.com">Four Square</a></i>
              </div>
            }
            {!location.img &&
              <div><i>Trouble receiving image</i></div>
            }
          </div>
        </InfoWindow>
      }
    </Marker>
  ))}
  </GoogleMap>
)

const MapContainer = (props) => (
  // All props from MapContainer need to be passed to Map
  <div id="map-container">
    <Map
      role="application"
      aria-label="map"
      locations={props.locations}
      showingLocations={props.showingLocations}
      toggleInfo={props.toggleInfo}
      toggleAnimate={props.toggleAnimate}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPr7UgAY_V5HaPPrE166-lqxqT1_6JV0Q"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

export default MapContainer;