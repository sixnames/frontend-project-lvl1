import createGame from '../utils/createGame';
import getProgressionValues from '../utils/getProgressionValues';

const round = ({ askQuestion }) => {
  const {
    correctAnswer,
    unknownNumberIndex,
    allNumbers,
  } = getProgressionValues();
  
  const allNumbersString = allNumbers.reduce((acc, number, i) => {
    if (i === unknownNumberIndex) {
      return `${acc} ..`;
    }
    return `${acc} ${number}`;
  }, '');
  
  const answer = askQuestion(allNumbersString);
  
  return {
    success: +answer === correctAnswer,
    answer,
    correctAnswer,
  };
};

export default () => createGame('What number is missing in the progression?', round);
