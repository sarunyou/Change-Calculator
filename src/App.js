import React, { Component } from 'react';
import ConvertForm from './components/ConvertForm'
import convert from './utils/convert'
import styled from 'styled-components'
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Margarine';
`
const Title = styled.p`
  color: gray;
  margin-top: 0;
  font-size: 24px;
`
const TextResult = styled.p`
`

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
      <Container >
        <Title>Change Calculator</Title>
        <ConvertForm 
          onClickSubmit={this.handleOnClickConvert}
        />
        <TextResult data-testid="convert-result">
        {result}
        </TextResult>
      </Container>
    );
  }
}

export default App;
