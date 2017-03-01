import React, {PropTypes, Component } from 'react';
import GoogleMap, {GoogleMapMarkers} from 'google-map-react';
import MapMaker from './MapMaker';
import MenuButton from './MenuButton';
import MenuPanel from './MenuPanel';

class MapPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    let servicePlaces = this.props.serviceLocations.map( place => {
      // const {id, ...coords} = place;
      // return ({key:id, ...coords});
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

    let customizedMapAPILoaded = function(map, maps){
      maps.event.addListener(map, 'center_changed', function(event){
        console.log("center_changed change");
      });
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
              onClick={()=>{
                this.props.displayPOIPanel(false);
              }}
              onZoomAnimationStart ={(obj) => { console.log("onZoomAnimationStart") }}
              bootstrapURLKeys={{key: this.props.apiKeyParam}}
              onGoogleApiLoaded={({map, maps}) => customizedMapAPILoaded(map, maps)}
              yesIWantToUseGoogleMapApiInternals={true}
              >
              {servicePlaces}
            </GoogleMap>
            <MenuPanel
              changeCategory={this.props.changeCategory}
              show={this.props.center!=null}
              categories={this.props.categories}
              displayPOIPanel = {this.props.displayPOIPanel}
              />
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
  changeCategory: PropTypes.func,
  categories: PropTypes.any
}

MapPanel.defaultProps = {
  center: {lat: 13.675960412398283, lng: 100.66582988631592},
  zoom: 14,
  serviceLocations: [{id: 'A', lat: 13.733313, lng: 100.566274}],
  height: '100%'
};

export default MapPanel
