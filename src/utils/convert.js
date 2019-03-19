import _ from 'lodash'
const rates = [
  {
    value: 100,
    label: '100 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 50,
    label: '50 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 20,
    label: '20 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 10,
    label: '10 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 5,
    label: '5 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 1,
    label: '1 dollar',
    pluralUnit: 'bills',
    singularUnit: 'bill'
  },
  {
    value: 0.25,
    label: '',
    pluralUnit: 'quarters',
    singularUnit: 'quarter'
  },
  {
    value: 0.1,
    label: '',
    pluralUnit: 'dimes',
    singularUnit: 'dime'
  },
  {
    value: 0.05,
    label: '',
    pluralUnit: 'nickels',
    singularUnit: 'nickel'
  },
  {
    value: 0.01,
    label: '',
    pluralUnit: 'pennies',
    singularUnit: 'penny'
  },
]
const getNewLabel = ({ result, rate , remain, label}) => {
  let tempLabel = _.clone(label)
  if (!tempLabel) {
    tempLabel ="Your change is"
  }
  if (remain === 0 && label) {
    tempLabel += ' and'
  }
  const value = `${result}${rate.label &&  ' ' + rate.label}`
  const unit = result > 1 ? rate.pluralUnit : rate.singularUnit
  const hasMore = `${remain > 0 ? ',' : ''}`
  return  `${tempLabel} ${value} ${unit}${hasMore}`
} 
const divideFloor = (a, b) => Math.floor(a / b)
const minusFixed = (a, b, fixedNumber = 2) => Number((a - b).toFixed(fixedNumber)) 

const convert = (number) => {
  if (!_.isNumber(number)) return "Expected Input is number"
  if (number <= 0) return "Your change is 0 bill"
  
  let remain = _.clone(number)
  return rates.reduce((acc, rate) => {
    const result = divideFloor(remain, rate.value)
    if (result > 0) {
      const minusNumber =  result * rate.value
      remain = minusFixed(remain, minusNumber)
      return getNewLabel({ result, rate,  remain, label: acc}) 
    }
    return acc
  }, '')
} 
export default convert
