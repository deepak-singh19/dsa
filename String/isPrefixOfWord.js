/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    // Split the sentence into an array of words
   const words = sentence.split(' ');

   // Iterate over the words with their index
   for (let i = 0; i < words.length; i++) {
       // Check if the word starts with the searchWord
       if (words[i].startsWith(searchWord)) {
           // Return the 1-based index
           return i + 1;
       }
   }

   // If no match is found, return -1
   return -1;
   
};

//LC-1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence