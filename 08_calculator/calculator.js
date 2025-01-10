const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr[0] === undefined) return 0;
  return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function (arr) {
  
  return arr.reduce((mul, value) => mul * value, 1);
};

const power = function (a, b) {
  return a**b;
};

const factorial = function (a) {
  let answer = 1;
  while(a){
    answer *= a;
    a--
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
