import createGame from '../utils/createGame';
import isEven from '../utils/isEven';
import getRandomNumber from '../utils/getRandomNumber';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const round = ({ askQuestion }) => {
  const number = getRandomNumber();
  const answer = askQuestion(number);
  const isEvenNumber = isEven(number);
  const correctAnswer = isEvenNumber ? 'yes' : 'no';
  return {
    success: correctAnswer === answer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRules, round);
