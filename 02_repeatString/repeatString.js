const repeatString = function(string, num) {
  answer = "";
  if(num < 0) return 'ERROR';
  while(num){
    answer += string;
    num--;
  }
  return answer;
};

// Do not edit below this line
module.exports = repeatString;
