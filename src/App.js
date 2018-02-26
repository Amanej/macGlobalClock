import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from 'react-clock';

class App extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  render() {
    return (
      <div className="App">
        <p>My Clock</p>
        <div>
          <Clock value={this.state.date} size={200} />
        </div>
        <div>
          <input type="text" value={this.state.date} />
        </div>
      </div>
    );
  }
}

export default App;
