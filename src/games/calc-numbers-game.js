import readLineSync from 'readline-sync';
import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';
import {
  NUMBERS_OPERATION_ADDITION,
  NUMBERS_OPERATION_DIVISION,
  NUMBERS_OPERATION_MULTIPLICATION,
  NUMBERS_OPERATION_SUBTRACTION,
} from '../utils/config';
import getCalcResult from '../utils/getCalcResult';

const round = () => {
  const operations = [
    NUMBERS_OPERATION_ADDITION,
    NUMBERS_OPERATION_SUBTRACTION,
    NUMBERS_OPERATION_MULTIPLICATION,
    NUMBERS_OPERATION_DIVISION,
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
