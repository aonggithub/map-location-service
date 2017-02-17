import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import MenuPanel from '../components/MenuPanel';
import { connect } from 'react-redux';
import { getServiceLoc,
        getNearbyServiceLoc,
        changePOILocation,
        changeCategoryToDisplay,
        displayCategoryMenu } from '../action';

export class MapContainer extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {currentLocation: null, radius: 0};
  }

  componentDidMount(){
    // this.props.loadServiceLoc();
    this.initialCurrentPos();
  }

  initialCurrentPos(){
    // Initial Current position.
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Radius as kilometer to display POI.
          const radius = 2;
          var currentLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
          this.setState({currentLocation});
          this.setState({radius});
          this.props.loadNearbyServiceLoc(currentLocation, radius);
        }, (error) => {
          console.log(error);
          console.log("Geolocation is not enabled.");
        });
    }else{
      console.log("Geolocation is not supported by this browser.")
    }
  }

  // This method is created for manual binding current location and radius
  changeCategoryToDisplayBindingCurrentLocation(category){
    this.props.changeCategoryToDisplay(category, this.state.currentLocation, this.state.radius)
  }

  render(){
    return (
      <div>
        <MapPanel serviceLocations = {this.props.locations}
          apiKeyParam = {'AIzaSyAHVWzrqPTQRhBTAe6WuC-zNMB6LA708a0'}
          height = '80%'
          poiOnClick={this.props.changePOILocationDisplay}
          displayCategoryMenu={this.props.displayCategoryMenu}
          center = {this.state.currentLocation}
          show= {this.state.currentLocation!=null}
          />
        <MenuPanel
          getAllLocation={this.props.loadServiceLoc}
          changeCategory={this.changeCategoryToDisplayBindingCurrentLocation.bind(this)}
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
    loadNearbyServiceLoc: (currentLocation, radius) => {
      dispatch(getNearbyServiceLoc(currentLocation, radius))
    },
    changePOILocationDisplay: (poiObj) => {
      dispatch(changePOILocation(poiObj))
    },
    displayCategoryMenu: (show) => {
      dispatch(displayCategoryMenu(show))
    },
    changeCategoryToDisplay: (category, currentLocation, radius) => {
      dispatch(changeCategoryToDisplay(category,currentLocation, radius))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
