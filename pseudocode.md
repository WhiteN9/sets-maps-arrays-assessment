# Anagram

Input: 2 strings
Output: true if they are anagram.

1. Initialize a map called result;
2. Lowercase string 'a', split the word into individual character, sort it alphabetically, join them together.
3. Add the array to the map
4. Do step 2 for string 'b'
5. If result has the array of 'b', return true, else false

# Anagram 2 from stackoverflow

Create a Hashmap where key - letter and value - frequencey of letter,
for first string populate the hashmap (O(n))
for second string decrement count and remove element from hashmap O(n)
if hashmap is empty, the string is anagram otherwise not.

# Anagram groups

For each word in the word array.
Use the same strategy as the solution 1 anagram problem.

# permutationPalindrome

Find pairs of characters
'acecarr'
Similar to Anagram 2
Make a `map` of letters of the word,
where `key` is the letter and `value` is the frequency of the letter
If the letter occurs again, remove it, else add it.
At the end, if there are more than 1 non-pair letter (i.e the map size is over 1), return false
