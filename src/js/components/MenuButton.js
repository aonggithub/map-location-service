import React, {PropTypes, Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/Action/search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MenuButton extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {

    const divButtonStyle = {
      zIndex: '10',
      position: 'relative',
      bottom: '100px',
      left: '20px',
      width: '56px'
    }

    const buttonStyle = {
      // marginRight: 20
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
           <ActionSearch/>
         </FloatingActionButton>
       </MuiThemeProvider>
      </div>
    )
  }
}

MenuButton.propTypes = {
  buttonFunc: PropTypes.func
}

MenuButton.defaultProps = {

};

export default MenuButton
