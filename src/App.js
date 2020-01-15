import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Alon', age: 25, id: 1},
      {name: 'Ziner', age: 26, id: 2},
      {name: 'Crema', age: 27, id: 3}
    ]
  }
  
  render(){
    return (
      <div className="App">
        <h1>HI</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
