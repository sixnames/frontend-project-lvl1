import readLineSync from 'readline-sync';
import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';
import { PROGRESSION_STEPS_COUNT } from '../utils/config';

const round = () => {
  const firstNumber = getRandomNumber(1, 11);
  const stepSize = getRandomNumber(1, 6);
  const unknownNumberIndex = getRandomNumber(0, PROGRESSION_STEPS_COUNT);
  const allNumbers = [];
  let correctAnswer;
  
  for (let i = 0; i < PROGRESSION_STEPS_COUNT; i += 1) {
    const lastNumber = allNumbers[i - 1];
    const nextNumber = lastNumber + stepSize;
    
    if (i === unknownNumberIndex) {
      correctAnswer = nextNumber;
    }
    
    if (i === 0) {
      if (i === unknownNumberIndex) {
        correctAnswer = firstNumber;
      }
      
      allNumbers.push(firstNumber);
    } else {
      allNumbers.push(nextNumber);
    }
  }
  
  const allNumbersString = allNumbers.reduce((acc, number, i) => {
    if (i === unknownNumberIndex) {
      return `${acc} ..`;
    }
    return `${acc} ${number}`;
  }, '');
  
  const answer = readLineSync.question(`Question:${allNumbersString} `);
  
  return {
    success: +answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame('What number is missing in the progression?', round);
