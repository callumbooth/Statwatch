import React, {Component} from 'react';

import Header from '../components/header';
import LoginForm from '../components/loginform.js';

class Login extends Component {
    render() {
      return (
        <div className="Login">
          <Header />
          <h1>Login</h1>
          <LoginForm />
        </div>
      );
    }
  }

  export default Login;