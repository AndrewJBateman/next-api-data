self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\gomez\\code\\AAProject16\\next-api-data\\components\\Users.js",
    _this = undefined;



var Users = function Users(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "list-group",
      children: props.users.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "list-group-item d-flex justify-content-between align-items-center list-group-item-action",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/users/[id]", "/users/".concat(user.id));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: [user.id, ". ", user.first_name, " ", user.last_name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: user.avatar,
            alt: "avat{user.first_name} {user.last_name}",
            style: {
              borderRadius: "50%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiUm91dGVyIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLGdCQUNFQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsNEJBQ2hCO0FBQ0MsbUJBQVMsRUFBQywwRkFEWDtBQUdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsdURBQUEsaUNBQXFDRCxJQUFJLENBQUNFLEVBQTFDLEVBQU47QUFBQSxXQUhWO0FBQUEsa0NBS0M7QUFBQSxvQ0FDQztBQUFBLHlCQUNFRixJQUFJLENBQUNFLEVBRFAsUUFDYUYsSUFBSSxDQUFDRyxVQURsQixPQUMrQkgsSUFBSSxDQUFDSSxTQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFBLG9DQUFXSixJQUFJLENBQUNLLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQsZUFXQztBQUFLLGVBQUcsRUFBRUwsSUFBSSxDQUFDTSxNQUFmO0FBQXVCLGVBQUcsRUFBQyx3Q0FBM0I7QUFBb0UsaUJBQUssRUFBRTtBQUFFQywwQkFBWSxFQUFFO0FBQWhCO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQSxXQUVNUCxJQUFJLENBQUNFLEVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFxQkEsQ0F0QkQ7O0tBQU1OLEs7QUF3Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJkNjg5OWI4MmFhNDY3NDBlYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IChcclxuXHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuXHRcdFx0XHRcdFx0a2V5PXt1c2VyLmlkfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL3VzZXJzL1tpZF1gLCBgL3VzZXJzLyR7dXNlci5pZH1gKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDU+XHJcblx0XHRcdFx0XHRcdFx0XHR7dXNlci5pZH0uIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGFsdD1cImF2YXR7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9XCIgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19IC8+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9