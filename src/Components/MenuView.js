import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';

const MenuView = (props) => (
  <nav>
    <Menu {...props}>
      <div className="search-locations-input-wrapper">
        <input
          type="text"
          placeholder="Search"
          value={props.query}
          onChange={(event) => props.updateQuery(event.target.value)}
        />
      </div>
      {props.showingLocations.map((location) => (
        <button
          key={location.name}
          className="menu-item"
          onClick={()=> {props.toggleInfo(location)}}>
          {location.name}
        </button>
      ))}
    </Menu>
  </nav>
)

export default MenuView;