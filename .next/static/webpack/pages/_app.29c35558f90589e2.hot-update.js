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

/***/ "./src/contexts/AssetContext.js":
/*!**************************************!*\
  !*** ./src/contexts/AssetContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AssetContext\": function() { return /* binding */ AssetContext; },\n/* harmony export */   \"default\": function() { return /* binding */ AssetContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.js\");\n/* harmony import */ var _utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notificationHandler */ \"./src/utils/notificationHandler.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AssetContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AssetContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isAssetLoading, setAssetLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [assetById, setAssetById] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [assets, setAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAsset = async ()=>{\n        setAssetLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.asset);\n            setAsset(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.asset);\n            setAssetLoading(false);\n        } catch (e) {\n            var _e_response;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setAssetLoading(false);\n        }\n    };\n    const addAsset = async (data)=>{\n        setAssetLoading(true);\n        try {\n            let formData = new FormData();\n            formData.append(\"name\", data.name);\n            formData.append(\"senderName\", data.senderName);\n            formData.append(\"subject\", data.subject);\n            formData.append(\"body\", data.body);\n            formData.append(\"images\", data.images);\n            formData.append(\"pdf\", data.pdf.fileList[0].originFileObj);\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.asset, formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            Router.push(\"/asset\");\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            getAsset();\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const deleteAsset = async (id)=>{\n        setAssetLoading(true);\n        try {\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.asset, \"/\").concat(id));\n            getAsset();\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result.data);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const updateAsset = async (data)=>{\n        setAssetLoading(true);\n        try {\n            let formData = new FormData();\n            formData.append(\"name\", data.name);\n            formData.append(\"senderName\", data.senderName);\n            formData.append(\"subject\", data.subject);\n            formData.append(\"body\", data.body);\n            formData.append(\"images\", data.images);\n            formData.append(\"pdf\", data.pdf.fileList[0].originFileObj);\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.asset, \"/\").concat(data.id), formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            Router.push(\"/asset\");\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result === null || result === void 0 ? void 0 : result.data);\n            getAsset();\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            setAssetLoading(false);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n        }\n    };\n    const GetAssetById = async (id)=>{\n        setAssetLoading(true);\n        try {\n            var _result_data;\n            const result = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(_utils_api__WEBPACK_IMPORTED_MODULE_2__.API.asset, \"/\").concat(id));\n            setAssetLoading(false);\n            setAssetById(result === null || result === void 0 ? void 0 : (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.asset);\n        } catch (e) {\n            var _e_response, _e_response1;\n            console.log(e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.data);\n            (0,_utils_notificationHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e === null || e === void 0 ? void 0 : (_e_response1 = e.response) === null || _e_response1 === void 0 ? void 0 : _e_response1.data, \"error\");\n            setAssetLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetContext.Provider, {\n        value: {\n            getAsset,\n            isAssetLoading,\n            addAsset,\n            assets,\n            deleteAsset,\n            GetAssetById,\n            assetById\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/prince/Desktop/Projects/khan-kaku/email-react/src/contexts/AssetContext.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, this);\n}\n_s(AssetContextProvider, \"8M9JYBkhyinmTqWNXlprFPNmOjw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = AssetContextProvider;\nvar _c;\n$RefreshReg$(_c, \"AssetContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTdHdUJEOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQXNzZXRDb250ZXh0LmpzPzgwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiQC91dGlscy9hcGlcIjtcbmltcG9ydCBGZXRjaCBmcm9tIFwiQC91dGlscy9heGlvc1wiO1xuaW1wb3J0IE5vdG9maWNhdGlvbkhhbmRsZXIgZnJvbSBcIkAvdXRpbHMvbm90aWZpY2F0aW9uSGFuZGxlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBBc3NldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2V0Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzQXNzZXRMb2FkaW5nLCBzZXRBc3NldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXNzZXRCeUlkLCBzZXRBc3NldEJ5SWRdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IFthc3NldHMsIHNldEFzc2V0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRBc3NldCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRBc3NldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLmdldChBUEkuYXNzZXQpO1xuICAgICAgc2V0QXNzZXQocmVzdWx0Py5kYXRhPy5hc3NldCk7XG4gICAgICBzZXRBc3NldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGU/LnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIHNldEFzc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZEFzc2V0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBzZXRBc3NldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBkYXRhLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2VuZGVyTmFtZVwiLCBkYXRhLnNlbmRlck5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic3ViamVjdFwiLCBkYXRhLnN1YmplY3QpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYm9keVwiLCBkYXRhLmJvZHkpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VzXCIsIGRhdGEuaW1hZ2VzKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBkZlwiLCBkYXRhLnBkZi5maWxlTGlzdFswXS5vcmlnaW5GaWxlT2JqKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEZldGNoLnBvc3QoQVBJLmFzc2V0LCBmb3JtRGF0YSwge1xuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICB9KTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Fzc2V0XCIpO1xuICAgICAgc2V0QXNzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIocmVzdWx0Py5kYXRhKTtcbiAgICAgIGdldEFzc2V0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgc2V0QXNzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIE5vdG9maWNhdGlvbkhhbmRsZXIoZT8ucmVzcG9uc2U/LmRhdGEsIFwiZXJyb3JcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUFzc2V0ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0QXNzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5kZWxldGUoYCR7QVBJLmFzc2V0fS8ke2lkfWApO1xuICAgICAgZ2V0QXNzZXQoKTtcbiAgICAgIHNldEFzc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBzZXRBc3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihlPy5yZXNwb25zZT8uZGF0YSwgXCJlcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQXNzZXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHNldEFzc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIGRhdGEubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzZW5kZXJOYW1lXCIsIGRhdGEuc2VuZGVyTmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzdWJqZWN0XCIsIGRhdGEuc3ViamVjdCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJib2R5XCIsIGRhdGEuYm9keSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgZGF0YS5pbWFnZXMpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGRmXCIsIGRhdGEucGRmLmZpbGVMaXN0WzBdLm9yaWdpbkZpbGVPYmopO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRmV0Y2gucHV0KGAke0FQSS5hc3NldH0vJHtkYXRhLmlkfWAsIGZvcm1EYXRhLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgIH0pO1xuICAgICAgUm91dGVyLnB1c2goXCIvYXNzZXRcIik7XG4gICAgICBzZXRBc3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihyZXN1bHQ/LmRhdGEpO1xuICAgICAgZ2V0QXNzZXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBzZXRBc3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgTm90b2ZpY2F0aW9uSGFuZGxlcihlPy5yZXNwb25zZT8uZGF0YSwgXCJlcnJvclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgR2V0QXNzZXRCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0QXNzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBGZXRjaC5nZXQoYCR7QVBJLmFzc2V0fS8ke2lkfWApO1xuICAgICAgc2V0QXNzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldEFzc2V0QnlJZChyZXN1bHQ/LmRhdGE/LmFzc2V0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlPy5yZXNwb25zZT8uZGF0YSk7XG4gICAgICBOb3RvZmljYXRpb25IYW5kbGVyKGU/LnJlc3BvbnNlPy5kYXRhLCBcImVycm9yXCIpO1xuICAgICAgc2V0QXNzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXNzZXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnZXRBc3NldCxcbiAgICAgICAgaXNBc3NldExvYWRpbmcsXG4gICAgICAgIGFkZEFzc2V0LFxuICAgICAgICBhc3NldHMsXG4gICAgICAgIGRlbGV0ZUFzc2V0LFxuICAgICAgICBHZXRBc3NldEJ5SWQsXG4gICAgICAgIGFzc2V0QnlJZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXNzZXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQVBJIiwiRmV0Y2giLCJOb3RvZmljYXRpb25IYW5kbGVyIiwidXNlUm91dGVyIiwiQXNzZXRDb250ZXh0IiwiQXNzZXRDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlJvdXRlciIsImlzQXNzZXRMb2FkaW5nIiwic2V0QXNzZXRMb2FkaW5nIiwiYXNzZXRCeUlkIiwic2V0QXNzZXRCeUlkIiwiYXNzZXRzIiwic2V0QXNzZXQiLCJnZXRBc3NldCIsInJlc3VsdCIsImdldCIsImFzc2V0IiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJhZGRBc3NldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJuYW1lIiwic2VuZGVyTmFtZSIsInN1YmplY3QiLCJib2R5IiwiaW1hZ2VzIiwicGRmIiwiZmlsZUxpc3QiLCJvcmlnaW5GaWxlT2JqIiwicG9zdCIsImhlYWRlcnMiLCJwdXNoIiwiZGVsZXRlQXNzZXQiLCJpZCIsImRlbGV0ZSIsInVwZGF0ZUFzc2V0IiwicHV0IiwiR2V0QXNzZXRCeUlkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AssetContext.js\n"));

/***/ })

});