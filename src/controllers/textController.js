const capitalizeFirstLetterAddon = require('../addons/capitalize-first-letter/build/Release/capitalizeFirstLetter.node');

exports.capitalizeFirstLetter= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = capitalizeFirstLetterAddon.capitalizeFirstLetter(req.body.text);
  res.send({ result: result });
};

const capitalizeWordsAddon = require('../addons/capitalize-words/build/Release/capitalizeWords');

exports.capitalizeWords= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = capitalizeWordsAddon.capitalizeWords(req.body.text);
  res.send({ result: result });
};

const charCountAddon = require('../addons/count-charecters/build/Release/charCount');

exports.countOfChars= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = charCountAddon.countOfChars(req.body.text);
  res.send({ result: result });
};

const countSentencesAddon = require('../addons/count-sentences/build/Release/countSentences');

exports.countSentences = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = countSentencesAddon.countSentences(req.body.text);
  res.send({ result: result });
};

const countWordsAddon = require('../addons/count-words.cpp/build/Release/countWords');

exports.countWords = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = countWordsAddon.countWords(req.body.text);
  res.send({ result: result });
};

const extractAnagramsAddon = require('../addons/extract-anargams/build/Release/extractAnargams.node');

exports.extractAnagrams = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractAnagramsAddon.extractAnagrams(req.body.text);
  res.send({ result: result });
};

const extractBiagramsWordsAddon = require('../addons/extract-biagrams-words/build/Release/extractBiagramsWords.node');

exports.extractWordBigrams = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractBiagramsWordsAddon.extractWordBigrams(req.body.text);
  res.send({ result: result });
};

const capitalLettersAddon = require('../addons/extract-capital-words/build/Release/capitalLetters.node');

exports.capitalLetters = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = capitalLettersAddon.capitalLetters(req.body.text);
  res.send({ result: result });
};

const extractCommonWordAddon = require('../addons/extract-common-word/build/Release/extractCommonWord');

exports.findMostCommonWordsFirst = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractCommonWordAddon.findMostCommonWordsFirst(req.body.text);
  res.send({ result: result });
};

const extractDatesAddon = require('../addons/extract-dates/build/Release/extractDates.node');

exports.extractDates= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractDatesAddon.extractDates(req.body.text);
  res.send({ result: result });
};

const extractEmailsAddon = require('../addons/extract-email-addresses/build/Release/extractEmails.node');

exports.extractEmails = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractEmailsAddon.extractEmails(req.body.text);
  res.send({ result: result });
};

const extractHashtagsAddon = require('../addons/extract-hashtags/build/Release/extractHashtags.node');

exports.extractHashtags= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractHashtagsAddon.extractHashtags(req.body.text);
  res.send({ result: result });
};

const extractLowercaseWordsAddon = require('../addons/extract-lowercase-words/build/Release/extractlowercaseWords.node');

exports.extractUniqueLowercaseWords= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractLowercaseWordsAddon.extractUniqueLowercaseWords(req.body.text);
  res.send({ result: result });
};


const extractNumbersAddon = require('../addons/extract-numbers/build/Release/extractNumbers.node');

exports.extractNumbers= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractNumbersAddon.extractNumbers(req.body.text);
  res.send({ result: result });
};

const palindromeAddon = require('../addons/extract-palindroms/build/Release/palindromeAddon.node');

exports.palindromeWords= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = palindromeAddon.palindromeWords(req.body.text);
  res.send({ result: result });
};

const extractPhoneNumbersAddon = require('../addons/extract-phone-numbers/build/Release/extractPhoneNumbers');

exports.extractPhoneNumbers= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractPhoneNumbersAddon.extractPhoneNumbers(req.body.text);
  res.send({ result: result });
};

const extractRomanNumeralsAddon = require('../addons/extract-roman-numerals/build/Release/extractRomanNumerals');

exports.extractRomanNumerals = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractRomanNumeralsAddon.extractRomanNumerals(req.body.text);
  res.send({ result: result });
};

const extractTimesAddon = require('../addons/extract-times/build/Release/addon.node');

exports.extractTimes= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractTimesAddon.extractTimes(req.body.text);
  res.send({ result: result });
};

const extractTrigramsAddon = require('../addons/extract-trigrams/build/Release/ExtractTrigramsAddon.node');

exports.extractTrigrams= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractTrigramsAddon.extractTrigrams(req.body.text);
  res.send({ result: result });
};

const extractURLsAddon = require('../addons/extract-urls/build/Release/extractURLs.node');

exports.extractURLs= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = extractURLsAddon.extractURLs(req.body.text);
  res.send({ result: result });
};
// const extractUserMentionsAddon = require('../addons/extract-user-mentions/build/Release/extractUserMentions.node');

// exports.extractUserMentions= (req, res) => {
//   if (!req.body.text) {
//     return res.status(400).send({ error: 'No text provided' });
//   }
//   const result = extractUserMentionsAddon.extractUserMentions(req.body.text);
//   res.send({ result: result });
// };

const findLongestWordAddon = require('../addons/find-longest-word/build/Release/addon.node');

exports.findLongestWord= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = findLongestWordAddon.findLongestWords(req.body.text);
  res.send({ result: result });
};

const findRareWordsAddon = require('../addons/find-rare-words/build/Release/findRareWords.node');

exports.findRareWords = (req, res) => {
  const { text, threshold } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).send({ error: 'Invalid or missing text. Expected a string.' });
  }

  if (threshold === undefined || typeof threshold !== 'number') {
    return res.status(400).send({ error: 'Invalid or missing threshold. Expected a number.' });
  }

  try {
    const result = findRareWordsAddon.findRareWords(text, threshold);
    res.send({ result: result });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while processing your request.' });
  }
};

