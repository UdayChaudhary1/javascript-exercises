const palindromes = function (s) {
  let arr = s.split("");
  arr = arr.filter(
    (value) => value !== "!" && value !== " " && value !== "." && value !== ","
  );
  arr = arr.map((value) => value.toLowerCase());
  let reverse = [...arr].reverse();
  if (arr.toString() === reverse.toString()) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
