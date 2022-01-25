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
            columnNumber: 23
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              style: {
                width: 20
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
              lineNumber: 266,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 23
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
              lineNumber: 275,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 23
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
              lineNumber: 282,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 23
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
              lineNumber: 289,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 23
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
              lineNumber: 296,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 23
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
              lineNumber: 303,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 23
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
              lineNumber: 310,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 23
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
              lineNumber: 317,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 23
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
              lineNumber: 324,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 23
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
              lineNumber: 331,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 23
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            disabled: inputFields.length === 1,
            onClick: function onClick() {
              return handleRemoveFields(inputField.id);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 23
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            onClick: handleAddFields
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 23
          }, _this)]
        }, inputField.id, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
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
        lineNumber: 352,
        columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInVzZVN0YXRlIiwiaWQiLCJ1dWlkdjQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJldmVudCIsIm5ld0lucHV0RmllbGRzIiwibWFwIiwiaSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInZhbHVlcyIsInNwbGljZSIsImZpbmRJbmRleCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImlucHV0RmllbGQiLCJ3aWR0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUlPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFFOUIsTUFBTUMsT0FBTyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTUMsZ0RBQU47QUFBQSxHQUFELEVBQWdCLEVBQWhCLENBQXZCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixxREFBTyxDQUFDO0FBQUEsV0FBTUcsNENBQU47QUFBQSxHQUFELEVBQWtCLEVBQWxCLENBQXBCOztBQUg4QixrQkFZMUJDLDREQUFRLENBQUM7QUFD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QUFpQixDQUFDbUIsVUFBVSxDQUFDOUIsRUFBWixFQUFnQlksS0FBaEIsQ0FBckI7QUFBQTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5FRixlQTBFRTtBQUFRLG9CQUFRLEVBQUVSLFdBQVcsQ0FBQzRCLE1BQVosS0FBdUIsQ0FBekM7QUFBNEMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNWixrQkFBa0IsQ0FBQ1UsVUFBVSxDQUFDOUIsRUFBWixDQUF4QjtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUVGLGVBNkVFO0FBQ0UsbUJBQU8sRUFBRW1CO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3RUY7QUFBQSxXQUFTVyxVQUFVLENBQUM5QixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQTFCLENBZlosZUF3R1U7QUFDRTtBQUNBLGVBQU8sRUFBQyxXQUZWO0FBR0UsYUFBSyxFQUFDLFNBSFI7QUFJRSxZQUFJLEVBQUMsUUFKUCxDQUtFO0FBTEY7QUFNRSxlQUFPLEVBQUVNLFlBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4R1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxSEQsQ0FwS007O0dBQU1wQixVO1VBWVBNLG9EOzs7S0FaT04sVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlcy1pbnZvaWNlL2NyZWF0ZS1zYWxlcy5lMTIyOGE5OTFiNWUxMzdiMThmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnXG4vLyBpbXBvcnQgTU9DS19EQVRBIGZyb20gJy4vTU9DS19EQVRBLmpzb24nXG4vLyBpbXBvcnQgeyBDT0xVTU5TIH0gZnJvbSAnLi9jb2x1bW5zJ1xuLy8gLy8gaW1wb3J0ICcuL3RhYmxlLmNzcydcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIGV4cG9ydCBjb25zdCBCYXNpY1RhYmxlID0gKCkgPT4ge1xuLy8gICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBDT0xVTU5TLCBbXSlcbi8vICAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gTU9DS19EQVRBLCBbXSlcblxuLy8gICBjb25zdCB7XG4vLyAgICAgZ2V0VGFibGVQcm9wcyxcbi8vICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbi8vICAgICBoZWFkZXJHcm91cHMsXG4vLyAgICAgZm9vdGVyR3JvdXBzLFxuLy8gICAgIHJvd3MsXG4vLyAgICAgcHJlcGFyZVJvd1xuLy8gICB9ID0gdXNlVGFibGUoe1xuLy8gICAgIGNvbHVtbnMsXG4vLyAgICAgZGF0YVxuLy8gICB9KVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cblxuLy8gICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdob3Zlcic+XG4vLyAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuLy8gICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHIney4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4vLyAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RoJ3suLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC90aGVhZD5cbi8vICAgICAgICAgPHNjcm9sbFZpZXcgaG9yaXpvPiBcbi8vICAgICAgICAgICA8dGJvZHkgID5cbi8vICAgICAgICAgICAgIHsvKiB7cm93cy5tYXAocm93ID0+IHtcbi8vICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuLy8gICAgICAgICAgICAgcmV0dXJuICggKi99XG4vLyAgICAgICAgICAgICB7LyogPHRyIGNsYXNzTmFtZT0ndHInIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+ICovfVxuLy8gICAgICAgICAgICAgey8qIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4geyAqL31cbi8vICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJz5cbi8vICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIC8vIHtjaGFuZ2VzfVxuLy8gICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e2NvbXBhbnlEYXRhID8gY29tcGFueURhdGEuZ3N0X251bWJlciA6IFwiXCJ9XG4vLyAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuLy8gICAgICAgICAgICAgICAgICAgLy8gcmVhZE9ubHk9e3RydWV9XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgIHsvKiB9KX0gKi99XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgey8qICkgKi99XG4vLyAgICAgICAgICAgICB7LyogfSl9ICovfVxuLy8gICAgICAgICAgIDwvdGJvZHk+XG4vLyAgICAgICAgIDwvc2Nyb2xsVmlldz5cbi8vICAgICAgICAgey8qIDx0Zm9vdCA+XG4vLyAgICAgICAgICAge2Zvb3Rlckdyb3Vwcy5tYXAoZm9vdGVyR3JvdXAgPT4gKFxuLy8gICAgICAgICAgICAgPHRyIHsuLi5mb290ZXJHcm91cC5nZXRGb290ZXJHcm91cFByb3BzKCl9PlxuLy8gICAgICAgICAgICAgICB7Zm9vdGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbi8vICAgICAgICAgICAgICAgICA8dGQgey4uLmNvbHVtbi5nZXRGb290ZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignRm9vdGVyJyl9PC90ZD5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3Rmb290PiAqL31cbi8vICAgICAgIDwvdGFibGU+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4vLyAgIC50YWJsZSB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcblxuLy8gICAgIC50ciB7XG4vLyAgICAgICA6bGFzdC1jaGlsZCB7XG4vLyAgICAgICAgIC50ZCB7XG4vLyAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC50aCxcbi8vICAgICAudGQge1xuLy8gICAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICYuc3RpY2t5IHtcbi8vICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4vLyAgICAgICAuaGVhZGVyLFxuLy8gICAgICAgLmZvb3RlciB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgICAgICAgIHotaW5kZXg6IDE7XG4vLyAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmhlYWRlciB7XG4vLyAgICAgICAgIHRvcDogMDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmZvb3RlciB7XG4vLyAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IC0zcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5ib2R5IHtcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICB6LWluZGV4OiAwO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBbZGF0YS1zdGlja3ktdGRdIHtcbi8vICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgW2RhdGEtc3RpY2t5LWxhc3QtbGVmdC10ZF0ge1xuLy8gICAgICAgICBib3gtc2hhZG93OiAycHggMHB4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBbZGF0YS1zdGlja3ktZmlyc3QtcmlnaHQtdGRdIHtcbi8vICAgICAgICAgYm94LXNoYWRvdzogLTJweCAwcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyBgXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG4vLyBpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG4vLyBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbi8vIGltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuLy8gaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG4vLyBpbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IE1PQ0tfREFUQSBmcm9tICcuL01PQ0tfREFUQS5qc29uJ1xuaW1wb3J0IHsgQ09MVU1OUyB9IGZyb20gJy4vY29sdW1ucydcblxuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSdcbi8vIGltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cblxuZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gQ09MVU1OUywgW10pXG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IE1PQ0tfREFUQSwgW10pXG5cbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIGZvb3Rlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3dcbiAgfSA9IHVzZVRhYmxlKHtcbiAgICBjb2x1bW5zLFxuICAgIGRhdGFcbiAgfSlcbiAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgaWQ6IHV1aWR2NCgpLCBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycgfSxcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaWQsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV3SW5wdXRGaWVsZHMgPSBpbnB1dEZpZWxkcy5tYXAoaSA9PiB7XG4gICAgICBpZiAoaWQgPT09IGkuaWQpIHtcbiAgICAgICAgaVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0pXG5cbiAgICBzZXRJbnB1dEZpZWxkcyhuZXdJbnB1dEZpZWxkcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCB7IGlkOiB1dWlkdjQoKSwgZmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnIH1dKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmllbGRzID0gaWQgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZSh2YWx1ZXMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlLmlkID09PSBpZCksIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0naG92ZXInPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJ3suLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCd7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkcy5tYXAoaW5wdXRGaWVsZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2lucHV0RmllbGQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5oaTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjBcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpbnB1dEZpZWxkcy5sZW5ndGggPT09IDF9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbnB1dEZpZWxkLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJlbW92ZUljb24gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QWRkSWNvbiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+U2VuZDwvYnV0dG9uPlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9