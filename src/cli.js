import readlineSync from 'readline-sync';
export function userName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}


