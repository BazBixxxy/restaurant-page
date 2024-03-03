/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contentSection = document.getElementById("content");
const aboutButton = document.getElementById("aboutUs");
const contactButton = document.getElementById("contact");
const arrowButton = document.querySelector("arrow");
aboutButton.addEventListener("click", renderContactPage);
contactButton.addEventListener("click", renderContactPage);
arrowButton.addEventListener("click", renderContactPage);
function renderContactPage() {
  contentSection.classList.remove("home");
  document.querySelector("header").style = `
  box-shadow: none;
  `;
  document.body.style = `background-color: aliceblue;`;
  contentSection.innerHTML = `
    <div class="contact-banner">
        <h2>We Are Foodies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores dicta
          voluptatem sit? Quae ipsa eaque repellat sapiente amet ratione alias.
          eligendi. Atque nemo ipsum error distinctio facere reprehenderit
          voluptas vel necessitatibus corporis.
        </p>
        <button>Reservations</button>
      </div>
      <div class="about-banner">
        <div class="top">
          <div class="left-line"></div>
          <h2>Contact Us</h2>
          <div class="right-line"></div>
        </div>
        <p>
          We are situated on Kololo Avenue, Kampala <br />
          For any inquiries, reach out to us.
        </p>
        <div class="bottom">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
  `;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);
/******/ })()
;
//# sourceMappingURL=events.2bc0457c884f32ea210f.js.map