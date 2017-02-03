import React, {PropTypes, Component } from 'react';
import {mapMakerStyle, mapMakerStyleHover} from './MapMaker_styles'

class MapMaker extends Component {

  constructor (props, context) {
    super(props, context);
  }

  render() {
    const style = this.props.$hover ? mapMakerStyle : mapMakerStyleHover;
    return (
       <div style={style}
            onClick={() => {this.props.poiOnClick(this.props) }}>
          <span className="glyphicon glyphicon-home"></span>
       </div>
    );
  }
}

MapMaker.propTypes = {
  text: PropTypes.string,
  poiOnClick: PropTypes.func,
  title: PropTypes.string,
  rated: PropTypes.number
}

MapMaker.defaultProps = {
}

export default MapMaker
