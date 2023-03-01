"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/asset",{

/***/ "./src/pages/asset/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/asset/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AssetContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AssetContext */ \"./src/contexts/AssetContext.js\");\n/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/index */ \"./src/components/Layouts/index.jsx\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Assets = ()=>{\n    _s();\n    const { assets , getAsset , deleteAsset , isAssetLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AssetContext__WEBPACK_IMPORTED_MODULE_1__.AssetContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getAsset();\n    }, [\n        1\n    ]);\n    const columns = [\n        {\n            title: \"Name\",\n            dataIndex: \"name\",\n            key: \"name\"\n        },\n        {\n            title: \"Image\",\n            dataIndex: \"images\",\n            key: \"images\",\n            render: (images)=>{\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Text, {\n                    children: images === null || images === void 0 ? void 0 : images.length\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 27\n                }, undefined);\n            }\n        },\n        {\n            title: \"Pdf\",\n            dataIndex: \"pdfs\",\n            key: \"images\",\n            render: (pdfs)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Text, {\n                    children: \"1\"\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 25\n                }, undefined)\n        },\n        {\n            title: \"Action\",\n            dataIndex: \"action\",\n            key: \"action\",\n            render: (text, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/asset/edit/\".concat(record._id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                size: \"small\",\n                                type: \"primary\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Popconfirm, {\n                            title: \"Are you sure to delete this task?\",\n                            onConfirm: ()=>deleteAsset(record._id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                size: \"small\",\n                                type: \"primary\",\n                                danger: true,\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    console.log(\"assets\", assets);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        title: \"Assets\",\n        extra: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/asset/add-asset\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                size: \"small\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.PlusCircleOutlined, {}, void 0, false, void 0, void 0),\n                type: \"primary\",\n                children: \"Add Asset\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Table, {\n            loading: isAssetLoading,\n            size: \"small\",\n            dataSource: assets,\n            columns: columns\n        }, void 0, false, {\n            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Assets, \"BlqbXjpFJnjTSKOwai0adRrS4FA=\");\n_c = Assets;\nAssets.Layout = _layouts_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Assets);\nvar _c;\n$RefreshReg$(_c, \"Assets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXNzZXQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXVEO0FBQ2pCO0FBQ2lCO0FBQ21CO0FBQzdDO0FBQ1k7QUFDTjtBQUVuQyxNQUFNYSxTQUFTLElBQU07O0lBQ25CLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLFlBQVcsRUFBRUMsZUFBYyxFQUFFLEdBQ3JETCxpREFBVUEsQ0FBQ1osZ0VBQVlBO0lBRXpCVyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RJO0lBQ0YsR0FBRztRQUFDO0tBQUU7SUFFTixNQUFNRyxVQUFVO1FBQ2Q7WUFDRUMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0M7OEJBQVcscUVBQUNmLGlEQUFlOzhCQUFFZSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFFLE1BQU07Ozs7Ozs7UUFDdEQ7UUFDQTtZQUNFTixPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsS0FBSztZQUNMQyxRQUFRLENBQUNJLHFCQUFTLDhEQUFDbEIsaURBQWU7OEJBQUM7Ozs7OztRQUNyQztRQUNBO1lBQ0VXLE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0ssTUFBTUMsdUJBQ2IsOERBQUN0Qix1Q0FBS0E7O3NDQUNKLDhEQUFDRyxrREFBSUE7NEJBQUNvQixNQUFNLGVBQTBCLE9BQVhELE9BQU9FLEdBQUc7c0NBQ25DLDRFQUFDM0Isd0NBQU1BO2dDQUFDNEIsTUFBSztnQ0FBUUMsTUFBSzswQ0FBVTs7Ozs7Ozs7Ozs7c0NBSXRDLDhEQUFDM0IsNENBQVVBOzRCQUNUYyxPQUFNOzRCQUNOYyxXQUFXLElBQU1qQixZQUFZWSxPQUFPRSxHQUFHO3NDQUV2Qyw0RUFBQzNCLHdDQUFNQTtnQ0FBQzRCLE1BQUs7Z0NBQVFDLE1BQUs7Z0NBQVVFLE1BQU07MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBTW5EO0tBQ0Q7SUFDREMsUUFBUUMsR0FBRyxDQUFDLFVBQVV0QjtJQUN0QixxQkFDRSw4REFBQ1Ysc0NBQUlBO1FBQ0hlLE9BQU07UUFDTmtCLHFCQUNFLDhEQUFDNUIsa0RBQUlBO1lBQUNvQixNQUFLO3NCQUNULDRFQUFDMUIsd0NBQU1BO2dCQUFDNEIsTUFBSztnQkFBUU8sb0JBQU0sOERBQUNwQyxpRUFBa0JBO2dCQUFLOEIsTUFBSzswQkFBVTs7O2tCQU10RSw0RUFBQ3pCLHVDQUFLQTtZQUNKZ0MsU0FBU3RCO1lBQ1RjLE1BQU07WUFDTlMsWUFBWTFCO1lBQ1pJLFNBQVNBOzs7Ozs7Ozs7OztBQUlqQjtHQXJFTUw7S0FBQUE7QUF1RU5BLE9BQU80QixNQUFNLEdBQUd4QyxzREFBT0E7QUFDdkIsK0RBQWVZLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fzc2V0L2luZGV4LmpzeD9mYzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzc2V0Q29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL0Fzc2V0Q29udGV4dFwiO1xuaW1wb3J0IExheW91dHMgZnJvbSBcIkAvbGF5b3V0cy9pbmRleFwiO1xuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFBvcGNvbmZpcm0sIFNwYWNlLCBUYWJsZSwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFzc2V0cyA9ICgpID0+IHtcbiAgY29uc3QgeyBhc3NldHMsIGdldEFzc2V0LCBkZWxldGVBc3NldCwgaXNBc3NldExvYWRpbmcgfSA9XG4gICAgdXNlQ29udGV4dChBc3NldENvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXNzZXQoKTtcbiAgfSwgWzFdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIk5hbWVcIixcbiAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXG4gICAgICBrZXk6IFwibmFtZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSW1hZ2VcIixcbiAgICAgIGRhdGFJbmRleDogXCJpbWFnZXNcIixcbiAgICAgIGtleTogXCJpbWFnZXNcIixcbiAgICAgIHJlbmRlcjogKGltYWdlcykgPT4gPFR5cG9ncmFwaHkuVGV4dD57aW1hZ2VzPy5sZW5ndGh9PC9UeXBvZ3JhcGh5LlRleHQ+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiUGRmXCIsXG4gICAgICBkYXRhSW5kZXg6IFwicGRmc1wiLFxuICAgICAga2V5OiBcImltYWdlc1wiLFxuICAgICAgcmVuZGVyOiAocGRmcykgPT4gPFR5cG9ncmFwaHkuVGV4dD4xPC9UeXBvZ3JhcGh5LlRleHQ+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWN0aW9uXCIsXG4gICAgICBkYXRhSW5kZXg6IFwiYWN0aW9uXCIsXG4gICAgICBrZXk6IFwiYWN0aW9uXCIsXG4gICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcbiAgICAgICAgPFNwYWNlPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXNzZXQvZWRpdC8ke3JlY29yZC5faWR9YH0+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8UG9wY29uZmlybVxuICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIlxuICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVBc3NldChyZWNvcmQuX2lkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHR5cGU9XCJwcmltYXJ5XCIgZGFuZ2VyPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAgPC9TcGFjZT5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcbiAgY29uc29sZS5sb2coXCJhc3NldHNcIiwgYXNzZXRzKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgdGl0bGU9XCJBc3NldHNcIlxuICAgICAgZXh0cmE9e1xuICAgICAgICA8TGluayBocmVmPVwiL2Fzc2V0L2FkZC1hc3NldFwiPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgaWNvbj17PFBsdXNDaXJjbGVPdXRsaW5lZCAvPn0gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIEFkZCBBc3NldFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICB9XG4gICAgPlxuICAgICAgPFRhYmxlXG4gICAgICAgIGxvYWRpbmc9e2lzQXNzZXRMb2FkaW5nfVxuICAgICAgICBzaXplPXtcInNtYWxsXCJ9XG4gICAgICAgIGRhdGFTb3VyY2U9e2Fzc2V0c31cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgIC8+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuQXNzZXRzLkxheW91dCA9IExheW91dHM7XG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iXSwibmFtZXMiOlsiQXNzZXRDb250ZXh0IiwiTGF5b3V0cyIsIlBsdXNDaXJjbGVPdXRsaW5lZCIsIkJ1dHRvbiIsIkNhcmQiLCJQb3Bjb25maXJtIiwiU3BhY2UiLCJUYWJsZSIsIlR5cG9ncmFwaHkiLCJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiQXNzZXRzIiwiYXNzZXRzIiwiZ2V0QXNzZXQiLCJkZWxldGVBc3NldCIsImlzQXNzZXRMb2FkaW5nIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwiaW1hZ2VzIiwiVGV4dCIsImxlbmd0aCIsInBkZnMiLCJ0ZXh0IiwicmVjb3JkIiwiaHJlZiIsIl9pZCIsInNpemUiLCJ0eXBlIiwib25Db25maXJtIiwiZGFuZ2VyIiwiY29uc29sZSIsImxvZyIsImV4dHJhIiwiaWNvbiIsImxvYWRpbmciLCJkYXRhU291cmNlIiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/asset/index.jsx\n"));

/***/ })

});