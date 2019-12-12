import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';
import {
  MATH_OPERATION_ADDITION,
  MATH_OPERATION_DIVISION,
  MATH_OPERATION_MULTIPLICATION,
  MATH_OPERATION_SUBTRACTION,
} from '../utils/config';

const gameRule = 'What is the result of the expression?';

function getCalcResult({ operation = '', leftNumber = 1, rightNumber = 1 }) {
  if (operation === MATH_OPERATION_SUBTRACTION) {
    return leftNumber - rightNumber;
  }
  if (operation === MATH_OPERATION_MULTIPLICATION) {
    return leftNumber * rightNumber;
  }
  if (operation === MATH_OPERATION_DIVISION) {
    return leftNumber / rightNumber;
  }
  return leftNumber + rightNumber;
}

const round = () => {
  const operations = [
    MATH_OPERATION_ADDITION,
    MATH_OPERATION_SUBTRACTION,
    MATH_OPERATION_MULTIPLICATION,
    MATH_OPERATION_DIVISION,
  ];
  const leftNumber = getRandomNumber();
  const rightNumber = getRandomNumber();
  const operationIndex = getRandomNumber(0, operations.length);
  const currentOperation = operations[operationIndex];
  const answer = readLineSync.question(`Question: ${leftNumber} ${currentOperation} ${rightNumber} `);
  
  const correctAnswer = getCalcResult({
    operation: currentOperation,
    leftNumber,
    rightNumber,
  });
  
  return {
    success: +answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRule, round);
