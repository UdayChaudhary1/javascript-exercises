const fibonacci = function (index) {
  if (typeof index !== "number") index = Number(index);
  if (index === 0) return 0;
  if (index < 0) return "OOPS";
  let arr = [1, 1];
  for (let i = 2; i < index; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
