import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AuthService from "./AuthService";

function withAuth(AuthComponent) {
  const Auth = new AuthService("http://localhost:3000");
  return class AuthWrapped extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      };
    }
    componentWillMount() {
        
      if (!Auth.loggedIn()) {
        window.location.replace("/app/signin");
      } else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile
          });

          this.props.history.replace("/app/home");
        } catch (err) {
          Auth.logout();
          //this.props.history.replace("/app/signin");
          window.location.replace("/app/signin");
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        );
      } else {
        return null;
      }
    }
  };
}

export default withRouter(withAuth);
