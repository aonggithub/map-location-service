import React, { Component } from 'react';
import POIPanel from '../components/POIPanel';
import { connect } from 'react-redux';

export class POIContainer extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <POIPanel poiLocation = {this.props.poiLocation}
          height = '15%'
          show = {this.props.displayPOIPanel}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    poiLocation: state.poiLocation,
    displayPOIPanel: !state.displayLayout.displayCatMenu
  }
}


export default connect(mapStateToProps, null)(POIContainer)
