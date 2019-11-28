import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';

const gameRules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const round = ({ askQuestion }) => {
  const number = getRandomNumber();
  const answer = askQuestion(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return {
    success: answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRules, round);
