import {getWordStressPosition} from "./utils.js";
import {PhoneticWord} from "./PhoneticWord.js";

function transcribe(word) {
  return new Promise(function (resolve) {
    getWordStressPosition(word).then(data => {
      const wordRepresentation = new PhoneticWord(word, data['stress']);
      console.log(`Stress position: ${wordRepresentation.stressPosition}`);
      resolve(wordRepresentation.value);
    });
  });
}


window.addEventListener('load', function () {
  const button = document.getElementById('transcribe');
  button.addEventListener('click',  () => {
    const word = document.getElementById('input-text').value.toLowerCase();

    // Disable button
    button.classList.add('disabled');

    transcribe(word).then((result) => {
      const resultTextContainer = document.getElementById('result');
      resultTextContainer.innerText = result;

      document.getElementById('result-container').classList.remove('invisible');
      button.classList.remove('disabled');
    });
  });
})
