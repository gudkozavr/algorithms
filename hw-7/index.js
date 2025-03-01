function buildFrequencyDictionary(text) {
  const frequencyDict = {};

  const cleanedText = text.toLowerCase().replace(/[^a-z]/g, "");

  for (const char of cleanedText) {
    if (frequencyDict[char]) {
      frequencyDict[char] += 1;
    } else {
      frequencyDict[char] = 1;
    }
  }

  return frequencyDict;
}

const text = "Hello, World! This is an example of text.";
const frequency = buildFrequencyDictionary(text);
console.log(frequency);
