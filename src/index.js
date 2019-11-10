const readLineSync = require('readline-sync');

export const userName = () => readLineSync.question('May I have your name? ');
