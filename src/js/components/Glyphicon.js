import React, {PropTypes, Component } from 'react';

class Glyphicon extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <span className={'glyphicon glyphicon-'+ this.props.name} style={{fontSize: this.props.size}}>
        </span>
      </div>
    )
  }
}

Glyphicon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string
}

Glyphicon.defaultProps = {
  size: '10px'
};


export default Glyphicon
