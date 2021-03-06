import React, {PropTypes, Component } from 'react';
import {mapMakerStyle, mapMakerStyleHover} from '../style/MapMaker_styles'
import Glyphicon from './Glyphicon';

class MapMaker extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render() {
    let makerStyle = {};
    makerStyle.style = this.props.$hover ? mapMakerStyle : mapMakerStyleHover;
    makerStyle.categoryIcon = "home";
    makerStyle.img = "";

    this.setStyleByCategory(this.props.category, makerStyle);

    // if(this.props.category == "0"){
    //   makerStyle.img = "https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Location_Detailed-3-512.png"
    // }

    return (
       <div style={makerStyle.style}
            onClick={() => {
              this.props.poiOnClick(this.props);
              this.props.displayPOIPanel(true);
            }}>
          <Glyphicon name={makerStyle.categoryIcon} size={this.props.category=='0'?'35px':''}/>
          { makerStyle.img ? <img src={makerStyle.img} style={{width: '50px'}}/> : ''}
       </div>
    );
  }

  setStyleByCategory(category, makerStyle) {
    if(category == "0"){
      // If category is 0, that means current location
      makerStyle.style = {};
      makerStyle.style.color = '#1164ec';
      makerStyle.categoryIcon = "map-marker"
    } else if (category == "cat1") {
      makerStyle.style.backgroundColor = '#1164ec';
      makerStyle.style.border = '2px solid #1164ec';
    } else if (category == "cat2") {
      makerStyle.style.backgroundColor = '#DC143C';
      makerStyle.style.border = '2px solid #DC143C'
      makerStyle.categoryIcon = "glass";
    } else if (category == "cat3") {
      makerStyle.style.backgroundColor = '#1AAC5B';
      makerStyle.style.border = '2px solid #1AAC5B'
      makerStyle.categoryIcon = "music";
    }
  }
}

MapMaker.propTypes = {
  text: PropTypes.string,
  poiOnClick: PropTypes.func,
  title: PropTypes.string,
  rated: PropTypes.number,
  category: PropTypes.string,
  displayPOIPanel: PropTypes.func
}

MapMaker.defaultProps = {
}

export default MapMaker
