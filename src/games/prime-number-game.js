import readLineSync from 'readline-sync';
import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';
import isPrime from '../utils/isPrime';

const round = () => {
  const number = getRandomNumber();
  const answer = readLineSync.question(`Question: ${number} `);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return {
    success: answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame('Answer "yes" if the number is prime, otherwise answer "no".', round);
