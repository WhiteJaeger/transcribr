import {apiURL} from "./constants.js";


export function get_word_stress_position(word) {
  return fetch(`${apiURL}/${word}`).then(response => response.json()).then(data => data);
}
