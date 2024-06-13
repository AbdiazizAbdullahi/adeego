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

/***/ "(app-pages-browser)/./src/app/components/WordAnim.jsx":
/*!*****************************************!*\
  !*** ./src/app/components/WordAnim.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst categories = [\n    {\n        label: \"Fresh Groceries\",\n        color: \"green\"\n    },\n    {\n        label: \"Gas\",\n        color: \"green\"\n    },\n    {\n        label: \"Dairy Products\",\n        color: \"green\"\n    },\n    {\n        label: \"Snacks\",\n        color: \"green\"\n    },\n    {\n        label: \"Cleaning Products\",\n        color: \"green\"\n    },\n    {\n        label: \"Dry Foods\",\n        color: \"green\"\n    }\n];\nconst WordAnim = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const animateWord = ()=>{\n            const timeoutId = setTimeout(()=>{\n                setActiveIndex((prevIndex)=>(prevIndex + 1) % categories.length);\n            }, 2000);\n            return ()=>clearTimeout(timeoutId); // Cleanup timeout\n        };\n        animateWord();\n    }, [\n        activeIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden  h-10 md:h-14 lg:h-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            mode: \"wait\",\n            initial: false,\n            children: categories.map((category, i)=>i === activeIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        y: \"90%\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: \"-80%\",\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.25\n                    },\n                    className: \"font-vest-b text-4xl md:text-5xl lg:text-7xl tracking-tighter\",\n                    style: {\n                        color: category.color\n                    },\n                    children: category.label\n                }, i, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined) : null)\n        }, void 0, false, {\n            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WordAnim, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = WordAnim;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordAnim);\nvar _c;\n$RefreshReg$(_c, \"WordAnim\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Xb3JkQW5pbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0Q7QUFDWjtBQUU1QyxNQUFNSSxhQUFhO0lBQ2pCO1FBQUVDLE9BQU87UUFBbUJDLE9BQU87SUFBUTtJQUMzQztRQUFFRCxPQUFPO1FBQU9DLE9BQU87SUFBUTtJQUMvQjtRQUFFRCxPQUFPO1FBQWtCQyxPQUFPO0lBQVE7SUFDMUM7UUFBRUQsT0FBTztRQUFVQyxPQUFPO0lBQVE7SUFDbEM7UUFBRUQsT0FBTztRQUFxQkMsT0FBTztJQUFRO0lBQzdDO1FBQUVELE9BQU87UUFBYUMsT0FBTztJQUFRO0NBQ3RDO0FBRUQsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixNQUFNQyxZQUFZQyxXQUFXO2dCQUMzQkgsZUFBZSxDQUFDSSxZQUFjLENBQUNBLFlBQVksS0FBS1QsV0FBV1UsTUFBTTtZQUNuRSxHQUFHO1lBRUgsT0FBTyxJQUFNQyxhQUFhSixZQUFZLGtCQUFrQjtRQUMxRDtRQUVBRDtJQUNGLEdBQUc7UUFBQ0Y7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2pCLDBEQUFlQTtZQUFDa0IsTUFBSztZQUFPQyxTQUFTO3NCQUNuQ2YsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxJQUN6QkEsTUFBTWQsNEJBQ0osOERBQUNQLGlEQUFNQSxDQUFDZSxHQUFHO29CQUVURyxTQUFTO3dCQUNQSSxHQUFHO3dCQUNIQyxTQUFTO29CQUNYO29CQUNBQyxTQUFTO3dCQUNQRixHQUFHO3dCQUNIQyxTQUFTO29CQUNYO29CQUNBRSxNQUFNO3dCQUNKSCxHQUFHO3dCQUNIQyxTQUFTO29CQUNYO29CQUNBRyxZQUFZO3dCQUNWQyxVQUFVO29CQUNaO29CQUNBWCxXQUFVO29CQUNWWSxPQUFPO3dCQUNMdkIsT0FBT2UsU0FBU2YsS0FBSztvQkFDdkI7OEJBRUNlLFNBQVNoQixLQUFLO21CQXJCVmlCOzs7O2dDQXVCTDs7Ozs7Ozs7Ozs7QUFLZDtHQWpETWY7S0FBQUE7QUFtRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1dvcmRBbmltLmpzeD8xMzU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIHsgbGFiZWw6IFwiRnJlc2ggR3JvY2VyaWVzXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgeyBsYWJlbDogXCJHYXNcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIkRhaXJ5IFByb2R1Y3RzXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgeyBsYWJlbDogXCJTbmFja3NcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIkNsZWFuaW5nIFByb2R1Y3RzXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgeyBsYWJlbDogXCJEcnkgRm9vZHNcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuXTtcblxuY29uc3QgV29yZEFuaW0gPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhbmltYXRlV29yZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSBjYXRlZ29yaWVzLmxlbmd0aCk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpOyAvLyBDbGVhbnVwIHRpbWVvdXRcbiAgICB9O1xuXG4gICAgYW5pbWF0ZVdvcmQoKTtcbiAgfSwgW2FjdGl2ZUluZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiAgaC0xMCBtZDpoLTE0IGxnOmgtMjBcIj5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIiBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+XG4gICAgICAgICAgaSA9PT0gYWN0aXZlSW5kZXggPyAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgICB5OiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGV4aXQ9e3tcbiAgICAgICAgICAgICAgICB5OiBcIi04MCVcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMjUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtdmVzdC1iIHRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtN3hsIHRyYWNraW5nLXRpZ2h0ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjYXRlZ29yeS5jb2xvcixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NhdGVnb3J5LmxhYmVsfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRBbmltO1xuIl0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsImxhYmVsIiwiY29sb3IiLCJXb3JkQW5pbSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRlV29yZCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RlIiwiaW5pdGlhbCIsIm1hcCIsImNhdGVnb3J5IiwiaSIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/WordAnim.jsx\n"));

/***/ })

});