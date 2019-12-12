import readLineSync from 'readline-sync';
import createGame from '../index';
import getRandomNumber from '../utils/getRandomNumber';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const round = () => {
  const roundQuestion = getRandomNumber();
  const answer = readLineSync.question(`Question: ${roundQuestion} `);
  const isEvenNumber = isEven(roundQuestion);
  const correctAnswer = isEvenNumber ? 'yes' : 'no';
  return {
    success: correctAnswer === answer,
    answer,
    correctAnswer,
  };
};

export default () => createGame(gameRule, round);
