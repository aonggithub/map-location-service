import React, {PropTypes, Component } from 'react';
import {mapMakerStyle, mapMakerStyleHover} from './MapMaker_styles'

class MapMaker extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render() {
    let style = this.props.$hover ? mapMakerStyle : mapMakerStyleHover;
    let categoryIcon = "glyphicon glyphicon-home";
    let img = "";
    if(this.props.category == "0"){
      // If category is 0, that means current location
      style = {};
      categoryIcon = ""
      img = "https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Location_Detailed-3-512.png"
      //categoryIcon = "glyphicon glyphicon-map-marker";
    }
    return (
       <div style={style}
            onClick={() => {this.props.poiOnClick(this.props) }}>
          <span className={categoryIcon}></span>
          { img ? <img src={img} style={{width: '50px'}}/> : ''}
       </div>
    );
  }
}

MapMaker.propTypes = {
  text: PropTypes.string,
  poiOnClick: PropTypes.func,
  title: PropTypes.string,
  rated: PropTypes.number,
  category: PropTypes.string
}

MapMaker.defaultProps = {
}

export default MapMaker
