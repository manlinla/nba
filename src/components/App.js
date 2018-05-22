import React, { Component } from 'react';
import {TopNavBar} from "./TopNavBar"
import {Main} from "./Main"

class App extends Component {
  render() {
    return (
      <div className="App"> /* App corresponding to .App at App.css, not the file name */
          <TopNavBar/>
          <Main/>
      </div>
    );
  }
}

export default App;
