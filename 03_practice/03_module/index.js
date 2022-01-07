import { sum, pow } from './modules.js'

console.log(
sum(2, 3)
,pow(3, 4)
)

const andrea = {
  name: 'andrea',
  age: 31,
  job: 'fe developer'
}

import omit from 'lodash.omit'

console.log(
  omit(andrea, ['age'])
)