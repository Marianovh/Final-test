"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"email:\" + formData.email + \"     clave:\" + formData.password);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api-2-xgyd.onrender.com/api/login\", JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const newToken = response.data.token;\n            localStorage.setItem(\"token\", newToken);\n            console.log(\"login key: \" + localStorage.getItem(\"token\"));\n            setToken(newToken);\n            router.replace(\"./catalogo\");\n        } catch (error) {\n            console.error(\"Error al iniciar sesi\\xf3n:\", error);\n            console.log(JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const checkTokenValidity = ()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            // Realiza una solicitud al servidor para validar el token, si es necesario.\n            // Puedes usar la misma ruta del servidor para validar el token.\n            // Si el token es válido, redirige al usuario a la página deseada.\n            router.replace(\"./catalogo\");\n        }\n    };\n    // Llama a la función de validación cuando la página se carga\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkTokenValidity();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-6 text-center text-3xl font-extrabold text-gray-900\",\n                        children: \"Iniciar sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"loginfrm\",\n                    className: \"mt-8 space-y-6\",\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md shadow-sm -space-y-px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email-address\",\n                                            className: \"sr-only\",\n                                            children: \"Direcci\\xf3n de correo electr\\xf3nico\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"email\",\n                                            name: \"email\",\n                                            type: \"email\",\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                            placeholder: \"Direcci\\xf3n de correo electr\\xf3nico\",\n                                            onChange: handleInputChange,\n                                            value: formData.email\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"sr-only\",\n                                            children: \"Contrase\\xf1a\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"password\",\n                                            name: \"password\",\n                                            type: \"password\",\n                                            autoComplete: \"current-password\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2\",\n                                            placeholder: \"Contrase\\xf1a\",\n                                            onChange: handleInputChange,\n                                            value: formData.password\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute left-0 inset-y-0 flex items-center pl-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"h-5 w-5 text-white-500 group-hover:text-white-400\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 20 20\",\n                                            fill: \"currentColor\",\n                                            \"aria-hidden\": \"true\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                fillRule: \"evenodd\",\n                                                d: \"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\",\n                                                clipRule: \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Iniciar sesi\\xf3n\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\webfinal\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"49NubbsrJuVwyxwUHOocEvdN2kc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7a0RBRVYsOERBQUNjO3dDQUFLZCxXQUFVO2tEQUNkLDRFQUFDZTs0Q0FDQ2YsV0FBVTs0Q0FDVmdCLE9BQU07NENBQ05DLFNBQVE7NENBQ1JDLE1BQUs7NENBQ0xDLGVBQVk7c0RBRVosNEVBQUNDO2dEQUNDQyxVQUFTO2dEQUNUQyxHQUFFO2dEQUNGQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7O29DQUdSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQjtHQXZJd0J2RDs7UUFNUEQsc0RBQVNBOzs7S0FORkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZvcm1FdmVudCwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTx7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfT4oXG4gICAgeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfVxuICApO1xuXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZW1haWw6XCIgKyBmb3JtRGF0YS5lbWFpbCArIFwiICAgICBjbGF2ZTpcIiArIGZvcm1EYXRhLnBhc3N3b3JkKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHBzOi8vYXBpLTIteGd5ZC5vbnJlbmRlci5jb20vYXBpL2xvZ2luXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gQ29udmllcnRlIGZvcm1EYXRhIGEgSlNPTlxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIEVzdGFibGVjZSBlbCBlbmNhYmV6YWRvICdDb250ZW50LVR5cGUnIGNvbW8gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmV3VG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBuZXdUb2tlbik7XG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGtleTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICAgIHNldFRva2VuKG5ld1Rva2VuKTtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiLi9jYXRhbG9nb1wiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGluaWNpYXIgc2VzacOzbjpcIiwgZXJyb3IpO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gQ29udmllcnRlIGZvcm1EYXRhIGEgSlNPTlxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIEVzdGFibGVjZSBlbCBlbmNhYmV6YWRvICdDb250ZW50LVR5cGUnIGNvbW8gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuICBjb25zdCBjaGVja1Rva2VuVmFsaWRpdHkgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHN0b3JlZFRva2VuKSB7XG4gICAgICAvLyBSZWFsaXphIHVuYSBzb2xpY2l0dWQgYWwgc2Vydmlkb3IgcGFyYSB2YWxpZGFyIGVsIHRva2VuLCBzaSBlcyBuZWNlc2FyaW8uXG4gICAgICAvLyBQdWVkZXMgdXNhciBsYSBtaXNtYSBydXRhIGRlbCBzZXJ2aWRvciBwYXJhIHZhbGlkYXIgZWwgdG9rZW4uXG5cbiAgICAgIC8vIFNpIGVsIHRva2VuIGVzIHbDoWxpZG8sIHJlZGlyaWdlIGFsIHVzdWFyaW8gYSBsYSBww6FnaW5hIGRlc2VhZGEuXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi4vY2F0YWxvZ29cIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIExsYW1hIGEgbGEgZnVuY2nDs24gZGUgdmFsaWRhY2nDs24gY3VhbmRvIGxhIHDDoWdpbmEgc2UgY2FyZ2FcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Rva2VuVmFsaWRpdHkoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBzcGFjZS15LThcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBpZD1cImxvZ2luZnJtXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgc2hhZG93LXNtIC1zcGFjZS15LXB4XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgRGlyZWNjacOzbiBkZSBjb3JyZW8gZWxlY3Ryw7NuaWNvXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXJlY2Npw7NuIGRlIGNvcnJlbyBlbGVjdHLDs25pY29cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgQ29udHJhc2XDsWFcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWItbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc20gbXQtMlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTMgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLXJvc2UtNzAwIGhvdmVyOmJnLXJvc2UtODAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgaW5zZXQteS0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUtNDAwXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk01IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAwelwiXG4gICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIEluaWNpYXIgc2VzacOzblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIkhvbWUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibmV3VG9rZW4iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZXBsYWNlIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImNoZWNrVG9rZW5WYWxpZGl0eSIsInN0b3JlZFRva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInNwYW4iLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});