"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Layouts/partials/NextSider.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Layouts/partials/NextSider.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NextSider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _NextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextMenu */ \"./src/components/Layouts/partials/NextMenu.jsx\");\n\n\n\nconst { Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction NextSider(param) {\n    let { collapsed  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        style: {\n            height: \"100vh\",\n            position: \"sticky\",\n            top: 0\n        },\n        theme: \"light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 64,\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Typography.Title, {\n                    level: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"#1890ff\"\n                            },\n                            children: \"e\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        \" Mail\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NextMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = NextSider;\nvar _c;\n$RefreshReg$(_c, \"NextSider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL3BhcnRpYWxzL05leHRTaWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUNyQjtBQUNsQyxNQUFNLEVBQUVLLE1BQUssRUFBRSxHQUFHSix3Q0FBTUE7QUFFVCxTQUFTSyxVQUFVLEtBQWEsRUFBRTtRQUFmLEVBQUVDLFVBQVMsRUFBRSxHQUFiO0lBQ2hDLHFCQUNFLDhEQUFDRjtRQUNDRyxPQUFPO1lBQ0xDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1FBQ1A7UUFDQUMsT0FBTzs7MEJBS1AsOERBQUNDO2dCQUNDTCxPQUFPO29CQUNMQyxRQUFRO29CQUNSSyxTQUFTO29CQUNUQyxnQkFBZ0I7b0JBQ2hCQyxZQUFZO2dCQUNkOzBCQUVBLDRFQUFDYixrREFBZ0I7b0JBQUNlLE9BQU87O3NDQUN2Qiw4REFBQ0M7NEJBQUtYLE9BQU87Z0NBQUVZLE9BQU87NEJBQVU7c0NBQUc7Ozs7Ozt3QkFBUTs7Ozs7Ozs7Ozs7OzBCQVUvQyw4REFBQ2hCLGlEQUFRQTs7Ozs7Ozs7Ozs7QUFTZixDQUFDO0tBekN1QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9wYXJ0aWFscy9OZXh0U2lkZXIuanN4PzhhMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UsIExheW91dCwgTWVudSwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTmV4dE1lbnUgZnJvbSBcIi4vTmV4dE1lbnVcIjtcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV4dFNpZGVyKHsgY29sbGFwc2VkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2lkZXJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJzdGlja3lcIixcbiAgICAgICAgdG9wOiAwLFxuICAgICAgfX1cbiAgICAgIHRoZW1lPXtcImxpZ2h0XCJ9XG4gICAgICAvLyB0cmlnZ2VyPXtudWxsfVxuICAgICAgLy8gY29sbGFwc2libGVcbiAgICAgIC8vIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IDY0LFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlIGxldmVsPXs0fT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMTg5MGZmXCIgfX0+ZTwvc3Bhbj4gTWFpbFxuICAgICAgICA8L1R5cG9ncmFwaHkuVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9sb2dvcy13b3JsZC5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDUvWm9oby1NYWlsLUxvZ28ucG5nXCJcbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgcHJldmlldz17ZmFsc2V9XG4gICAgICAvPiAqL31cbiAgICAgIDxOZXh0TWVudSAvPlxuICAgICAgey8qIDxNZW51XG4gICAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMVwiXX1cbiAgICAgICAgaXRlbXM9e05leHRNZW51fVxuICAgICAgLz4gKi99XG4gICAgPC9TaWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxheW91dCIsIk1lbnUiLCJUeXBvZ3JhcGh5IiwiTmV4dE1lbnUiLCJTaWRlciIsIk5leHRTaWRlciIsImNvbGxhcHNlZCIsInN0eWxlIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJ0aGVtZSIsImRpdiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJUaXRsZSIsImxldmVsIiwic3BhbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layouts/partials/NextSider.jsx\n"));

/***/ })

});