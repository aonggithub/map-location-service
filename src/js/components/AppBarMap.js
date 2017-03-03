import React, {PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppBarMap extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
           title="Location Map"
           iconClassNameRight="muidocs-icon-navigation-expand-more"
           style={{backgroundColor: 'rgb(30, 136, 229)', fontSize:'18px'}}
         />
        </MuiThemeProvider>
      </div>
    )
  }
}

AppBarMap.propTypes = {

}

AppBarMap.defaultProps = {

};

export default AppBarMap
