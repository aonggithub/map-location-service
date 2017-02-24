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
      textAlign: 'left',
      margin: '10px 0px'
    }

    const rightCatBtnStyle = {
      cursor: 'pointer',
      float: 'right',
      textAlign: 'left',
      margin: '10px 0px'
    }

    const menuPanelStyle = {
      width:'95%',
      margin: '10px 10px',
      padding: '20px 0px',
      boxShadow: '1px 1px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#FFFFFF'
    }

    console.log("Menu Panel")
console.log(this.props.show);
    let categoryMenu = this.props.categories.map( (category, i) => {
      return <div onClick={() => {this.props.changeCategory('cat'+ category.id)}}
                style={ (i%2==0) ?leftCatBtnStyle:rightCatBtnStyle }
                className='col-xs-6 col-md-6'>
                <div className='row'>
                  <div className='col-xs-5 col-md-2'>
                    <div style={mapMenuStyle}><Glyphicon name={category.icon} size="20px"/></div>
                  </div>
                  <div className='col-xs-7 col-md-10' style={{verticalAlign:'middle',height:'50px', lineHeight: '50px'}}>
                    <span style={mapMenuFontStyle}>{category.name}</span>
                  </div>
                </div>
              </div>
          }, this);

    categoryMenu.push(<div style={{clear:'both'}}></div>);

    return (
      <div>
        {this.props.show?
          <div>
            <div style={{padding: '5px 0px', textAlign: 'center', backgroundColor: '#F0F0F0'}}>
              <div onClick={() => {this.props.getAllLocation()}}
                style={{color: '#606060'}}>
                <Glyphicon name="map-marker" size="18px"/>
              </div>
              <div style={menuPanelStyle}>
                <div className='row' style={{padding: '0px 0px 0px 10px'}}>
                  {categoryMenu}
                </div>
              </div>
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
