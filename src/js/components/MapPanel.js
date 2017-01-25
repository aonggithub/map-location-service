import React, {PropTypes, Component } from 'react';
import GoogleMap, {GoogleMapMarkers} from 'google-map-react';
import MapMaker from './MapMaker';

class MapPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const servicePlaces = this.props.serviceLocations.map( place => {
      console.log(place);
      // const {id, ...coords} = place;
      // return ({key:id, ...coords});
      return <MapMaker text={place.name} lat={place.lat} lng={place.lng} />
    })

    console.log(servicePlaces);
    return (
      <div>
        <GoogleMap
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={(obj) => { console.log(obj) }}
          onZoomAnimationStart ={(obj) => { console.log("onZoomAnimationStart") }}>
          {servicePlaces}
        </GoogleMap>
      </div>
    )
  }
}

MapPanel.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  serviceLocations: PropTypes.any
}

MapPanel.defaultProps = {
  center: {lat: 13.733313, lng: 100.566274},
  zoom: 15,
  serviceLocations: [{id: 'A', lat: 13.733313, lng: 100.566274}]
};

export default MapPanel
