import readlineSync from 'readline-sync';

export function even(name) {
  
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
    let win = 0;
    
    
    while (win < 3) {
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    let parity = 0;
    if (randomNumber % 2 === 0) {
    parity = 'yes';
    } else {
    parity = 'no';
    }
    
    console.log(`Question: ${randomNumber}`)
    
    let answer = readlineSync.question('Your answer: ');
   
    if (answer === parity) {
     console.log('Correct!');
      win = win + 1;
    } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${parity}.`)
    console.log(`Let's try again, ${name}!`);
    }
    }
     console.log(`Congratulations, ${name}!`);
    }