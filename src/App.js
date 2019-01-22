import React, { Component } from 'react';
import MapContainer from './Components/Map';
import MenuView from './Components/MenuView';
import ErrorBoundary from './Components/ErrorBoundary';
import sortBy from 'sort-by';
import * as FourSquareAPI from './API/FourSquareAPI.js';
import * as constants from './Constants';
import './App.css';


class App extends Component {
  state = {
    query: '', // Default Search Box is Empty String
    locations: constants.locations // Locations Hard Coded In Constants.js
  }

  // Sets this.state.locations to a copy with the updated location,
  // passed as an argument.
  uppdateLocation = (location) => {
    const index = this.state.locations.indexOf(location);
    const locationsClone = this.state.locations.slice();

    locationsClone.splice(index, 1, location);
    this.setState({ locations : locationsClone });
  }

  // Fetches an image for a location if none exists.
  // Toggles location.isInfoOpen (boolean), then updates location
  toggleInfo = async (location) => {
    if (!location.img) {
      try {
        const img = await FourSquareAPI.getInfo(location);
        location.img = img;
      } catch (err) {
        console.log('Error!', err)
      }
    }
    location.isInfoOpen = !location.isInfoOpen;
    this.uppdateLocation(location);
  }

  // Updates this.state.query by passing a string
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  // Toggles location.isAnimated (boolean), then updates location
  toggleAnimate = (location) => {
    location.isAnimated = !location.isAnimated;
    this.uppdateLocation(location);
  }

  render() {
    const { locations, query } = this.state;
    
    // If query is a non-empty string, determines which locations to show,
    // returns those locations, and sorts them by location.name
    const showing = (() => {
      if (query) {
        const regExp = constants.createRegExp(query);
        return locations.filter((location) => regExp.test(location.name));
      }
      return locations;
    })().sort(sortBy('name'));

    return (
      <ErrorBoundary>
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
      </ErrorBoundary>
    );
  }
}

export default App;
