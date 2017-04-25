import React, {PropTypes, Component } from 'react';
import GoogleMap, {GoogleMapMarkers} from 'google-map-react';
import MapMaker from './MapMaker';
import GPSFixedButton from './GPSFixedButton';
import AddLocationOverlay from './AddLocationOverlay';
import {Modal, Col, Row, Grid} from 'react-bootstrap';

class MapPanel extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {maps: null,
                  map: null,
                  pressTimer: null,
                  showModal: false,
                  selectedLocation_lat: null,
                  selectedLocation_lng: null};
    this.setMapToState = this.setMapToState.bind(this);
    this.gotoCenter = this.gotoCenter.bind(this);
    this.closeAddLocationOverlay = this.closeAddLocationOverlay.bind(this);
  }

  closeAddLocationOverlay(){
    this.setState({showModal:false});
  }

  setMapToState(map, maps){
    this.setState({
      maps: maps,
      map: map
    });
    // Map event
    this.state.map.addListener('mouseup', function(obj){
      clearTimeout(this.state.pressTimer);
    }.bind(this));

    this.state.map.addListener('mousedown', function(obj){

      if(localStorage.getItem("googleIdToken") != null){
        this.state.pressTimer = window.setTimeout(function(){
          this.setState({selectedLocation_lat:obj.latLng.lat()});
          this.setState({selectedLocation_lng:obj.latLng.lng()});
          this.openOverlay();
        }.bind(this), 1000);
      }
    }.bind(this));

    this.state.map.addListener('center_changed', function(obj){
      clearTimeout(this.state.pressTimer);
    }.bind(this));
  }

  openOverlay(){
    this.setState({showModal:true});
  }

  gotoCenter(){
    this.state.map.panTo(this.props.center);
  }

  render() {
    let servicePlaces = this.props.serviceLocations.map( place => {
      return <MapMaker text={place.name}
                      lat={place.lat}
                      lng={place.lng}
                      title= {place.title}
                      rated= {place.rated}
                      poiOnClick={this.props.poiOnClick}
                      category={place.category}
                      displayPOIPanel={this.props.displayPOIPanel}
                      />
                  }, this);

    if(this.props.center != null){
      let currentLocation = <MapMaker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            title= "currentLocation"
            rated= "0"
            category= "0"
            />
      servicePlaces.push(currentLocation);
    }


    let createMapOptions= function (maps) {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      }
    }

    function refreshPage(e) {
      e.preventDefault();
      location.reload();
    }

    return (
      <div style={{height : this.props.height}}>
        {this.props.show?
          <div>
            <GoogleMap
              center={this.props.center}
              defaultZoom={this.props.zoom}
              onClick={(obj)=>{
                this.props.displayPOIPanel(false);
                console.log(obj);
              }}
              onZoomAnimationStart ={(obj) => { console.log("onZoomAnimationStart") }}
              bootstrapURLKeys={{key: this.props.apiKeyParam}}
              onGoogleApiLoaded={({map, maps}) => {
                  this.setMapToState(map, maps);
                  }}
              yesIWantToUseGoogleMapApiInternals={true}
              >
              {servicePlaces}
            </GoogleMap>
            <GPSFixedButton buttonFunc={this.gotoCenter}/>
            <AddLocationOverlay
              show={this.state.showModal}
              categories={this.props.categories}
              closeOverlayCallback={this.closeAddLocationOverlay}
              lat={this.state.selectedLocation_lat}
              lng={this.state.selectedLocation_lng}/>
          </div>
        :
        <div>
          <div style={{textAlign: 'center'}}>
            <div style={{margin: '20px'}}>
              Your GPS seems to be disabled. Check your GPS or try again
            </div>
            <button type="button" className="btn btn-default"
              onClick={ refreshPage }>TRY AGAIN
            </button>
          </div>
        </div>
        }
      </div>
    )
  }
}

MapPanel.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  serviceLocations: PropTypes.any,
  apiKeyParam: PropTypes.string,
  height: PropTypes.any,
  poiOnClick: PropTypes.func,
  displayPOIPanel: PropTypes.func,
  show: PropTypes.boolean,
  categories: PropTypes.any
}

MapPanel.defaultProps = {
  center: {lat: 13.675960412398283, lng: 100.66582988631592},
  zoom: 14,
  serviceLocations: [{id: 'A', lat: 13.733313, lng: 100.566274}],
  height: '100%'
};

export default MapPanel
