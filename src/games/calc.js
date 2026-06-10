const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export { gameDescription, generateRound };