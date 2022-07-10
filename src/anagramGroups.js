/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
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
  const arrayGroup = [];
  map.forEach((value) => {
    arrayGroup.push(value);
  });
  return arrayGroup;
}

const words = ["east", "cars", "acre", "arcs", "teas", "eats", "race"];
console.log(anagramGroups(words));
module.exports = anagramGroups;
