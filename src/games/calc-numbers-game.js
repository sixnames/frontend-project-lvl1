import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const MATH_OPERATION_ADDITION = '+';
const MATH_OPERATION_SUBTRACTION = '-';
const MATH_OPERATION_MULTIPLICATION = '*';
const MATH_OPERATION_DIVISION = '/';
const gameRule = 'What is the result of the expression?';

function getCalcResult({ operation = '', leftNumber = 1, rightNumber = 1 }) {
  switch (operation) {
    case MATH_OPERATION_SUBTRACTION:
      return leftNumber - rightNumber;
    
    case MATH_OPERATION_MULTIPLICATION:
      return leftNumber * rightNumber;
    
    case MATH_OPERATION_DIVISION:
      return leftNumber / rightNumber;
    
    default:
      return leftNumber + rightNumber;
  }
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