const findShortestWordAddon = require('../addons/find-shortest-word/build/Release/findShortestWord.node');

exports.findShortestWord= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = findShortestWordAddon.findShortestWord(req.body.text);
  res.send({ result: result });
};

const toLowercaseAddon = require('../addons/lowercase-text/build/Release/addon.node');

exports.toLowercase = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = toLowercaseAddon.toLowercase(req.body.text);
  res.send({ result: result });
};

const removeBlanksAddon = require('../addons/remove-blanks/build/Release/removeBlanksAddon.node');

exports.removeBlanks = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeBlanksAddon.removeBlanks(req.body.text);
  res.send({ result: result });
};

const removeDuplicatesAddon = require('../addons/remove-duplicate-words/build/Release/removeDuplicateWordsAddon');

exports.removeDuplicateWords = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeDuplicatesAddon.removeDuplicateWords(req.body.text);
  res.send({ result: result });
};

const removeEmailAddressesAddon = require('../addons/remove-email-addresses/build/Release/removeEmailAddresses.node');

exports.removeEmailAddresses = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeEmailAddressesAddon.removeEmailAddresses(req.body.text);
  res.send({ result: result });
};

const removeEmojisAddon = require('../addons/remove-emojis/build/Release/addon.node');

exports.removeEmojis = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeEmojisAddon.removeEmojis(req.body.text);
  res.send({ result: result });
};

const removeHashtagsAddon = require('../addons/remove-hashtags/build/Release/removeHashtagsAddon.node');

exports.removeHashtags = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeHashtagsAddon.removeHashtags(req.body.text);
  res.send({ result: result });
};

const removeHtmlEntitiesAddon = require('../addons/remove-html-entities/build/Release/removeHtmlEntitiesAddon.node');

exports.RemoveHtmlEntitiesWrapper= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeHtmlEntitiesAddon.removeHtmlEntities(req.body.text);
  res.send({ result: result });
};

const removeNonAlphanumericAddon = require('../addons/remove-non-alphanumeric/build/Release/removeNonAlphanumericAddon.node');

exports.RemoveNonAlphanumericWrapper= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeNonAlphanumericAddon.removeNonAlphanumeric(req.body.text);
  res.send({ result: result });
};

const removeNumbersAddon = require('../addons/remove-numbers/build/Release/removeNumbersAddon.node');

exports.removeNumbers= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeNumbersAddon.removeNumbers(req.body.text);
  res.send({ result: result });
};

const removePhoneNumbersAddon = require('../addons/remove-phone-numbers/build/Release/removePhoneNumbers');

exports.removePhoneNumbers= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removePhoneNumbersAddon.removePhoneNumbers(req.body.text);
  res.send({ result: result });
};

const removePunctuationAddon = require('../addons/remove-punctuation/build/Release/removePunctuation.node');

exports.removePunctuation = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removePunctuationAddon.removePunctuation(req.body.text);
  res.send({ result: result });
};

const removeSpecificWordsAddon = require('../addons/remove-specific-words/build/Release/addon.node');

exports.removeSpecificWords = (req, res) => {
  const { text, wordToRemove } = req.body;

  if (!text || !wordToRemove) {
    return res.status(400).send({ error: 'Text and word to remove must be provided' });
  }

  const result = removeSpecificWordsAddon.removeSpecificWords(text, wordToRemove);
  res.send({ result: result });
};


const removeUrlsAddon = require('../addons/remove-urls/build/Release/addon.node');

exports.removeUrls= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeUrlsAddon.removeUrls(req.body.text);
  res.send({ result: result });
};

const removeWhitespaceAddon = require('../addons/remove-whitespace/build/Release/removeWhitespace.node');

exports.removeWhitespace= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = removeWhitespaceAddon.removeWhitespace(req.body.text);
  res.send({ result: result });
};

const removeWordsByLengthAddon = require('../addons/remove-word-by-length/build/Release/addon.node');

exports.removeWordsByLength = (req, res) => {
  const { text, wordToRemove } = req.body;

  if (!text || wordToRemove === undefined) {
    return res.status(400).send({ error: 'Text and word length to remove must be provided' });
  }

  const lengthToRemove = parseInt(wordToRemove, 10);
  if (isNaN(lengthToRemove)) {
    return res.status(400).send({ error: 'Word length to remove must be a number' });
  }

  const result = removeWordsByLengthAddon.removeWordsByLength(text, lengthToRemove);
  res.send({ result: result });
};


const reverseStringAddon = require('../addons/reverse-text/build/Release/reverseString.node');

exports.reverseString= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = reverseStringAddon.reverseString(req.body.text);
  res.send({ result: result });
};

const reverseWordsInSentenceAddon = require('../addons/reverse-words-in-sentence/build/Release/reverseWordsInSentenceAddon.node');

exports.reverseWordsInSentence = (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = reverseWordsInSentenceAddon.reverseWordsInSentence(req.body.text);
  res.send({ result: result });
};


const convertToUppercaseAddon = require('../addons/uppercase-text/build/Release/addon.node');

exports.convertToUppercase= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = convertToUppercaseAddon.convertToUppercase(req.body.text);
  res.send({ result: result });
};

const wordLengthDistributionAddon = require('../addons/word-length-distribution/build/Release/addon.node');

exports.wordLengthDistribution= (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({ error: 'No text provided' });
  }
  const result = wordLengthDistributionAddon.wordLengthDistribution(req.body.text);
  res.send({ result: result });
};










