webpackHotUpdate("main",{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _src_css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);


const printMe = () => {
  console.log('Updating print.js...');
};

(function () {
  "use strict";

  var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'

  undefined;

  Promise.all(/*! AMD require */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! application */ "./src/js/application.js")]; (function (App) {
    debugger;
    console.log('123');
    App.initialize();
  }).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}).catch(__webpack_require__.oe);
})();

if (true) {
  module.hot.accept(printMe, function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}

/***/ })

})
//# sourceMappingURL=main.5d552f3b8299f655d680.hot-update.js.map