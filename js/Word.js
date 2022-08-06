import {Letter} from "./letter.js";


export class Word {
  constructor(word, stressPotion) {
    this.word = word
    this.parseWord();
    this.stressPosition = stressPotion;
  }

  parseWord() {
    this.letters = this.word.split('');
    this.letters = this.letters.map(letter => new Letter(letter));
  }
}
