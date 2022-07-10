/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const map = new Map();
  if (!word) {
    return null;
  }
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else map.set(letter, 1);
  }
  for (let [key, value] of map.entries()) {
    if (value > 1) {
      map.delete(key);
    }
  }
  return map.size ? map.keys().next().value : null;
}

console.log(firstSingleCharacter("abadcbdabc"));
module.exports = firstSingleCharacter;
