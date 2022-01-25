webpackHotUpdate_N_E("pages/sales-invoice/create-sales",{

/***/ "./components/Table/BasicTable.js":
/*!****************************************!*\
  !*** ./components/Table/BasicTable.js ***!
  \****************************************/
/*! exports provided: BasicTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTable", function() { return BasicTable; });
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MOCK_DATA.json */ "./components/Table/MOCK_DATA.json");
var _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./MOCK_DATA.json */ "./components/Table/MOCK_DATA.json", 1);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns */ "./components/Table/columns.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Kamlesh\\OneDrive\\Desktop\\ravi\\invoicedf\\front-end\\components\\Table\\BasicTable.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import React, { useMemo } from 'react'
// import { useTable } from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
// import { COLUMNS } from './columns'
// // import './table.css'
// import styled from 'styled-components'
// export const BasicTable = () => {
//   const columns = useMemo(() => COLUMNS, [])
//   const data = useMemo(() => MOCK_DATA, [])
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     footerGroups,
//     rows,
//     prepareRow
//   } = useTable({
//     columns,
//     data
//   })
//   return (
//     <>
//       <table className='table'>
//         <thead className='hover'>
//           {headerGroups.map(headerGroup => (
//             <tr className='tr'{...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th className='th'{...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <scrollView horizo> 
//           <tbody  >
//             {/* {rows.map(row => {
//             prepareRow(row)
//             return ( */}
//             {/* <tr className='tr' {...row.getRowProps()}> */}
//             {/* {row.cells.map(cell => { */}
//             <tr className='tr'>
//               <th></th>
//               <th>
//                 <input
//                   // {changes}
//                   // value={companyData ? companyData.gst_number : ""}
//                   // className="form-control"
//                   // readOnly={true}
//                   type="text"
//                   placeholder="Enter product name..."
//                 />
//               </th>
//               <th>
//                 <input
//                   type="text"
//                   placeholder="Enter product name..."
//                 />
//               </th>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               <td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td><td className='td'>
//                 <input
//                   type="number"
//                 />
//               </td>
//               {/* })} */}
//             </tr>
//             {/* ) */}
//             {/* })} */}
//           </tbody>
//         </scrollView>
//         {/* <tfoot >
//           {footerGroups.map(footerGroup => (
//             <tr {...footerGroup.getFooterGroupProps()}>
//               {footerGroup.headers.map(column => (
//                 <td {...column.getFooterProps()}>{column.render('Footer')}</td>
//               ))}
//             </tr>
//           ))}
//         </tfoot> */}
//       </table>
//     </>
//   )
// }
// export const Styles = styled.div`
//   .table {
//     border: 1px solid #ddd;
//     .tr {
//       :last-child {
//         .td {
//           border-bottom: 0;
//         }
//       }
//     }
//     .th,
//     .td {
//       padding: 5px;
//       border-bottom: 1px solid #ddd;
//       border-right: 1px solid #ddd;
//       background-color: #fff;
//       overflow: hidden;
//       :last-child {
//         border-right: 0;
//       }
//     }
//     &.sticky {
//       overflow: scroll;
//       .header,
//       .footer {
//         position: sticky;
//         z-index: 1;
//         width: fit-content;
//       }
//       .header {
//         top: 0;
//         box-shadow: 0px 3px 3px #ccc;
//       }
//       .footer {
//         bottom: 0;
//         box-shadow: 0px -3px 3px #ccc;
//       }
//       .body {
//         position: relative;
//         z-index: 0;
//       }
//       [data-sticky-td] {
//         position: sticky;
//       }
//       [data-sticky-last-left-td] {
//         box-shadow: 2px 0px 3px #ccc;
//       }
//       [data-sticky-first-right-td] {
//         box-shadow: -2px 0px 3px #ccc;
//       }
//     }
//   }
// `
 // import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';




 // import { makeStyles } from '@material-ui/core/styles';

