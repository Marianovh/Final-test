"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tienda/page",{

/***/ "(app-pages-browser)/./src/app/tienda/page.tsx":
/*!*********************************!*\
  !*** ./src/app/tienda/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _productos_productos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos/productos */ \"(app-pages-browser)/./src/app/productos/productos.tsx\");\n/* harmony import */ var _carrito_carrito__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carrito/carrito */ \"(app-pages-browser)/./src/app/carrito/carrito.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Tienda() {\n    _s();\n    const [q, setq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedmarca, setSelectedmarca] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Todas las categor\\xedas\");\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Realiza una solicitud a la API y carga los productos en productos\n        // Ajusta la URL de la API según tu caso\n        // const apiUrl = \"https://api-2-xgyd.onrender.com/api/productos\";\n        const apiUrl = \"http://localhost:3000/api/productos\";\n        const token = localStorage.getItem(\"token\");\n        const fetchProducts = async ()=>{\n            try {\n                const headers = {\n                    \"Content-Type\": \"application/json\"\n                };\n                if (token) {\n                    headers.token = token;\n                }\n                const response = await fetch(apiUrl, {\n                    method: \"GET\",\n                    headers\n                });\n                if (!response.ok) {\n                    throw new Error(\"Error al cargar productos desde la API\");\n                }\n                const data = await response.json();\n                setProducts(data.productos);\n                console.log(data);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    const addToCart = (product)=>{\n        const existingItem = cart.find((item)=>item.ID === product.ID);\n        if (existingItem) {\n            existingItem.cantidad += 1;\n            setCart([\n                ...cart\n            ]);\n        } else {\n            const newProduct = {\n                ...product,\n                cantidad: 1\n            };\n            setCart([\n                ...cart,\n                newProduct\n            ]);\n        }\n        setq(q + 1);\n        setTotal(total + product.preciodescuento);\n    };\n    const removeFromCart = (product)=>{\n        const existingItem = cart.find((item)=>item.ID === product.ID);\n        if (existingItem) {\n            if (existingItem.cantidad > 1) {\n                existingItem.cantidad -= 1;\n            } else {\n                const updatedCart = cart.filter((item)=>item.ID !== product.ID);\n                setCart(updatedCart);\n            }\n            setq(q - 1);\n            setTotal(total - product.preciodescuento);\n        }\n    };\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClose = ()=>setShow(false);\n    const handleShow = ()=>setShow(true);\n    // Función para cambiar la categoría seleccionada\n    const handleCategoryChange = (marca)=>{\n        setSelectedmarca(marca);\n    };\n    const cerrarSesion = ()=>{\n        // Borra el token del localStorage\n        localStorage.removeItem(\"token\");\n        router.replace(\"../\");\n    // Redirige al usuario a la página de inicio de sesión u otra página apropiada\n    // window.location.href = '/inicio-de-sesion'; // Reemplaza con la URL de inicio de sesión\n    };\n    const checkTokenValidity = ()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            // Realiza una solicitud al servidor para validar el token, si es necesario.\n            // Puedes usar la misma ruta del servidor para validar el token.\n            // Si el token es válido, redirige al usuario a la página deseada.\n            router.replace(\"../\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white font-bold text-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                                    children: \"Tienda\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-2/3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"p-2 bg-white rounded\",\n                                            value: selectedmarca,\n                                            onChange: (e)=>handleCategoryChange(e.target.value),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Todas las categor\\xedas\",\n                                                    children: \"Todas las categor\\xedas\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"CORSAIR\",\n                                                    children: \"CORSAIR\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                                    lineNumber: 148,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"ASUS\",\n                                                    children: \"ASUS\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"LOGITECH\",\n                                                    children: \"LOGITECH\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                            lineNumber: 140,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-1/3 text-right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-yellow-500 text-white px-3 py-2 rounded\",\n                                            onClick: handleShow,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: [\n                                                    \"Carrito: \",\n                                                    q\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                                lineNumber: 158,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                            lineNumber: 154,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4\",\n                        children: products.filter((product)=>selectedmarca === \"Todas las categor\\xedas\" || product.marca === selectedmarca).map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productos_productos__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                ...product,\n                                onAddToCart: ()=>addToCart(product)\n                            }, product.ID, false, {\n                                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full w-min\",\n                children: show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed inset-0 flex items-center justify-center z-50  \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-gray-900 opacity-50\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-1/4 bg-white p-4 rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold\",\n                                            children: \"Compras\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                            lineNumber: 187,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-gray-500 hover:text-red-500\",\n                                            onClick: handleClose,\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                            lineNumber: 188,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_carrito_carrito__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        items: cart,\n                                        total: total,\n                                        onRemoveFromCart: removeFromCart\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                        lineNumber: 196,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                                    lineNumber: 195,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                    lineNumber: 183,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Final-test\\\\src\\\\app\\\\tienda\\\\page.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Tienda, \"M16cPPuH7+6GrCjavxNaEXc8zWU=\");\n_c = Tienda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tienda);\nvar _c;\n$RefreshReg$(_c, \"Tienda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGllbmRhL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ0o7QUFDTjtBQTBCekMsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxHQUFHQyxLQUFLLEdBQUdOLCtDQUFRQSxDQUFTO0lBQ25DLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FDaEQ7SUFFRixNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQVksRUFBRTtJQUV0REMsZ0RBQVNBLENBQUM7UUFDUixvRUFBb0U7UUFDcEUsd0NBQXdDO1FBQ3hDLGtFQUFrRTtRQUNsRSxNQUFNYyxTQUFTO1FBQ2YsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBRW5DLE1BQU1DLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1DLFVBQXFDO29CQUN6QyxnQkFBZ0I7Z0JBQ2xCO2dCQUVBLElBQUlKLE9BQU87b0JBQ1RJLFFBQVFKLEtBQUssR0FBR0E7Z0JBQ2xCO2dCQUVBLE1BQU1LLFdBQVcsTUFBTUMsTUFBTVAsUUFBUTtvQkFDbkNRLFFBQVE7b0JBQ1JIO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsU0FBU0csRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtnQkFDaENiLFlBQVlZLEtBQUtFLFNBQVM7Z0JBQzFCQyxRQUFRQyxHQUFHLENBQUNKO1lBQ2QsRUFBRSxPQUFPSyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQVo7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNYSxZQUFZLENBQUNDO1FBQ2pCLE1BQU1D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Ozs7Ozs7Ozs7OzswQkFRekIsOERBQUNtQjtnQkFBSUMsV0FBVTswQkFDWmIsc0JBQ0MsOERBQUNZO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNhOzRDQUFHYixXQUFVO3NEQUF3Qjs7Ozs7O3NEQUN0Qyw4REFBQ1E7NENBQ0NSLFdBQVU7NENBQ1ZTLFNBQVNwQjtzREFDVjs7Ozs7Ozs7Ozs7OzhDQUlILDhEQUFDVTtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3RELHdEQUFPQTt3Q0FDTm9FLE9BQU9oRTt3Q0FDUEUsT0FBT0E7d0NBQ1ArRCxrQkFBa0IvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BDO0dBbExTckM7S0FBQUE7QUFvTFQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90aWVuZGEvcGFnZS50c3g/MWQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tIFwiLi4vcHJvZHVjdG9zL3Byb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgQ2Fycml0byBmcm9tIFwiLi4vY2Fycml0by9jYXJyaXRvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIElEOiBudW1iZXI7XHJcbiAgbm9tYnJlOiBzdHJpbmc7XHJcbiAgbWFyY2E6IHN0cmluZztcclxuICBwcmVjaW86IG51bWJlcjtcclxuICBkZXNjdWVudG86IG51bWJlcjtcclxuICBwcmVjaW9kZXNjdWVudG86IG51bWJlcjtcclxuICBpbWFnZW46IHN0cmluZztcclxuICBkZXNjcmlwY2lvbjogc3RyaW5nO1xyXG4gIGNhbnRpZGFkOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0SXRlbSB7XHJcbiAgSUQ6IG51bWJlcjtcclxuICBub21icmU6IHN0cmluZztcclxuICBtYXJjYTogc3RyaW5nO1xyXG4gIHByZWNpbzogbnVtYmVyO1xyXG4gIGRlc2N1ZW50bzogbnVtYmVyO1xyXG4gIHByZWNpb2Rlc2N1ZW50bzogbnVtYmVyO1xyXG4gIGltYWdlbjogc3RyaW5nO1xyXG4gIGRlc2NyaXBjaW9uOiBzdHJpbmc7XHJcbiAgY2FudGlkYWQ6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gVGllbmRhKCkge1xyXG4gIGNvbnN0IFtxLCBzZXRxXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8Q2FydEl0ZW1bXT4oW10pO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRtYXJjYSwgc2V0U2VsZWN0ZWRtYXJjYV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxyXG4gICAgXCJUb2RhcyBsYXMgY2F0ZWdvcsOtYXNcIlxyXG4gICk7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlYWxpemEgdW5hIHNvbGljaXR1ZCBhIGxhIEFQSSB5IGNhcmdhIGxvcyBwcm9kdWN0b3MgZW4gcHJvZHVjdG9zXHJcbiAgICAvLyBBanVzdGEgbGEgVVJMIGRlIGxhIEFQSSBzZWfDum4gdHUgY2Fzb1xyXG4gICAgLy8gY29uc3QgYXBpVXJsID0gXCJodHRwczovL2FwaS0yLXhneWQub25yZW5kZXIuY29tL2FwaS9wcm9kdWN0b3NcIjtcclxuICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0b3NcIjtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGhlYWRlcnMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsIC8vIE3DqXRvZG8gZGUgc29saWNpdHVkLCBhasO6c3RhbG8gc2Vnw7puIHR1IEFQSVxyXG4gICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIHByb2R1Y3RvcyBkZXNkZSBsYSBBUElcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKGRhdGEucHJvZHVjdG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gY2FydC5maW5kKChpdGVtKSA9PiBpdGVtLklEID09PSBwcm9kdWN0LklEKTtcclxuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcclxuICAgICAgZXhpc3RpbmdJdGVtLmNhbnRpZGFkICs9IDE7XHJcbiAgICAgIHNldENhcnQoWy4uLmNhcnRdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7IC4uLnByb2R1Y3QsIGNhbnRpZGFkOiAxIH07XHJcbiAgICAgIHNldENhcnQoWy4uLmNhcnQsIG5ld1Byb2R1Y3RdKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRxKHEgKyAxKTtcclxuICAgIHNldFRvdGFsKHRvdGFsICsgcHJvZHVjdC5wcmVjaW9kZXNjdWVudG8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3Q6IENhcnRJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBjYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uSUQgPT09IHByb2R1Y3QuSUQpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcclxuICAgICAgaWYgKGV4aXN0aW5nSXRlbS5jYW50aWRhZCA+IDEpIHtcclxuICAgICAgICBleGlzdGluZ0l0ZW0uY2FudGlkYWQgLT0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ2FydCA9IGNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLklEICE9PSBwcm9kdWN0LklEKTtcclxuICAgICAgICBzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRxKHEgLSAxKTtcclxuICAgICAgc2V0VG90YWwodG90YWwgLSBwcm9kdWN0LnByZWNpb2Rlc2N1ZW50byk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgY2FtYmlhciBsYSBjYXRlZ29yw61hIHNlbGVjY2lvbmFkYVxyXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKG1hcmNhOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkbWFyY2EobWFyY2EpO1xyXG4gIH07XHJcbiAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xyXG4gICAgLy8gQm9ycmEgZWwgdG9rZW4gZGVsIGxvY2FsU3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiLi4vXCIpO1xyXG4gICAgLy8gUmVkaXJpZ2UgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGRlIHNlc2nDs24gdSBvdHJhIHDDoWdpbmEgYXByb3BpYWRhXHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaW5pY2lvLWRlLXNlc2lvbic7IC8vIFJlZW1wbGF6YSBjb24gbGEgVVJMIGRlIGluaWNpbyBkZSBzZXNpw7NuXHJcbiAgfTtcclxuICBjb25zdCBjaGVja1Rva2VuVmFsaWRpdHkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4gICAgaWYgKHN0b3JlZFRva2VuKSB7XHJcbiAgICAgIC8vIFJlYWxpemEgdW5hIHNvbGljaXR1ZCBhbCBzZXJ2aWRvciBwYXJhIHZhbGlkYXIgZWwgdG9rZW4sIHNpIGVzIG5lY2VzYXJpby5cclxuICAgICAgLy8gUHVlZGVzIHVzYXIgbGEgbWlzbWEgcnV0YSBkZWwgc2Vydmlkb3IgcGFyYSB2YWxpZGFyIGVsIHRva2VuLlxyXG5cclxuICAgICAgLy8gU2kgZWwgdG9rZW4gZXMgdsOhbGlkbywgcmVkaXJpZ2UgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGVzZWFkYS5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIuLi9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgPGNlbnRlcj5UaWVuZGE8L2NlbnRlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvM1wiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy13aGl0ZSByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZG1hcmNhfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDYXRlZ29yeUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRvZGFzIGxhcyBjYXRlZ29yw61hc1wiPlxyXG4gICAgICAgICAgICAgICAgICBUb2RhcyBsYXMgY2F0ZWdvcsOtYXNcclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNPUlNBSVJcIj5DT1JTQUlSPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVNVU1wiPkFTVVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMT0dJVEVDSFwiPkxPR0lURUNIPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Yj5DYXJyaXRvOiB7cX08L2I+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNCBwLTRcIj5cclxuICAgICAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChwcm9kdWN0KSA9PlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRtYXJjYSA9PT0gXCJUb2RhcyBsYXMgY2F0ZWdvcsOtYXNcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5tYXJjYSA9PT0gc2VsZWN0ZWRtYXJjYVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICA8UHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuSUR9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIG9uQWRkVG9DYXJ0PXsoKSA9PiBhZGRUb0NhcnQocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdy1taW5cIj5cclxuICAgICAgICB7c2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei01MCAgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTkwMCBvcGFjaXR5LTUwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xLzQgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+Q29tcHJhczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcnJpdG9cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2NhcnR9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgb25SZW1vdmVGcm9tQ2FydD17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGllbmRhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2R1Y3RvcyIsIkNhcnJpdG8iLCJUaWVuZGEiLCJxIiwic2V0cSIsImNhcnQiLCJzZXRDYXJ0IiwidG90YWwiLCJzZXRUb3RhbCIsInNlbGVjdGVkbWFyY2EiLCJzZXRTZWxlY3RlZG1hcmNhIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImFwaVVybCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoUHJvZHVjdHMiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInByb2R1Y3RvcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiaXRlbSIsIklEIiwiY2FudGlkYWQiLCJuZXdQcm9kdWN0IiwicHJlY2lvZGVzY3VlbnRvIiwicmVtb3ZlRnJvbUNhcnQiLCJ1cGRhdGVkQ2FydCIsImZpbHRlciIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJtYXJjYSIsImNlcnJhclNlc2lvbiIsInJlbW92ZUl0ZW0iLCJyb3V0ZXIiLCJyZXBsYWNlIiwiY2hlY2tUb2tlblZhbGlkaXR5Iiwic3RvcmVkVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXIiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiIiwibWFwIiwib25BZGRUb0NhcnQiLCJoMiIsIml0ZW1zIiwib25SZW1vdmVGcm9tQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tienda/page.tsx\n"));

/***/ })

});