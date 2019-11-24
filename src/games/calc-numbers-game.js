import readLineSync from 'readline-sync';
import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';
import {
  MATH_OPERATION_ADDITION,
  MATH_OPERATION_DIVISION,
  MATH_OPERATION_MULTIPLICATION,
  MATH_OPERATION_SUBTRACTION,
} from '../utils/config';
import getCalcResult from '../utils/getCalcResult';

const round = () => {
  const operations = [
    MATH_OPERATION_ADDITION,
    MATH_OPERATION_SUBTRACTION,
    MATH_OPERATION_MULTIPLICATION,
    MATH_OPERATION_DIVISION,
  ];
  const leftNumber = getRandomNumber();
  const rightNumber = getRandomNumber();
  const operationIndex = getRandomNumber(0, 4);
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

export default () => createGame('What is the result of the expression?', round);
