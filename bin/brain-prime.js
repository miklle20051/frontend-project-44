#!/usr/bin/env node
import readlineSync from 'readline-sync';

primeGame();

function isPrime(num) {
    if (num <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }

export function primeGame() {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.');

let win = 0;
let lose = 0;
let example = 0;
let correctAnswer = 0;

//Функция для определения простого числа

  
while (win < 3 && lose === 0) {

    example = Math.floor(Math.random() * 51);
     
    correctAnswer = isPrime(example);

    // Вывод вопроса на экран.
    console.log(`Question: ${example}`)

    
    // Чтение ответа вопроса на экран.
    let answerUser = readlineSync.question('Your answer: ');
   
    if (correctAnswer === answerUser) {
        console.log('Correct!')
        win = win + 1
    } else {
        console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
        console.log(`Let's try again, ${name}!`);
        lose = lose + 1
    }

    if (win === 3) {
        console.log(`Congratulations, ${name}!`);
       }
    }
}
