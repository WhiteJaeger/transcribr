import {letterToSound, doubleSoundVowels} from "./constants.js";


export class VowelSound {
  constructor(letter, positionRelativeToStressed, isBeginning) {
    this.letter = letter;
    this.positionRelativeToStressed = positionRelativeToStressed;
    this.value = 'UNK';
    this.isBeginning = isBeginning;
    this.determineValue();
  }

  determineValue() {

    if (this.isBeginning && doubleSoundVowels.includes(this.letter)) {
      this.value = letterToSound[this.letter].full;
      return;
    }

    switch (this.positionRelativeToStressed) {
      case 0:
        // Stressed
        this.value = letterToSound[this.letter].stressed;
        break;
      case -1:
        // Right before the stressed syllable
        this.value = letterToSound[this.letter].firstUnstressed;
        break;
      default:
        // Unstressed and not right before the stressed syllable
        this.value = letterToSound[this.letter].unstressed;
        break;
    }
  }
}


export class ConsonantSound {
  constructor(letter, isSoft, isVoiced) {
    this.letter = letter;
    this.isSoft = isSoft;
    this.isVoiced = isVoiced;
    this.value = 'UNK';
    this.determineValue();
  }

  determineValue() {
    if (!this.isVoiced) {
      this.value = letterToSound[this.letter].deaf || letterToSound[this.letter].hard;
    } else {
      this.value = this.isSoft ? letterToSound[this.letter].soft : letterToSound[this.letter].hard
    }
  }
}
