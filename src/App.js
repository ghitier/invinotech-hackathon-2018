import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chatbot from './Chatbot';

import Map from './Map';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
	    <div className="App">
	    <Header />
	    <Chatbot />
	    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
