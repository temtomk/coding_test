const isValidWord = (word: string): boolean => {
  const validSubstrings = ["aya", "ye", "woo", "ma"];

  let tempWord = word;
  for (let validSubstring of validSubstrings) {
    tempWord = tempWord.split(validSubstring).join("");
  }
  return tempWord === "";
};

function solution(words: string[]): number {
  return words.filter((word) => isValidWord(word)).length;
}
