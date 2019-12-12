const getRandomNumber = (min = 1, max = 100) => {
  const minValue = Math.floor(min);
  const maxValue = Math.floor(max);
  
  return Math.floor((Math.random() * (maxValue - minValue)) + minValue);
};

export default getRandomNumber;
