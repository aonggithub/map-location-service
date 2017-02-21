import React, {PropTypes, Component } from 'react';
import Glyphicon from './Glyphicon';
import {mapMenuStyle, mapMenuFontStyle} from '../style/MapMenu_styles'

class MenuPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const leftCatBtnStyle = {
      cursor: 'pointer',
      float: 'left',
      textAlign: 'center'
    }

    const rightCatBtnStyle = {
      cursor: 'pointer',
      float: 'right'
    }

    let categoryMenu = this.props.categories.map( category => {
      return <div onClick={() => {this.props.changeCategory('cat'+ category.id)}} style={leftCatBtnStyle}>
                <div style={mapMenuStyle}><Glyphicon name={category.icon} size="20px"/></div>
                <span style={mapMenuFontStyle}>{category.name}</span>
              </div>
          }, this);

    return (
      <div>
        {this.props.show?
          <div>
            <div onClick={() => {this.props.getAllLocation()}}
              style={{padding: '10px 0px', textAlign: 'center'}}>
              <Glyphicon name="map-marker" size="18px"/>
            </div>
            <div style={{width:'200px'}}>
              {categoryMenu}
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
  categories: PropTypes.any,
  show: PropTypes.boolean
}

MenuPanel.defaultProps = {

};

export default MenuPanel
