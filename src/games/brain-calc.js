#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

export function calc() {
const name = userName();
console.log('What is the result of the expression?');

let win = 0;
let lose = 0;

while (win < 3 && lose === 0) {

    // Переменная правильного ответа.
    let correctAnswer = ''; 
     // Переменная примера.
    let example = '';

    //Генератор чисел.
    const oneNumber = Math.floor(Math.random() * 51);
    const twoNumber = Math.floor(Math.random() * 51);
    
    //Определение знака
    const operation = Math.floor(Math.random() * 3) + 1;
    
    // Определение правильного ответа.
    
    if (operation === 1) {  
      correctAnswer = oneNumber + twoNumber; 
      example = `${oneNumber} + ${twoNumber}`
    }
    
    if (operation === 2) { 
      correctAnswer = oneNumber - twoNumber; 
      example = `${oneNumber} - ${twoNumber}`
    }
    
    if (operation === 3) {
      correctAnswer = oneNumber * twoNumber;
      example = `${oneNumber} * ${twoNumber}`
    }
    
    // Вывод вопроса на экран.
    console.log(`Question: ${example}`)
    
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