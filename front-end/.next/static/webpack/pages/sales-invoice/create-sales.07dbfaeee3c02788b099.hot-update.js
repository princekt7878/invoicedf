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
        children: rows.map(function (row) {
          prepareRow(row);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", _objectSpread(_objectSpread({
            className: "tr"
          }, row.getRowProps()), {}, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                // {changes}
                // value={companyData ? companyData.gst_number : ""}
                className: "form-control" // readOnly={true}
                ,
                type: "text",
                placeholder: "Enter product name..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 32
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 28
            }, _this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this);
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImdldFJvd1Byb3BzIiwiU3R5bGVzIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDOUIsTUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsZ0RBQU47QUFBQSxHQUFELEVBQWdCLEVBQWhCLENBQXZCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixxREFBTyxDQUFDO0FBQUEsV0FBTUcsNENBQU47QUFBQSxHQUFELEVBQWtCLEVBQWxCLENBQXBCOztBQUY4QixrQkFXMUJDLDREQUFRLENBQUM7QUFDWEwsV0FBTyxFQUFQQSxPQURXO0FBRVhHLFFBQUksRUFBSkE7QUFGVyxHQUFELENBWGtCO0FBQUEsTUFLNUJHLGFBTDRCLGFBSzVCQSxhQUw0QjtBQUFBLE1BTTVCQyxpQkFONEIsYUFNNUJBLGlCQU40QjtBQUFBLE1BTzVCQyxZQVA0QixhQU81QkEsWUFQNEI7QUFBQSxNQVE1QkMsWUFSNEIsYUFRNUJBLFlBUjRCO0FBQUEsTUFTNUJDLElBVDRCLGFBUzVCQSxJQVQ0QjtBQUFBLE1BVTVCQyxVQVY0QixhQVU1QkEsVUFWNEI7O0FBZ0I5QixzQkFDRTtBQUFBLDJCQUNFO0FBQVEsZUFBUyxFQUFDLE9BQWxCO0FBQUEsOEJBRUU7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQUEsa0JBQ0dILFlBQVksQ0FBQ0ksR0FBYixDQUFpQixVQUFBQyxXQUFXO0FBQUEsOEJBQzNCO0FBQUkscUJBQVMsRUFBQztBQUFkLGFBQXNCQSxXQUFXLENBQUNDLG1CQUFaLEVBQXRCO0FBQUEsc0JBQ0dELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkgsR0FBcEIsQ0FBd0IsVUFBQUksTUFBTTtBQUFBLGtDQUM3QjtBQUFJLHlCQUFTLEVBQUM7QUFBZCxpQkFBc0JBLE1BQU0sQ0FBQ0MsY0FBUCxFQUF0QjtBQUFBLDBCQUFnREQsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ2QjtBQUFBLGFBQTlCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMkI7QUFBQSxTQUE1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVdFO0FBQUEsa0JBQ0dSLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFPLEdBQUcsRUFBSTtBQUNmUixvQkFBVSxDQUFDUSxHQUFELENBQVY7QUFDQSw4QkFDRTtBQUFJLHFCQUFTLEVBQUM7QUFBZCxhQUF1QkEsR0FBRyxDQUFDQyxXQUFKLEVBQXZCO0FBQUEsb0NBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUVhO0FBQUEscUNBQUk7QUFDaUI7QUFDQTtBQUNBLHlCQUFTLEVBQUMsY0FIM0IsQ0FJaUI7QUFKakI7QUFLaUIsb0JBQUksRUFBQyxNQUx0QjtBQU1pQiwyQkFBVyxFQUFDO0FBTjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWNELFNBaEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNENELENBNURNOztHQUFNckIsVTtVQVdQTSxvRDs7O0tBWE9OLFU7QUE4RE4sSUFBTXNCLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlcy1pbnZvaWNlL2NyZWF0ZS1zYWxlcy4wN2RiZmFlZWUzYzAyNzg4YjA5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnXG5pbXBvcnQgTU9DS19EQVRBIGZyb20gJy4vTU9DS19EQVRBLmpzb24nXG5pbXBvcnQgeyBDT0xVTU5TIH0gZnJvbSAnLi9jb2x1bW5zJ1xuLy8gaW1wb3J0ICcuL3RhYmxlLmNzcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCYXNpY1RhYmxlID0gKCkgPT4ge1xuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBDT0xVTU5TLCBbXSlcbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gTU9DS19EQVRBLCBbXSlcblxuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgZm9vdGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvd1xuICB9ID0gdXNlVGFibGUoe1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSAgY2xhc3NOYW1lPSd0YWJsZSc+XG4gICAgICBcbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0naG92ZXInPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJ3suLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCd7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSA+XG4gICAgICAgICAge3Jvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJyB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgIHsvKiB7cm93LmNlbGxzLm1hcChjZWxsID0+IHsgKi99XG4gICAgICAgICAgICAgICAgICA8dGg+PC90aD48dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7Y2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmdzdF9udW1iZXIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgey8qIH0pfSAqL31cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgey8qIDx0Zm9vdCA+XG4gICAgICAgICAge2Zvb3Rlckdyb3Vwcy5tYXAoZm9vdGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIHsuLi5mb290ZXJHcm91cC5nZXRGb290ZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7Zm9vdGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGQgey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignRm9vdGVyJyl9PC90ZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rmb290PiAqL31cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIC50YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcblxuICAgIC50ciB7XG4gICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgIC50ZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aCxcbiAgICAudGQge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc3RpY2t5IHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAuaGVhZGVyLFxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggI2NjYztcbiAgICAgIH1cblxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0zcHggM3B4ICNjY2M7XG4gICAgICB9XG5cbiAgICAgIC5ib2R5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICBbZGF0YS1zdGlja3ktdGRdIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIH1cblxuICAgICAgW2RhdGEtc3RpY2t5LWxhc3QtbGVmdC10ZF0ge1xuICAgICAgICBib3gtc2hhZG93OiAycHggMHB4IDNweCAjY2NjO1xuICAgICAgfVxuXG4gICAgICBbZGF0YS1zdGlja3ktZmlyc3QtcmlnaHQtdGRdIHtcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAwcHggM3B4ICNjY2M7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9