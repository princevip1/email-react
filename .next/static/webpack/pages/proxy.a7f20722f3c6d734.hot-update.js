"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/proxy",{

/***/ "./src/pages/proxy/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/proxy/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/index */ \"./src/components/Layouts/index.jsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _contexts_ProxyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/ProxyContext */ \"./src/contexts/ProxyContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Proxy = ()=>{\n    _s();\n    const { getProxy , isProxyLoading , addProxy , proxy , deleteProxy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ProxyContext__WEBPACK_IMPORTED_MODULE_3__.ProxyContext);\n    const [form] = antd__WEBPACK_IMPORTED_MODULE_4__.Form.useForm();\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onFinish = (values)=>{\n        addProxy(values, setOpenModal);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProxy();\n    }, []);\n    const columns = [\n        {\n            title: \"Sl\",\n            dataIndex: \"sl\",\n            key: \"sl\",\n            render: (text, record, index)=>{\n                return index + 1;\n            }\n        },\n        {\n            title: \"Group Name\",\n            dataIndex: \"name\",\n            key: \"name\"\n        },\n        {\n            title: \"Action\",\n            dataIndex: \"action\",\n            key: \"action\",\n            render: (_, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {\n                    overlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                title: \"Delete\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Popconfirm, {\n                                    title: \"Are you sure？\",\n                                    onConfirm: ()=>deleteProxy(record._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"text\",\n                                        size: \"small\",\n                                        danger: true,\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteOutlined, {}, void 0, false, void 0, void 0),\n                                        children: \"Delete\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0),\n                    trigger: [\n                        \"click\"\n                    ],\n                    arrow: true,\n                    overlayStyle: {\n                        width: 200\n                    },\n                    placement: \"bottomRight\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: (e)=>e.preventDefault(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            size: \"small\",\n                            children: [\n                                \"Action\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DownOutlined, {}, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        title: \"Proxy\",\n        extra: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Space, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    size: \"small\",\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.RetweetOutlined, {}, void 0, false, void 0, void 0),\n                    children: \"Reload\"\n                }, void 0, false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    onClick: ()=>setOpenModal(true),\n                    size: \"small\",\n                    type: \"primary\",\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.PlusCircleOutlined, {}, void 0, false, void 0, void 0),\n                    children: \"Add New\"\n                }, void 0, false, void 0, void 0)\n            ]\n        }, void 0, true, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                loading: isProxyLoading,\n                size: \"small\",\n                dataSource: proxy === null || proxy === void 0 ? void 0 : proxy.proxyGroup,\n                columns: columns\n            }, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                open: openModal,\n                onCancel: ()=>setOpenModal(false),\n                title: \"Add Proxy Group\",\n                footer: null,\n                width: 600,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                    layout: \"vertical\",\n                    form: form,\n                    onFinish: onFinish,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                            gutter: [\n                                16,\n                                16\n                            ],\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                    span: 24,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                                        label: \"Proxy Group Name\",\n                                        name: \"name\",\n                                        rules: [\n                                            {\n                                                required: true,\n                                                message: \"Please Enter Group Name\"\n                                            }\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                            placeholder: \"Contact Group Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                    span: 24,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                                        label: \"Proxies\",\n                                        name: \"proxies\",\n                                        rules: [\n                                            {\n                                                required: true,\n                                                message: \"Please Enter Contacts\"\n                                            }\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.TextArea, {\n                                            placeholder: \"Enter Proxies\",\n                                            autoSize: {\n                                                minRows: 10,\n                                                maxRows: 30\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                            lineNumber: 164,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Space, {\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"flex-end\",\n                                marginTop: 16\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    loading: isProxyLoading,\n                                    disabled: isProxyLoading,\n                                    onClick: ()=>setOpenModal(false),\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CloseCircleOutlined, {}, void 0, false, void 0, void 0),\n                                    danger: true,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    loading: isProxyLoading,\n                                    disabled: isProxyLoading,\n                                    htmlType: \"submit\",\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.RightCircleOutlined, {}, void 0, false, void 0, void 0),\n                                    type: \"primary\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                                    lineNumber: 187,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                            lineNumber: 171,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/pages/proxy/index.jsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Proxy, \"3tW5qqEaVK4BnN/BqDvnxrPmEuI=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_4__.Form.useForm\n    ];\n});\n_c = Proxy;\nProxy.Layout = _layouts_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Proxy);\nvar _c;\n$RefreshReg$(_c, \"Proxy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO3dDQUNQQyxNQUFLO3dDQUNMQyxPQUFPOzRDQUNMO2dEQUNFQyxVQUFVLElBQUk7Z0RBQ2RoRSxTQUFTOzRDQUNYO3lDQUNEO2tEQUVELDRFQUFDTix1Q0FBS0E7NENBQUN1RSxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUd2Qiw4REFBQ3pFLHFDQUFHQTtvQ0FBQ29FLE1BQU07OENBQ1QsNEVBQUNuRSwyQ0FBUzt3Q0FDUm9FLE9BQU87d0NBQ1BDLE1BQUs7d0NBQ0xDLE9BQU87NENBQ0w7Z0RBQ0VDLFVBQVUsSUFBSTtnREFDZGhFLFNBQVM7NENBQ1g7eUNBQ0Q7a0RBRUQsNEVBQUNOLGdEQUFjOzRDQUNidUUsYUFBWTs0Q0FDWkUsVUFBVTtnREFBRUMsU0FBUztnREFBSUMsU0FBUzs0Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLN0MsOERBQUN2RSx1Q0FBS0E7NEJBQ0p3RSxPQUFPO2dDQUNMQyxTQUFTO2dDQUNUQyxnQkFBZ0I7Z0NBQ2hCQyxXQUFXOzRCQUNiOzs4Q0FFQSw4REFBQ25GLHdDQUFNQTtvQ0FDTDhELFNBQVNyQztvQ0FDVDJELFVBQVUzRDtvQ0FDVmlDLFNBQVMsSUFBTTFCLGFBQWEsS0FBSztvQ0FDakNtQixvQkFBTSw4REFBQ3BDLGtFQUFtQkE7b0NBQzFCbUMsTUFBTTs4Q0FDUDs7Ozs7OzhDQUdELDhEQUFDbEQsd0NBQU1BO29DQUNMOEQsU0FBU3JDO29DQUNUMkQsVUFBVTNEO29DQUNWNEQsVUFBUztvQ0FDVGxDLG9CQUFNLDhEQUFDOUIsa0VBQW1CQTtvQ0FDMUIyQixNQUFLOzhDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBektNekI7O1FBR1dwQiw4Q0FBWTJCOzs7S0FIdkJQO0FBMktOQSxNQUFNK0QsTUFBTSxHQUFHdkYsc0RBQU9BO0FBQ3RCLCtEQUFld0IsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJveHkvaW5kZXguanN4PzU4Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXRzIGZyb20gXCJAL2xheW91dHMvaW5kZXhcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29sLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgTW9kYWwsXG4gIFBvcGNvbmZpcm0sXG4gIFJvdyxcbiAgU3BhY2UsXG4gIFRhYmxlLFxuICBtZXNzYWdlLFxuICBVcGxvYWQsXG4gIERyb3Bkb3duLFxuICBNZW51LFxuICBUb29sdGlwLFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgQ2xvc2VDaXJjbGVPdXRsaW5lZCxcbiAgRGVsZXRlT3V0bGluZWQsXG4gIERvd25PdXRsaW5lZCxcbiAgSW5ib3hPdXRsaW5lZCxcbiAgUGx1c0NpcmNsZU91dGxpbmVkLFxuICBSZXR3ZWV0T3V0bGluZWQsXG4gIFJpZ2h0Q2lyY2xlT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5pbXBvcnQgeyBQcm94eUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy9Qcm94eUNvbnRleHRcIjtcblxuY29uc3QgUHJveHkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ2V0UHJveHksIGlzUHJveHlMb2FkaW5nLCBhZGRQcm94eSwgcHJveHksIGRlbGV0ZVByb3h5IH0gPVxuICAgIHVzZUNvbnRleHQoUHJveHlDb250ZXh0KTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XG4gICAgYWRkUHJveHkodmFsdWVzLCBzZXRPcGVuTW9kYWwpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJveHkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiU2xcIixcbiAgICAgIGRhdGFJbmRleDogXCJzbFwiLFxuICAgICAga2V5OiBcInNsXCIsXG4gICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiR3JvdXAgTmFtZVwiLFxuICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcbiAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFjdGlvblwiLFxuICAgICAgZGF0YUluZGV4OiBcImFjdGlvblwiLFxuICAgICAga2V5OiBcImFjdGlvblwiLFxuICAgICAgcmVuZGVyOiAoXywgcmVjb3JkKSA9PiAoXG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG92ZXJsYXk9e1xuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJlIHlvdSBzdXJl77yfXCJcbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkZWxldGVQcm94eShyZWNvcmQuX2lkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxEZWxldGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyPXtbXCJjbGlja1wiXX1cbiAgICAgICAgICBhcnJvd1xuICAgICAgICAgIG92ZXJsYXlTdHlsZT17eyB3aWR0aDogMjAwIH19XG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgPERvd25PdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgKSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHRpdGxlPXtcIlByb3h5XCJ9XG4gICAgICBleHRyYT17XG4gICAgICAgIDxTcGFjZT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGljb249ezxSZXR3ZWV0T3V0bGluZWQgLz59PlxuICAgICAgICAgICAgUmVsb2FkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsKHRydWUpfVxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGljb249ezxQbHVzQ2lyY2xlT3V0bGluZWQgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIE5ld1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1NwYWNlPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxUYWJsZVxuICAgICAgICBsb2FkaW5nPXtpc1Byb3h5TG9hZGluZ31cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgZGF0YVNvdXJjZT17cHJveHk/LnByb3h5R3JvdXB9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAvPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0T3Blbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgdGl0bGU9e1wiQWRkIFByb3h5IEdyb3VwXCJ9XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgID5cbiAgICAgICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBmb3JtPXtmb3JtfSBvbkZpbmlzaD17b25GaW5pc2h9PlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIlByb3h5IEdyb3VwIE5hbWVcIn1cbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIEVudGVyIEdyb3VwIE5hbWVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgR3JvdXAgTmFtZVwiIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIlByb3hpZXNcIn1cbiAgICAgICAgICAgICAgICBuYW1lPVwicHJveGllc1wiXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIEVudGVyIENvbnRhY3RzXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJveGllc1wiXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxMCwgbWF4Um93czogMzAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxTcGFjZVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTYsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbG9hZGluZz17aXNQcm94eUxvYWRpbmd9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1Byb3h5TG9hZGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgaWNvbj17PENsb3NlQ2lyY2xlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIGRhbmdlclxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsb2FkaW5nPXtpc1Byb3h5TG9hZGluZ31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJveHlMb2FkaW5nfVxuICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGljb249ezxSaWdodENpcmNsZU91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5Qcm94eS5MYXlvdXQgPSBMYXlvdXRzO1xuZXhwb3J0IGRlZmF1bHQgUHJveHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXRzIiwiQnV0dG9uIiwiQ2FyZCIsIkNvbCIsIkZvcm0iLCJJbnB1dCIsIk1vZGFsIiwiUG9wY29uZmlybSIsIlJvdyIsIlNwYWNlIiwiVGFibGUiLCJtZXNzYWdlIiwiVXBsb2FkIiwiRHJvcGRvd24iLCJNZW51IiwiVG9vbHRpcCIsIkNsb3NlQ2lyY2xlT3V0bGluZWQiLCJEZWxldGVPdXRsaW5lZCIsIkRvd25PdXRsaW5lZCIsIkluYm94T3V0bGluZWQiLCJQbHVzQ2lyY2xlT3V0bGluZWQiLCJSZXR3ZWV0T3V0bGluZWQiLCJSaWdodENpcmNsZU91dGxpbmVkIiwiUHJveHlDb250ZXh0IiwiUHJveHkiLCJnZXRQcm94eSIsImlzUHJveHlMb2FkaW5nIiwiYWRkUHJveHkiLCJwcm94eSIsImRlbGV0ZVByb3h5IiwiZm9ybSIsInVzZUZvcm0iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJyZWNvcmQiLCJpbmRleCIsIl8iLCJvdmVybGF5IiwiSXRlbSIsIm9uQ29uZmlybSIsIl9pZCIsInR5cGUiLCJzaXplIiwiZGFuZ2VyIiwiaWNvbiIsInRyaWdnZXIiLCJhcnJvdyIsIm92ZXJsYXlTdHlsZSIsIndpZHRoIiwicGxhY2VtZW50IiwiYSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJleHRyYSIsImxvYWRpbmciLCJkYXRhU291cmNlIiwicHJveHlHcm91cCIsIm9wZW4iLCJvbkNhbmNlbCIsImZvb3RlciIsImxheW91dCIsImd1dHRlciIsInNwYW4iLCJsYWJlbCIsIm5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJUZXh0QXJlYSIsImF1dG9TaXplIiwibWluUm93cyIsIm1heFJvd3MiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwiaHRtbFR5cGUiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/proxy/index.jsx\n"));

/***/ })

});