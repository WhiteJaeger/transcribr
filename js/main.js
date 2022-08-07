import {getWordStressPosition} from "./utils.js";
import {PhoneticWord} from "./PhoneticWord.js";

function transcribe(word) {
  return new Promise(function (resolve) {
    getWordStressPosition(word).then(data => {
      const wordRepresentation = new PhoneticWord(word, data['stress']);
      resolve(wordRepresentation.value);
    });
  });
}


window.addEventListener('load', function () {
  const button = document.getElementById('transcribe');
  button.addEventListener('click',  () => {
    const word = document.getElementById('input-text').value;
    transcribe(word).then((result) => {
      const resultContainer = document.getElementById('result');
      resultContainer.innerText = result;
    });
  });
})
