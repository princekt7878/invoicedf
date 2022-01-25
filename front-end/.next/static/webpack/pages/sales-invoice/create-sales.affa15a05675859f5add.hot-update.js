webpackHotUpdate_N_E("pages/sales-invoice/create-sales",{

/***/ "./components/Table/BasicTable.js":
/*!****************************************!*\
  !*** ./components/Table/BasicTable.js ***!
  \****************************************/
/*! exports provided: BasicTable, Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTable", function() { return BasicTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MOCK_DATA.json */ "./components/Table/MOCK_DATA.json");
var _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./MOCK_DATA.json */ "./components/Table/MOCK_DATA.json", 1);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns */ "./components/Table/columns.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\Users\\Kamlesh\\OneDrive\\Desktop\\ravi\\invoicedf\\front-end\\components\\Table\\BasicTable.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .table {\n    border: 1px solid #ddd;\n\n    .tr {\n      :last-child {\n        .td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    .th,\n    .td {\n      padding: 5px;\n      border-bottom: 1px solid #ddd;\n      border-right: 1px solid #ddd;\n      background-color: #fff;\n      overflow: hidden;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n\n    &.sticky {\n      overflow: scroll;\n      .header,\n      .footer {\n        position: sticky;\n        z-index: 1;\n        width: fit-content;\n      }\n\n      .header {\n        top: 0;\n        box-shadow: 0px 3px 3px #ccc;\n      }\n\n      .footer {\n        bottom: 0;\n        box-shadow: 0px -3px 3px #ccc;\n      }\n\n      .body {\n        position: relative;\n        z-index: 0;\n      }\n\n      [data-sticky-td] {\n        position: sticky;\n      }\n\n      [data-sticky-last-left-td] {\n        box-shadow: 2px 0px 3px #ccc;\n      }\n\n      [data-sticky-first-right-td] {\n        box-shadow: -2px 0px 3px #ccc;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import './table.css'


var BasicTable = function BasicTable() {
  _s();

  var columns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _columns__WEBPACK_IMPORTED_MODULE_6__["COLUMNS"];
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5__;
  }, []);

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__["useTable"])({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      footerGroups = _useTable.footerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
      className: "table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
        className: "hover",
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", _objectSpread(_objectSpread({
            className: "tr"
          }, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", _objectSpread(_objectSpread({
                className: "th"
              }, column.getHeaderProps()), {}, {
                children: column.render('Header')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "tr",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              // {changes}
              // value={companyData ? companyData.gst_number : ""}
              // className="form-control"
              // readOnly={true}
              type: "text",
              placeholder: "Enter product name..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              // {changes}
              // value={companyData ? companyData.gst_number : ""}
              // className="form-control"
              // readOnly={true}
              type: "text",
              placeholder: "Enter product name..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
            className: "td",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              // value={invoiceNumber}
              // onChange={e => setInvoiceNumber(parseInt(e.target.value))}
              // className="form-control"
              type: "number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
            className: "td",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              // value={invoiceNumber}
              // onChange={e => setInvoiceNumber(parseInt(e.target.value))}
              // className="form-control"
              type: "number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
            className: "td",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              // value={invoiceNumber}
              // onChange={e => setInvoiceNumber(parseInt(e.target.value))}
              // className="form-control"
              type: "number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 20
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(BasicTable, "4Qya+w4qtV0BLZ5uS6jR1QvZsO4=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_4__["useTable"]];
});

_c = BasicTable;
var Styles = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

var _c;

