"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var components_SubscribeHero_SubscribeHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SubscribeHero/SubscribeHero */ \"./src/components/SubscribeHero/SubscribeHero.tsx\");\n/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api */ \"./src/lib/api.ts\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var components_SubscriptionList_SubscriptionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SubscriptionList/SubscriptionList */ \"./src/components/SubscriptionList/SubscriptionList.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/rcano/Development/personal/blockchain/thesolidchain/next-materialui-template/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar URL = '/api/subscriptions';\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var subscribe = (0,lib_api__WEBPACK_IMPORTED_MODULE_2__.useAPIPost)(URL);\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(URL, (0,lib_api__WEBPACK_IMPORTED_MODULE_2__.secureLoader)()),\n      data = _useSWR.data,\n      mutate = _useSWR.mutate;\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    if (subscribe.posted) {\n      mutate();\n      subscribe.reset();\n    }\n  }, [subscribe.posted, mutate, subscribe]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    maxWidth: \"lg\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_SubscribeHero_SubscribeHero__WEBPACK_IMPORTED_MODULE_1__.SubscribeHero, {\n      onSubmit: function onSubmit(email) {\n        return subscribe.post({\n          email: email\n        });\n      },\n      hasError: !!subscribe.error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_SubscriptionList_SubscriptionList__WEBPACK_IMPORTED_MODULE_4__.SubscriptionList, {\n      subscriptions: data || []\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(IndexPage, \"6UptBkgUn0wFvSnm4VpSawsvTKI=\", false, function () {\n  return [lib_api__WEBPACK_IMPORTED_MODULE_2__.useAPIPost, swr__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxHQUFHLEdBQUcsb0JBQVo7O0FBRUEsSUFBTUMsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxTQUFTLEdBQUdMLG1EQUFVLENBQTBCRyxHQUExQixDQUE1Qjs7QUFDQSxnQkFBeUJGLDRDQUFNLENBQXNCRSxHQUF0QixFQUEyQkoscURBQVksRUFBdkMsQ0FBL0I7QUFBQSxNQUFRTyxJQUFSLFdBQVFBLElBQVI7QUFBQSxNQUFjQyxNQUFkLFdBQWNBLE1BQWQ7O0FBRUFYLEVBQUFBLDRDQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSVMsU0FBUyxDQUFDSSxNQUFkLEVBQXNCO0FBQ3BCRixNQUFBQSxNQUFNO0FBQ05GLE1BQUFBLFNBQVMsQ0FBQ0ssS0FBVjtBQUNEO0FBQ0YsR0FMRCxFQUtHLENBQUNMLFNBQVMsQ0FBQ0ksTUFBWCxFQUFtQkYsTUFBbkIsRUFBMkJGLFNBQTNCLENBTEg7QUFPQSxzQkFDRSw4REFBQyx3REFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDRCQUNFLDhEQUFDLGlGQUFEO0FBQWUsY0FBUSxFQUFFLGtCQUFBTSxLQUFLO0FBQUEsZUFBSU4sU0FBUyxDQUFDTyxJQUFWLENBQWU7QUFBRUQsVUFBQUEsS0FBSyxFQUFMQTtBQUFGLFNBQWYsQ0FBSjtBQUFBLE9BQTlCO0FBQTZELGNBQVEsRUFBRSxDQUFDLENBQUNOLFNBQVMsQ0FBQ1E7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0UsOERBQUMsMEZBQUQ7QUFBa0IsbUJBQWEsRUFBRVAsSUFBSSxJQUFJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBbEJEOztHQUFNRjtVQUNjSixpREFDT0M7OztLQUZyQkc7QUFvQk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBTdWJzY3JpYmVIZXJvIH0gZnJvbSAnY29tcG9uZW50cy9TdWJzY3JpYmVIZXJvL1N1YnNjcmliZUhlcm8nXG5pbXBvcnQgeyBzZWN1cmVMb2FkZXIsIHVzZUFQSVBvc3QgfSBmcm9tICdsaWIvYXBpJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25MaXN0LCBFbWFpbFN1YnNjcmlwdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvU3Vic2NyaXB0aW9uTGlzdC9TdWJzY3JpcHRpb25MaXN0J1xuXG5jb25zdCBVUkwgPSAnL2FwaS9zdWJzY3JpcHRpb25zJ1xuXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VBUElQb3N0PHZvaWQsIHsgZW1haWw6IHN0cmluZyB9PihVUkwpXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VTV1I8RW1haWxTdWJzY3JpcHRpb25bXT4oVVJMLCBzZWN1cmVMb2FkZXIoKSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdWJzY3JpYmUucG9zdGVkKSB7XG4gICAgICBtdXRhdGUoKVxuICAgICAgc3Vic2NyaWJlLnJlc2V0KClcbiAgICB9XG4gIH0sIFtzdWJzY3JpYmUucG9zdGVkLCBtdXRhdGUsIHN1YnNjcmliZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdsZyc+XG4gICAgICA8U3Vic2NyaWJlSGVybyBvblN1Ym1pdD17ZW1haWwgPT4gc3Vic2NyaWJlLnBvc3QoeyBlbWFpbCB9KX0gaGFzRXJyb3I9eyEhc3Vic2NyaWJlLmVycm9yfSAvPlxuXG4gICAgICA8U3Vic2NyaXB0aW9uTGlzdCBzdWJzY3JpcHRpb25zPXtkYXRhIHx8IFtdfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiU3Vic2NyaWJlSGVybyIsInNlY3VyZUxvYWRlciIsInVzZUFQSVBvc3QiLCJ1c2VTV1IiLCJTdWJzY3JpcHRpb25MaXN0IiwiVVJMIiwiSW5kZXhQYWdlIiwic3Vic2NyaWJlIiwiZGF0YSIsIm11dGF0ZSIsInVzZUVmZmVjdCIsInBvc3RlZCIsInJlc2V0IiwiZW1haWwiLCJwb3N0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});