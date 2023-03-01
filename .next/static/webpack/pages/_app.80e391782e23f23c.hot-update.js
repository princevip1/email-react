"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/TestMailContext.js":
/*!*****************************************!*\
  !*** ./src/contexts/TestMailContext.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestMailContaxt\": function() { return /* binding */ TestMailContaxt; },\n/* harmony export */   \"default\": function() { return /* binding */ TestMailContaxtProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TestMailContaxt = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction TestMailContaxtProvider(param) {\n    let { children  } = param;\n    _s();\n    const [isMailTestLoading, setMailTestLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sendEmail = async ()=>{\n        setMailTestLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.emailTest);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            setMailTestLoading(false);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n            setMailTestLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TestMailContaxt.Provider, {\n        value: {\n            sendEmail,\n            isMailTestLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/TestMailContext.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(TestMailContaxtProvider, \"Q4ijIcyCQJ4VZtQ8q6YpQ2gEnt8=\");\n_c = TestMailContaxtProvider;\nvar _c;\n$RefreshReg$(_c, \"TestMailContaxtProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVGVzdE1haWxDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF1RDtBQUNyQjtBQUNBO0FBQzRCO0FBRXZELE1BQU1NLGdDQUFrQkwsb0RBQWFBLEdBQUc7QUFFaEMsU0FBU00sd0JBQXdCLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUM5QyxNQUFNLENBQUNDLG1CQUFtQkMsbUJBQW1CLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUQsTUFBTVMsWUFBWSxVQUFZO1FBQzVCRCxtQkFBbUIsSUFBSTtRQUN2QixJQUFJO1lBQ0YsTUFBTUUsU0FBUyxNQUFNUix5REFBVSxDQUFDRCxxREFBYTtZQUM3Q0Usc0VBQW1CQSxDQUFDTyxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFHLElBQUk7WUFDaENMLG1CQUFtQixLQUFLO1FBQzFCLEVBQUUsT0FBT00sR0FBRztnQkFDRUEsYUFDUUE7WUFEcEJDLFFBQVFDLEdBQUcsQ0FBQ0YsY0FBQUEsZUFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsRUFBR0csUUFBUSxjQUFYSCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUQsSUFBRjtZQUN2QlYsc0VBQW1CQSxDQUFDVyxjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxFQUFHRyxRQUFRLGNBQVhILDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFhRCxJQUFGLEVBQVE7WUFDdkNMLG1CQUFtQixLQUFLO1FBQzFCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0osZ0JBQWdCYyxRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0xWO1lBQ0FGO1FBQ0Y7a0JBRUNEOzs7Ozs7QUFHUCxDQUFDO0dBMUJ1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1Rlc3RNYWlsQ29udGV4dC5qcz8wOTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgRmV0Y2ggZnJvbSBcIkAvdXRpbHMvYXhpb3NcIjtcbmltcG9ydCBOb3RvZmljYXRpb25IYW5kbGVyIGZyb20gXCJAL3V0aWxzL25vdGlmaWNhdGlvbkhhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRlc3RNYWlsQ29udGF4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdE1haWxDb250YXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtpc01haWxUZXN0TG9hZGluZywgc2V0TWFpbFRlc3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TWFpbFRlc3RMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5wb3N0KEFQSS5lbWFpbFRlc3QpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQ/LmRhdGEpO1xuICAgICAgc2V0TWFpbFRlc3RMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgICAgc2V0TWFpbFRlc3RMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGVzdE1haWxDb250YXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzZW5kRW1haWwsXG4gICAgICAgIGlzTWFpbFRlc3RMb2FkaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UZXN0TWFpbENvbnRheHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBUEkiLCJGZXRjaCIsIk5vdG9maWNhdGlvbkhhbmRsZXIiLCJUZXN0TWFpbENvbnRheHQiLCJUZXN0TWFpbENvbnRheHRQcm92aWRlciIsImNoaWxkcmVuIiwiaXNNYWlsVGVzdExvYWRpbmciLCJzZXRNYWlsVGVzdExvYWRpbmciLCJzZW5kRW1haWwiLCJyZXN1bHQiLCJwb3N0IiwiZW1haWxUZXN0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/TestMailContext.js\n"));

/***/ })

});