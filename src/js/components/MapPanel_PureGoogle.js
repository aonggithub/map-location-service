import React, { Component } from 'react';
import { render } from 'react-dom';

class MapPanel_PureGoogle extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount(){
    let script_markerclusterer = document.createElement('script');
    script_markerclusterer.src = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js'
    document.getElementById("markerclusterer_insertion").appendChild(script_markerclusterer);

    let script_GoogleAPI = document.createElement('script');
    script_GoogleAPI.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap'
    document.getElementById("markerclusterer_insertion").appendChild(script_GoogleAPI);
  }

  render() {
    const style = {
      height: '100%'
    }

    return (
      <div>
        <div id="map" style={style}></div>
        <div id="markerclusterer_insertion"></div>
      </div>
    )
  }
}

export default MapPanel_PureGoogle
