"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/validator",{

/***/ "./src/components/Layouts/partials/NextMenu.jsx":
/*!******************************************************!*\
  !*** ./src/components/Layouts/partials/NextMenu.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n// import { UserOutlined } from \"@ant-design/icons\";\n// import { Typography } from \"antd\";\n// import Link from \"next/link\";\n// export const NextMenu = [\n//   {\n//     key: \"1\",\n//     label: <Typography.Text type=\"secondary\">Main</Typography.Text>,\n//   },\n//   {\n//     key: \"2\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/dashboard\">Dashboard</Link>,\n//   },\n//   {\n//     key: \"3\",\n//     label: <Typography.Text type=\"secondary\">Contacts</Typography.Text>,\n//   },\n//   {\n//     key: \"4\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/validator\">Mail Validator</Link>,\n//   },\n//   {\n//     key: \"5\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/contact\">Contact</Link>,\n//   },\n//   {\n//     key: \"7\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/smtp\">Smtp</Link>,\n//   },\n//   {\n//     key: \"8\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/asset\">Asset</Link>,\n//   },\n//   {\n//     key: \"9\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/proxy\">Proxy</Link>,\n//   },\n//   {\n//     key: \"10\",\n//     label: <Typography.Text type=\"secondary\">Sending</Typography.Text>,\n//   },\n//   {\n//     key: \"11\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/campaign\">Campaign</Link>,\n//   },\n//   {\n//     key: \"12\",\n//     icon: <UserOutlined />,\n//     label: <Link href=\"/testing\">Testing</Link>,\n//   },\n// ];\n\n\n\nfunction getItem(label, key, icon, children, type) {\n    return {\n        key,\n        icon,\n        children,\n        label,\n        type\n    };\n}\nconst items = [\n    getItem(\"Navigation One\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.MailOutlined, {}, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextMenu.jsx\",\n        lineNumber: 73,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Item 1\", \"g1\", null, [\n            getItem(\"Option 1\", \"1\"),\n            getItem(\"Option 2\", \"2\")\n        ], \"group\"),\n        getItem(\"Item 2\", \"g2\", null, [\n            getItem(\"Option 3\", \"3\"),\n            getItem(\"Option 4\", \"4\")\n        ], \"group\")\n    ]),\n    getItem(\"Navigation Two\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.AppstoreOutlined, {}, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextMenu.jsx\",\n        lineNumber: 89,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Option 5\", \"5\"),\n        getItem(\"Option 6\", \"6\"),\n        getItem(\"Submenu\", \"sub3\", null, [\n            getItem(\"Option 7\", \"7\"),\n            getItem(\"Option 8\", \"8\")\n        ])\n    ]),\n    {\n        type: \"divider\"\n    },\n    getItem(\"Navigation Three\", \"sub4\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, {}, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextMenu.jsx\",\n        lineNumber: 100,\n        columnNumber: 39\n    }, undefined), [\n        getItem(\"Option 9\", \"9\"),\n        getItem(\"Option 10\", \"10\"),\n        getItem(\"Option 11\", \"11\"),\n        getItem(\"Option 12\", \"12\")\n    ]),\n    getItem(\"Group\", \"grp\", null, [\n        getItem(\"Option 13\", \"13\"),\n        getItem(\"Option 14\", \"14\")\n    ], \"group\")\n];\nconst NextMenu = ()=>{\n    const onClick = (e)=>{\n        console.log(\"click \", e);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        onClick: onClick,\n        style: {\n            width: 256\n        },\n        defaultSelectedKeys: [\n            \"1\"\n        ],\n        defaultOpenKeys: [\n            \"sub1\"\n        ],\n        mode: \"inline\",\n        items: items\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/components/Layouts/partials/NextMenu.jsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NextMenu);\nvar _c;\n$RefreshReg$(_c, \"NextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL3BhcnRpYWxzL05leHRNZW51LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUFvRDtBQUNwRCxxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBRWhDLDRCQUE0QjtBQUM1QixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLHVFQUF1RTtBQUN2RSxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsdURBQXVEO0FBQ3ZELE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsNERBQTREO0FBQzVELE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixtREFBbUQ7QUFDbkQsT0FBTztBQUVQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLDZDQUE2QztBQUM3QyxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsK0NBQStDO0FBQy9DLE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QiwrQ0FBK0M7QUFDL0MsT0FBTztBQUNQLE1BQU07QUFDTixpQkFBaUI7QUFDakIsMEVBQTBFO0FBQzFFLE9BQU87QUFDUCxNQUFNO0FBQ04saUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixxREFBcUQ7QUFDckQsT0FBTztBQUNQLE1BQU07QUFDTixpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLG1EQUFtRDtBQUNuRCxPQUFPO0FBQ1AsS0FBSztBQUVMO0FBQW9GO0FBQ3hEO0FBQzVCLFNBQVNJLFFBQVFDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ2pELE9BQU87UUFDTEg7UUFDQUM7UUFDQUM7UUFDQUg7UUFDQUk7SUFDRjtBQUNGO0FBQ0EsTUFBTUMsUUFBUTtJQUNaTixRQUFRLGtCQUFrQixzQkFBUSw4REFBQ0gsMkRBQVlBOzs7O21CQUFLO1FBQ2xERyxRQUNFLFVBQ0EsTUFDQSxJQUFJLEVBQ0o7WUFBQ0EsUUFBUSxZQUFZO1lBQU1BLFFBQVEsWUFBWTtTQUFLLEVBQ3BEO1FBRUZBLFFBQ0UsVUFDQSxNQUNBLElBQUksRUFDSjtZQUFDQSxRQUFRLFlBQVk7WUFBTUEsUUFBUSxZQUFZO1NBQUssRUFDcEQ7S0FFSDtJQUNEQSxRQUFRLGtCQUFrQixzQkFBUSw4REFBQ0osK0RBQWdCQTs7OzttQkFBSztRQUN0REksUUFBUSxZQUFZO1FBQ3BCQSxRQUFRLFlBQVk7UUFDcEJBLFFBQVEsV0FBVyxRQUFRLElBQUksRUFBRTtZQUMvQkEsUUFBUSxZQUFZO1lBQ3BCQSxRQUFRLFlBQVk7U0FDckI7S0FDRjtJQUNEO1FBQ0VLLE1BQU07SUFDUjtJQUNBTCxRQUFRLG9CQUFvQixzQkFBUSw4REFBQ0YsOERBQWVBOzs7O21CQUFLO1FBQ3ZERSxRQUFRLFlBQVk7UUFDcEJBLFFBQVEsYUFBYTtRQUNyQkEsUUFBUSxhQUFhO1FBQ3JCQSxRQUFRLGFBQWE7S0FDdEI7SUFDREEsUUFDRSxTQUNBLE9BQ0EsSUFBSSxFQUNKO1FBQUNBLFFBQVEsYUFBYTtRQUFPQSxRQUFRLGFBQWE7S0FBTSxFQUN4RDtDQUVIO0FBQ0QsTUFBTU8sV0FBVyxJQUFNO0lBQ3JCLE1BQU1DLFVBQVUsQ0FBQ0MsSUFBTTtRQUNyQkMsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO0lBQ3hCO0lBQ0EscUJBQ0UsOERBQUNWLHNDQUFJQTtRQUNIUyxTQUFTQTtRQUNUSSxPQUFPO1lBQ0xDLE9BQU87UUFDVDtRQUNBQyxxQkFBcUI7WUFBQztTQUFJO1FBQzFCQyxpQkFBaUI7WUFBQztTQUFPO1FBQ3pCQyxNQUFLO1FBQ0xWLE9BQU9BOzs7Ozs7QUFHYjtLQWhCTUM7QUFpQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9wYXJ0aWFscy9OZXh0TWVudS5qc3g/NmZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbi8vIGltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyBleHBvcnQgY29uc3QgTmV4dE1lbnUgPSBbXG4vLyAgIHtcbi8vICAgICBrZXk6IFwiMVwiLFxuLy8gICAgIGxhYmVsOiA8VHlwb2dyYXBoeS5UZXh0IHR5cGU9XCJzZWNvbmRhcnlcIj5NYWluPC9UeXBvZ3JhcGh5LlRleHQ+LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAga2V5OiBcIjJcIixcbi8vICAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxuLy8gICAgIGxhYmVsOiA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPkRhc2hib2FyZDwvTGluaz4sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBrZXk6IFwiM1wiLFxuLy8gICAgIGxhYmVsOiA8VHlwb2dyYXBoeS5UZXh0IHR5cGU9XCJzZWNvbmRhcnlcIj5Db250YWN0czwvVHlwb2dyYXBoeS5UZXh0Pixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGtleTogXCI0XCIsXG4vLyAgICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcbi8vICAgICBsYWJlbDogPExpbmsgaHJlZj1cIi92YWxpZGF0b3JcIj5NYWlsIFZhbGlkYXRvcjwvTGluaz4sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBrZXk6IFwiNVwiLFxuLy8gICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXG4vLyAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+LFxuLy8gICB9LFxuXG4vLyAgIHtcbi8vICAgICBrZXk6IFwiN1wiLFxuLy8gICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXG4vLyAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvc210cFwiPlNtdHA8L0xpbms+LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAga2V5OiBcIjhcIixcbi8vICAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxuLy8gICAgIGxhYmVsOiA8TGluayBocmVmPVwiL2Fzc2V0XCI+QXNzZXQ8L0xpbms+LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAga2V5OiBcIjlcIixcbi8vICAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxuLy8gICAgIGxhYmVsOiA8TGluayBocmVmPVwiL3Byb3h5XCI+UHJveHk8L0xpbms+LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAga2V5OiBcIjEwXCIsXG4vLyAgICAgbGFiZWw6IDxUeXBvZ3JhcGh5LlRleHQgdHlwZT1cInNlY29uZGFyeVwiPlNlbmRpbmc8L1R5cG9ncmFwaHkuVGV4dD4sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBrZXk6IFwiMTFcIixcbi8vICAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxuLy8gICAgIGxhYmVsOiA8TGluayBocmVmPVwiL2NhbXBhaWduXCI+Q2FtcGFpZ248L0xpbms+LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAga2V5OiBcIjEyXCIsXG4vLyAgICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcbi8vICAgICBsYWJlbDogPExpbmsgaHJlZj1cIi90ZXN0aW5nXCI+VGVzdGluZzwvTGluaz4sXG4vLyAgIH0sXG4vLyBdO1xuXG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5mdW5jdGlvbiBnZXRJdGVtKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuLCB0eXBlKSB7XG4gIHJldHVybiB7XG4gICAga2V5LFxuICAgIGljb24sXG4gICAgY2hpbGRyZW4sXG4gICAgbGFiZWwsXG4gICAgdHlwZSxcbiAgfTtcbn1cbmNvbnN0IGl0ZW1zID0gW1xuICBnZXRJdGVtKFwiTmF2aWdhdGlvbiBPbmVcIiwgXCJzdWIxXCIsIDxNYWlsT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFxuICAgICAgXCJJdGVtIDFcIixcbiAgICAgIFwiZzFcIixcbiAgICAgIG51bGwsXG4gICAgICBbZ2V0SXRlbShcIk9wdGlvbiAxXCIsIFwiMVwiKSwgZ2V0SXRlbShcIk9wdGlvbiAyXCIsIFwiMlwiKV0sXG4gICAgICBcImdyb3VwXCJcbiAgICApLFxuICAgIGdldEl0ZW0oXG4gICAgICBcIkl0ZW0gMlwiLFxuICAgICAgXCJnMlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFtnZXRJdGVtKFwiT3B0aW9uIDNcIiwgXCIzXCIpLCBnZXRJdGVtKFwiT3B0aW9uIDRcIiwgXCI0XCIpXSxcbiAgICAgIFwiZ3JvdXBcIlxuICAgICksXG4gIF0pLFxuICBnZXRJdGVtKFwiTmF2aWdhdGlvbiBUd29cIiwgXCJzdWIyXCIsIDxBcHBzdG9yZU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbShcIk9wdGlvbiA1XCIsIFwiNVwiKSxcbiAgICBnZXRJdGVtKFwiT3B0aW9uIDZcIiwgXCI2XCIpLFxuICAgIGdldEl0ZW0oXCJTdWJtZW51XCIsIFwic3ViM1wiLCBudWxsLCBbXG4gICAgICBnZXRJdGVtKFwiT3B0aW9uIDdcIiwgXCI3XCIpLFxuICAgICAgZ2V0SXRlbShcIk9wdGlvbiA4XCIsIFwiOFwiKSxcbiAgICBdKSxcbiAgXSksXG4gIHtcbiAgICB0eXBlOiBcImRpdmlkZXJcIixcbiAgfSxcbiAgZ2V0SXRlbShcIk5hdmlnYXRpb24gVGhyZWVcIiwgXCJzdWI0XCIsIDxTZXR0aW5nT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKFwiT3B0aW9uIDlcIiwgXCI5XCIpLFxuICAgIGdldEl0ZW0oXCJPcHRpb24gMTBcIiwgXCIxMFwiKSxcbiAgICBnZXRJdGVtKFwiT3B0aW9uIDExXCIsIFwiMTFcIiksXG4gICAgZ2V0SXRlbShcIk9wdGlvbiAxMlwiLCBcIjEyXCIpLFxuICBdKSxcbiAgZ2V0SXRlbShcbiAgICBcIkdyb3VwXCIsXG4gICAgXCJncnBcIixcbiAgICBudWxsLFxuICAgIFtnZXRJdGVtKFwiT3B0aW9uIDEzXCIsIFwiMTNcIiksIGdldEl0ZW0oXCJPcHRpb24gMTRcIiwgXCIxNFwiKV0sXG4gICAgXCJncm91cFwiXG4gICksXG5dO1xuY29uc3QgTmV4dE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxNZW51XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IDI1NixcbiAgICAgIH19XG4gICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIxXCJdfVxuICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbXCJzdWIxXCJdfVxuICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICBpdGVtcz17aXRlbXN9XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOZXh0TWVudTtcbiJdLCJuYW1lcyI6WyJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiTWVudSIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsInR5cGUiLCJpdGVtcyIsIk5leHRNZW51Iiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJ3aWR0aCIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJkZWZhdWx0T3BlbktleXMiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layouts/partials/NextMenu.jsx\n"));

/***/ })

});