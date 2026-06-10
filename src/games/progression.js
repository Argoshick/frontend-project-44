const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);  // длина прогрессии от 5 до 10
  const start = getRandomNumber(1, 20);   // начальное число от 1 до 20
  const step = getRandomNumber(1, 10);    // шаг от 1 до 10
  const hiddenIndex = getRandomNumber(0, length - 1); // позиция скрытого элемента
  
  const progression = generateProgression(start, step, length);
  const correctAnswer = progression[hiddenIndex].toString();
  
  // Заменяем скрытый элемент на ".."
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export { gameDescription, generateRound };