import React from 'react';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null}

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GAPI_KEY_LOCAL,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        console.log(this.auth);
        console.log(this.auth.isSignedIn.get());
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        console.log(this.state.isSignedIn);
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in! </div>
    } else {
      return <div>I am not signed in!</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;