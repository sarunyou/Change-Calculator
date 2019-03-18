import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  background-color: white;
  border: 1px solid lightblue;
  padding: 20px;
`
const Button = styled.button`
  padding: 20px;
  background-color: lightblue;
  border: none;
  color: white;
  font-family: 'Margarine';
`


export default class ConvertForm extends Component {
  static propTypes = {
    onClickSubmit: PropTypes.func.isRequired,
  }

  state = {
    value: ''
  }

  handleOnChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    const { value } = this.state
    const { onClickSubmit } = this.props
    return (
      <form>
      <Input 
        value={value}
        onChange={this.handleOnChange}
        type="number"
         aria-label="dollar-input"
      />
      <Button data-testid="convert-submit-button" onClick={onClickSubmit(value)}>
        Convert
      </Button>
      </form>

    )
  }
}
