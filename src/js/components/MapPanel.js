import React, {PropTypes, Component } from 'react';
import GoogleMap, {GoogleMapMarkers} from 'google-map-react';
import MapMaker from './MapMaker';
import GPSFixedButton from './GPSFixedButton';
import {Modal} from 'react-bootstrap';

class MapPanel extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {maps: null, map: null, pressTimer: null, showModal: false};
    this.setMapToState = this.setMapToState.bind(this);
    this.gotoCenter = this.gotoCenter.bind(this);
    this.closeLoginPopup = this.closeLoginPopup.bind(this);
  }

  closeLoginPopup(){
    this.setState({showModal:false});
  }

  setMapToState(map, maps){
    this.setState({
      maps: maps,
      map: map
    });
    // Map event
    this.state.map.addListener('mouseup', function(obj){
      console.log("map mouseup");
      console.log(obj);
      clearTimeout(this.state.pressTimer);
    }.bind(this));

    this.state.map.addListener('mousedown', function(obj){
      console.log("map mousedown");
      console.log(obj);
      this.state.pressTimer = window.setTimeout(function(){
        this.openOverlay();
      }.bind(this), 1000);
    }.bind(this));

    this.state.map.addListener('center_changed', function(obj){
      console.log("map center_changed");
      clearTimeout(this.state.pressTimer);
    }.bind(this));

  }

  openOverlay(){
    console.log("openOverlay");
    this.setState({showModal:true});
  }

  // componentDidUpdate(){
  //   console.log("componentDidUpdate");
  //   console.log(this.state);
  // }

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
            <Modal show={this.state.showModal}
              onHide={this.closeLoginPopup}
              backdropStyle={{zIndex: 12}}
              style={{marginTop:'70px'}}
              bsSize="sm"
              aria-labelledby="contained-modal-title-lg">
              <Modal.Header closeButton style={{textAlign:'center'}}>
                <Modal.Title>Add Location</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Add Location
              </Modal.Body>
            </Modal>
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
  show: PropTypes.boolean
}

MapPanel.defaultProps = {
  center: {lat: 13.675960412398283, lng: 100.66582988631592},
  zoom: 14,
  serviceLocations: [{id: 'A', lat: 13.733313, lng: 100.566274}],
  height: '100%'
};

export default MapPanel
