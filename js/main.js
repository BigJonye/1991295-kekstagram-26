const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber(1, 3);

const checkStringLength = (string, length) => string.length <= length;
checkStringLength('Hello', 8);
