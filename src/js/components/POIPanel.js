import React, {PropTypes, Component } from 'react';

class POIPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    let ratedStyle = {
      fontWeight:'normal',
      color: 'rgb(66, 127, 237)',
      fontFamily:'Roboto,Arial',
      fontSize:'13px'
    }
    let linkStyle = Object.assign({}, ratedStyle);
    linkStyle.color='#039BE5';

    //http://maps.google.com/?saddr={this.props.center.lat},{this.props.center.lng}&daddr={this.props.poiLocation.lat},{this.props.poiLocation.lng}
    let linktoGoogleMap = 'http://maps.google.com/?saddr='
    + this.props.center.lat + ','
    + this.props.center.lng + '&daddr='
    + this.props.poiLocation.lat + ',' + this.props.poiLocation.lng;

    return (
      <div>
        {this.props.show?
          <div style={{height: this.props.height}}>
            <div className='row'>
              <div className='col-xs-4 col-md-2'>
                  <img src="../img/photo-album-icon-png-14.png" height='100%'></img>
              </div>
              <div className='col-xs-8 col-md-6'>
                <div style={{fontFamily:'Roboto,Arial', fontSize:'14px', padding: '10px 0px'}}>
                  <span style={{fontWeight: 'bold'}}>{this.props.poiLocation.title}</span>
                </div>
                <div style={{padding: '5px 0px'}}>
                  <span style={ratedStyle}>
                  Rated: {this.props.poiLocation.rated}
                  </span>
                </div>
                <div style={{padding: '5px 0px'}}>
                  <span style={linkStyle}>
                    <a href={linktoGoogleMap}>View on Google Maps</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          :''}
      </div>
    )
  }
}

POIPanel.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  poiLocation: PropTypes.any,
  height: PropTypes.any,
  show: PropTypes.boolean
}

POIPanel.defaultProps = {
  center: {lat: 13.733313, lng: 100.566274},
  zoom: 15,
  poiLocation: 'Test'
};

export default POIPanel
