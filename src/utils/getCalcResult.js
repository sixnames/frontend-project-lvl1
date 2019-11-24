import {
  NUMBERS_OPERATION_ADDITION,
  NUMBERS_OPERATION_DIVISION,
  NUMBERS_OPERATION_MULTIPLICATION,
  NUMBERS_OPERATION_SUBTRACTION,
} from './config';

function getCalcResult({ operation = '', leftNumber = 1, rightNumber = 1 }) {
  if (operation === NUMBERS_OPERATION_ADDITION) {
    return leftNumber + rightNumber;
  }
  if (operation === NUMBERS_OPERATION_SUBTRACTION) {
    return leftNumber - rightNumber;
  }
  if (operation === NUMBERS_OPERATION_MULTIPLICATION) {
    return leftNumber * rightNumber;
  }
  if (operation === NUMBERS_OPERATION_DIVISION) {
    return leftNumber / rightNumber;
  }
  return 0;
}

export default getCalcResult;
