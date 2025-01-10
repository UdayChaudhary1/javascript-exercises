const findTheOldest = function (people) {
  people.sort((personA, personB) => {
    let ageA =
      (personA.yearOfDeath || new Date().getFullYear()) - personA.yearOfBirth;
    let ageB =
      (personB.yearOfDeath || new Date().getFullYear()) - personB.yearOfBirth;
    return ageA - ageB;
  });
  return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
