import {
  MATH_OPERATION_ADDITION,
  MATH_OPERATION_DIVISION,
  MATH_OPERATION_MULTIPLICATION,
  MATH_OPERATION_SUBTRACTION,
} from './config';

function getCalcResult({ operation = '', leftNumber = 1, rightNumber = 1 }) {
  if (operation === MATH_OPERATION_ADDITION) {
    return leftNumber + rightNumber;
  }
  if (operation === MATH_OPERATION_SUBTRACTION) {
    return leftNumber - rightNumber;
  }
  if (operation === MATH_OPERATION_MULTIPLICATION) {
    return leftNumber * rightNumber;
  }
  if (operation === MATH_OPERATION_DIVISION) {
    return leftNumber / rightNumber;
  }
  return 0;
}

export default getCalcResult;
