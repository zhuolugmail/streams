import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.auth = null;
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "207468999385-2g10l138e958tlpqqf1igjtah2vct9md.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  signInTry = () => {
    if (this.auth) this.auth.signIn();
  };

  signOutTry = () => {
    if (this.auth) this.auth.signOut();
  };

  onAuthChange = () => {
    this.auth.isSignedIn.get()
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui google button red" onClick={this.signOutTry}>
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui google button red" onClick={this.signInTry}>
          <i className="google icon"></i>Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
