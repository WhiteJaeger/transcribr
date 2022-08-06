import {letterToSound} from './constants.js';
import {get_word_stress_position} from "./utils.js";
import {Word} from "./Word.js";

function transcribe(word) {
  get_word_stress_position(word).then(data => {
    const wordRepresentation = new Word(word, data['stress']);
    console.log(wordRepresentation.stressPosition, wordRepresentation.letters);
  });
  return 1;
}


window.addEventListener('load', function () {
  const button = document.getElementById('transcribe');
  button.addEventListener('click',  () => {
    const word = document.getElementById('input-text').value;
    const result = transcribe(word);
    console.log(result);
  });
})
