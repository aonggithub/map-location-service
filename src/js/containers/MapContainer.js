import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import { connect } from 'react-redux';
import { getServiceLoc, changePOILocation } from '../action';

export class MapContainer extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.props.loadServiceLoc();
  }

  render(){
    return (
      <div>
        <MapPanel serviceLocations = {this.props.locations}
          apiKeyParam = {''}
          height = '80%'
          poiOnClick={this.props.changePOILocationDisplay}
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
