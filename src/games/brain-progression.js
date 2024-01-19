#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

export function progressionGame() {
const name = userName();
console.log('Find the greatest common divisor of given numbers.');

let win = 0;
let lose = 0;

while (win < 3 && lose === 0) {

   
     let correctAnswer = '';   // Переменная правильного ответа.
     let progression = [];
     let length = Math.floor(Math.random() * 6) + 5;
     let hiddenIndex = Math.floor(Math.random() * length);
     let startNum = Math.floor(Math.random() * 101);
     let diff = Math.floor(Math.random() * 11) + 1;
   
     for (let i = 0; i < length; i++) {
       if (i === hiddenIndex) {
         progression.push("..");
       } else {
         progression.push(startNum + i * diff);
       }
     }
     
    correctAnswer = startNum + hiddenIndex * diff;

    // Вывод вопроса на экран.
    console.log(`Question: ${progression.join(" ")}`)

    
    // Чтение ответа вопроса на экран.
    let answerUser = readlineSync.question('Your answer: ');
   
    if (correctAnswer ===  Number(answerUser)) {
        console.log('Correct!')
        win = win + 1
    } else {
        console.log(`"${Number(answerUser)}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
        console.log(`Let's try again, ${name}!`);
        lose = lose + 1
    }

    if (win === 3) {
        console.log(`Congratulations, ${name}!`);
       }
    }
}