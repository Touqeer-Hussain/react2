import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = ({

      flag: true
    });
}


king(){
  this.setState({
    flag: !this.state.flag
  })
    
}
  render() {
    return (
      <div className="App">
        <h1>{this.state.flag ? "Hello World" : "Hello Pakistan"}</h1>
        <button onClick={() => this.king()}>Toggle</button>
      </div>
    );
  }
}

export default App;
