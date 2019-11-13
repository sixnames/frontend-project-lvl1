import readLineSync from 'readline-sync';
import userName from '.';

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

export default () => {
  const stepsCount = 3;
  let isSuccess = false;
  console.log('Welcome to the Brain Games! \nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const name = userName();
  console.log(`Hello, ${name}!\n`);
  for (let i = 1; i <= stepsCount; i += 1) {
    const { success, answer, correctAnswer } = round();
    if (!success) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      break;
    }
    console.log(`Your answer: ${answer} \nCorrect!`);
    if (i === stepsCount) {
      isSuccess = success;
    }
  }
  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  }
};
