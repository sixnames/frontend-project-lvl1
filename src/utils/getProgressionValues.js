import getRandomNumber from './getRandomNumber';
import { PROGRESSION_STEPS_COUNT } from './config';

function getProgressionValues() {
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
  
  return {
    correctAnswer,
    unknownNumberIndex,
    allNumbers,
  };
}

export default getProgressionValues;