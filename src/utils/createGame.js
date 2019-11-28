import readLineSync from 'readline-sync';
import userName from '../index';
import { STEPS_COUNT } from './config';

export default (gameRules, round) => {
  let isSuccess = false;
  console.log(`Welcome to the Brain Games!\n${gameRules}`);
  
  const name = userName();
  console.log(`Hello, ${name}!\n`);
  
  const askQuestion = (question) => readLineSync.question(`Question: ${question} `);
  
  for (let i = 1; i <= STEPS_COUNT; i += 1) {
    const { success, answer, correctAnswer } = round({
      askQuestion,
    });
    
    if (!success) {
      console.log(`Your answer: ${answer}`);
      console.log(`${answer} is wrong answer ;(.\nCorrect answer was ${correctAnswer}. Let's try again, ${name}!`);
      break;
    }
    
    console.log(`Your answer: ${answer}\nCorrect!`);
    if (i === STEPS_COUNT) {
      isSuccess = success;
    }
  }
  
  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  }
};
