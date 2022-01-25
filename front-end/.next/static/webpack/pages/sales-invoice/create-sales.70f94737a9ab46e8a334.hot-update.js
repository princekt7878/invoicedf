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
      style: {
        borderWidth: 2
      },
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
              lineNumber: 273,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
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
              lineNumber: 283,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
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
              lineNumber: 293,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
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
              lineNumber: 303,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
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
              lineNumber: 313,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
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
              lineNumber: 323,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
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
              lineNumber: 333,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
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
              lineNumber: 343,
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
              lineNumber: 352,
              columnNumber: 18
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
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
              lineNumber: 362,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            disabled: inputFields.length === 1,
            onClick: function onClick() {
              return handleRemoveFields(inputField.id);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            onClick: handleAddFields
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
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
        lineNumber: 387,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInVzZVN0YXRlIiwiaWQiLCJ1dWlkdjQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJldmVudCIsIm5ld0lucHV0RmllbGRzIiwibWFwIiwiaSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInZhbHVlcyIsInNwbGljZSIsImZpbmRJbmRleCIsImJvcmRlcldpZHRoIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiaW5wdXRGaWVsZCIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFaLENBQXhCO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3R0YsZUFnSEU7QUFDRSxtQkFBTyxFQUFFbUI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhIRjtBQUFBLFdBQVNZLFVBQVUsQ0FBQy9CLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBMUIsQ0FmSixlQTJJRTtBQUNFO0FBQ0EsZUFBTyxFQUFDLFdBRlY7QUFHRSxhQUFLLEVBQUMsU0FIUjtBQUlFLFlBQUksRUFBQyxRQUpQLENBS0U7QUFMRjtBQU1FLGVBQU8sRUFBRU0sWUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdKRCxDQXZNTTs7R0FBTXBCLFU7VUFZUE0sb0Q7OztLQVpPTixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGVzLWludm9pY2UvY3JlYXRlLXNhbGVzLjcwZjk0NzM3YTlhYjQ2ZThhMzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSdcbi8vIGltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcbi8vIGltcG9ydCB7IENPTFVNTlMgfSBmcm9tICcuL2NvbHVtbnMnXG4vLyAvLyBpbXBvcnQgJy4vdGFibGUuY3NzJ1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IENPTFVNTlMsIFtdKVxuLy8gICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBNT0NLX0RBVEEsIFtdKVxuXG4vLyAgIGNvbnN0IHtcbi8vICAgICBnZXRUYWJsZVByb3BzLFxuLy8gICAgIGdldFRhYmxlQm9keVByb3BzLFxuLy8gICAgIGhlYWRlckdyb3Vwcyxcbi8vICAgICBmb290ZXJHcm91cHMsXG4vLyAgICAgcm93cyxcbi8vICAgICBwcmVwYXJlUm93XG4vLyAgIH0gPSB1c2VUYWJsZSh7XG4vLyAgICAgY29sdW1ucyxcbi8vICAgICBkYXRhXG4vLyAgIH0pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuXG4vLyAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2hvdmVyJz5cbi8vICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cid7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbi8vICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgney4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC90aD5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3RoZWFkPlxuLy8gICAgICAgICA8c2Nyb2xsVmlldyBob3Jpem8+IFxuLy8gICAgICAgICAgIDx0Ym9keSAgPlxuLy8gICAgICAgICAgICAgey8qIHtyb3dzLm1hcChyb3cgPT4ge1xuLy8gICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4vLyAgICAgICAgICAgICByZXR1cm4gKCAqL31cbi8vICAgICAgICAgICAgIHsvKiA8dHIgY2xhc3NOYW1lPSd0cicgey4uLnJvdy5nZXRSb3dQcm9wcygpfT4gKi99XG4vLyAgICAgICAgICAgICB7Lyoge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7ICovfVxuLy8gICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHInPlxuLy8gICAgICAgICAgICAgICA8dGg+PC90aD5cbi8vICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgLy8ge2NoYW5nZXN9XG4vLyAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cbi8vICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4vLyAgICAgICAgICAgICAgICAgICAvLyByZWFkT25seT17dHJ1ZX1cbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgey8qIH0pfSAqL31cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICB7LyogKSAqL31cbi8vICAgICAgICAgICAgIHsvKiB9KX0gKi99XG4vLyAgICAgICAgICAgPC90Ym9keT5cbi8vICAgICAgICAgPC9zY3JvbGxWaWV3PlxuLy8gICAgICAgICB7LyogPHRmb290ID5cbi8vICAgICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChmb290ZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgey4uLmZvb3Rlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XG4vLyAgICAgICAgICAgICAgIHtmb290ZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0ZCB7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdGb290ZXInKX08L3RkPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdGZvb3Q+ICovfVxuLy8gICAgICAgPC90YWJsZT5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcbi8vICAgLnRhYmxlIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXG4vLyAgICAgLnRyIHtcbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgLnRkIHtcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnRoLFxuLy8gICAgIC50ZCB7XG4vLyAgICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICAgOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJi5zdGlja3kge1xuLy8gICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbi8vICAgICAgIC5oZWFkZXIsXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgICAgICAgei1pbmRleDogMTtcbi8vICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuaGVhZGVyIHtcbi8vICAgICAgICAgdG9wOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmJvZHkge1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgIHotaW5kZXg6IDA7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS10ZF0ge1xuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBbZGF0YS1zdGlja3ktbGFzdC1sZWZ0LXRkXSB7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS1maXJzdC1yaWdodC10ZF0ge1xuLy8gICAgICAgICBib3gtc2hhZG93OiAtMnB4IDBweCAzcHggI2NjYztcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIGBcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbi8vIGltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuLy8gaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG4vLyBpbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbi8vIGltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgTU9DS19EQVRBIGZyb20gJy4vTU9DS19EQVRBLmpzb24nXG5pbXBvcnQgeyBDT0xVTU5TIH0gZnJvbSAnLi9jb2x1bW5zJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5leHBvcnQgY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBDT0xVTU5TLCBbXSlcbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gTU9DS19EQVRBLCBbXSlcblxuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgZm9vdGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvd1xuICB9ID0gdXNlVGFibGUoe1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YVxuICB9KVxuICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gICAgeyBpZDogdXVpZHY0KCksIGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJyB9LFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGlucHV0RmllbGRzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpZCwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdJbnB1dEZpZWxkcyA9IGlucHV0RmllbGRzLm1hcChpID0+IHtcbiAgICAgIGlmIChpZCA9PT0gaS5pZCkge1xuICAgICAgICBpW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSlcblxuICAgIHNldElucHV0RmllbGRzKG5ld0lucHV0RmllbGRzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIHsgaWQ6IHV1aWR2NCgpLCBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycgfV0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSBpZCA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKHZhbHVlcy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUuaWQgPT09IGlkKSwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBzdHlsZT17e2JvcmRlcldpZHRoOjJ9fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdob3Zlcic+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHIney4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RoJ3suLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90aGVhZD5cblxuXG5cbiAgICAgICAge1xuICAgICAgICAgIGlucHV0RmllbGRzLm1hcChpbnB1dEZpZWxkID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2lucHV0RmllbGQuaWR9PlxuICAgICAgICAgICAgICA8dGg+aGk8L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgLz4rPGlucHV0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgIC8+PC90aD5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpbnB1dEZpZWxkcy5sZW5ndGggPT09IDF9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbnB1dEZpZWxkLmlkKX0+XG4gICAgICAgICAgICAgICAgey8qIDxSZW1vdmVJY29uIC8+ICovfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEZpZWxkc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiA8QWRkSWNvbiAvPiAqL31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgID5TZW5kPC9idXR0b24+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==