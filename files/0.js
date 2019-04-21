(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/js/application.js":
/*!*******************************!*\
  !*** ./src/js/application.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! views/main-view */ "./src/js/views/main-view.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (MainView) {
  "use strict";

  return {
    initialize: function () {
      console.log('Wahoo!');
      var app = new MainView({
        el: document.getElementById('content')
      });
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/js/templates/main.html":
/*!************************************!*\
  !*** ./src/js/templates/main.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> <strong> 900 <img src=https://cdn.vox-cdn.com/uploads/chorus_image/image/59319581/A182669_medium.0.jpg /> </strong> </div> ";

/***/ }),

/***/ "./src/js/views/main-view.js":
/*!***********************************!*\
  !*** ./src/js/views/main-view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js"), __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js"), __webpack_require__(/*! ../templates/main.html */ "./src/js/templates/main.html")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_, Backbone, MainTemplate) {
  "use strict";

  return Backbone.View.extend({
    template: _.template(MainTemplate),
    initialize: function () {
      console.log('Wahoo!');
      console.log('Wahoo!');
      this.render();
    },
    render: function () {
      console.log('Wahoo!', this.$el);
      this.$el.append(this.template({}));
      console.log('Wahoo!');
      return this;
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=0.js.map