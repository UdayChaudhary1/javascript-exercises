const removeFromArray = function(arr, ...element) {
  let answer = [];
  for (const e of arr) {
    if(!element.includes(e)){
      answer.push(e);
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
