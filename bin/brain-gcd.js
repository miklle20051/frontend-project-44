#!/usr/bin/env node
import readlineSync from 'readline-sync';

gcdGame();

//Функция для поиска НОД.
function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

export function gcdGame() {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.');

let win = 0;
let lose = 0;

while (win < 3 && lose === 0) {

    // Переменная правильного ответа.
    let correctAnswer = ''; 
     // Переменная примера.

    //Генератор чисел.
    let oneNumber = Math.floor(Math.random() * 101);
    let twoNumber = Math.floor(Math.random() * 51);
    
    //Корректировка чисел.
    while (gcd(oneNumber, twoNumber) < 8 && gcd(oneNumber, twoNumber) > 0 ) {
        oneNumber = Math.floor(Math.random() * 101);
        twoNumber = Math.floor(Math.random() * 51);
      }

    // Определение правильного ответа.
    
    correctAnswer = gcd(oneNumber, twoNumber);

    // Вывод вопроса на экран.
    console.log(`Question: ${oneNumber} ${twoNumber}`)

    
    // Чтение ответа вопроса на экран.
    let answerUser = readlineSync.question('Your answer: ');
   
    if (correctAnswer ===  Number(answerUser)) {
        console.log('Correct!')
        win = win + 1
    } else {
        console.log(`'${Number(answerUser)}' is wrong answer ;(. Correct answer was ${correctAnswer}.`)
        console.log(`Let's try again, ${name}!`);
        lose = lose + 1
    }

    if (win === 3) {
        console.log(`Congratulations, ${name}!`);
       }
    }
}