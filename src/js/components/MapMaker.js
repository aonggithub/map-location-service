import React, {PropTypes, Component } from 'react';
import {mapMakerStyle, mapMakerStyleHover} from './MapMaker_styles'

class MapMaker extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render() {
    const style = this.props.$hover ? mapMakerStyle : mapMakerStyleHover;
    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}

MapMaker.propTypes = {
  text: PropTypes.string
}

MapMaker.defaultProps = {
}

export default MapMaker
