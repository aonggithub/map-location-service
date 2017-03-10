import React, {PropTypes, Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionGPSFixed from 'material-ui/svg-icons/device/gps-fixed'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class GPSFixedButton extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {

    let divButtonStyle = {
      zIndex: '10',
      position: 'relative',
      bottom: '200px',
      left: '20px',
      width: '56px',
      height: '0px'
    }

    const buttonStyle = {
      // marginRight: 20
      position: 'relative'
    };

    return (
      <div style={divButtonStyle}>
        <MuiThemeProvider>
          <FloatingActionButton style={buttonStyle}
            onClick={ e=> {
              e.preventDefault();
              this.props.buttonFunc();
            }}
            >
           <ActionGPSFixed/>
         </FloatingActionButton>
       </MuiThemeProvider>
      </div>
    )
  }
}

GPSFixedButton.propTypes = {
  buttonFunc: PropTypes.func
}

export default GPSFixedButton
