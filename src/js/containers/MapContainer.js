import React, { Component } from 'react';
import MapPanel from '../components/MapPanel';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { getServiceLoc } from '../action';

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
        <SearchBox />
        <MapPanel serviceLocations = {this.props.locations} apiKeyParam = {'AIzaSyAHVWzrqPTQRhBTAe6WuC-zNMB6LA708a0'}  />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
