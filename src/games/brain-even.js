#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../cli.js';

export default function even() {
  const name = userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let win = 0;
  let lose = 0;

  while (win < 3 && lose === 0) {
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    let parity = 0;
    if (randomNumber % 2 === 0) {
      parity = 'yes';
    } else {
      parity = 'no';
    }

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === parity) {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${parity}".`);
      console.log(`Let's try again, ${name}!`);
      lose += 1;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
