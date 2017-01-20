import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import SearchBox from '../components/SearchBox';

export class MapContainer extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount(){

  }

  render(){
    const serviceLocations =
      [
         {
            id:'A',
            lat:'13.733313',
            lng:'100.566274'
         },
         {
            id:'B',
            lat:'13.736627208213747',
            lng:'100.57329065878298'
         },
         {
            id:'C',
            lat:'13.731270257133573',
            lng:'100.5572832353821'
         }
      ];
    return (
      <div>
        <SearchBox />
        <MapPanel serviceLocations = {serviceLocations} />
      </div>
    )
  }
}

export default MapContainer
