import React, { Component } from 'react';
import MapContainer from './Components/Map';
import MenuView from './Components/MenuView';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import './App.css';

class App extends Component {
  state = {
    query: '',
    locations: [
      {
        name: 'Home at the Mansion',
        position: { lat: -37.808444, lng: 144.974244 },
        isMarkerShown: true,
        isInfoOpen: false
      },
      {
        name: 'Flinders Backpackers',
        position: { lat: -37.817443, lng: 144.964382 },
        isMarkerShown: true,
        isInfoOpen: false
      },
      {
        name: 'Base St Kilda',
        position: { lat: -37.867272, lng: 144.979942 },
        isMarkerShown: true,
        isInfoOpen: false
      },
      {
        name: 'Exford Hotel',
        position: { lat: -37.811781, lng: 144.967444 },
        isMarkerShown: true,
        isInfoOpen: false
      },
      {
        name: 'Nomads Melbourne',
        position: { lat:  -37.809982, lng: 144.957488 },
        isMarkerShown: true,
        isInfoOpen: false
      }
    ]
  }

  toggleInfo = (location) => {
    if (location.isInfoOpen === false) {
      location.isInfoOpen = true;
    } else {
      location.isInfoOpen = false;
    }
    const index = this.state.locations.indexOf(location);
    const locationsClone = this.state.locations.slice();
    /* Replace old location in locations with updated one */
    locationsClone.splice(index, 1, location);
    this.setState({ locations : locationsClone });
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { locations, query } = this.state;

    // Handle Search Input
    let showing;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showing = locations.filter((location) => match.test(location.name));
    } else {
      showing = locations;
    }

    showing.sort(sortBy('name'))

    return (
      <div id="App">
        <MenuView
          pageWrapId={ "page-wrap" }
          outerContainerId={ "App" }
          updateQuery={this.updateQuery}
          showingLocations={showing}
          toggleInfo={this.toggleInfo}
          query={query}
        />
        <main id="page-wrap">
          <MapContainer
            locations={locations}
            showingLocations={showing}
            toggleInfo={this.toggleInfo}
          />
        </main>
      </div>
    );
  }
}

export default App;
