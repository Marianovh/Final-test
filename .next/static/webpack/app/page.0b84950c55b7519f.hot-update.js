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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault();\n        // console.log(\"email:\" + formData.email + \"     clave:\" + formData.password);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api-2-xgyd.onrender.com/api/login\", JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const newToken = response.data.token;\n            localStorage.setItem(\"token\", newToken);\n            console.log(\"login key: \" + localStorage.getItem(\"token\"));\n            setToken(newToken);\n            router.replace(\"./catalogo\");\n        } catch (error) {\n            console.error(\"Error al iniciar sesi\\xf3n:\", error);\n            console.log(JSON.stringify(formData), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const checkTokenValidity = ()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            // Realiza una solicitud al servidor para validar el token, si es necesario.\n            // Puedes usar la misma ruta del servidor para validar el token.\n            // Si el token es válido, redirige al usuario a la página deseada.\n            router.replace(\"./catalogo\");\n        }\n    };\n    // Llama a la función de validación cuando la página se carga\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkTokenValidity();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full space-y-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-6 text-center text-3xl font-extrabold text-indigo-900\",\n                        children: \"Iniciar sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"loginfrm\",\n                    className: \"mt-8 space-y-6\",\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md shadow-sm -space-y-px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email-address\",\n                                            className: \"sr-only\",\n                                            children: \"Direcci\\xf3n de correo electr\\xf3nico\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"email\",\n                                            name: \"email\",\n                                            type: \"email\",\n                                            autoComplete: \"email\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm\",\n                                            placeholder: \"Direcci\\xf3n de correo electr\\xf3nico\",\n                                            onChange: handleInputChange,\n                                            value: formData.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"sr-only\",\n                                            children: \"Contrase\\xf1a\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"password\",\n                                            name: \"password\",\n                                            type: \"password\",\n                                            autoComplete: \"current-password\",\n                                            required: true,\n                                            className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2\",\n                                            placeholder: \"Contrase\\xf1a\",\n                                            onChange: handleInputChange,\n                                            value: formData.password\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute left-0 inset-y-0 flex items-center pl-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"h-5 w-5 text-white-500 group-hover:text-white-400\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 20 20\",\n                                            fill: \"currentColor\",\n                                            \"aria-hidden\": \"true\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                fillRule: \"evenodd\",\n                                                d: \"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z\",\n                                                clipRule: \"evenodd\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Iniciar sesi\\xf3n\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"49NubbsrJuVwyxwUHOocEvdN2kc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzJFO0FBQ2pEO0FBQ2tCO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQ3RDO1FBQUVPLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBRzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTVcsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLG1CQUFtQixPQUFPQztRQUM5QkEsRUFBRUMsY0FBYztRQUNoQiw4RUFBOEU7UUFDOUUsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWIsNkNBQUtBLENBQUNjLElBQUksQ0FDL0IsNkNBQ0FDLEtBQUtDLFNBQVMsQ0FBQ2IsV0FDZjtnQkFDRWMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFHRixNQUFNQyxXQUFXTCxTQUFTTSxJQUFJLENBQUNaLEtBQUs7WUFDcENhLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSDtZQUM5QkksUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkgsYUFBYUksT0FBTyxDQUFDO1lBQ2pEaEIsU0FBU1U7WUFDVFQsT0FBT2dCLE9BQU8sQ0FBQztRQUNqQixFQUFFLE9BQU9DLE9BQU87WUFDZEosUUFBUUksS0FBSyxDQUFDLCtCQUE0QkE7WUFFMUNKLFFBQVFDLEdBQUcsQ0FDVFIsS0FBS0MsU0FBUyxDQUFDYixXQUNmO2dCQUNFYyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtRQUVKO0lBQ0Y7SUFFQSxNQUFNVSxvQkFBb0IsQ0FBQ2hCO1FBQ3pCLE1BQU0sRUFBRWlCLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdsQixFQUFFbUIsTUFBTTtRQUNoQzFCLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ3lCLEtBQUssRUFBRUM7UUFBTTtJQUMzQztJQUNBLE1BQU1FLHFCQUFxQjtRQUN6QixNQUFNQyxjQUFjWixhQUFhSSxPQUFPLENBQUM7UUFFekMsSUFBSVEsYUFBYTtZQUNmLDRFQUE0RTtZQUM1RSxnRUFBZ0U7WUFFaEUsa0VBQWtFO1lBQ2xFdkIsT0FBT2dCLE9BQU8sQ0FBQztRQUNqQjtJQUNGO0lBRUEsNkRBQTZEO0lBQzdEMUIsZ0RBQVNBLENBQUM7UUFDUmdDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs4QkFDQyw0RUFBQ0U7d0JBQUdELFdBQVU7a0NBQTJEOzs7Ozs7Ozs7Ozs4QkFJM0UsOERBQUNFO29CQUNDQyxJQUFHO29CQUNISCxXQUFVO29CQUNWSSxVQUFVNUI7O3NDQUVWLDhEQUFDdUI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDs7c0RBQ0MsOERBQUNNOzRDQUFNQyxTQUFROzRDQUFnQk4sV0FBVTtzREFBVTs7Ozs7O3NEQUduRCw4REFBQ087NENBQ0NKLElBQUc7NENBQ0hULE1BQUs7NENBQ0xjLE1BQUs7NENBQ0xDLGNBQWE7NENBQ2JDLFFBQVE7NENBQ1JWLFdBQVU7NENBQ1ZXLGFBQVk7NENBQ1pDLFVBQVVuQjs0Q0FDVkUsT0FBTzFCLFNBQVNFLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHekIsOERBQUM0Qjs7c0RBQ0MsOERBQUNNOzRDQUFNQyxTQUFROzRDQUFXTixXQUFVO3NEQUFVOzs7Ozs7c0RBRzlDLDhEQUFDTzs0Q0FDQ0osSUFBRzs0Q0FDSFQsTUFBSzs0Q0FDTGMsTUFBSzs0Q0FDTEMsY0FBYTs0Q0FDYkMsUUFBUTs0Q0FDUlYsV0FBVTs0Q0FDVlcsYUFBWTs0Q0FDWkMsVUFBVW5COzRDQUNWRSxPQUFPMUIsU0FBU0csUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUs5Qiw4REFBQzJCO3NDQUNDLDRFQUFDYztnQ0FDQ0wsTUFBSztnQ0FDTFIsV0FBVTs7a0RBRVYsOERBQUNjO3dDQUFLZCxXQUFVO2tEQUNkLDRFQUFDZTs0Q0FDQ2YsV0FBVTs0Q0FDVmdCLE9BQU07NENBQ05DLFNBQVE7NENBQ1JDLE1BQUs7NENBQ0xDLGVBQVk7c0RBRVosNEVBQUNDO2dEQUNDQyxVQUFTO2dEQUNUQyxHQUFFO2dEQUNGQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7O29DQUdSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQjtHQXhJd0J2RDs7UUFNUEQsc0RBQVNBOzs7S0FORkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRm9ybUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTx7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfT4oXHJcbiAgICB7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZW1haWw6XCIgKyBmb3JtRGF0YS5lbWFpbCArIFwiICAgICBjbGF2ZTpcIiArIGZvcm1EYXRhLnBhc3N3b3JkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLTIteGd5ZC5vbnJlbmRlci5jb20vYXBpL2xvZ2luXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLCAvLyBDb252aWVydGUgZm9ybURhdGEgYSBKU09OXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy8gRXN0YWJsZWNlIGVsIGVuY2FiZXphZG8gJ0NvbnRlbnQtVHlwZScgY29tbyAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgbmV3VG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIG5ld1Rva2VuKTtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBrZXk6IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XHJcbiAgICAgIHNldFRva2VuKG5ld1Rva2VuKTtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIuL2NhdGFsb2dvXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGluaWNpYXIgc2VzacOzbjpcIiwgZXJyb3IpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLCAvLyBDb252aWVydGUgZm9ybURhdGEgYSBKU09OXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy8gRXN0YWJsZWNlIGVsIGVuY2FiZXphZG8gJ0NvbnRlbnQtVHlwZScgY29tbyAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGVja1Rva2VuVmFsaWRpdHkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgaWYgKHN0b3JlZFRva2VuKSB7XHJcbiAgICAgIC8vIFJlYWxpemEgdW5hIHNvbGljaXR1ZCBhbCBzZXJ2aWRvciBwYXJhIHZhbGlkYXIgZWwgdG9rZW4sIHNpIGVzIG5lY2VzYXJpby5cclxuICAgICAgLy8gUHVlZGVzIHVzYXIgbGEgbWlzbWEgcnV0YSBkZWwgc2Vydmlkb3IgcGFyYSB2YWxpZGFyIGVsIHRva2VuLlxyXG5cclxuICAgICAgLy8gU2kgZWwgdG9rZW4gZXMgdsOhbGlkbywgcmVkaXJpZ2UgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGVzZWFkYS5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIuL2NhdGFsb2dvXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIExsYW1hIGEgbGEgZnVuY2nDs24gZGUgdmFsaWRhY2nDs24gY3VhbmRvIGxhIHDDoWdpbmEgc2UgY2FyZ2FcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tUb2tlblZhbGlkaXR5KCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBzcGFjZS15LThcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1pbmRpZ28tOTAwXCI+XHJcbiAgICAgICAgICAgIEluaWNpYXIgc2VzacOzblxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgaWQ9XCJsb2dpbmZybVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiXHJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgc2hhZG93LXNtIC1zcGFjZS15LXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgRGlyZWNjacOzbiBkZSBjb3JyZW8gZWxlY3Ryw7NuaWNvXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLXQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXJlY2Npw7NuIGRlIGNvcnJlbyBlbGVjdHLDs25pY29cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWItbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc20gbXQtMlwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0zIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1yb3NlLTcwMCBob3ZlcjpiZy1yb3NlLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBpbnNldC15LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUtNDAwXCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNSA5VjdhNSA1IDAgMDExMCAwdjJhMiAyIDAgMDEyIDJ2NWEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTVhMiAyIDAgMDEyLTJ6bTgtMnYySDdWN2EzIDMgMCAwMTYgMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIkhvbWUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJuZXdUb2tlbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImdldEl0ZW0iLCJyZXBsYWNlIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImNoZWNrVG9rZW5WYWxpZGl0eSIsInN0b3JlZFRva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInNwYW4iLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});