parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MuPq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.letterToSound=exports.apiURL=exports.voicedConsonants=exports.deafConsonants=exports.softeningLetters=exports.doubleSoundVowels=exports.vowels=void 0;var s="ауеыоэяию";exports.vowels=s;var e="еяюё";exports.doubleSoundVowels=e;var t="еёяиюь";exports.softeningLetters=t;var r="пфктсшхчцщ";exports.deafConsonants=r;var o="бвгдзжлмнрй";exports.voicedConsonants=o;var d="https://word-stresses.herokuapp.com/get_word_stress";exports.apiURL=d;var a={"а":{stressed:"а'",unstressed:"ъ",firstUnstressed:"ʌ"},"б":{voiced:"б",deaf:"п",soft:"б'",hard:"б"},"в":{voiced:"в",deaf:"ф",soft:"в'",hard:"в"},"г":{voiced:"г",deaf:"к",soft:"г'",hard:"г"},"д":{voiced:"д",deaf:"т",soft:"д'",hard:"д"},"е":{full:"jэ",unstressed:"ъ",firstUnstressed:"иэ"},"ё":{full:"jо",unstressed:"ъ",firstUnstressed:"ʌ"},"ж":{voiced:"ж",deaf:"ш",hard:"ж"},"з":{voiced:"з",deaf:"с",soft:"з'",hard:"з"},"и":{stressed:"и'",unstressed:"и",firstUnstressed:"и"},"й":{soft:"j'",hard:""},"к":{soft:"к'",hard:"к"},"л":{soft:"л'",hard:"л"},"м":{soft:"м'",hard:"м"},"н":{soft:"н'",hard:"н"},"о":{stressed:"о'",unstressed:"ъ",firstUnstressed:"ʌ"},"п":{soft:"п'",hard:"п"},"р":{soft:"р'",hard:"р"},"с":{soft:"с'",hard:"с"},"т":{soft:"т'",hard:"т"},"у":{stressed:"у'",unstressed:"у"},"ф":{soft:"ф'",hard:"ф"},"х":{soft:"х'",hard:"х"},"ц":{soft:"ц",hard:"ц"},"ч":{soft:"ч'",hard:"ч'"},"ш":{soft:"ш",hard:"ш"},"щ":{soft:"щ'",hard:"щ'"},"ъ":"","ы":{stressed:"ы'",unstressed:"ы"},"ь":"","э":{stressed:"э'",unstressed:"ъ",firstUnstressed:"иэ"},"ю":{full:"jу",unstressed:"у"},"я":{full:"jа",unstressed:"ъ",firstUnstressed:"ʌ"}};exports.letterToSound=a;
},{}],"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getWordStressPosition=e;var t=require("./constants.js");function e(e){return fetch("".concat(t.apiURL,"/").concat(e)).then(function(t){return t.json()}).then(function(t){return t})}
},{"./constants.js":"MuPq"}],"x8YA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConsonantSound=exports.VowelSound=void 0;var e=require("./constants.js");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function s(e,t,s){return t&&i(e.prototype,t),s&&i(e,s),e}var n=function(){function i(e,s,n){t(this,i),this.letter=e,this.positionRelativeToStressed=s,this.value="UNK",this.isBeginning=n,this.determineValue()}return s(i,[{key:"determineValue",value:function(){if(this.isBeginning&&e.doubleSoundVowels.includes(this.letter))this.value=e.letterToSound[this.letter].full;else switch(this.positionRelativeToStressed){case 0:this.value=e.letterToSound[this.letter].stressed;break;case-1:this.value=e.letterToSound[this.letter].firstUnstressed;break;default:this.value=e.letterToSound[this.letter].unstressed}}}]),i}();exports.VowelSound=n;var o=function(){function i(e,s,n){t(this,i),this.letter=e,this.isSoft=s,this.isVoiced=n,this.value="UNK",this.determineValue()}return s(i,[{key:"determineValue",value:function(){this.isVoiced?this.value=this.isSoft?e.letterToSound[this.letter].soft:e.letterToSound[this.letter].hard:this.value=e.letterToSound[this.letter].deaf||e.letterToSound[this.letter].hard}}]),i}();exports.ConsonantSound=o;
},{"./constants.js":"MuPq"}],"uvH6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PhoneticWord=void 0;var n=require("./Sound.js"),s=require("./constants.js");function o(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){for(var o=0;o<s.length;o++){var e=s[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,s,o){return s&&e(n.prototype,s),o&&e(n,o),n}var i=function(){function e(n,s){o(this,e),this.word=n.toLowerCase(),this.sounds=[],this.stressPosition=s,this.parseWord()}return t(e,[{key:"parseWord",value:function(){for(var o=this.word.split(""),e=0;e<o.length;e++){var t=o[e],i=0===e;if(s.vowels.includes(t)){if(e-this.stressPosition==0){this.sounds.push(new n.VowelSound(t,0,i));continue}if(e>this.stressPosition){this.sounds.push(new n.VowelSound(t,1,i));continue}for(var r=-1,u=e+1;u<this.stressPosition;u++)if(s.vowels.includes(o[u])){r=-2;break}this.sounds.push(new n.VowelSound(t,r,i))}else e===o.length?this.sounds.push(new n.ConsonantSound(t,!1,!1)):s.softeningLetters.includes(o[e+1])?this.sounds.push(new n.ConsonantSound(t,!0,!0)):s.deafConsonants.includes(o[e+1])?this.sounds.push(new n.ConsonantSound(t,!1,!1)):this.sounds.push(new n.ConsonantSound(t,!1,!0))}}},{key:"value",get:function(){var n=this.sounds.map(function(n){return n.value});return"[".concat(n.join(""),"]")}}]),e}();exports.PhoneticWord=i;
},{"./Sound.js":"x8YA","./constants.js":"MuPq"}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./utils.js"),t=require("./PhoneticWord.js");function n(n){return new Promise(function(s){(0,e.getWordStressPosition)(n).then(function(e){var i=new t.PhoneticWord(n,e.stress);console.log("Stress position: ".concat(i.stressPosition)),s(i.value)})})}window.addEventListener("load",function(){var e=document.getElementById("transcribe");e.addEventListener("click",function(){var t=document.getElementById("input-text").value.toLowerCase();e.classList.add("disabled"),n(t).then(function(t){document.getElementById("result").innerText=t,document.getElementById("result-container").classList.remove("invisible"),e.classList.remove("disabled")})})});
},{"./utils.js":"MgTz","./PhoneticWord.js":"uvH6"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.9e071623.js.map