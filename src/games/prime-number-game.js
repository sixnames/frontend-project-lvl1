import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

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

export default () => createGame(gameRule, round);
