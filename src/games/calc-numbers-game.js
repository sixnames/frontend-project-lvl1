import readLineSync from 'readline-sync';
import createGame from './createGame';

const round = () => {
  return {
    success: true,
    answer: '',
    correctAnswer: '',
  };
};

export default () => createGame('What is the result of the expression?', round);
