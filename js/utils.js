import {apiURL} from "./constants.js";


export function getWordStressPosition(word) {
  return fetch(`${apiURL}/${word}`).then(response => response.json()).then(data => data);
}
