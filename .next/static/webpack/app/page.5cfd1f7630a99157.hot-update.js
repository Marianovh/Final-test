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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault();\n        // console.log(\"email:\" + formData.email + \"     clave:\" + formData.password);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(// \"https://api-2-xgyd.onrender.com/api/login\",\n            \"http://localhost:3000/api/login\", JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const newToken = response.data.token;\n            localStorage.setItem(\"token\", newToken);\n            console.log(\"login key: \" + localStorage.getItem(\"token\"));\n            setToken(newToken);\n            router.replace(\"./catalogo\");\n        } catch (error) {\n            console.error(\"Error al iniciar sesi\\xf3n:\", error);\n            console.log(JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const checkTokenValidity = ()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            // Realiza una solicitud al servidor para validar el token, si es necesario.\n            // Puedes usar la misma ruta del servidor para validar el token.\n            // Si el token es válido, redirige al usuario a la página deseada.\n            router.replace(\"./catalogo\");\n        }\n    };\n    // Llama a la función de validación cuando la página se carga\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkTokenValidity();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-6 text-center text-3xl font-extrabold text-blue-100\",\n                        children: \"Iniciar sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"loginfrm\",\n                    className: \"mt-8 space-y-6\",\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md shadow-sm -space-y-px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email-address\",\n                                            className: \"sr-only\",\n                                            children: \"Direcci\\xf3n de correo electr\\xf3nico\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"email\",\n                                            name: \"email\",\n                                            type: \"email\",\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                            placeholder: \"Direcci\\xf3n de correo electr\\xf3nico\",\n                                            onChange: handleInputChange,\n                                            value: formData.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"sr-only\",\n                                            children: \"Contrase\\xf1a\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"password\",\n                                            name: \"password\",\n                                            type: \"password\",\n                                            autoComplete: \"current-password\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2\",\n                                            placeholder: \"Contrase\\xf1a\",\n                                            onChange: handleInputChange,\n                                            value: formData.password\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"group relative w-full flex justify-center py-3    px-4 border border-transparent text-sm font-medium rounded-md   text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute left-0 inset-y-0 flex items-center pl-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"h-5 w-5 text-white-500 group-hover:text-white-400\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 20 20\",\n                                            fill: \"currentColor\",\n                                            \"aria-hidden\": \"true\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                fillRule: \"evenodd\",\n                                                d: \"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\",\n                                                clipRule: \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 131,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Iniciar sesi\\xf3n\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"49NubbsrJuVwyxwUHOocEvdN2kc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2U7NENBQ0NmLFdBQVU7NENBQ1ZnQixPQUFNOzRDQUNOQyxTQUFROzRDQUNSQyxNQUFLOzRDQUNMQyxlQUFZO3NEQUVaLDRFQUFDQztnREFDQ0MsVUFBUztnREFDVEMsR0FBRTtnREFDRkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7R0EzSXdCdkQ7O1FBTVBELHNEQUFTQTs7O0tBTkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZvcm1FdmVudCwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8eyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0+KFxyXG4gICAgeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImVtYWlsOlwiICsgZm9ybURhdGEuZW1haWwgKyBcIiAgICAgY2xhdmU6XCIgKyBmb3JtRGF0YS5wYXNzd29yZCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgLy8gXCJodHRwczovL2FwaS0yLXhneWQub25yZW5kZXIuY29tL2FwaS9sb2dpblwiLFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpblwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gQ29udmllcnRlIGZvcm1EYXRhIGEgSlNPTlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIEVzdGFibGVjZSBlbCBlbmNhYmV6YWRvICdDb250ZW50LVR5cGUnIGNvbW8gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1Rva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBuZXdUb2tlbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW4ga2V5OiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xyXG4gICAgICBzZXRUb2tlbihuZXdUb2tlbik7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiLi9jYXRhbG9nb1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBpbmljaWFyIHNlc2nDs246XCIsIGVycm9yKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSwgLy8gQ29udmllcnRlIGZvcm1EYXRhIGEgSlNPTlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIEVzdGFibGVjZSBlbCBlbmNhYmV6YWRvICdDb250ZW50LVR5cGUnIGNvbW8gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hlY2tUb2tlblZhbGlkaXR5ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuICAgIGlmIChzdG9yZWRUb2tlbikge1xyXG4gICAgICAvLyBSZWFsaXphIHVuYSBzb2xpY2l0dWQgYWwgc2Vydmlkb3IgcGFyYSB2YWxpZGFyIGVsIHRva2VuLCBzaSBlcyBuZWNlc2FyaW8uXHJcbiAgICAgIC8vIFB1ZWRlcyB1c2FyIGxhIG1pc21hIHJ1dGEgZGVsIHNlcnZpZG9yIHBhcmEgdmFsaWRhciBlbCB0b2tlbi5cclxuXHJcbiAgICAgIC8vIFNpIGVsIHRva2VuIGVzIHbDoWxpZG8sIHJlZGlyaWdlIGFsIHVzdWFyaW8gYSBsYSBww6FnaW5hIGRlc2VhZGEuXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiLi9jYXRhbG9nb1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBMbGFtYSBhIGxhIGZ1bmNpw7NuIGRlIHZhbGlkYWNpw7NuIGN1YW5kbyBsYSBww6FnaW5hIHNlIGNhcmdhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVG9rZW5WYWxpZGl0eSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtYmx1ZS0xMDBcIj5cclxuICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBpZD1cImxvZ2luZnJtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS02XCJcclxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICBEaXJlY2Npw7NuIGRlIGNvcnJlbyBlbGVjdHLDs25pY29cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtdC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpcmVjY2nDs24gZGUgY29ycmVvIGVsZWN0csOzbmljb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbSBtdC0yXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTMgXHJcbiAgICAgICAgICAgICAgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZFxyXG4gICAgICAgICAgICAgICB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIGluc2V0LXktMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZS01MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk01IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiSG9tZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJzZXRUb2tlbiIsInJvdXRlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm5ld1Rva2VuIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZ2V0SXRlbSIsInJlcGxhY2UiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY2hlY2tUb2tlblZhbGlkaXR5Iiwic3RvcmVkVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJpZCIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwic3BhbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});