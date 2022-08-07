import {ConsonantSound, VowelSound} from "./Sound.js";
import {vowels} from "./constants.js";


export class PhoneticWord {
  constructor(word, stressPotion) {
    this.word = word.toLowerCase();
    this.sounds = null;
    this.parseWord();
    this.stressPosition = stressPotion;
  }

  parseWord() {
    const letters = this.word.split('');
    const sounds = [];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (vowels.includes(letter)) {
        sounds.push(new VowelSound(letter, i - this.stressPosition));
      } else {
        if (i === letter.length) {
          // Last
          sounds.push(new ConsonantSound(letter, false, false));
        }
      }
    }
  }
}
