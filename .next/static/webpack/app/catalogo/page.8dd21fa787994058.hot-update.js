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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// productos.tsx\n\n\nconst ProductList = (param)=>{\n    let { productos } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-gray-100  font-semibold mb-4\",\n                children: \"Lista de Productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card rounded p-4 shadow mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: producto.imagenUrl,\n                                alt: producto.nombre,\n                                className: \"w-full h-32 object-cover mb-2\" // Estilo de la imagen\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg text-gray-500 font-semibold\",\n                                children: producto.nombre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500\",\n                                children: [\n                                    \"Categor\\xeda: \",\n                                    producto.marca\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-green-600\",\n                                children: [\n                                    \"Precio: Q.\",\n                                    producto.preciodescuento\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, producto.id, true, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\pfilter.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0YWxvZ28vcGZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjs7QUFDVTtBQWtCMUIsTUFBTUMsY0FBMEM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7SUFDNUQscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTZDOzs7Ozs7MEJBRzNELDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDWkgsVUFBVUksR0FBRyxDQUFDLENBQUNDLHlCQUNkLDhEQUFDSjt3QkFBc0JFLFdBQVU7OzBDQUMvQiw4REFBQ0c7Z0NBQ0NDLEtBQUtGLFNBQVNHLFNBQVM7Z0NBQ3ZCQyxLQUFLSixTQUFTSyxNQUFNO2dDQUNwQlAsV0FBVSxnQ0FBZ0Msc0JBQXNCOzs7Ozs7MENBRWxFLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FDWEUsU0FBU0ssTUFBTTs7Ozs7OzBDQUVsQiw4REFBQ0U7Z0NBQUVULFdBQVU7O29DQUFnQjtvQ0FBWUUsU0FBU1EsS0FBSzs7Ozs7OzswQ0FDdkQsOERBQUNEO2dDQUFFVCxXQUFVOztvQ0FBaUI7b0NBQ2pCRSxTQUFTUyxlQUFlOzs7Ozs7Ozt1QkFYN0JULFNBQVNVLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQi9CO0tBMUJNaEI7QUE0Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jYXRhbG9nby9wZmlsdGVyLnRzeD9iZDdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHByb2R1Y3Rvcy50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbm9tYnJlOiBzdHJpbmc7XHJcbiAgbWFyY2E6IHN0cmluZztcclxuICBwcmVjaW86IG51bWJlcjtcclxuICBkZXNjdWVudG86IG51bWJlcjtcclxuICBwcmVjaW9kZXNjdWVudG86IG51bWJlcjtcclxuICBpbWFnZW46IHN0cmluZztcclxuICBkZXNjcmlwY2lvbjogc3RyaW5nO1xyXG4gIGNhbnRpZGFkOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0TGlzdFByb3BzIHtcclxuICBwcm9kdWN0b3M6IFByb2R1Y3RbXTtcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3Q6IFJlYWN0LkZDPFByb2R1Y3RMaXN0UHJvcHM+ID0gKHsgcHJvZHVjdG9zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0xMDAgIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxyXG4gICAgICAgIExpc3RhIGRlIFByb2R1Y3Rvc1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAgICB7cHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0by5pZH0gY2xhc3NOYW1lPVwiY2FyZCByb3VuZGVkIHAtNCBzaGFkb3cgbWItNVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0by5pbWFnZW5Vcmx9IC8vIEFzZWfDunJhdGUgZGUgdGVuZXIgbGEgVVJMIGRlIGxhIGltYWdlbiBlbiB0dSBvYmpldG8gZGUgcHJvZHVjdG9cclxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3RvLm5vbWJyZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBvYmplY3QtY292ZXIgbWItMlwiIC8vIEVzdGlsbyBkZSBsYSBpbWFnZW5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RvLm5vbWJyZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkNhdGVnb3LDrWE6IHtwcm9kdWN0by5tYXJjYX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+XHJcbiAgICAgICAgICAgICAgUHJlY2lvOiBRLntwcm9kdWN0by5wcmVjaW9kZXNjdWVudG99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0b3MiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3RvIiwiaW1nIiwic3JjIiwiaW1hZ2VuVXJsIiwiYWx0Iiwibm9tYnJlIiwiaDIiLCJwIiwibWFyY2EiLCJwcmVjaW9kZXNjdWVudG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/catalogo/pfilter.tsx\n"));

/***/ })

});