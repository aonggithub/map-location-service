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
        <MapPanel serviceLocations = {this.props.locations} apiKeyParam = {''}  />
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
