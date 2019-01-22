import React from 'react';
import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const MAP_KEY = "AIzaSyAPr7UgAY_V5HaPPrE166-lqxqT1_6JV0Q";
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`;

// Google Map Component
let Map = ({ showingLocations, toggleAnimate, toggleInfo }) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat:  -37.832356, lng: 144.971650 }}
  >
  {showingLocations.map((location) => (
    <Marker
      key={location.name}
      position={location.position}
      onClick={() => toggleInfo(location)}
      onMouseOver={() => toggleAnimate(location)}
      onMouseOut={() => toggleAnimate(location)}
      animation={location.isAnimated ? window.google.maps.Animation.BOUNCE : null}
    >
      {location.isInfoOpen && (
        <InfoWindow onCloseClick={()=> toggleInfo(location)}>
          <div>
            {location.name}<br/>
            {location.img && (
              <div className="attribution">
                <img src={location.img} alt={location.name} />
                <br/>
                <i>
                  Image Courtesy of <a href="https://foursquare.com">Four Square</a>
                </i>
              </div>
            )}
            {!location.img && (
              <div>
                <i>Trouble receiving image</i>
              </div>
            )}
          </div>
        </InfoWindow>
      )}
    </Marker>
  ))}
  </GoogleMap>
);

Map = compose(withScriptjs, withGoogleMap)(Map);

// Parent Container of Google Map Component
// Must pass all required props to Map
const MapContainer = (props) => (
  <div id="map-container">
    <Map
      role="application"
      aria-label="map"
      locations={props.locations}
      showingLocations={props.showingLocations}
      toggleInfo={props.toggleInfo}
      toggleAnimate={props.toggleAnimate}
      googleMapURL={MAP_URL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

export default MapContainer;
