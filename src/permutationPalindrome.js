/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const letterMap = new Map();

  for (let i = 0; i < word.length; i++) {
    const letterToLowerCase = word[i].toLowerCase();
    if (letterMap.has(letterToLowerCase)) {
      letterMap.delete(letterToLowerCase);
    } else letterMap.set(letterToLowerCase);
  }
  
  if(letterMap.size > 1) {
    return false
  }
  return true;
}

permutationPalindrome("acerarr");

module.exports = permutationPalindrome;
