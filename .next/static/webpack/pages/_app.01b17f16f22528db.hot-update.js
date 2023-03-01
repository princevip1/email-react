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

/***/ "./src/contexts/SmtpContext.js":
/*!*************************************!*\
  !*** ./src/contexts/SmtpContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SmtpContaxt\": function() { return /* binding */ SmtpContaxt; },\n/* harmony export */   \"default\": function() { return /* binding */ SmtpContaxtProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SmtpContaxt = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SmtpContaxtProvider(param) {\n    let { children  } = param;\n    _s();\n    const [isSmtpLoading, setSmtpLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [smtps, setSmtps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getSmtp = async ()=>{\n        setSmtpLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.smtp);\n            setSmtps(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.smtpGroup);\n            setSmtpLoading(false);\n        } catch (e) {\n            var _e_response;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setSmtpLoading(false);\n        }\n    };\n    const addSmtp = async function(data) {\n        let setOpenModal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        setSmtpLoading(true);\n        try {\n            let formData = new FormData();\n            formData.append(\"name\", data.name);\n            formData.append(\"file\", data.files.file.originFileObj);\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.smtp, formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            getSmtp();\n            setOpenModal(false);\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setOpenModal(false);\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const addMoreSmtp = async function(data) {\n        let setOpenModal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        setSmtpLoading(true);\n        try {\n            let formData = new FormData();\n            formData.append(\"groupId\", data.groupId);\n            formData.append(\"file\", data.files.file.originFileObj);\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.addMoreSmtp, formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            getSmtp();\n            setOpenModal(false);\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setOpenModal(false);\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const deleteSmtp = async (id)=>{\n        setSmtpLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.smtp, \"/\").concat(id));\n            getSmtp();\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setSmtpLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmtpContaxt.Provider, {\n        value: {\n            getSmtp,\n            isSmtpLoading,\n            addSmtp,\n            smtps,\n            deleteSmtp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/SmtpContext.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(SmtpContaxtProvider, \"rRnwC/8tZ/7Ml+3dK1G/IVmEy+Q=\");\n_c = SmtpContaxtProvider;\nvar _c;\n$RefreshReg$(_c, \"SmtpContaxtProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDRixjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxFQUFHRyxRQUFRLGNBQVhILHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRixJQUFGO1lBQ3ZCTyxhQUFhLEtBQUs7WUFDbEJkLGVBQWUsS0FBSztZQUNwQkwsc0VBQW1CQSxDQUFDYyxjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxFQUFHRyxRQUFRLGNBQVhILDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFhRixJQUFGLEVBQVE7UUFDekM7SUFDRjtJQUVBLE1BQU1tQixhQUFhLE9BQU9DLEtBQU87UUFDL0IzQixlQUFlLElBQUk7UUFDbkIsSUFBSTtZQUNGLE1BQU1JLFNBQVMsTUFBTVYsOERBQVksQ0FBQyxHQUFlaUMsT0FBWmxDLGdEQUFRLEVBQUMsS0FBTSxPQUFIa0M7WUFDakR4QjtZQUNBSCxlQUFlLEtBQUs7WUFDcEJMLHNFQUFtQkEsQ0FBQ1MsT0FBT0csSUFBSTtRQUNqQyxFQUFFLE9BQU9FLEdBQUc7Z0JBQ0VBLGFBRVFBO1lBRnBCQyxRQUFRQyxHQUFHLENBQUNGLGNBQUFBLGVBQUFBLEtBQUFBLElBQUFBLENBQUFBLGNBQUFBLEVBQUdHLFFBQVEsY0FBWEgseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFGLElBQUY7WUFDdkJQLGVBQWUsS0FBSztZQUNwQkwsc0VBQW1CQSxDQUFDYyxjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxFQUFHRyxRQUFRLGNBQVhILDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFhRixJQUFGLEVBQVE7UUFDekM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWCxZQUFZaUMsUUFBUTtRQUNuQkMsT0FBTztZQUFFM0I7WUFBU0o7WUFBZWM7WUFBU1o7WUFBT3lCO1FBQVc7a0JBRTNENUI7Ozs7OztBQUdQLENBQUM7R0EvRXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU210cENvbnRleHQuanM/NjFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuaW1wb3J0IEZldGNoIGZyb20gXCJAL3V0aWxzL2F4aW9zXCI7XG5pbXBvcnQgTm90b2ZpY2F0aW9uSGFuZGxlciBmcm9tIFwiQC91dGlscy9ub3RpZmljYXRpb25IYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBTbXRwQ29udGF4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU210cENvbnRheHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2lzU210cExvYWRpbmcsIHNldFNtdHBMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbc210cHMsIHNldFNtdHBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRTbXRwID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNtdHBMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5nZXQoQVBJLnNtdHApO1xuICAgICAgc2V0U210cHMocmVzdWx0Py5kYXRhPy5zbXRwR3JvdXApO1xuICAgICAgc2V0U210cExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGU/LnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIHNldFNtdHBMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkU210cCA9IGFzeW5jIChkYXRhLCBzZXRPcGVuTW9kYWwgPSBmYWxzZSkgPT4ge1xuICAgIHNldFNtdHBMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZGF0YS5uYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZGF0YS5maWxlcy5maWxlLm9yaWdpbkZpbGVPYmopO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2gucG9zdChBUEkuc210cCwgZm9ybURhdGEsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgfSk7XG4gICAgICBnZXRTbXRwKCk7XG4gICAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICAgICAgc2V0U210cExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQ/LmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGU/LnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIHNldE9wZW5Nb2RhbChmYWxzZSk7XG4gICAgICBzZXRTbXRwTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkTW9yZVNtdHAgPSBhc3luYyAoZGF0YSwgc2V0T3Blbk1vZGFsID0gZmFsc2UpID0+IHtcbiAgICBzZXRTbXRwTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJncm91cElkXCIsIGRhdGEuZ3JvdXBJZCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGRhdGEuZmlsZXMuZmlsZS5vcmlnaW5GaWxlT2JqKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnBvc3QoQVBJLmFkZE1vcmVTbXRwLCBmb3JtRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICB9KTtcbiAgICAgIGdldFNtdHAoKTtcbiAgICAgIHNldE9wZW5Nb2RhbChmYWxzZSk7XG4gICAgICBzZXRTbXRwTG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKHJlc3VsdD8uZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcbiAgICAgIHNldFNtdHBMb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVNtdHAgPSBhc3luYyAoaWQpID0+IHtcbiAgICBzZXRTbXRwTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2guZGVsZXRlKGAke0FQSS5zbXRwfS8ke2lkfWApO1xuICAgICAgZ2V0U210cCgpO1xuICAgICAgc2V0U210cExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgc2V0U210cExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihlPy5yZXNwb25zZT8uZGF0YSwgXCJlcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U210cENvbnRheHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGdldFNtdHAsIGlzU210cExvYWRpbmcsIGFkZFNtdHAsIHNtdHBzLCBkZWxldGVTbXRwIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU210cENvbnRheHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBUEkiLCJGZXRjaCIsIk5vdG9maWNhdGlvbkhhbmRsZXIiLCJTbXRwQ29udGF4dCIsIlNtdHBDb250YXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzU210cExvYWRpbmciLCJzZXRTbXRwTG9hZGluZyIsInNtdHBzIiwic2V0U210cHMiLCJnZXRTbXRwIiwicmVzdWx0IiwiZ2V0Iiwic210cCIsImRhdGEiLCJzbXRwR3JvdXAiLCJlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiYWRkU210cCIsInNldE9wZW5Nb2RhbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJuYW1lIiwiZmlsZXMiLCJmaWxlIiwib3JpZ2luRmlsZU9iaiIsInBvc3QiLCJoZWFkZXJzIiwiYWRkTW9yZVNtdHAiLCJncm91cElkIiwiZGVsZXRlU210cCIsImlkIiwiZGVsZXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SmtpContext.js\n"));

/***/ })

});