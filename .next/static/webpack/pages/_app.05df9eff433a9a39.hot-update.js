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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CamapignContext\": function() { return /* binding */ CamapignContext; },\n/* harmony export */   \"default\": function() { return /* binding */ CamapignContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CamapignContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CamapignContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isCampaignLoading, setIsCampaignLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [campaignById, setCampaignById] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [campaign, setCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getCampaign = async ()=>{\n        setIsCampaignLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign);\n            setCampaign(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.campaign);\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setIsCampaignLoading(false);\n        }\n    };\n    const addCampaign = async (data)=>{\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, data);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            Router.push(\"/campaign\");\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    const deleteCampaign = async (id)=>{\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(id));\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result.data);\n            getCampaign();\n        } catch (e) {\n            var _e_response;\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    const getCampaignById = async (id)=>{\n        setIsCampaignLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(id));\n            setCampaignById(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.campaign);\n            setIsCampaignLoading(false);\n        } catch (e) {\n            setIsCampaignLoading(false);\n        }\n    };\n    const updateCampaign = async (data)=>{\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.campaign, \"/\").concat(data.id), data);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            Router.push(\"/campaign\");\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    const updateCampaignStatus = async (data)=>{\n        setIsCampaignLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.updateCampaignStatus, \"/\").concat(data.id), data);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            getCampaign();\n            setIsCampaignLoading(false);\n        } catch (e) {\n            var _e_response;\n            setIsCampaignLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CamapignContext.Provider, {\n        value: {\n            isCampaignLoading,\n            campaign,\n            getCampaign,\n            addCampaign,\n            deleteCampaign,\n            getCampaignById,\n            campaignById,\n            updateCampaign,\n            updateCampaignStatus\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/CampaignContext.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(CamapignContextProvider, \"FT5DYGYFBBauPYdmteaUEHXO6uA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = CamapignContextProvider;\nvar _c;\n$RefreshReg$(_c, \"CamapignContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FRO1lBQ0FHO1lBQ0FHO1lBQ0FsQjtZQUNBbUI7WUFDQUU7UUFDRjtrQkFFQ3pCOzs7Ozs7QUFHUCxDQUFDO0dBckd1QkQ7O1FBQ1BGLGtEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9DYW1wYWlnbkNvbnRleHQuanM/MDAxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuaW1wb3J0IEZldGNoIGZyb20gXCJAL3V0aWxzL2F4aW9zXCI7XG5pbXBvcnQgTm90b2ZpY2F0aW9uSGFuZGxlciBmcm9tIFwiQC91dGlscy9ub3RpZmljYXRpb25IYW5kbGVyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IENhbWFwaWduQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtYXBpZ25Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNDYW1wYWlnbkxvYWRpbmcsIHNldElzQ2FtcGFpZ25Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhbXBhaWduQnlJZCwgc2V0Q2FtcGFpZ25CeUlkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NhbXBhaWduLCBzZXRDYW1wYWlnbl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0Q2FtcGFpZ24gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLmdldChBUEkuY2FtcGFpZ24pO1xuICAgICAgc2V0Q2FtcGFpZ24ocmVzdWx0Py5kYXRhPy5jYW1wYWlnbik7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRDYW1wYWlnbiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnBvc3QoQVBJLmNhbXBhaWduLCBkYXRhKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2NhbXBhaWduXCIpO1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNhbXBhaWduID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLmRlbGV0ZShgJHtBUEkuY2FtcGFpZ259LyR7aWR9YCk7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgIGdldENhbXBhaWduKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihlPy5yZXNwb25zZT8uZGF0YSwgXCJlcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2FtcGFpZ25CeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLmdldChgJHtBUEkuY2FtcGFpZ259LyR7aWR9YCk7XG4gICAgICBzZXRDYW1wYWlnbkJ5SWQocmVzdWx0Py5kYXRhPy5jYW1wYWlnbik7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVDYW1wYWlnbiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnB1dChgJHtBUEkuY2FtcGFpZ259LyR7ZGF0YS5pZH1gLCBkYXRhKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2NhbXBhaWduXCIpO1xuICAgICAgc2V0SXNDYW1wYWlnbkxvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNhbXBhaWduU3RhdHVzID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBzZXRJc0NhbXBhaWduTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2gucHV0KFxuICAgICAgICBgJHtBUEkudXBkYXRlQ2FtcGFpZ25TdGF0dXN9LyR7ZGF0YS5pZH1gLFxuICAgICAgICBkYXRhXG4gICAgICApO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQ/LmRhdGEpO1xuICAgICAgZ2V0Q2FtcGFpZ24oKTtcbiAgICAgIHNldElzQ2FtcGFpZ25Mb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRJc0NhbXBhaWduTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYW1hcGlnbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzQ2FtcGFpZ25Mb2FkaW5nLFxuICAgICAgICBjYW1wYWlnbixcbiAgICAgICAgZ2V0Q2FtcGFpZ24sXG4gICAgICAgIGFkZENhbXBhaWduLFxuICAgICAgICBkZWxldGVDYW1wYWlnbixcbiAgICAgICAgZ2V0Q2FtcGFpZ25CeUlkLFxuICAgICAgICBjYW1wYWlnbkJ5SWQsXG4gICAgICAgIHVwZGF0ZUNhbXBhaWduLFxuICAgICAgICB1cGRhdGVDYW1wYWlnblN0YXR1cyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FtYXBpZ25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQVBJIiwiRmV0Y2giLCJOb3RvZmljYXRpb25IYW5kbGVyIiwidXNlUm91dGVyIiwiQ2FtYXBpZ25Db250ZXh0IiwiQ2FtYXBpZ25Db250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlJvdXRlciIsImlzQ2FtcGFpZ25Mb2FkaW5nIiwic2V0SXNDYW1wYWlnbkxvYWRpbmciLCJjYW1wYWlnbkJ5SWQiLCJzZXRDYW1wYWlnbkJ5SWQiLCJjYW1wYWlnbiIsInNldENhbXBhaWduIiwiZ2V0Q2FtcGFpZ24iLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImFkZENhbXBhaWduIiwicG9zdCIsInB1c2giLCJkZWxldGVDYW1wYWlnbiIsImlkIiwiZGVsZXRlIiwiZ2V0Q2FtcGFpZ25CeUlkIiwidXBkYXRlQ2FtcGFpZ24iLCJwdXQiLCJ1cGRhdGVDYW1wYWlnblN0YXR1cyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CampaignContext.js\n"));

/***/ })

});