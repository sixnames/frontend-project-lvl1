import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const round = ({ askQuestion }) => {
  const roundQuestion = getRandomNumber();
  const answer = askQuestion(roundQuestion);
  const isEvenNumber = isEven(roundQuestion);
  const correctAnswer = isEvenNumber ? 'yes' : 'no';
  return {
    success: correctAnswer === answer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRules, round);