var BasicTable = function BasicTable() {
  _s();

  var columns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _columns__WEBPACK_IMPORTED_MODULE_6__["COLUMNS"];
  }, []);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_5__;
  }, []);

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_7__["useTable"])({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      footerGroups = _useTable.footerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // const classes = useStyles()


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
    firstName: '',
    lastName: ''
  }]),
      inputFields = _useState[0],
      setInputFields = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  var handleChangeInput = function handleChangeInput(id, event) {
    var newInputFields = inputFields.map(function (i) {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }

      return i;
    });
    setInputFields(newInputFields);
  };

  var handleAddFields = function handleAddFields() {
    setInputFields([].concat(Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields), [{
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      firstName: '',
      lastName: ''
    }]));
  };

  var handleRemoveFields = function handleRemoveFields(id) {
    var values = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inputFields);

    values.splice(values.findIndex(function (value) {
      return value.id === id;
    }), 1);
    setInputFields(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
      className: "table",
      onSubmit: handleSubmit,
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
                lineNumber: 254,
                columnNumber: 17
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, _this), inputFields.map(function (inputField) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "hi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              name: "lastName",
              label: "Last Name",
              placeholder: "Enter product Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 80
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 19
            }, _this), "+", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 40
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 18
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 120
              },
              name: "lastName",
              label: "Last Name",
              variant: "filled",
              value: inputField.lastName,
              onChange: function onChange(event) {
                return handleChangeInput(inputField.id, event);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            disabled: inputFields.length === 1,
            onClick: function onClick() {
              return handleRemoveFields(inputField.id);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            onClick: handleAddFields
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 15
          }, _this)]
        }, inputField.id, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        // className={classes.button}
        variant: "contained",
        color: "primary",
        type: "submit" // endIcon={<Icon>send</Icon>}
        ,
        onClick: handleSubmit,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(BasicTable, "+3sgTAh+ChVtkaptJgiC3n+GPHk=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_7__["useTable"]];
});

