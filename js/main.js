import {letterToSound} from './constants.js';
import {get_word_stress_position} from "./utils.js";
import {Letter} from "./letter.js";

function transcribe() {
  const button = document.getElementById('transcribe');
  button.addEventListener('click',  () => {
    const text = document.getElementById('input-text').value;
    // console.log(text.split(''));
  });
}


window.addEventListener('load', function () {
  // console.log(letterToSound);
  get_word_stress_position('уборка').then(data => console.log(data));
  transcribe();
})
