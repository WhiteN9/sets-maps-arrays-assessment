/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
//O(nlogn)
function anagramGroups(words) {
  const map = new Map();
  words.forEach((word) => {
    const sortedString1 = word.toLowerCase().split("").sort().join("");
    if (map.has(sortedString1)) {
      map.get(sortedString1).push(word);
    } else {
      map.set(sortedString1, [word]);
    }
  });
  //   Alternative return 1:
  //   const arrayGroup = [];
  //   map.forEach((value) => {
  //     arrayGroup.push(value);
  //   });

  //   Alternative return 2:
  //   closure?
  //   const arrayGroup = Array.from(map).map(([key, value]) => value);

  return Array.from(map.values());
}

// var anagramGroups2 = function (strs) {
//   const map = {};
//   const primes = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
//     73, 79, 83, 89, 97, 101,
//   ];
//   strs.forEach((str) => {
//     let prod = str
//       .split("")
//       .reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
//     map[prod] ? map[prod].push(str) : (map[prod] = [str]);
//   });
//   return Object.values(map);
// };
const words = ["east", "cars", "acre", "arcs", "teas", "eats", "race"];
console.log(anagramGroups2(words));
module.exports = anagramGroups;

var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((word) => {
    const sortedString1 = word.split("").sort().join("");
    if (map.has(sortedString1)) {
      map.get(sortedString1).push(word);
    } else {
      map.set(sortedString1, [word]);
    }
  });
  return Array.from(map.values());
};

var groupAnagrams = function (strs) {
  let map = new Map();
  for (let word of strs) {
    const sortedString1 = word.split("").sort().join("");
    if (map.has(sortedString1)) {
      map.set(sortedString1, [...map.get(sortedString1), word]);
    } else {
      map.set(sortedString1, [word]);
    }
  }
  return Array.from(map.values());
};

var groupAnagrams = function (strs) {
  const map = new Map();
  for (let word of strs) {
    const sortedString1 = word.split("").sort().join("");
    if (map.has(sortedString1)) {
      map.get(sortedString1).push(word);
    } else {
      map.set(sortedString1, [word]);
    }
  }
  return Array.from(map.values());
};
