"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscriptions";
exports.ids = ["pages/api/subscriptions"];
exports.modules = {

/***/ "./src/lib/email.ts":
/*!**************************!*\
  !*** ./src/lib/email.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidEmail\": () => (/* binding */ isValidEmail)\n/* harmony export */ });\nconst re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\nconst isValidEmail = email => re.test(email);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2VtYWlsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUcsdUlBQVg7QUFFTyxNQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBNEJGLEVBQUUsQ0FBQ0csSUFBSCxDQUFRRCxLQUFSLENBQWpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tYXRlcmlhbHVpLXRlbXBsYXRlLy4vc3JjL2xpYi9lbWFpbC50cz9hYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlID0gL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy87XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPSAoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4gPT4gcmUudGVzdChlbWFpbCk7XG4iXSwibmFtZXMiOlsicmUiLCJpc1ZhbGlkRW1haWwiLCJlbWFpbCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/email.ts\n");

/***/ }),

/***/ "./src/pages/api/subscriptions.ts":
/*!****************************************!*\
  !*** ./src/pages/api/subscriptions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lib_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/email */ \"./src/lib/email.ts\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n // THIS IS IN MEMORY STATE\n// will reset on every app restart\n\nconst subs = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_connect__WEBPACK_IMPORTED_MODULE_1___default()().get(async (req, res) => {\n  return res.json(subs);\n}).post(async (req, res) => {\n  if (!(0,lib_email__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)(req.body.email)) {\n    return res.status(400).json({\n      error: \"invalid-email\"\n    });\n  }\n\n  subs.push({\n    email: req.body.email,\n    updated: Date.now()\n  });\n  return res.status(204).end();\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmlwdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0NBSUE7QUFDQTs7QUFDQSxNQUFNRSxJQUFJLEdBQUcsRUFBYjtBQUVBLGlFQUFlRCxtREFBRSxHQUNkRSxHQURZLENBQ1IsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3ZCLFNBQU9BLEdBQUcsQ0FBQ0MsSUFBSixDQUFTSixJQUFULENBQVA7QUFDRCxDQUhZLEVBSVpLLElBSlksQ0FJUCxPQUFPSCxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDeEIsTUFBSSxDQUFDTCx1REFBWSxDQUFDSSxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBVixDQUFqQixFQUFtQztBQUNqQyxXQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCSixJQUFoQixDQUFxQjtBQUFFSyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0Q7O0FBRURULEVBQUFBLElBQUksQ0FBQ1UsSUFBTCxDQUFVO0FBQUVILElBQUFBLEtBQUssRUFBRUwsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEtBQWxCO0FBQXlCSSxJQUFBQSxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsR0FBTDtBQUFsQyxHQUFWO0FBQ0EsU0FBT1YsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQk0sR0FBaEIsRUFBUDtBQUNELENBWFksQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbWF0ZXJpYWx1aS10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9hcGkvc3Vic2NyaXB0aW9ucy50cz85NjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVmFsaWRFbWFpbCB9IGZyb20gXCJsaWIvZW1haWxcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcblxuLy8gVEhJUyBJUyBJTiBNRU1PUlkgU1RBVEVcbi8vIHdpbGwgcmVzZXQgb24gZXZlcnkgYXBwIHJlc3RhcnRcbmNvbnN0IHN1YnMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgbmM8TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZT4oKVxuICAuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHJldHVybiByZXMuanNvbihzdWJzKTtcbiAgfSlcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKCFpc1ZhbGlkRW1haWwocmVxLmJvZHkuZW1haWwpKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJpbnZhbGlkLWVtYWlsXCIgfSk7XG4gICAgfVxuXG4gICAgc3Vicy5wdXNoKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsLCB1cGRhdGVkOiBEYXRlLm5vdygpIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuZW5kKCk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbImlzVmFsaWRFbWFpbCIsIm5jIiwic3VicyIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJwb3N0IiwiYm9keSIsImVtYWlsIiwic3RhdHVzIiwiZXJyb3IiLCJwdXNoIiwidXBkYXRlZCIsIkRhdGUiLCJub3ciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/subscriptions.ts\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscriptions.ts"));
module.exports = __webpack_exports__;

})();