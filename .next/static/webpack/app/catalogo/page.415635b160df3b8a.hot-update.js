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

/***/ "(app-pages-browser)/./src/app/catalogo/plist.tsx":
/*!************************************!*\
  !*** ./src/app/catalogo/plist.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// plist.tsx\n\nvar _s = $RefreshSig$();\n\nconst FilterForm = (param)=>{\n    let { onFilter } = param;\n    _s();\n    const [marca, setMarca] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [precioMinimo, setPrecioMinimo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const marcasDisponibles = [\n        \"ASUS\",\n        \"CORSAIR\",\n        \"LOGITECH\"\n    ];\n    const filtrarProductos = ()=>{\n        // Si no se ha seleccionado una marca o el precio mínimo es 0, muestra todos los productos\n        onFilter(marca, precioMinimo === \"\" ? 0 : +precioMinimo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>e.preventDefault(),\n            className: \"flex flex-row items-center gap-4 gap-8 columns-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"basis-1/4 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"marca\",\n                            className: \"text-gray-100 font-semibold\",\n                            children: \"Marca:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            id: \"marca\",\n                            value: marca,\n                            onChange: (e)=>setMarca(e.target.value),\n                            className: \"w-3/4 ml-5 border p-2 rounded shadow text-gray-800\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"Selecciona una marca\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                marcasDisponibles.map((marca, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: marca,\n                                        children: marca.toString()\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"basis-1/4 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"precioMinimo\",\n                            className: \"text-gray-100 font-semibold\",\n                            children: \"Precio m\\xednimo:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            id: \"precioMinimo\",\n                            defaultValue: 0,\n                            value: precioMinimo,\n                            onChange: (e)=>setPrecioMinimo(parseInt(e.target.value, 10)),\n                            className: \"w-3/4 border p-2 ml-5 rounded shadow text-gray-800\",\n                            min: 0\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full sm:w-1/2 md:w-1/5 lg:w-1/8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: filtrarProductos,\n                        className: \"md:w-1/2 bg-indigo-500 text-white px-4 py-2 rounded hover-bg-blue-700\",\n                        children: \"Filtrar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\catalogo\\\\plist.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterForm, \"dkzW7kpY2ZDWuSYnX7FSgjKCg2U=\");\n_c = FilterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterForm);\nvar _c;\n$RefreshReg$(_c, \"FilterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2F0YWxvZ28vcGxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxZQUFZOzs7QUFDNEI7QUFNeEMsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3pELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBYztJQUM5RCxNQUFNTyxvQkFBb0I7UUFBQztRQUFRO1FBQVc7S0FBVztJQUN6RCxNQUFNQyxtQkFBbUI7UUFDdkIsMEZBQTBGO1FBQzFGTixTQUFTQyxPQUFPRSxpQkFBaUIsS0FBSyxJQUFJLENBQUNBO0lBQzdDO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0NDLFVBQVUsQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztZQUNqQ0osV0FBVTs7OEJBRVYsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQU1DLFNBQVE7NEJBQVFOLFdBQVU7c0NBQThCOzs7Ozs7c0NBRy9ELDhEQUFDTzs0QkFDQ0MsSUFBRzs0QkFDSEMsT0FBT2hCOzRCQUNQaUIsVUFBVSxDQUFDUCxJQUFNVCxTQUFTUyxFQUFFUSxNQUFNLENBQUNGLEtBQUs7NEJBQ3hDVCxXQUFVOzs4Q0FFViw4REFBQ1k7b0NBQU9ILE9BQU07OENBQUc7Ozs7OztnQ0FDaEJaLGtCQUFrQmdCLEdBQUcsQ0FBQyxDQUFDcEIsT0FBT3FCLHNCQUM3Qiw4REFBQ0Y7d0NBQW1CSCxPQUFPaEI7a0RBQ3hCQSxNQUFNc0IsUUFBUTt1Q0FESkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU9uQiw4REFBQ2Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBTUMsU0FBUTs0QkFBZU4sV0FBVTtzQ0FBOEI7Ozs7OztzQ0FHdEUsOERBQUNnQjs0QkFDQ0MsTUFBSzs0QkFDTFQsSUFBRzs0QkFDSFUsY0FBYzs0QkFDZFQsT0FBT2Q7NEJBQ1BlLFVBQVUsQ0FBQ1AsSUFBTVAsZ0JBQWdCdUIsU0FBU2hCLEVBQUVRLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFOzRCQUMxRFQsV0FBVTs0QkFDVm9CLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFJVCw4REFBQ3JCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDcUI7d0JBQ0NDLFNBQVN4Qjt3QkFDVEUsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBNURNVDtLQUFBQTtBQThETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NhdGFsb2dvL3BsaXN0LnRzeD9mYzYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBsaXN0LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuL3BmaWx0ZXJcIjtcclxuaW50ZXJmYWNlIEZpbHRlckZvcm1Qcm9wcyB7XHJcbiAgb25GaWx0ZXI6IChtYXJjYTogc3RyaW5nLCBwcmVjaW9NaW5pbW86IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyRm9ybTogUmVhY3QuRkM8RmlsdGVyRm9ybVByb3BzPiA9ICh7IG9uRmlsdGVyIH0pID0+IHtcclxuICBjb25zdCBbbWFyY2EsIHNldE1hcmNhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3ByZWNpb01pbmltbywgc2V0UHJlY2lvTWluaW1vXSA9IHVzZVN0YXRlPG51bWJlciB8IFwiXCI+KDApO1xyXG4gIGNvbnN0IG1hcmNhc0Rpc3BvbmlibGVzID0gW1wiQVNVU1wiLCBcIkNPUlNBSVJcIiwgXCJMT0dJVEVDSFwiXTtcclxuICBjb25zdCBmaWx0cmFyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgLy8gU2kgbm8gc2UgaGEgc2VsZWNjaW9uYWRvIHVuYSBtYXJjYSBvIGVsIHByZWNpbyBtw61uaW1vIGVzIDAsIG11ZXN0cmEgdG9kb3MgbG9zIHByb2R1Y3Rvc1xyXG4gICAgb25GaWx0ZXIobWFyY2EsIHByZWNpb01pbmltbyA9PT0gXCJcIiA/IDAgOiArcHJlY2lvTWluaW1vKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc2hhZG93XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgZ2FwLTggY29sdW1ucy0zXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaXMtMS80IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXJjYVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICBNYXJjYTpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIGlkPVwibWFyY2FcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWFyY2F9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFyY2EoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMvNCBtbC01IGJvcmRlciBwLTIgcm91bmRlZCBzaGFkb3cgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25hIHVuYSBtYXJjYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7bWFyY2FzRGlzcG9uaWJsZXMubWFwKChtYXJjYSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXttYXJjYX0+XHJcbiAgICAgICAgICAgICAgICB7bWFyY2EudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0xLzQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZWNpb01pbmltb1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICBQcmVjaW8gbcOtbmltbzpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJlY2lvTWluaW1vXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY2lvTWluaW1vfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByZWNpb01pbmltbyhwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zLzQgYm9yZGVyIHAtMiBtbC01IHJvdW5kZWQgc2hhZG93IHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEvMiBtZDp3LTEvNSBsZzp3LTEvOFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmaWx0cmFyUHJvZHVjdG9zfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDp3LTEvMiBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXItYmctYmx1ZS03MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaWx0cmFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmlsdGVyRm9ybSIsIm9uRmlsdGVyIiwibWFyY2EiLCJzZXRNYXJjYSIsInByZWNpb01pbmltbyIsInNldFByZWNpb01pbmltbyIsIm1hcmNhc0Rpc3BvbmlibGVzIiwiZmlsdHJhclByb2R1Y3RvcyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9wdGlvbiIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJpbnB1dCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJwYXJzZUludCIsIm1pbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/catalogo/plist.tsx\n"));

/***/ })

});