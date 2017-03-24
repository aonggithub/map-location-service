import React, {PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Modal, Col, Row, Grid} from 'react-bootstrap';
import LoginGoogleButton from './LoginGoogleButton';
import IconButton from 'material-ui/IconButton';
import CloseNavigation from 'material-ui/svg-icons/navigation/close';
import MenuNavigation from 'material-ui/svg-icons/navigation/menu';

class AppBarMap extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {showModal: false, isLoggedin: false, signinImageURL: ''};
    this.showLoginPopup = this.showLoginPopup.bind(this);
    this.closeLoginPopup = this.closeLoginPopup.bind(this);
    this.setLoginState = this.setLoginState.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount(){
    let isSignedInWithGoogle = localStorage.getItem("isSignedInWithGoogle");
    if(isSignedInWithGoogle == 'true'){
      this.setState({isLoggedin:true});

      // If current state is still signed in, display google button in popup
      // To initial gapi.auth2 object. This object is used for sign out function
      this.showLoginPopup();
    }else{
      this.setState({isLoggedin:false});
    }
  }

  onSignIn(googleUser) {
    console.log("onSignIn");
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    // Close dialog and change state
    this.closeLoginPopup();
    this.setState({signinImageURL:googleUser.getBasicProfile().getImageUrl()});
    this.setLoginState(true);

    // Set signedin with google flag
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("isSignedInWithGoogle", "true");
    } else {
      console.log("Sorry! No Web Storage support");
    }
  }

  showLoginPopup(){
    this.setState({showModal:true});
  }

  closeLoginPopup(){
    this.setState({showModal:false});
  }

  setLoginState(isLoggedin){
    this.setState({isLoggedin:isLoggedin});
  }

  render() {
    const loginFlatButton = <FlatButton label="Log in"
                              style={{'color': 'rgb(217, 217, 217)'}}
                              onClick={ e=> {
                                e.preventDefault();
                                this.showLoginPopup();
                              }}/>

    const signOutButton = <FlatButton label="Sign out"
                              style={{'color': 'rgb(217, 217, 217)'}}
                              onClick={ e=> {
                                e.preventDefault();
                                signOut();
                                this.setLoginState(false);
                              }}/>

    const loggedInComponents = <List>
                                <ListItem
                                  leftAvatar={this.state.signinImageURL != ''
                                    ? <Avatar>A</Avatar>
                                    : <Avatar src={this.state.signinImageURL} />}>
                                </ListItem>
                              </List>

    let signOut = function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        localStorage.removeItem("isSignedInWithGoogle");
      });
    }

    let showGoogleInfo = function(){
      var auth2 = gapi.auth2.getAuthInstance();
      if(auth2.isSignedIn.get()){
         var profile = auth2.currentUser.get().getBasicProfile();
         console.log('ID: ' + profile.getId());
         console.log('Full Name: ' + profile.getName());
         console.log('Given Name: ' + profile.getGivenName());
         console.log('Family Name: ' + profile.getFamilyName());
         console.log('Image URL: ' + profile.getImageUrl());
         console.log('Email: ' + profile.getEmail());
       }
    }

    return (
      <div>
        <MuiThemeProvider>
          <AppBar
             title={<span style={{fontSize: '20px'}}>Location Map</span>}
             iconElementLeft={this.state.isLoggedin
               ?<IconButton><MenuNavigation/></IconButton>
               :<IconButton><CloseNavigation/></IconButton>}
             iconElementRight={this.state.isLoggedin ? signOutButton : loginFlatButton}
             style={{backgroundColor: 'rgb(30, 136, 229)'}}
          ></AppBar>
        </MuiThemeProvider>
        <Modal show={this.state.showModal}
          onHide={this.closeLoginPopup}
          backdropStyle={{zIndex: 12, opacity: this.state.isLoggedin? 0: 0.5}}
          style={{marginTop:'70px', display: this.state.isLoggedin?'none': 'block'}}
          bsSize="sm"
          aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton style={{textAlign:'center'}}>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginGoogleButton callbackSignIn={this.onSignIn} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

AppBarMap.propTypes = {
}

AppBarMap.defaultProps = {

};

export default AppBarMap
