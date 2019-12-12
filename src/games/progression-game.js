import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const PROGRESSION_STEPS_COUNT = 10;
const gameRule = 'What number is missing in the progression?';

function getProgressionValues() {
  const randomNumberMinValue = 1;
  const firstNumberMaxValue = 11;
  const stepMaxNumber = 6;
  const firstNumber = getRandomNumber(randomNumberMinValue, firstNumberMaxValue);
  const stepSize = getRandomNumber(randomNumberMinValue, stepMaxNumber);
  const unknownNumberIndex = getRandomNumber(0, PROGRESSION_STEPS_COUNT);
  const allNumbers = [];
  let correctAnswer;
  
  for (let i = 0; i < PROGRESSION_STEPS_COUNT; i += 1) {
    const lastNumber = allNumbers[i - 1];
    const nextNumber = lastNumber + stepSize;
    
    if (i === unknownNumberIndex) {
      correctAnswer = nextNumber;
    }
    
    if (i === unknownNumberIndex && i === 0) {
      correctAnswer = firstNumber;
    }
    
    if (i === 0) {
      allNumbers.push(firstNumber);
    } else {
      allNumbers.push(nextNumber);
    }
  }
  
  return {
    correctAnswer,
    unknownNumberIndex,
    allNumbers,
  };
}

const round = () => {
  const {
    correctAnswer,
    unknownNumberIndex,
    allNumbers,
  } = getProgressionValues();
  
  const roundQuestion = allNumbers.reduce((acc, number, i) => {
    if (i === unknownNumberIndex) {
      return `${acc} ..`;
    }
    return `${acc} ${number}`;
  }, '');
  
  const answer = readLineSync.question(`Question: ${roundQuestion} `);
  
  return {
    success: +answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRule, round);
