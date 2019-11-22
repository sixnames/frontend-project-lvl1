import readLineSync from 'readline-sync';
import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';

const round = () => {
  const number = getRandomNumber();
  const answer = readLineSync.question(`Question: ${number} `);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return {
    success: (isEven && answer === 'yes') || (!isEven && answer === 'no'),
    answer,
    correctAnswer,
  };
};

export default () => createGame('Answer "yes" if the number is even, otherwise answer "no".', round);
