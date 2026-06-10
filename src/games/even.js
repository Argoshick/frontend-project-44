import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const maxRounds = 3;

  while (correctAnswers < maxRounds) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playEvenGame;