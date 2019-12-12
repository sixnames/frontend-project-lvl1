import readLineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (gameRule, round) => {
  console.log(`Welcome to the Brain Games!\n${gameRule}`);
  
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  
  for (let i = 1; i <= ROUNDS_COUNT; i += 1) {
    const { success, answer, correctAnswer } = round();
    
    if (!success) {
      console.log(`Your answer: ${answer}`);
      console.log(`${answer} is wrong answer ;(.\nCorrect answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
    
    console.log(`Your answer: ${answer}\nCorrect!`);
  }
  
  console.log(`Congratulations, ${name}!`);
};