_c = BasicTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInVzZVN0YXRlIiwiaWQiLCJ1dWlkdjQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJldmVudCIsIm5ld0lucHV0RmllbGRzIiwibWFwIiwiaSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInZhbHVlcyIsInNwbGljZSIsImZpbmRJbmRleCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImlucHV0RmllbGQiLCJ3aWR0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUlPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFFOUIsTUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsZ0RBQU47QUFBQSxHQUFELEVBQWdCLEVBQWhCLENBQXZCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixxREFBTyxDQUFDO0FBQUEsV0FBTUcsNENBQU47QUFBQSxHQUFELEVBQWtCLEVBQWxCLENBQXBCOztBQUg4QixrQkFZMUJDLDREQUFRLENBQUM7QUFD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QUFBLG1CQTlHRixlQWlIRTtBQUNFLG1CQUFPLEVBQUVtQjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakhGO0FBQUEsV0FBU1csVUFBVSxDQUFDOUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEd0I7QUFBQSxPQUExQixDQWZKLGVBNElFO0FBQ0U7QUFDQSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBQyxTQUhSO0FBSUUsWUFBSSxFQUFDLFFBSlAsQ0FLRTtBQUxGO0FBTUUsZUFBTyxFQUFFTSxZQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBeUpELENBeE1NOztHQUFNcEIsVTtVQVlQTSxvRDs7O0tBWk9OLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUtc2FsZXMuN2E3NmU4YTI2MGMzYjU3NzZhNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuLy8gaW1wb3J0IE1PQ0tfREFUQSBmcm9tICcuL01PQ0tfREFUQS5qc29uJ1xuLy8gaW1wb3J0IHsgQ09MVU1OUyB9IGZyb20gJy4vY29sdW1ucydcbi8vIC8vIGltcG9ydCAnLi90YWJsZS5jc3MnXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBleHBvcnQgY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcbi8vICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gQ09MVU1OUywgW10pXG4vLyAgIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IE1PQ0tfREFUQSwgW10pXG5cbi8vICAgY29uc3Qge1xuLy8gICAgIGdldFRhYmxlUHJvcHMsXG4vLyAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4vLyAgICAgaGVhZGVyR3JvdXBzLFxuLy8gICAgIGZvb3Rlckdyb3Vwcyxcbi8vICAgICByb3dzLFxuLy8gICAgIHByZXBhcmVSb3dcbi8vICAgfSA9IHVzZVRhYmxlKHtcbi8vICAgICBjb2x1bW5zLFxuLy8gICAgIGRhdGFcbi8vICAgfSlcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG5cbi8vICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0naG92ZXInPlxuLy8gICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbi8vICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJ3suLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuLy8gICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbi8vICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCd7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdGhlYWQ+XG4vLyAgICAgICAgIDxzY3JvbGxWaWV3IGhvcml6bz4gXG4vLyAgICAgICAgICAgPHRib2R5ICA+XG4vLyAgICAgICAgICAgICB7Lyoge3Jvd3MubWFwKHJvdyA9PiB7XG4vLyAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcbi8vICAgICAgICAgICAgIHJldHVybiAoICovfVxuLy8gICAgICAgICAgICAgey8qIDx0ciBjbGFzc05hbWU9J3RyJyB7Li4ucm93LmdldFJvd1Byb3BzKCl9PiAqL31cbi8vICAgICAgICAgICAgIHsvKiB7cm93LmNlbGxzLm1hcChjZWxsID0+IHsgKi99XG4vLyAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cic+XG4vLyAgICAgICAgICAgICAgIDx0aD48L3RoPlxuLy8gICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICAvLyB7Y2hhbmdlc31cbi8vICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmdzdF9udW1iZXIgOiBcIlwifVxuLy8gICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbi8vICAgICAgICAgICAgICAgICAgIC8vIHJlYWRPbmx5PXt0cnVlfVxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICB7LyogfSl9ICovfVxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIHsvKiApICovfVxuLy8gICAgICAgICAgICAgey8qIH0pfSAqL31cbi8vICAgICAgICAgICA8L3Rib2R5PlxuLy8gICAgICAgICA8L3Njcm9sbFZpZXc+XG4vLyAgICAgICAgIHsvKiA8dGZvb3QgPlxuLy8gICAgICAgICAgIHtmb290ZXJHcm91cHMubWFwKGZvb3Rlckdyb3VwID0+IChcbi8vICAgICAgICAgICAgIDx0ciB7Li4uZm9vdGVyR3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cbi8vICAgICAgICAgICAgICAge2Zvb3Rlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRkIHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfTwvdGQ+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC90Zm9vdD4gKi99XG4vLyAgICAgICA8L3RhYmxlPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxuLy8gICAudGFibGUge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cbi8vICAgICAudHIge1xuLy8gICAgICAgOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAudGQge1xuLy8gICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAudGgsXG4vLyAgICAgLnRkIHtcbi8vICAgICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4vLyAgICAgICA6bGFzdC1jaGlsZCB7XG4vLyAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmLnN0aWNreSB7XG4vLyAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuLy8gICAgICAgLmhlYWRlcixcbi8vICAgICAgIC5mb290ZXIge1xuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5oZWFkZXIge1xuLy8gICAgICAgICB0b3A6IDA7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5mb290ZXIge1xuLy8gICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuYm9keSB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgei1pbmRleDogMDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgW2RhdGEtc3RpY2t5LXRkXSB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS1sYXN0LWxlZnQtdGRdIHtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMnB4IDBweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgW2RhdGEtc3RpY2t5LWZpcnN0LXJpZ2h0LXRkXSB7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IC0ycHggMHB4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gYFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuLy8gaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuLy8gaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG4vLyBpbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbi8vIGltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuLy8gaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcbmltcG9ydCB7IENPTFVNTlMgfSBmcm9tICcuL2NvbHVtbnMnXG5cbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnXG4vLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5cbmV4cG9ydCBjb25zdCBCYXNpY1RhYmxlID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IENPTFVNTlMsIFtdKVxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBNT0NLX0RBVEEsIFtdKVxuXG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICBmb290ZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93XG4gIH0gPSB1c2VUYWJsZSh7XG4gICAgY29sdW1ucyxcbiAgICBkYXRhXG4gIH0pXG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGlkOiB1dWlkdjQoKSwgZmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGlkLCBldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld0lucHV0RmllbGRzID0gaW5wdXRGaWVsZHMubWFwKGkgPT4ge1xuICAgICAgaWYgKGlkID09PSBpLmlkKSB7XG4gICAgICAgIGlbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9KVxuXG4gICAgc2V0SW5wdXRGaWVsZHMobmV3SW5wdXRGaWVsZHMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgeyBpZDogdXVpZHY0KCksIGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJyB9XSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IGlkID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbLi4uaW5wdXRGaWVsZHNdO1xuICAgIHZhbHVlcy5zcGxpY2UodmFsdWVzLmZpbmRJbmRleCh2YWx1ZSA9PiB2YWx1ZS5pZCA9PT0gaWQpLCAxKTtcbiAgICBzZXRJbnB1dEZpZWxkcyh2YWx1ZXMpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdob3Zlcic+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHIney4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RoJ3suLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90aGVhZD5cblxuXG5cbiAgICAgICAge1xuICAgICAgICAgIGlucHV0RmllbGRzLm1hcChpbnB1dEZpZWxkID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2lucHV0RmllbGQuaWR9PlxuICAgICAgICAgICAgICA8dGg+aGk8L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHByb2R1Y3QgTmFtZSdcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAvPis8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lucHV0RmllbGRzLmxlbmd0aCA9PT0gMX0gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGlucHV0RmllbGQuaWQpfT5cbiAgICAgICAgICAgICAgICB7LyogPFJlbW92ZUljb24gLz4gKi99XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRmllbGRzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIDxBZGRJY29uIC8+ICovfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuXG5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIC8vIGVuZEljb249ezxJY29uPnNlbmQ8L0ljb24+fVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9