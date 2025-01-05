const convertToCelsius = function (fah) {
  let cel = (fah - 32) * (5 / 9);
  if (Number.isInteger(cel)) return cel;
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function (cel) {
  let fah = cel * (9 / 5) + 32;
  if (Number.isInteger(fah)) return fah;
  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
