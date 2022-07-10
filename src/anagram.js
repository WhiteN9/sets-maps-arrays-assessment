/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */

function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    const letterToLowerCase = s1[i].toLowerCase();
    map.set(s1[i].toLowerCase());
  }
  for (let j = 0; j < s2.length; j++) {
    const letterToLowerCase = s2[j].toLowerCase();
    if (map.has(letterToLowerCase)) {
      map.delete(letterToLowerCase);
    }
  }
  if (map.size === 0) {
    return true;
  }
  return false;
}

console.log(anagram("abc", "abc"));
//Time complexity nlogn due to sort
// function anagram(s1, s2) {
//   const sortedString1 = s1.toLowerCase().split("").sort().join("");
//   const sortedString2 = s2.toLowerCase().split("").sort().join("");

//   const map = new Map([[sortedString1]]);

//   if (map.has(sortedString2)) {
//     return true;
//   }
//   return false;
// }

module.exports = anagram;
