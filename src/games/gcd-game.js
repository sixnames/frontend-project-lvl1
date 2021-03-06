import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const gameRule = 'Find the greatest common divisor of given numbers.';

const round = () => {
  const leftNumber = getRandomNumber();
  const rightNumber = getRandomNumber();
  const answer = readLineSync.question(`Question: ${leftNumber} ${rightNumber} `);
  
  function getCorrectAnswer(a, b) {
    if (b === 0) {
      return a;
    }
    return getCorrectAnswer(b, a % b);
  }
  
  const correctAnswer = getCorrectAnswer(leftNumber, rightNumber);
  
  return {
    success: +answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRule, round);
