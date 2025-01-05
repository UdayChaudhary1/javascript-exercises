const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  )
    return "ERROR";
  let answer = 0;
  let large = 0;
  let small = 0;
  if (num1 > num2) {
    large = num1;
    small = num2;
  } else {
    large = num2;
    small = num1;
  }
  for (let i = small; i <= large; i++) {
    answer += i;
  }
  return answer;
};

// Do not edit below this line
module.exports = sumAll;
