import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WineCard from'./WineCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chatbot from './Chatbot';

import Map from './Map';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
	    <div className="App">
        <WineCard />
        <Chatbot />
	    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
