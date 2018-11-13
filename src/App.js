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
    query: '',
    locations: constants.locations
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
        const img = await FourSquareAPI.getInfo(location);
        location.img = img;
      } catch (err) {
        console.log('Error!', err)
      }
    }
    location.isInfoOpen = !location.isInfoOpen;
    this.uppdateLocation(location);
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  toggleAnimate = (location) => {
    location.isAnimated = !location.isAnimated;
    this.uppdateLocation(location);
  }

  render() {
    const { locations, query } = this.state;
    const showing = (() => {
      if (query) {
        const regExp = constants.match(query);
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
