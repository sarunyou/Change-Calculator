import React, { Component } from 'react';
import './App.css';
import ConvertForm from './components/ConvertForm'
import convert from './utils/convert'

class App extends Component {
  state = {
    result: ''
  }

  handleOnClickConvert = (value) => (e) => {
    e.preventDefault()
    const result = convert(Number(value))
    this.setState({result})
  }

  render() {
    const { result } = this.state
    return (
      <div className="App">
        <ConvertForm 
          onClickSubmit={this.handleOnClickConvert}
        />
        <span data-testid="convert-result">
        {result}
        </span>
      </div>
    );
  }
}

export default App;
