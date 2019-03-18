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

test('It should not allow letters to be inputted', () => {
  const {input} = setup()
  expect(input.value).toBe('')
  fireEvent.change(input, {target: {value: 'Good Day'}})
  expect(input.value).toBe('') 
})

test('It should render result after inputted number and clicked', () => {
  const { input, getByTestId } = setup()
  const result = getByTestId('convert-result')
  const buttonSubmit = getByTestId("convert-submit-button");
  fireEvent.change(input, {target: { value: '1'}})
  fireEvent.click(buttonSubmit)
  expect(result).toHaveTextContent("Your change is 1 1 dollar bill")
})
