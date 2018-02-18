import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import WineCard from'./WineCardv2';
import Chatbot from './Chatbot';

import Map from './Map';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee'}}>
        <Route exact path="/" render={() => (
          <Redirect to="/chatbot"/>
        )}/>
        <Route exact path="/chatbot" component={Chatbot} />
        <Route exact path="/datasheet" component={WineCard} />
      </div>
      </Router>
    );
  }
}

export default App;

// <Chatbot />
