const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);
  
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  
  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export { gameDescription, generateRound };