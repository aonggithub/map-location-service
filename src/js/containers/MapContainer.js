import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import { connect } from 'react-redux';
import { getServiceLoc, changePOILocation } from '../action';

export class MapContainer extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {initialPosition: null};
  }

  componentDidMount(){
    this.props.loadServiceLoc();
    this.initialCurrentPos();
  }

  initialCurrentPos(){
    // Initial Current position.
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var initialPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
          this.setState({initialPosition});
        });
    }else{
      console.log("Geolocation is not supported by this browser.")
    }
  }

  render(){
    return (
      <div>
        <MapPanel serviceLocations = {this.props.locations}
          apiKeyParam = {'AIzaSyAHVWzrqPTQRhBTAe6WuC-zNMB6LA708a0'}
          height = '80%'
          poiOnClick={this.props.changePOILocationDisplay}
          center = {this.state.initialPosition}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadServiceLoc: () => {
      dispatch(getServiceLoc())
    },
    changePOILocationDisplay: (poiObj) => {
      dispatch(changePOILocation(poiObj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
