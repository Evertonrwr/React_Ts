
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };
 handleClick = () =>{
    fetch("/vamo",{
        method:"GET",
    }).then((response)=> response.text()).then((data)=>{
        console.log(data)

    })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type="button" onClick={this.handleClick}>Testar Conexão</button>

      </div>
    );
  }
}

export default App;