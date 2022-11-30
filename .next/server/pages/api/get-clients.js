"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-clients";
exports.ids = ["pages/api/get-clients"];
exports.modules = {

/***/ "(api)/./pages/api/get-clients.js":
/*!**********************************!*\
  !*** ./pages/api/get-clients.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// /api/new-meetup\nasync function handler(req, res) {\n    const response = await fetch(\"http://localhost:8000/getClients\", {\n        method: \"POST\",\n        body: JSON.stringify(req.body),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    res.json(data);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LWNsaWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtCQUFrQjtBQUVsQixlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0NBQWtDLEVBQUU7UUFDL0RDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO1FBQzlCRyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQztJQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQUksRUFBRTtJQUNsQ1QsR0FBRyxDQUFDUyxJQUFJLENBQUNELElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsaUVBQWVWLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxTdGFja1dlZWs4TGFiMi8uL3BhZ2VzL2FwaS9nZXQtY2xpZW50cy5qcz8zMGRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykgeyAvLyBjYW4gYmUgY2FsbGVkIGFueXRoaW5nIHlvdSBsaWtlXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldENsaWVudHMnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmVzLmpzb24oZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-clients.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-clients.js"));
module.exports = __webpack_exports__;

})();