import React, { Component } from 'react';
import { Splash } from '~/components'
import { LoginManager} from 'react-native-fbsdk'

export default class SplashContainer extends Component {

  handleSignin = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    )
  }

  handleOnLoginFinished = (error, result) => {
    if (error) {
      console.warn('Error: ', error)
    } else if (result.isCancelled === true) {
      console.warn('User Cancelled Log in with Facebook')
    } else {
      console.warn('Login Success with facebook')
    }
  }

  render() {
    return (
    <Splash
    onLoginFinished = {this.handleOnLoginFinished}/>
    );
  }
}

