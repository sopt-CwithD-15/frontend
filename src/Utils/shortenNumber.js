const isFloat = (number) => number - Math.floor(number) > 0;

const parseNumber = (number, target) => {
  const parsedNum = Math.floor(number / (target / 10)) / 10;
  return isFloat(parsedNum) ? parsedNum.toFixed(1) : parsedNum;
};

export const shortenNumber = (number) => {
  const NUM = +number;

  if (NUM < 1000) return NUM;
  if (NUM < 10000) return `${parseNumber(NUM, 1000)}천`;

  return `${parseNumber(NUM, 10000)}만`;
};
