export const vowels = 'ауеыоэяию';
export const doubleSoundVowels = 'еяюё';
export const softeningLetters = 'еёяиюь';
export const deafConsonants = 'пфктсшхчцщ';
export const voicedConsonants = 'бвгдзжлмнрй';

export const apiURL = 'https://word-stresses.herokuapp.com/get_word_stress';

export const letterToSound = {
  "а": {
    "stressed": "а'",
    "unstressed": "ъ",
    "firstUnstressed": "ʌ"
  },
  "б": {
    "voiced": "б",
    "deaf": "п",
    "soft": "б'",
    "hard": "б"
  },
  "в": {
    "voiced": "в",
    "deaf": "ф",
    "soft": "в'",
    "hard": "в"
  },
  "г": {
    "voiced": "г",
    "deaf": "к",
    "soft": "г'",
    "hard": "г"
  },
  "д": {
    "voiced": "д",
    "deaf": "т",
    "soft": "д'",
    "hard": "д"
  },
  "е": {
    "full": "jэ",
    "unstressed": "ъ",
    "firstUnstressed": "иэ"
  },
  "ё": {
    "full": "jо",
    "unstressed": "ъ",
    "firstUnstressed": "ʌ"
  },
  "ж": {
    "voiced": "ж",
    "deaf": "ш",
    "hard": "ж"
  },
  "з": {
    "voiced": "з",
    "deaf": "с",
    "soft": "з'",
    "hard": "з"
  },
  "и": {
    "stressed": "и'",
    "unstressed": "и",
    "firstUnstressed": "и"
  },
  "й": {
    "soft": "j'",
    "hard": ""
  },
  "к": {
    "soft": "к'",
    "hard": "к"
  },
  "л": {
    "soft": "л'",
    "hard": "л"
  },
  "м": {
    "soft": "м'",
    "hard": "м"
  },
  "н": {
    "soft": "н'",
    "hard": "н"
  },
  "о": {
    "stressed": "о'",
    "unstressed": "ъ",
    "firstUnstressed": "ʌ"
  },
  "п": {
    "soft": "п'",
    "hard": "п"
  },
  "р": {
    "soft": "р'",
    "hard": "р"
  },
  "с": {
    "soft": "с'",
    "hard": "с"
  },
  "т": {
    "soft": "т'",
    "hard": "т"
  },
  "у": {
    "stressed": "у'",
    "unstressed": "у"
  },
  "ф": {
    "soft": "ф'",
    "hard": "ф"
  },
  "х": {
    "soft": "х'",
    "hard": "х"
  },
  "ц": {
    "soft": "ц",
    "hard": "ц"
  },
  "ч": {
    "soft": "ч'",
    "hard": "ч'"
  },
  "ш": {
    "soft": "ш",
    "hard": "ш"
  },
  "щ": {
    "soft": "щ'",
    "hard": "щ'"
  },
  "ъ": "",
  "ы": {
    "stressed": "ы'",
    "unstressed": "ы"
  },
  "ь": "",
  "э": {
    "stressed": "э'",
    "unstressed": "ъ",
    "firstUnstressed": "иэ"
  },
  "ю": {
    "full": "jу",
    "unstressed": "у"
  },
  "я": {
    "full": "jа",
    "unstressed": "ъ",
    "firstUnstressed": "ʌ"
  }
}
