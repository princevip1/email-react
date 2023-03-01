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

/***/ "./src/contexts/CampaignContext.js":
/*!*****************************************!*\
  !*** ./src/contexts/CampaignContext.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CamapignContext\": function() { return /* binding */ CamapignContext; },\n/* harmony export */   \"default\": function() { return /* binding */ CamapignContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CamapignContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CamapignContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isCampaignLoading, setIsCampaignLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [campaignById, setCampaignById] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [campaign, setCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getCampaign = async ()=>{\n        setIsCampaignLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign);\n            setCampaign(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.campaign);\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setIsCampaignLoading(false);\n        }\n    };\n    const addCampaign = async function(data) {\n        let form = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, data);\n            getSmtp();\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            Router.push(\"/campaign\");\n            form.resetFields();\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            form.resetFields();\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    const deleteCampaign = async (id)=>{\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(id));\n            getSmtp();\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const getCampaignById = async (id)=>{\n        setIsCampaignLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(id));\n            setCampaignById(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.campaign);\n            setIsCampaignLoading(false);\n        } catch (e) {\n            setIsCampaignLoading(false);\n        }\n    };\n    const updateCampaign = async function(data) {\n        let form = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(data.id), data);\n            getSmtp();\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            Router.push(\"/campaign\");\n            form.resetFields();\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CamapignContext.Provider, {\n        value: {\n            isCampaignLoading,\n            campaign,\n            getCampaign,\n            addCampaign,\n            deleteCampaign,\n            getCampaignById,\n            campaignById,\n            updateCampaign\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/CampaignContext.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(CamapignContextProvider, \"FT5DYGYFBBauPYdmteaUEHXO6uA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = CamapignContextProvider;\nvar _c;\n$RefreshReg$(_c, \"CamapignContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBWSxFQUFDLEtBQU0sT0FBSDZCO1lBQ2xEbEIsZ0JBQWdCSSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGVBQUFBLE9BQVFFLElBQUksY0FBWkYsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNILFFBQUY7WUFDNUJILHFCQUFxQixLQUFLO1FBQzVCLEVBQUUsT0FBT1MsR0FBRztZQUNWVCxxQkFBcUIsS0FBSztRQUM1QjtJQUNGO0lBRUEsTUFBTXVCLGlCQUFpQixlQUFPZixNQUFzQjtZQUFoQk0sd0VBQU8sSUFBSTtRQUM3Q2QscUJBQXFCLElBQUk7UUFDekIsSUFBSTtZQUNGLE1BQU1NLFNBQVMsTUFBTWQsd0RBQVMsQ0FBQyxHQUFtQmdCLE9BQWhCakIsb0RBQVksRUFBQyxLQUFXLE9BQVJpQixLQUFLWSxFQUFFLEdBQUlaO1lBQzdEUTtZQUNBdkIsc0VBQW1CQSxDQUFDYSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFFLElBQUk7WUFDaENWLE9BQU9tQixJQUFJLENBQUM7WUFDWkgsS0FBS0ksV0FBVztZQUNoQmxCLHFCQUFxQixLQUFLO1FBQzVCLEVBQUUsT0FBT1MsR0FBRztnQkFFVUE7WUFEcEJULHFCQUFxQixLQUFLO1lBQzFCUCxzRUFBbUJBLENBQUNnQixjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxFQUFHRyxRQUFRLGNBQVhILHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRCxJQUFGLEVBQVE7UUFDekM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYixnQkFBZ0I4QixRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0wzQjtZQUNBSTtZQUNBRTtZQUNBUTtZQUNBTTtZQUNBRztZQUNBckI7WUFDQXNCO1FBQ0Y7a0JBRUMxQjs7Ozs7O0FBR1AsQ0FBQztHQTVGdUJEOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQ2FtcGFpZ25Db250ZXh0LmpzPzAwMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiQC91dGlscy9hcGlcIjtcbmltcG9ydCBGZXRjaCBmcm9tIFwiQC91dGlscy9heGlvc1wiO1xuaW1wb3J0IE5vdG9maWNhdGlvbkhhbmRsZXIgZnJvbSBcIkAvdXRpbHMvbm90aWZpY2F0aW9uSGFuZGxlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBDYW1hcGlnbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbWFwaWduQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzQ2FtcGFpZ25Mb2FkaW5nLCBzZXRJc0NhbXBhaWduTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NhbXBhaWduQnlJZCwgc2V0Q2FtcGFpZ25CeUlkXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBbY2FtcGFpZ24sIHNldENhbXBhaWduXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRDYW1wYWlnbiA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0NhbXBhaWduTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2guZ2V0KEFQSS5jYW1wYWlnbik7XG4gICAgICBzZXRDYW1wYWlnbihyZXN1bHQ/LmRhdGE/LmNhbXBhaWduKTtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZENhbXBhaWduID0gYXN5bmMgKGRhdGEsIGZvcm0gPSBudWxsKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnBvc3QoQVBJLmNhbXBhaWduLCBkYXRhKTtcbiAgICAgIGdldFNtdHAoKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2NhbXBhaWduXCIpO1xuICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNhbXBhaWduID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLmRlbGV0ZShgJHtBUEkuY2FtcGFpZ259LyR7aWR9YCk7XG4gICAgICBnZXRTbXRwKCk7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDYW1wYWlnbkJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBzZXRJc0NhbXBhaWduTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2guZ2V0KGAke0FQSS5jYW1wYWlnbn0vJHtpZH1gKTtcbiAgICAgIHNldENhbXBhaWduQnlJZChyZXN1bHQ/LmRhdGE/LmNhbXBhaWduKTtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNhbXBhaWduID0gYXN5bmMgKGRhdGEsIGZvcm0gPSBudWxsKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnB1dChgJHtBUEkuY2FtcGFpZ259LyR7ZGF0YS5pZH1gLCBkYXRhKTtcbiAgICAgIGdldFNtdHAoKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2NhbXBhaWduXCIpO1xuICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhbWFwaWduQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNDYW1wYWlnbkxvYWRpbmcsXG4gICAgICAgIGNhbXBhaWduLFxuICAgICAgICBnZXRDYW1wYWlnbixcbiAgICAgICAgYWRkQ2FtcGFpZ24sXG4gICAgICAgIGRlbGV0ZUNhbXBhaWduLFxuICAgICAgICBnZXRDYW1wYWlnbkJ5SWQsXG4gICAgICAgIGNhbXBhaWduQnlJZCxcbiAgICAgICAgdXBkYXRlQ2FtcGFpZ24sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhbWFwaWduQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFQSSIsIkZldGNoIiwiTm90b2ZpY2F0aW9uSGFuZGxlciIsInVzZVJvdXRlciIsIkNhbWFwaWduQ29udGV4dCIsIkNhbWFwaWduQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJSb3V0ZXIiLCJpc0NhbXBhaWduTG9hZGluZyIsInNldElzQ2FtcGFpZ25Mb2FkaW5nIiwiY2FtcGFpZ25CeUlkIiwic2V0Q2FtcGFpZ25CeUlkIiwiY2FtcGFpZ24iLCJzZXRDYW1wYWlnbiIsImdldENhbXBhaWduIiwicmVzdWx0IiwiZ2V0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJhZGRDYW1wYWlnbiIsImZvcm0iLCJwb3N0IiwiZ2V0U210cCIsInB1c2giLCJyZXNldEZpZWxkcyIsImRlbGV0ZUNhbXBhaWduIiwiaWQiLCJkZWxldGUiLCJnZXRDYW1wYWlnbkJ5SWQiLCJ1cGRhdGVDYW1wYWlnbiIsInB1dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CampaignContext.js\n"));

/***/ })

});