import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/App.css';
import './styles/main.css';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3002/graphql' }),
  cache: new InMemoryCache()
});

class example extends Component {
  render() {
    return (
      <ApolloProvider client="client">
        <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}
export default example;