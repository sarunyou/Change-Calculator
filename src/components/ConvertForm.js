import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <input 
        value={value}
        onChange={this.handleOnChange}
        type="number"
         aria-label="dollar-input"
      />
      <button data-testid="convert-submit-button" onClick={onClickSubmit(value)}>
        Convert
      </button>
      </form>

    )
  }
}
