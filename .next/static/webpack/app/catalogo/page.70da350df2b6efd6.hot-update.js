"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/catalogo/page",{

/***/ "(app-pages-browser)/./src/app/catalogo/pfilter.tsx":
/*!**************************************!*\
  !*** ./src/app/catalogo/pfilter.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// productos.tsx\n\n\nconst ProductList = (param)=>{\n    let { productos } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Lista de Productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded p-4 shadow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: producto.nombre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500\",\n                                children: [\n                                    \"Categor\\xeda: \",\n                                    producto.marca\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-green-600\",\n                                children: [\n                                    \"Precio: $\",\n                                    producto.preciodescuento\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, producto.id, true, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0YWxvZ28vcGZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjs7QUFDVTtBQXVCMUIsTUFBTUMsY0FBMEM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7SUFDNUQscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQThCOzs7Ozs7MEJBQzVDLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDWkgsVUFBVUksR0FBRyxDQUFDLENBQUNDLHlCQUNkLDhEQUFDSjt3QkFBc0JFLFdBQVU7OzBDQUMvQiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQXlCRSxTQUFTRSxNQUFNOzs7Ozs7MENBQ3RELDhEQUFDQztnQ0FBRUwsV0FBVTs7b0NBQWdCO29DQUFZRSxTQUFTSSxLQUFLOzs7Ozs7OzBDQUN2RCw4REFBQ0Q7Z0NBQUVMLFdBQVU7O29DQUFpQjtvQ0FDbEJFLFNBQVNLLGVBQWU7Ozs7Ozs7O3VCQUo1QkwsU0FBU00sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQjtLQWpCTVo7QUFtQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXRhbG9nby9wZmlsdGVyLnRzeD9iZDdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHByb2R1Y3Rvcy50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY2F0ZWdvcmlhOiBzdHJpbmc7XHJcbiAgcHJlY2lvOiBudW1iZXI7XHJcbiAgX2lkOiBudW1iZXI7XHJcbiAgbm9tYnJlOiBzdHJpbmc7XHJcbiAgbWFyY2E6IHN0cmluZztcclxuICBkaXNwb25pYmlsaWRhZDogbnVtYmVyO1xyXG4gIGRlc2N1ZW50bzogbnVtYmVyO1xyXG4gIHByZWNpb2Rlc2N1ZW50bzogbnVtYmVyO1xyXG4gIGltYWdlbjogc3RyaW5nO1xyXG4gIGRlc2NyaXBjaW9uOiBzdHJpbmc7XHJcbiAgY2FudGlkYWQ6IG51bWJlcjtcclxuICBJZGVudGlmaWNhZG9yOiBudW1iZXI7XHJcbiAgRGlzcG9uaWJpbGlkYWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0UHJvcHMge1xyXG4gIHByb2R1Y3RvczogUHJvZHVjdFtdO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdDogUmVhY3QuRkM8UHJvZHVjdExpc3RQcm9wcz4gPSAoeyBwcm9kdWN0b3MgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+TGlzdGEgZGUgUHJvZHVjdG9zPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCI+XHJcbiAgICAgICAge3Byb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdG8uaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQgcC00IHNoYWRvd1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3Byb2R1Y3RvLm5vbWJyZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+Q2F0ZWdvcsOtYToge3Byb2R1Y3RvLm1hcmNhfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj5cclxuICAgICAgICAgICAgICBQcmVjaW86ICR7cHJvZHVjdG8ucHJlY2lvZGVzY3VlbnRvfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdG9zIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0byIsImgyIiwibm9tYnJlIiwicCIsIm1hcmNhIiwicHJlY2lvZGVzY3VlbnRvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/catalogo/pfilter.tsx\n"));

/***/ })

});