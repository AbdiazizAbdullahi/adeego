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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst categories = [\n    {\n        label: \"Drinks\",\n        color: \"green\"\n    },\n    {\n        label: \"Dairy\",\n        color: \"green\"\n    },\n    {\n        label: \"Personal Care\",\n        color: \"green\"\n    },\n    {\n        label: \"Personal Care\",\n        color: \"green\"\n    },\n    {\n        label: \"Personal Care\",\n        color: \"green\"\n    },\n    {\n        label: \"Snacks\",\n        color: \"green\"\n    },\n    {\n        label: \"Cleaning Essentials\",\n        color: \"green\"\n    },\n    {\n        label: \"Dry Foods\",\n        color: \"green\"\n    }\n];\nconst WordAnim = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const animateWord = ()=>{\n            const timeoutId = setTimeout(()=>{\n                setActiveIndex((prevIndex)=>(prevIndex + 1) % categories.length);\n            }, 2000);\n            return ()=>clearTimeout(timeoutId); // Cleanup timeout\n        };\n        animateWord();\n    }, [\n        activeIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden  h-10 md:h-14 lg:h-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            mode: \"wait\",\n            initial: false,\n            children: categories.map((category, i)=>i === activeIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        y: \"90%\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: \"-80%\",\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.25\n                    },\n                    className: \"font-vest-b text-4xl md:text-5xl lg:text-7xl tracking-tighter\",\n                    style: {\n                        color: category.color\n                    },\n                    children: category.label\n                }, i, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined) : null)\n        }, void 0, false, {\n            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WordAnim, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = WordAnim;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordAnim);\nvar _c;\n$RefreshReg$(_c, \"WordAnim\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Xb3JkQW5pbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0Q7QUFDWjtBQUU1QyxNQUFNSSxhQUFhO0lBQ2pCO1FBQUVDLE9BQU87UUFBVUMsT0FBTztJQUFRO0lBQ2xDO1FBQUVELE9BQU87UUFBU0MsT0FBTztJQUFRO0lBQ2pDO1FBQUVELE9BQU87UUFBaUJDLE9BQU87SUFBUTtJQUN6QztRQUFFRCxPQUFPO1FBQWlCQyxPQUFPO0lBQVE7SUFDekM7UUFBRUQsT0FBTztRQUFpQkMsT0FBTztJQUFRO0lBQ3pDO1FBQUVELE9BQU87UUFBVUMsT0FBTztJQUFRO0lBQ2xDO1FBQUVELE9BQU87UUFBdUJDLE9BQU87SUFBUTtJQUMvQztRQUFFRCxPQUFPO1FBQWFDLE9BQU87SUFBUTtDQUN0QztBQUVELE1BQU1DLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGNBQWM7WUFDbEIsTUFBTUMsWUFBWUMsV0FBVztnQkFDM0JILGVBQWUsQ0FBQ0ksWUFBYyxDQUFDQSxZQUFZLEtBQUtULFdBQVdVLE1BQU07WUFDbkUsR0FBRztZQUVILE9BQU8sSUFBTUMsYUFBYUosWUFBWSxrQkFBa0I7UUFDMUQ7UUFFQUQ7SUFDRixHQUFHO1FBQUNGO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNqQiwwREFBZUE7WUFBQ2tCLE1BQUs7WUFBT0MsU0FBUztzQkFDbkNmLFdBQVdnQixHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsSUFDekJBLE1BQU1kLDRCQUNKLDhEQUFDUCxpREFBTUEsQ0FBQ2UsR0FBRztvQkFFVEcsU0FBUzt3QkFDUEksR0FBRzt3QkFDSEMsU0FBUztvQkFDWDtvQkFDQUMsU0FBUzt3QkFDUEYsR0FBRzt3QkFDSEMsU0FBUztvQkFDWDtvQkFDQUUsTUFBTTt3QkFDSkgsR0FBRzt3QkFDSEMsU0FBUztvQkFDWDtvQkFDQUcsWUFBWTt3QkFDVkMsVUFBVTtvQkFDWjtvQkFDQVgsV0FBVTtvQkFDVlksT0FBTzt3QkFDTHZCLE9BQU9lLFNBQVNmLEtBQUs7b0JBQ3ZCOzhCQUVDZSxTQUFTaEIsS0FBSzttQkFyQlZpQjs7OztnQ0F1Qkw7Ozs7Ozs7Ozs7O0FBS2Q7R0FqRE1mO0tBQUFBO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Xb3JkQW5pbS5qc3g/MTM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICB7IGxhYmVsOiBcIkRyaW5rc1wiLCBjb2xvcjogXCJncmVlblwiIH0sXG4gIHsgbGFiZWw6IFwiRGFpcnlcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIlBlcnNvbmFsIENhcmVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIlBlcnNvbmFsIENhcmVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIlBlcnNvbmFsIENhcmVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICB7IGxhYmVsOiBcIlNuYWNrc1wiLCBjb2xvcjogXCJncmVlblwiIH0sXG4gIHsgbGFiZWw6IFwiQ2xlYW5pbmcgRXNzZW50aWFsc1wiLCBjb2xvcjogXCJncmVlblwiIH0sXG4gIHsgbGFiZWw6IFwiRHJ5IEZvb2RzXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbl07XG5cbmNvbnN0IFdvcmRBbmltID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYW5pbWF0ZVdvcmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgY2F0ZWdvcmllcy5sZW5ndGgpO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTsgLy8gQ2xlYW51cCB0aW1lb3V0XG4gICAgfTtcblxuICAgIGFuaW1hdGVXb3JkKCk7XG4gIH0sIFthY3RpdmVJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gIGgtMTAgbWQ6aC0xNCBsZzpoLTIwXCI+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJ3YWl0XCIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PlxuICAgICAgICAgIGkgPT09IGFjdGl2ZUluZGV4ID8gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgeTogXCI5MCVcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBleGl0PXt7XG4gICAgICAgICAgICAgICAgeTogXCItODAlXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXZlc3QtYiB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTd4bCB0cmFja2luZy10aWdodGVyXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogY2F0ZWdvcnkuY29sb3IsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5sYWJlbH1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkQW5pbTtcbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNhdGVnb3JpZXMiLCJsYWJlbCIsImNvbG9yIiwiV29yZEFuaW0iLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0ZVdvcmQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kZSIsImluaXRpYWwiLCJtYXAiLCJjYXRlZ29yeSIsImkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/WordAnim.jsx\n"));

/***/ })

});