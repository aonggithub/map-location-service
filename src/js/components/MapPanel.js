import React, {PropTypes, Component } from 'react';
import GoogleMap, {GoogleMapMarkers} from 'google-map-react';
import MapMaker from './MapMaker';
import GPSFixedButton from './GPSFixedButton';

class MapPanel extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {maps: null, map: null};
    this.setMapToState = this.setMapToState.bind(this);
    this.gotoCenter = this.gotoCenter.bind(this);
  }

  setMapToState(map, maps){
    this.setState({
      maps: maps,
      map: map
    });
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
