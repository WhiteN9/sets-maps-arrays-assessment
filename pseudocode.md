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