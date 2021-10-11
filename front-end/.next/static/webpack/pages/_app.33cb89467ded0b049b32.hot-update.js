webpackHotUpdate_N_E("pages/_app",{

/***/ "./networks/api.js":
/*!*************************!*\
  !*** ./networks/api.js ***!
  \*************************/
/*! exports provided: login, getProducts, getCustomers, getVendors, postCustomers, postReceipts, getReceipts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers", function() { return getCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendors", function() { return getVendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCustomers", function() { return postCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReceipts", function() { return postReceipts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReceipts", function() { return getReceipts; });
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");





var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: "http://127.0.0.1:1338"
});
instance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(config) {
    var accessToken;
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            accessToken = 'Bearer ' + localStorage.getItem('accessToken');

            if (localStorage.getItem('accessToken')) {
              config.headers.Authorization = accessToken ? accessToken : '';
            }

            return _context.abrupt("return", config);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var login = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://127.0.0.1:1338/auth/local', {
              identifier: email,
              password: password
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getProducts = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return instance.get('products');

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProducts() {
    return _ref3.apply(this, arguments);
  };
}();
var getCustomers = /*#__PURE__*/function () {
  var _ref4 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return instance.get('customers?company_type=customer&company_type=customer_vendor');

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getCustomers() {
    return _ref4.apply(this, arguments);
  };
}();
var getVendors = /*#__PURE__*/function () {
  var _ref5 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return instance.get('customers?company_type=vendor&company_type=customer_vendor');

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getVendors() {
    return _ref5.apply(this, arguments);
  };
}();
var postCustomers = /*#__PURE__*/function () {
  var _ref6 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(data) {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return instance.post('customers', data);

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function postCustomers(_x4) {
    return _ref6.apply(this, arguments);
  };
}();
var postReceipts = /*#__PURE__*/function () {
  var _ref7 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(data) {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return instance.post('receipts', data);

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function postReceipts(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var getReceipts = /*#__PURE__*/function () {
  var _ref8 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(query) {
    return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return instance.get('receipts?' + query);

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getReceipts(_x6) {
    return _ref8.apply(this, arguments);
  };
}();

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV0d29ya3MvYXBpLmpzIl0sIm5hbWVzIjpbImluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsImlkZW50aWZpZXIiLCJnZXRQcm9kdWN0cyIsImdldCIsImdldEN1c3RvbWVycyIsImdldFZlbmRvcnMiLCJwb3N0Q3VzdG9tZXJzIiwiZGF0YSIsInBvc3RSZWNlaXB0cyIsImdldFJlY2VpcHRzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsU0FBTyxFQUFFO0FBRGlCLENBQWIsQ0FBakI7QUFJQUgsUUFBUSxDQUFDSSxZQUFULENBQXNCQyxPQUF0QixDQUE4QkMsR0FBOUI7QUFBQSw4V0FBa0MsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCQyx1QkFEd0IsR0FDVixZQUFZQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FERjs7QUFFOUIsZ0JBQUlELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFKLEVBQXlDO0FBRXJDSCxvQkFBTSxDQUFDSSxPQUFQLENBQWVDLGFBQWYsR0FBZ0NKLFdBQVcsR0FBR0EsV0FBSCxHQUFpQixFQUE1RDtBQUNIOztBQUw2Qiw2Q0FNdkJELE1BTnVCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU08sSUFBTU0sS0FBSztBQUFBLCtXQUFHLGtCQUFPQyxLQUFQLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hkLDRDQUFLLENBQUNlLElBQU4sQ0FBVyxrQ0FBWCxFQUErQztBQUFFQyx3QkFBVSxFQUFFSCxLQUFkO0FBQXFCQyxzQkFBUSxFQUFSQTtBQUFyQixhQUEvQyxDQURXOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTEYsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYO0FBR0EsSUFBTUssV0FBVztBQUFBLCtXQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNWbEIsUUFBUSxDQUFDbUIsR0FBVCxDQUFhLFVBQWIsQ0FEVTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhELFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7QUFHQSxJQUFNRSxZQUFZO0FBQUEsK1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hwQixRQUFRLENBQUNtQixHQUFULENBQWEsOERBQWIsQ0FEVzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7QUFHQSxJQUFNQyxVQUFVO0FBQUEsK1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1RyQixRQUFRLENBQUNtQixHQUFULENBQWEsNERBQWIsQ0FEUzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZFLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7QUFHQSxJQUFNQyxhQUFhO0FBQUEsK1dBQUcsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1p2QixRQUFRLENBQUNnQixJQUFULENBQWMsV0FBZCxFQUEyQk8sSUFBM0IsQ0FEWTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJELGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7QUFHQSxJQUFNRSxZQUFZO0FBQUEsK1dBQUcsa0JBQU9ELElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1h2QixRQUFRLENBQUNnQixJQUFULENBQWMsVUFBZCxFQUEwQk8sSUFBMUIsQ0FEVzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpDLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7QUFHQSxJQUFNQyxXQUFXO0FBQUEsK1dBQUcsa0JBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1YxQixRQUFRLENBQUNtQixHQUFULENBQWEsY0FBY08sS0FBM0IsQ0FEVTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhELFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zM2NiODk0NjdkZWQwYjA0OWIzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJ1xyXG5pbXBvcnQgZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly8xMjcuMC4wLjE6MTMzOFwiLFxyXG59KTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShhc3luYyAoY29uZmlnKSA9PiB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9ICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpKSB7XHJcblxyXG4gICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAoYWNjZXNzVG9rZW4gPyBhY2Nlc3NUb2tlbiA6ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4gKFxyXG4gICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMToxMzM4L2F1dGgvbG9jYWwnLCB7IGlkZW50aWZpZXI6IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgaW5zdGFuY2UuZ2V0KCdwcm9kdWN0cycpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBpbnN0YW5jZS5nZXQoJ2N1c3RvbWVycz9jb21wYW55X3R5cGU9Y3VzdG9tZXImY29tcGFueV90eXBlPWN1c3RvbWVyX3ZlbmRvcicpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFZlbmRvcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgaW5zdGFuY2UuZ2V0KCdjdXN0b21lcnM/Y29tcGFueV90eXBlPXZlbmRvciZjb21wYW55X3R5cGU9Y3VzdG9tZXJfdmVuZG9yJylcclxufVxyXG5leHBvcnQgY29uc3QgcG9zdEN1c3RvbWVycyA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgaW5zdGFuY2UucG9zdCgnY3VzdG9tZXJzJywgZGF0YSlcclxufVxyXG5leHBvcnQgY29uc3QgcG9zdFJlY2VpcHRzID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBpbnN0YW5jZS5wb3N0KCdyZWNlaXB0cycsIGRhdGEpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFJlY2VpcHRzID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgaW5zdGFuY2UuZ2V0KCdyZWNlaXB0cz8nICsgcXVlcnkpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==