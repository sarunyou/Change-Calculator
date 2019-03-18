import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../App'
afterEach(cleanup)

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByLabelText('dollar-input')
  return {
    input,
    ...utils
  }
}


test('It should render form', () => {
  const { input } = setup()
  expect(input).toBeDefined()
})

test('It should render result', () => {
  const { input, getByTestId } = setup()
  const result = getByTestId('convert-result')
  const buttonSubmit = getByTestId("convert-submit-button");
  fireEvent.change(input, {target: { value: '1'}})
  fireEvent.click(buttonSubmit)
  expect(result).toHaveTextContent("Your change is 1 1 dollar bill")
})
