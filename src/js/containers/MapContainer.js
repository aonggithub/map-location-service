import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import MenuPanel from '../components/MenuPanel';
import { connect } from 'react-redux';
import { getServiceLoc,
        changePOILocation,
        changeCategoryToDisplay,
        displayCategoryMenu } from '../action';

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
          displayCategoryMenu={this.props.displayCategoryMenu}
          center = {this.state.initialPosition}
          />
        <MenuPanel
          getAllLocation={this.props.loadServiceLoc}
          changeCategory={this.props.changeCategoryToDisplay}
          show={this.props.displayCatMenu}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    displayCatMenu: state.displayLayout.displayCatMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadServiceLoc: () => {
      dispatch(getServiceLoc())
    },
    changePOILocationDisplay: (poiObj) => {
      dispatch(changePOILocation(poiObj))
    },
    displayCategoryMenu: (show) => {
      dispatch(displayCategoryMenu(show))
    },
    changeCategoryToDisplay: (category) => {
      dispatch(changeCategoryToDisplay(category))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
