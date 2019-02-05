import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer';

class App extends Component {

    
  render() {
    // console.log(this.state.hogs)
    return (

      <div className="App">
     
          < Nav />
          <HogContainer />
    
      </div>
    )
  }
}

export default App;
