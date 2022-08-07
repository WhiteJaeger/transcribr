import {letterToSound} from "./constants.js";


export class VowelSound {
  constructor(letter, positionRelativeToStressed) {
    this.letter = letter;
    this.positionRelativeToStressed = positionRelativeToStressed;
    this.type = 'vowel';
    this.determineValue();
  }

  determineValue() {
    switch (this.positionRelativeToStressed) {
      case 0:
        // Stressed
        this.value = letterToSound[this.letter].stressed;
        break;
      case -1:
        // Right before stressed
        this.value = letterToSound[this.letter].firstUnstressed;
        break;
      default:
        // Unstressed and not right before the stressed
        this.value = letterToSound[this.letter].unstressed;
        break;
    }
  }
}


export class ConsonantSound {
  constructor(letter, isSoft, isVoiced) {
    this.letter = letter;
    this.type = 'consonant';
    this.isSoft = isSoft;
    this.isVoiced = isVoiced;
    this.determineValue();
  }

  determineValue() {
    if (!this.isVoiced) {
      this.value = letterToSound[this.letter].deaf;
    } else {
      this.value = this.isSoft ? letterToSound[this.letter].soft : letterToSound[this.letter].hard
    }
  }
}