$RefreshReg$(_c, "BasicTable");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsIlN0eWxlcyIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU1DLGdEQUFOO0FBQUEsR0FBRCxFQUFnQixFQUFoQixDQUF2QjtBQUNBLE1BQU1DLElBQUksR0FBR0YscURBQU8sQ0FBQztBQUFBLFdBQU1HLDRDQUFOO0FBQUEsR0FBRCxFQUFrQixFQUFsQixDQUFwQjs7QUFGOEIsa0JBVzFCQyw0REFBUSxDQUFDO0FBQ1hMLFdBQU8sRUFBUEEsT0FEVztBQUVYRyxRQUFJLEVBQUpBO0FBRlcsR0FBRCxDQVhrQjtBQUFBLE1BSzVCRyxhQUw0QixhQUs1QkEsYUFMNEI7QUFBQSxNQU01QkMsaUJBTjRCLGFBTTVCQSxpQkFONEI7QUFBQSxNQU81QkMsWUFQNEIsYUFPNUJBLFlBUDRCO0FBQUEsTUFRNUJDLFlBUjRCLGFBUTVCQSxZQVI0QjtBQUFBLE1BUzVCQyxJQVQ0QixhQVM1QkEsSUFUNEI7QUFBQSxNQVU1QkMsVUFWNEIsYUFVNUJBLFVBVjRCOztBQWdCOUIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFPLGVBQVMsRUFBQyxPQUFqQjtBQUFBLDhCQUVFO0FBQU8saUJBQVMsRUFBQyxPQUFqQjtBQUFBLGtCQUNHSCxZQUFZLENBQUNJLEdBQWIsQ0FBaUIsVUFBQUMsV0FBVztBQUFBLDhCQUMzQjtBQUFJLHFCQUFTLEVBQUM7QUFBZCxhQUFzQkEsV0FBVyxDQUFDQyxtQkFBWixFQUF0QjtBQUFBLHNCQUNHRCxXQUFXLENBQUNFLE9BQVosQ0FBb0JILEdBQXBCLENBQXdCLFVBQUFJLE1BQU07QUFBQSxrQ0FDN0I7QUFBSSx5QkFBUyxFQUFDO0FBQWQsaUJBQXNCQSxNQUFNLENBQUNDLGNBQVAsRUFBdEI7QUFBQSwwQkFBZ0RELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFENkI7QUFBQSxhQUE5QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDJCO0FBQUEsU0FBNUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFXRTtBQUFBLCtCQU1FO0FBQUksbUJBQVMsRUFBQyxJQUFkO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsbUNBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFJLEVBQUMsTUFMUDtBQU1FLHlCQUFXLEVBQUM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVlFO0FBQUEsbUNBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFJLEVBQUMsTUFMUDtBQU1FLHlCQUFXLEVBQUM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQXFCSTtBQUFJLHFCQUFTLEVBQUMsSUFBZDtBQUFBLG1DQUNGO0FBQ0U7QUFDQTtBQUNBO0FBQ0Esa0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCSixlQTRCRTtBQUFJLHFCQUFTLEVBQUMsSUFBZDtBQUFBLG1DQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0Esa0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVCRixlQWtDUztBQUFJLHFCQUFTLEVBQUMsSUFBZDtBQUFBLG1DQUNQO0FBQ0U7QUFDQTtBQUNBO0FBQ0Esa0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE2RUQsQ0E3Rk07O0dBQU1uQixVO1VBV1BNLG9EOzs7S0FYT04sVTtBQStGTixJQUFNb0IsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGVzLWludm9pY2UvY3JlYXRlLXNhbGVzLmFmZmExNWEwNTY3NTg1OWY1YWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSdcbmltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcbmltcG9ydCB7IENPTFVNTlMgfSBmcm9tICcuL2NvbHVtbnMnXG4vLyBpbXBvcnQgJy4vdGFibGUuY3NzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IENPTFVNTlMsIFtdKVxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBNT0NLX0RBVEEsIFtdKVxuXG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICBmb290ZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93XG4gIH0gPSB1c2VUYWJsZSh7XG4gICAgY29sdW1ucyxcbiAgICBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2hvdmVyJz5cbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cid7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgney4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC90aD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgPlxuICAgICAgICAgIHsvKiB7cm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgICAgcmV0dXJuICggKi99XG4gICAgICAgICAgey8qIDx0ciBjbGFzc05hbWU9J3RyJyB7Li4ucm93LmdldFJvd1Byb3BzKCl9PiAqL31cbiAgICAgICAgICB7Lyoge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7ICovfVxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJz5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAvLyB7Y2hhbmdlc31cbiAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIC8vIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAvLyB7Y2hhbmdlc31cbiAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIC8vIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4gICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnZvaWNlTnVtYmVyfVxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17ZSA9PiBzZXRJbnZvaWNlTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgLz48L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtpbnZvaWNlTnVtYmVyfVxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17ZSA9PiBzZXRJbnZvaWNlTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgLz48L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAvLyB2YWx1ZT17aW52b2ljZU51bWJlcn1cbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2UgPT4gc2V0SW52b2ljZU51bWJlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIC8+PC90ZD5cbiAgICAgICAgICAgIHsvKiB9KX0gKi99XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7LyogKSAqL31cbiAgICAgICAgICB7LyogfSl9ICovfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICB7LyogPHRmb290ID5cbiAgICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChmb290ZXJHcm91cCA9PiAoXG4gICAgICAgICAgICA8dHIgey4uLmZvb3Rlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtmb290ZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0ZCB7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdGb290ZXInKX08L3RkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGZvb3Q+ICovfVxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgLnRhYmxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXG4gICAgLnRyIHtcbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgLnRkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRoLFxuICAgIC50ZCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zdGlja3kge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIC5oZWFkZXIsXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAjY2NjO1xuICAgICAgfVxuXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggI2NjYztcbiAgICAgIH1cblxuICAgICAgLmJvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIFtkYXRhLXN0aWNreS10ZF0ge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgfVxuXG4gICAgICBbZGF0YS1zdGlja3ktbGFzdC1sZWZ0LXRkXSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggM3B4ICNjY2M7XG4gICAgICB9XG5cbiAgICAgIFtkYXRhLXN0aWNreS1maXJzdC1yaWdodC10ZF0ge1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDBweCAzcHggI2NjYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=