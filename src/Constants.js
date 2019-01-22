import escapeRegExp from 'escape-string-regexp'

// Locations data,
// Each must include name, position, isInfoOpen, and isAnimated
export const locations = [
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

// Takes a string and creates a new RegExp after escaping special characters
export const createRegExp = (query) => new RegExp(escapeRegExp(query), 'i');