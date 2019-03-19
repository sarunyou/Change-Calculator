
import cases from 'jest-in-case';
import convert from '../utils/convert.js'
cases('convert', opts => {
  expect(convert(opts.number)).toBe(opts.expected);
}, [
  { name: 'fill string', number: 'hi', expected: 'Expected Input is number'},
  { name: 'fill null', number: null, expected: 'Expected Input is number'},
  { name: '0 dollar', number: 0, expected: 'Your change is 0 bill'},
  { name: '-1 dollar', number: -1, expected: 'Your change is 0 bill'},
  { name: '1.00 dollar', number: 1.00, expected: 'Your change is 1 1 dollar bill' },
  { name: '5.00 dollars', number: 5, expected: 'Your change is 1 5 dollar bill' },
  { name: '15.00 dollars', number: 15, expected: 'Your change is 1 10 dollar bill, and 1 5 dollar bill' },
  { name: '.99 dollar', number: .99, expected: 'Your change is 3 quarters, 2 dimes, and 4 pennies' },
  { name: '124.67 dollars', number: 124.67, expected: 'Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies' },
]);