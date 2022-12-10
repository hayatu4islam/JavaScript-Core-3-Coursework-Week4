let removeVowels = require("./remove-vowels");

function removeVowelsFromWords(words) {
  let result = words.map(function (word) {
    return removeVowels(word);
  });

  return result;
}
// console.log(removeVowelsFromWords(["Irina", "Etza", "Daniel"]));
module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
