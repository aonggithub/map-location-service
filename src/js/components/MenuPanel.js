import React, {PropTypes, Component } from 'react';
import Glyphicon from './Glyphicon';
import {mapMenuStyle} from '../style/MapMenu_styles'

class MenuPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const leftCatBtnStyle = {
      cursor: 'pointer',
      float: 'left'
    }

    const rightCatBtnStyle = {
      cursor: 'pointer',
      float: 'right'
    }

    return (
      <div>
        {this.props.show?
          <div>
            <div><Glyphicon name="map-marker" size="28px"/></div>
            <div onClick={() => {this.props.getAllLocation()}}
              style={leftCatBtnStyle}>
              ALL
            </div>
            <div style={{clear:'both'}}></div>
            <br/>
            <div onClick={() => {this.props.changeCategory('cat1')}} style={leftCatBtnStyle}>
              <div style={mapMenuStyle}><Glyphicon name="home" size="20px"/></div>
              Home
            </div>
            <div onClick={() => {this.props.changeCategory('cat2')}} style={rightCatBtnStyle}>
              <div style={mapMenuStyle}><Glyphicon name="glass" size="20px"/></div>
              Diner
            </div>
            <div style={{clear:'both'}}></div>
            <div onClick={() => {this.props.changeCategory('cat3')}} style={leftCatBtnStyle}>
              <div style={mapMenuStyle}><Glyphicon name="music" size="20px"/></div>
              Pub
            </div>
          </div>
          :''
        }
      </div>
    )
  }
}

MenuPanel.propTypes = {
  changeCategory: PropTypes.func,
  getAllLocation: PropTypes.func,
  category: PropTypes.any,
  show: PropTypes.boolean
}

MenuPanel.defaultProps = {

};

export default MenuPanel
