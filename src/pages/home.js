import React, {Component} from 'react';

import Header from '../components/header';

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }

  export default Home;