import React, {Component} from 'react';

import Header from '../components/header';
import RegForm from '../components/regform.js';

class Register extends Component {
  render() {
    return (
      <div className="register">
        <Header />
        <h1>Register</h1>
        <RegForm />
      </div>
    );
  }
}

  export default Register;