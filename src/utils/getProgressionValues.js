import getRandomNumber from './getRandomNumber';
import { PROGRESSION_STEPS_COUNT } from './config';

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

export default getProgressionValues;
