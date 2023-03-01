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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AssetContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AssetContext */ \"./src/contexts/AssetContext.js\");\n/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/index */ \"./src/components/Layouts/index.jsx\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Assets = ()=>{\n    _s();\n    const { assets , getAsset , deleteAsset , isAssetLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AssetContext__WEBPACK_IMPORTED_MODULE_1__.AssetContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getAsset();\n    }, [\n        1\n    ]);\n    const columns = [\n        {\n            title: \"Name\",\n            dataIndex: \"name\",\n            key: \"name\"\n        },\n        {\n            title: \"Image\",\n            dataIndex: \"images\",\n            key: \"images\",\n            render: (images)=>{\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Text, {\n                    children: images === null || images === void 0 ? void 0 : images.length\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 27\n                }, undefined);\n            }\n        },\n        {\n            title: \"Pdf\",\n            dataIndex: \"pdfs\",\n            key: \"images\",\n            render: (pdfs)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Text, {\n                    children: \"1\"\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 25\n                }, undefined)\n        },\n        {\n            title: \"Action\",\n            dataIndex: \"action\",\n            key: \"action\",\n            // render: (text, record) => (\n            //   <Space>\n            //     <Link href={`/asset/edit/${record._id}`}>\n            //       <Button size=\"small\" type=\"primary\">\n            //         Edit\n            //       </Button>\n            //     </Link>\n            //     <Popconfirm\n            //       title=\"Are you sure to delete this task?\"\n            //       onConfirm={() => deleteAsset(record._id)}\n            //     >\n            //       <Button size=\"small\" type=\"primary\" danger>\n            //         Delete\n            //       </Button>\n            //     </Popconfirm>\n            //   </Space>\n            // ),\n            render: (_, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {\n                    overlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {\n                                    title: \"Edit\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/asset/edit/\".concat(record._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.EditOutlined, {}, void 0, false, void 0, void 0),\n                                            type: \"ghost\",\n                                            size: \"small\",\n                                            children: \"Edit\"\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {\n                                    title: \"Delete\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Popconfirm, {\n                                        title: \"Are you sure？\",\n                                        onConfirm: ()=>deleteAsset(record._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            type: \"text\",\n                                            size: \"small\",\n                                            danger: true,\n                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DeleteOutlined, {}, void 0, false, void 0, void 0),\n                                            children: \"Delete\"\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0),\n                    trigger: [\n                        \"click\"\n                    ],\n                    arrow: true,\n                    overlayStyle: {\n                        width: 200\n                    },\n                    placement: \"bottomRight\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: (e)=>e.preventDefault(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            size: \"small\",\n                            children: [\n                                \"Action\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined, {}, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    console.log(\"assets\", assets);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        title: \"Assets\",\n        extra: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/asset/add-asset\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                size: \"small\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.PlusCircleOutlined, {}, void 0, false, void 0, void 0),\n                type: \"primary\",\n                children: \"Add Asset\"\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Table, {\n            loading: isAssetLoading,\n            size: \"small\",\n            dataSource: assets,\n            columns: columns\n        }, void 0, false, {\n            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/asset/index.jsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Assets, \"BlqbXjpFJnjTSKOwai0adRrS4FA=\");\n_c = Assets;\nAssets.Layout = _layouts_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Assets);\nvar _c;\n$RefreshReg$(_c, \"Assets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNITUw7S0FBQUE7QUE2SE5BLE9BQU91QyxNQUFNLEdBQUd6RCxzREFBT0E7QUFDdkIsK0RBQWVrQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hc3NldC9pbmRleC5qc3g/ZmMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NldENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy9Bc3NldENvbnRleHRcIjtcbmltcG9ydCBMYXlvdXRzIGZyb20gXCJAL2xheW91dHMvaW5kZXhcIjtcbmltcG9ydCB7XG4gIERlbGV0ZU91dGxpbmVkLFxuICBEb3duT3V0bGluZWQsXG4gIEVkaXRPdXRsaW5lZCxcbiAgUGx1c0NpcmNsZU91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgRHJvcGRvd24sXG4gIE1lbnUsXG4gIFBvcGNvbmZpcm0sXG4gIFNwYWNlLFxuICBUYWJsZSxcbiAgVG9vbHRpcCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXNzZXRzID0gKCkgPT4ge1xuICBjb25zdCB7IGFzc2V0cywgZ2V0QXNzZXQsIGRlbGV0ZUFzc2V0LCBpc0Fzc2V0TG9hZGluZyB9ID1cbiAgICB1c2VDb250ZXh0KEFzc2V0Q29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBc3NldCgpO1xuICB9LCBbMV0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiTmFtZVwiLFxuICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcbiAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbWFnZVwiLFxuICAgICAgZGF0YUluZGV4OiBcImltYWdlc1wiLFxuICAgICAga2V5OiBcImltYWdlc1wiLFxuICAgICAgcmVuZGVyOiAoaW1hZ2VzKSA9PiA8VHlwb2dyYXBoeS5UZXh0PntpbWFnZXM/Lmxlbmd0aH08L1R5cG9ncmFwaHkuVGV4dD4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQZGZcIixcbiAgICAgIGRhdGFJbmRleDogXCJwZGZzXCIsXG4gICAgICBrZXk6IFwiaW1hZ2VzXCIsXG4gICAgICByZW5kZXI6IChwZGZzKSA9PiA8VHlwb2dyYXBoeS5UZXh0PjE8L1R5cG9ncmFwaHkuVGV4dD4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBY3Rpb25cIixcbiAgICAgIGRhdGFJbmRleDogXCJhY3Rpb25cIixcbiAgICAgIGtleTogXCJhY3Rpb25cIixcbiAgICAgIC8vIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxuICAgICAgLy8gICA8U3BhY2U+XG4gICAgICAvLyAgICAgPExpbmsgaHJlZj17YC9hc3NldC9lZGl0LyR7cmVjb3JkLl9pZH1gfT5cbiAgICAgIC8vICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgdHlwZT1cInByaW1hcnlcIj5cbiAgICAgIC8vICAgICAgICAgRWRpdFxuICAgICAgLy8gICAgICAgPC9CdXR0b24+XG4gICAgICAvLyAgICAgPC9MaW5rPlxuICAgICAgLy8gICAgIDxQb3Bjb25maXJtXG4gICAgICAvLyAgICAgICB0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyB0YXNrP1wiXG4gICAgICAvLyAgICAgICBvbkNvbmZpcm09eygpID0+IGRlbGV0ZUFzc2V0KHJlY29yZC5faWQpfVxuICAgICAgLy8gICAgID5cbiAgICAgIC8vICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgdHlwZT1cInByaW1hcnlcIiBkYW5nZXI+XG4gICAgICAvLyAgICAgICAgIERlbGV0ZVxuICAgICAgLy8gICAgICAgPC9CdXR0b24+XG4gICAgICAvLyAgICAgPC9Qb3Bjb25maXJtPlxuICAgICAgLy8gICA8L1NwYWNlPlxuICAgICAgLy8gKSxcbiAgICAgIHJlbmRlcjogKF8sIHJlY29yZCkgPT4gKFxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hc3NldC9lZGl0LyR7cmVjb3JkLl9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8RWRpdE91dGxpbmVkIC8+fSB0eXBlPVwiZ2hvc3RcIiBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxQbHVzQ2lyY2xlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJlIHlvdSBzdXJl77yfXCJcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVBc3NldChyZWNvcmQuX2lkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxEZWxldGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyPXtbXCJjbGlja1wiXX1cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIG92ZXJsYXlTdHlsZT17eyB3aWR0aDogMjAwIH19XG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgPERvd25PdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgKSxcbiAgICB9LFxuICBdO1xuICBjb25zb2xlLmxvZyhcImFzc2V0c1wiLCBhc3NldHMpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICB0aXRsZT1cIkFzc2V0c1wiXG4gICAgICBleHRyYT17XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXNzZXQvYWRkLWFzc2V0XCI+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBpY29uPXs8UGx1c0NpcmNsZU91dGxpbmVkIC8+fSB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQWRkIEFzc2V0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8VGFibGVcbiAgICAgICAgbG9hZGluZz17aXNBc3NldExvYWRpbmd9XG4gICAgICAgIHNpemU9e1wic21hbGxcIn1cbiAgICAgICAgZGF0YVNvdXJjZT17YXNzZXRzfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgLz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5Bc3NldHMuTGF5b3V0ID0gTGF5b3V0cztcbmV4cG9ydCBkZWZhdWx0IEFzc2V0cztcbiJdLCJuYW1lcyI6WyJBc3NldENvbnRleHQiLCJMYXlvdXRzIiwiRGVsZXRlT3V0bGluZWQiLCJEb3duT3V0bGluZWQiLCJFZGl0T3V0bGluZWQiLCJQbHVzQ2lyY2xlT3V0bGluZWQiLCJCdXR0b24iLCJDYXJkIiwiRHJvcGRvd24iLCJNZW51IiwiUG9wY29uZmlybSIsIlNwYWNlIiwiVGFibGUiLCJUb29sdGlwIiwiVHlwb2dyYXBoeSIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJBc3NldHMiLCJhc3NldHMiLCJnZXRBc3NldCIsImRlbGV0ZUFzc2V0IiwiaXNBc3NldExvYWRpbmciLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJpbWFnZXMiLCJUZXh0IiwibGVuZ3RoIiwicGRmcyIsIl8iLCJyZWNvcmQiLCJvdmVybGF5IiwiSXRlbSIsImhyZWYiLCJfaWQiLCJpY29uIiwidHlwZSIsInNpemUiLCJvbkNvbmZpcm0iLCJkYW5nZXIiLCJ0cmlnZ2VyIiwiYXJyb3ciLCJvdmVybGF5U3R5bGUiLCJ3aWR0aCIsInBsYWNlbWVudCIsImEiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImV4dHJhIiwibG9hZGluZyIsImRhdGFTb3VyY2UiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/asset/index.jsx\n"));

/***/ })

});