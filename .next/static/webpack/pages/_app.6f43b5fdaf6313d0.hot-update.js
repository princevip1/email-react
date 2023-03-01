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

/***/ "./src/contexts/ProxyContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ProxyContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProxyContext\": function() { return /* binding */ ProxyContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ProxyContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProxyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ProxyContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const [isProxyLoading, setProxyLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [proxy, setProxy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getProxy = async ()=>{\n        setProxyLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.proxy);\n            setProxy(result === null || result === void 0 ? void 0 : result.data);\n            setProxyLoading(false);\n        } catch (e) {\n            var _e_response;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setProxyLoading(false);\n        }\n    };\n    const addProxy = async function(data) {\n        let setOpenModal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        setProxyLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.proxy, data);\n            setOpenModal(false);\n            setProxyLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            getProxy();\n        } catch (e) {\n            var _e_response;\n            setOpenModal(false);\n            setProxyLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data, \"error\");\n        }\n    };\n    const deleteProxy = async (id)=>{\n        setProxyLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.proxy, \"/\").concat(id));\n            getProxy();\n            setProxyLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setProxyLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProxyContext.Provider, {\n        value: {\n            getProxy,\n            isProxyLoading,\n            addProxy,\n            proxy,\n            deleteProxy\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/ProxyContext.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(ProxyContextProvider, \"R5WiOyBp0BP6mMPcxiuvST84Zz0=\");\n_c = ProxyContextProvider;\nvar _c;\n$RefreshReg$(_c, \"ProxyContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUHJveHlDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF1RDtBQUNyQjtBQUNBO0FBQzRCO0FBRXZELE1BQU1NLDZCQUFlTCxvREFBYUEsR0FBRztBQUU3QixTQUFTTSxxQkFBcUIsS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7O0lBQzNDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNVyxXQUFXLFVBQVk7UUFDM0JILGdCQUFnQixJQUFJO1FBQ3BCLElBQUk7WUFDRixNQUFNSSxTQUFTLE1BQU1WLHdEQUFTLENBQUNELGlEQUFTO1lBQ3hDUyxTQUFTRSxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFFLElBQUk7WUFDckJOLGdCQUFnQixLQUFLO1FBQ3ZCLEVBQUUsT0FBT08sR0FBRztnQkFDRUE7WUFBWkMsUUFBUUMsR0FBRyxDQUFDRixjQUFBQSxlQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxFQUFHRyxRQUFRLGNBQVhILHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRCxJQUFGO1lBQ3ZCTixnQkFBZ0IsS0FBSztRQUN2QjtJQUNGO0lBRUEsTUFBTVcsV0FBVyxlQUFPTCxNQUErQjtZQUF6Qk0sZ0ZBQWUsS0FBSztRQUNoRFosZ0JBQWdCLElBQUk7UUFDcEIsSUFBSTtZQUNGLE1BQU1JLFNBQVMsTUFBTVYseURBQVUsQ0FBQ0QsaURBQVMsRUFBRWE7WUFDM0NNLGFBQWEsS0FBSztZQUNsQlosZ0JBQWdCLEtBQUs7WUFDckJMLHNFQUFtQkEsQ0FBQ1MsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxJQUFJO1lBQ2hDSDtRQUNGLEVBQUUsT0FBT0ksR0FBRztnQkFHVUE7WUFGcEJLLGFBQWEsS0FBSztZQUNsQlosZ0JBQWdCLEtBQUs7WUFDckJMLHNFQUFtQkEsQ0FBQ1ksY0FBQUEsZUFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsY0FBQUEsRUFBR0csUUFBUSxjQUFYSCx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYUQsSUFBRixFQUFRO1FBQ3pDO0lBQ0Y7SUFFQSxNQUFNUSxjQUFjLE9BQU9DLEtBQU87UUFDaENmLGdCQUFnQixJQUFJO1FBQ3BCLElBQUk7WUFDRixNQUFNSSxTQUFTLE1BQU1WLDhEQUFZLENBQUMsR0FBZ0JxQixPQUFidEIsaURBQVMsRUFBQyxLQUFNLE9BQUhzQjtZQUNsRFo7WUFDQUgsZ0JBQWdCLEtBQUs7WUFDckJMLHNFQUFtQkEsQ0FBQ1MsT0FBT0UsSUFBSTtRQUNqQyxFQUFFLE9BQU9DLEdBQUc7Z0JBQ0VBLGFBRVFBO1lBRnBCQyxRQUFRQyxHQUFHLENBQUNGLGNBQUFBLGVBQUFBLEtBQUFBLElBQUFBLENBQUFBLGNBQUFBLEVBQUdHLFFBQVEsY0FBWEgseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFELElBQUY7WUFDdkJOLGdCQUFnQixLQUFLO1lBQ3JCTCxzRUFBbUJBLENBQUNZLGNBQUFBLGVBQUFBLEtBQUFBLElBQUFBLENBQUFBLGVBQUFBLEVBQUdHLFFBQVEsY0FBWEgsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWFELElBQUYsRUFBUTtRQUN6QztJQUNGO0lBRUEscUJBQ0UsOERBQUNWLGFBQWFxQixRQUFRO1FBQ3BCQyxPQUFPO1lBQUVmO1lBQVVKO1lBQWdCWTtZQUFVVjtZQUFPYTtRQUFZO2tCQUUvRGhCOzs7Ozs7QUFHUCxDQUFDO0dBcER1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1Byb3h5Q29udGV4dC5qcz9iZWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgRmV0Y2ggZnJvbSBcIkAvdXRpbHMvYXhpb3NcIjtcbmltcG9ydCBOb3RvZmljYXRpb25IYW5kbGVyIGZyb20gXCJAL3V0aWxzL25vdGlmaWNhdGlvbkhhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IFByb3h5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJveHlDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtpc1Byb3h5TG9hZGluZywgc2V0UHJveHlMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb3h5LCBzZXRQcm94eV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZ2V0UHJveHkgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UHJveHlMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5nZXQoQVBJLnByb3h5KTtcbiAgICAgIHNldFByb3h5KHJlc3VsdD8uZGF0YSk7XG4gICAgICBzZXRQcm94eUxvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGU/LnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIHNldFByb3h5TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb3h5ID0gYXN5bmMgKGRhdGEsIHNldE9wZW5Nb2RhbCA9IGZhbHNlKSA9PiB7XG4gICAgc2V0UHJveHlMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5wb3N0KEFQSS5wcm94eSwgZGF0YSk7XG4gICAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICAgICAgc2V0UHJveHlMb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIGdldFByb3h5KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcbiAgICAgIHNldFByb3h5TG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm94eSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHNldFByb3h5TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2guZGVsZXRlKGAke0FQSS5wcm94eX0vJHtpZH1gKTtcbiAgICAgIGdldFByb3h5KCk7XG4gICAgICBzZXRQcm94eUxvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgc2V0UHJveHlMb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb3h5Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgZ2V0UHJveHksIGlzUHJveHlMb2FkaW5nLCBhZGRQcm94eSwgcHJveHksIGRlbGV0ZVByb3h5IH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJveHlDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQVBJIiwiRmV0Y2giLCJOb3RvZmljYXRpb25IYW5kbGVyIiwiUHJveHlDb250ZXh0IiwiUHJveHlDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzUHJveHlMb2FkaW5nIiwic2V0UHJveHlMb2FkaW5nIiwicHJveHkiLCJzZXRQcm94eSIsImdldFByb3h5IiwicmVzdWx0IiwiZ2V0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJhZGRQcm94eSIsInNldE9wZW5Nb2RhbCIsInBvc3QiLCJkZWxldGVQcm94eSIsImlkIiwiZGVsZXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ProxyContext.js\n"));

/***/ })

});