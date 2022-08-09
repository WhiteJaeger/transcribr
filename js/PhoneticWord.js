import {ConsonantSound, VowelSound} from "./Sound.js";
import {vowels, softeningLetters, deafConsonants} from "./constants.js";


export class PhoneticWord {
  constructor(word, stressPotion) {
    this.word = word.toLowerCase();
    this.sounds = [];
    this.stressPosition = stressPotion;
    this.parseWord();
  }

  parseWord() {
    const letters = this.word.split('');
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      // Vowels
      if (vowels.includes(letter)) {

        const isBeginning = i === 0;

        // Whether the current vowel is preceded by the vowel
        let afterVowel = null;
        if (isBeginning) {
          afterVowel = false;
        } else afterVowel = vowels.includes(letters[i - 1]);

        if ((i - this.stressPosition) === 0) {
          // The current vowel is the stressed vowel
          this.sounds.push(new VowelSound(letter, 0, isBeginning, afterVowel));
          continue;
        } else if (i > this.stressPosition) {
          // The current vowel is after the stressed one
          this.sounds.push(new VowelSound(letter, 1, isBeginning, afterVowel));
          continue;
        }

        // Assume that the current vowel is in the previous syllable relative to
        // the syllable with the stressed vowel
        let relativePositionToStressed = -1;

        for (let i2 = i + 1; i2 < this.stressPosition; i2++) {
          // If there is one/more vowels between the current letter and the stressed one
          // Then the current vowel is "far" before the stressed one
          if (vowels.includes(letters[i2])) {
            relativePositionToStressed = -2
            break;
          }
        }

        this.sounds.push(new VowelSound(letter, relativePositionToStressed, isBeginning, afterVowel));
        continue;
      }

      // Consonants
      if (i === letters.length - 1) {
        // Last
        this.sounds.push(new ConsonantSound(letter, false, false));
      } else if (softeningLetters.includes(letters[i + 1])) {
        // Next is the softening letter
        this.sounds.push(new ConsonantSound(letter, true, true));
      } else if (deafConsonants.includes(letters[i + 1])) {
        // Next is the deaf consonant => the consonant becomes deaf
        this.sounds.push(new ConsonantSound(letter, false, false))
      } else {
        // Next is the non-softening nor the deaf consonant
        this.sounds.push(new ConsonantSound(letter, false, true));
      }
    }
  }

  get value() {
    const result = this.sounds.map(soundRepresentation => soundRepresentation.value);
    return `[${result.join('')}]`;
  }
}
