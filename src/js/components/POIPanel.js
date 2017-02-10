import React, {PropTypes, Component } from 'react';

class POIPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.show?
          <div style={{height: this.props.height}}>
            <div style={{float: 'left', width: '30%'}}>
                <img src="../img/photo-album-icon-png-14.png" height='100%'></img>
            </div>
            <div style={{float: 'left', paddingTop: '10px'}}>
              <span style={{fontWeight: 'bold'}}>
                {this.props.poiLocation.title}
              </span>
              <br></br>
              {this.props.poiLocation.rated}
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
