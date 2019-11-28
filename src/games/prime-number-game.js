import createGame from '../utils/createGame';
import getRandomNumber from '../utils/getRandomNumber';
import isPrime from '../utils/isPrime';

const gameRules = 'Answer "yes" if the number is prime, otherwise answer "no".';

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
