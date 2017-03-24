import React, {PropTypes, Component } from 'react';

class LoginGoogleButton extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentDidMount(){
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'onsuccess': this.props.callbackSignIn
    });
  }

  render() {
    return (
      <div>
        <div id="g-signin2"/>
      </div>
    )
  }
}

LoginGoogleButton.propTypes = {
  callbackSignIn: PropTypes.func,
}

export default LoginGoogleButton
