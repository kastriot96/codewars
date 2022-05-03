/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

function anagrams(word, words) {
  //return ascii sum of word
  let suma = 0;
  for (let i = 0; i < word.length; i++) {
    suma += word.charCodeAt(i);
    return suma;
  }

  //return ascii sum of words
  let sumaWords = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      sumaWords += words[i].charCodeAt(j);
    }
    return sumaWords;
  }

  //compare ascii sum of word and words

  if (suma === sumaWords) {
    return true;
  } else {
    return false;
  }
}
