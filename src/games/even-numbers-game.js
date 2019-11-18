import readLineSync from 'readline-sync';
import createGame from './createGame';

const round = () => {
  const number = Math.floor(Math.random() * 10);
  const isEven = number % 2 === 0 && number !== 0;
  const answer = readLineSync.question(`Question: ${number} `);
  const correctAnswer = isEven ? 'yes' : 'no';
  return {
    success: (isEven && answer === 'yes') || (!isEven && answer === 'no'),
    answer,
    correctAnswer,
  };
};

export default () => createGame('Answer "yes" if the number is even, otherwise answer "no".', round);
