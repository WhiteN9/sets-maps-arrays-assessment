/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
//Time complexity nlogn due to sort
function anagram(s1, s2) {
  const sortedString1 = s1.toLowerCase().split("").sort().join("");
  const sortedString2 = s2.toLowerCase().split("").sort().join("");
  console.log(sortedString1, sortedString2);
  
  const map = new Map(sortedString1);
  if(map.has(sortedString2)) {
    return true
  }

  return false;
}

module.exports = anagram;
