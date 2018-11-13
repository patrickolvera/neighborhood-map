import React, { Component } from 'react';
import MapContainer from './Components/Map';
import MenuView from './Components/MenuView';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as FourSquareAPI from './API/FourSquareAPI.js';
import './App.css';

class App extends Component {
  state = {
    query: '',
    locations: [
      {
        name: 'Royal Botanic Gardens',
        position: { lat: -37.830369, lng: 144.979606 },
        isInfoOpen: false,
        isAnimated: false
      },
      {
        name: 'Cookie',
        position: { lat: -37.812005, lng: 144.965164 },
        isInfoOpen: false,
        isAnimated: false
      },
      {
        name: 'X Base Backpackers',
        position: { lat: -37.867272, lng: 144.979942 },
        isInfoOpen: false,
        isAnimated: false
      },
      {
        name: 'Queen Victoria Market',
        position: { lat: -37.806718, lng: 144.959648 },
        isInfoOpen: false,
        isAnimated: false
      },
      {
        name: 'Federation Square',
        position: { lat: -37.818236, lng: 144.967862 },
        isInfoOpen: false,
        isAnimated: false
      }
    ]
  }

  uppdateLocation = (location) => {
    const index = this.state.locations.indexOf(location);
    const locationsClone = this.state.locations.slice();

    locationsClone.splice(index, 1, location);
    this.setState({ locations : locationsClone });
  }

  toggleInfo = async (location) => {
    if (!location.img) {
      try {
        let img = await FourSquareAPI.getInfo(location);
        location.img = img;
      } catch (err) {
        console.log('Error!', err)
      }
    }
    if (location.isInfoOpen === false) {
      location.isInfoOpen = true;
    } else {
      location.isInfoOpen = false;
    }
    this.uppdateLocation(location);
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  toggleAnimate = (location) => {
    if (location.isAnimated === false) {
      location.isAnimated = true;
    } else {
      location.isAnimated = false;
    }
    this.uppdateLocation(location);
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
          toggleAnimate={this.toggleAnimate}
          query={query}
        />
        <main id="page-wrap">
          <MapContainer
            locations={locations}
            showingLocations={showing}
            toggleInfo={this.toggleInfo}
            toggleAnimate={this.toggleAnimate}
          />
        </main>
      </div>
    );
  }
}

export default App;
