import {vowels} from './constants.js';


export class Letter {
  constructor(letter) {
    this.value = letter;
    this.isVowel = vowels.includes(letter.toLowerCase());
    this.isConsonant = !this.isVowel;
  }
}
//
// const a = new Letter('ю');
// console.log(a.isVowel, a.isConsonant, a.value);
