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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NextSider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _NextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextMenu */ \"./src/components/Layouts/partials/NextMenu.jsx\");\n\n\n\nconst { Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction NextSider(param) {\n    let { collapsed  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        style: {\n            height: \"100vh\",\n            position: \"sticky\",\n            top: 0\n        },\n        theme: \"light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 64\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Typography.Title, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"#1890ff\"\n                            },\n                            children: \"e\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        \" Mail\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NextMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextSider.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = NextSider;\nvar _c;\n$RefreshReg$(_c, \"NextSider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL3BhcnRpYWxzL05leHRTaWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUNyQjtBQUNsQyxNQUFNLEVBQUVLLE1BQUssRUFBRSxHQUFHSix3Q0FBTUE7QUFFVCxTQUFTSyxVQUFVLEtBQWEsRUFBRTtRQUFmLEVBQUVDLFVBQVMsRUFBRSxHQUFiO0lBQ2hDLHFCQUNFLDhEQUFDRjtRQUNDRyxPQUFPO1lBQ0xDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1FBQ1A7UUFDQUMsT0FBTzs7MEJBS1AsOERBQUNDO2dCQUNDTCxPQUFPO29CQUNMQyxRQUFRO2dCQUNWOzBCQUVBLDRFQUFDTixrREFBZ0I7O3NDQUNmLDhEQUFDWTs0QkFBS1AsT0FBTztnQ0FBRVEsT0FBTzs0QkFBVTtzQ0FBRzs7Ozs7O3dCQUFROzs7Ozs7Ozs7Ozs7MEJBVS9DLDhEQUFDWixpREFBUUE7Ozs7Ozs7Ozs7O0FBU2YsQ0FBQztLQXRDdUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvcGFydGlhbHMvTmV4dFNpZGVyLmpzeD84YTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlLCBMYXlvdXQsIE1lbnUsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IE5leHRNZW51IGZyb20gXCIuL05leHRNZW51XCI7XG5jb25zdCB7IFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5leHRTaWRlcih7IGNvbGxhcHNlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNpZGVyXG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgcG9zaXRpb246IFwic3RpY2t5XCIsXG4gICAgICAgIHRvcDogMCxcbiAgICAgIH19XG4gICAgICB0aGVtZT17XCJsaWdodFwifVxuICAgICAgLy8gdHJpZ2dlcj17bnVsbH1cbiAgICAgIC8vIGNvbGxhcHNpYmxlXG4gICAgICAvLyBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiA2NCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGU+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzE4OTBmZlwiIH19PmU8L3NwYW4+IE1haWxcbiAgICAgICAgPC9UeXBvZ3JhcGh5LlRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEltYWdlXG4gICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgIHNyYz1cImh0dHBzOi8vbG9nb3Mtd29ybGQubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA1L1pvaG8tTWFpbC1Mb2dvLnBuZ1wiXG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgIHByZXZpZXc9e2ZhbHNlfVxuICAgICAgLz4gKi99XG4gICAgICA8TmV4dE1lbnUgLz5cbiAgICAgIHsvKiA8TWVudVxuICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjFcIl19XG4gICAgICAgIGl0ZW1zPXtOZXh0TWVudX1cbiAgICAgIC8+ICovfVxuICAgIDwvU2lkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMYXlvdXQiLCJNZW51IiwiVHlwb2dyYXBoeSIsIk5leHRNZW51IiwiU2lkZXIiLCJOZXh0U2lkZXIiLCJjb2xsYXBzZWQiLCJzdHlsZSIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwidGhlbWUiLCJkaXYiLCJUaXRsZSIsInNwYW4iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layouts/partials/NextSider.jsx\n"));

/***/ })

});