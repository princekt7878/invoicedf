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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        className: "tr",
        children: inputFields.map(function (inputField) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                name: "firstName",
                label: "First Name",
                variant: "filled",
                value: inputField.firstName,
                onChange: function onChange(event) {
                  return handleChangeInput(inputField.id, event);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
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
                lineNumber: 272,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
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
                lineNumber: 279,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
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
                lineNumber: 286,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
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
                lineNumber: 293,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
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
                lineNumber: 300,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
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
                lineNumber: 307,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
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
                lineNumber: 314,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
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
                lineNumber: 321,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
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
                lineNumber: 328,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
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
                lineNumber: 335,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              disabled: inputFields.length === 1,
              onClick: function onClick() {
                return handleRemoveFields(inputField.id);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: handleAddFields
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 23
            }, _this)]
          }, inputField.id, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        // className={classes.button}
        variant: "contained",
        color: "primary",
        type: "submit" // endIcon={<Icon>send</Icon>}
        ,
        onClick: handleSubmit,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkNPTFVNTlMiLCJkYXRhIiwiTU9DS19EQVRBIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJmb290ZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInVzZVN0YXRlIiwiaWQiLCJ1dWlkdjQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlucHV0RmllbGRzIiwic2V0SW5wdXRGaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJldmVudCIsIm5ld0lucHV0RmllbGRzIiwibWFwIiwiaSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUFkZEZpZWxkcyIsImhhbmRsZVJlbW92ZUZpZWxkcyIsInZhbHVlcyIsInNwbGljZSIsImZpbmRJbmRleCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImlucHV0RmllbGQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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NGY2MmNkZDFhYTE2NmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSdcbi8vIGltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcbi8vIGltcG9ydCB7IENPTFVNTlMgfSBmcm9tICcuL2NvbHVtbnMnXG4vLyAvLyBpbXBvcnQgJy4vdGFibGUuY3NzJ1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IENPTFVNTlMsIFtdKVxuLy8gICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBNT0NLX0RBVEEsIFtdKVxuXG4vLyAgIGNvbnN0IHtcbi8vICAgICBnZXRUYWJsZVByb3BzLFxuLy8gICAgIGdldFRhYmxlQm9keVByb3BzLFxuLy8gICAgIGhlYWRlckdyb3Vwcyxcbi8vICAgICBmb290ZXJHcm91cHMsXG4vLyAgICAgcm93cyxcbi8vICAgICBwcmVwYXJlUm93XG4vLyAgIH0gPSB1c2VUYWJsZSh7XG4vLyAgICAgY29sdW1ucyxcbi8vICAgICBkYXRhXG4vLyAgIH0pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuXG4vLyAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2hvdmVyJz5cbi8vICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cid7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbi8vICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgney4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC90aD5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3RoZWFkPlxuLy8gICAgICAgICA8c2Nyb2xsVmlldyBob3Jpem8+IFxuLy8gICAgICAgICAgIDx0Ym9keSAgPlxuLy8gICAgICAgICAgICAgey8qIHtyb3dzLm1hcChyb3cgPT4ge1xuLy8gICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4vLyAgICAgICAgICAgICByZXR1cm4gKCAqL31cbi8vICAgICAgICAgICAgIHsvKiA8dHIgY2xhc3NOYW1lPSd0cicgey4uLnJvdy5nZXRSb3dQcm9wcygpfT4gKi99XG4vLyAgICAgICAgICAgICB7Lyoge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7ICovfVxuLy8gICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHInPlxuLy8gICAgICAgICAgICAgICA8dGg+PC90aD5cbi8vICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgLy8ge2NoYW5nZXN9XG4vLyAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cbi8vICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4vLyAgICAgICAgICAgICAgICAgICAvLyByZWFkT25seT17dHJ1ZX1cbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgey8qIH0pfSAqL31cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICB7LyogKSAqL31cbi8vICAgICAgICAgICAgIHsvKiB9KX0gKi99XG4vLyAgICAgICAgICAgPC90Ym9keT5cbi8vICAgICAgICAgPC9zY3JvbGxWaWV3PlxuLy8gICAgICAgICB7LyogPHRmb290ID5cbi8vICAgICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChmb290ZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgey4uLmZvb3Rlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XG4vLyAgICAgICAgICAgICAgIHtmb290ZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0ZCB7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdGb290ZXInKX08L3RkPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdGZvb3Q+ICovfVxuLy8gICAgICAgPC90YWJsZT5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcbi8vICAgLnRhYmxlIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXG4vLyAgICAgLnRyIHtcbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgLnRkIHtcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnRoLFxuLy8gICAgIC50ZCB7XG4vLyAgICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICAgOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJi5zdGlja3kge1xuLy8gICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbi8vICAgICAgIC5oZWFkZXIsXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgICAgICAgei1pbmRleDogMTtcbi8vICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuaGVhZGVyIHtcbi8vICAgICAgICAgdG9wOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmJvZHkge1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgIHotaW5kZXg6IDA7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS10ZF0ge1xuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBbZGF0YS1zdGlja3ktbGFzdC1sZWZ0LXRkXSB7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS1maXJzdC1yaWdodC10ZF0ge1xuLy8gICAgICAgICBib3gtc2hhZG93OiAtMnB4IDBweCAzcHggI2NjYztcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIGBcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbi8vIGltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuLy8gaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG4vLyBpbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbi8vIGltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgTU9DS19EQVRBIGZyb20gJy4vTU9DS19EQVRBLmpzb24nXG5pbXBvcnQgeyBDT0xVTU5TIH0gZnJvbSAnLi9jb2x1bW5zJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5leHBvcnQgY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBDT0xVTU5TLCBbXSlcbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gTU9DS19EQVRBLCBbXSlcblxuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgZm9vdGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvd1xuICB9ID0gdXNlVGFibGUoe1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YVxuICB9KVxuICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXG4gICAgeyBpZDogdXVpZHY0KCksIGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJyB9LFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIklucHV0RmllbGRzXCIsIGlucHV0RmllbGRzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChpZCwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdJbnB1dEZpZWxkcyA9IGlucHV0RmllbGRzLm1hcChpID0+IHtcbiAgICAgIGlmIChpZCA9PT0gaS5pZCkge1xuICAgICAgICBpW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSlcblxuICAgIHNldElucHV0RmllbGRzKG5ld0lucHV0RmllbGRzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXRJbnB1dEZpZWxkcyhbLi4uaW5wdXRGaWVsZHMsIHsgaWQ6IHV1aWR2NCgpLCBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycgfV0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSBpZCA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKHZhbHVlcy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUuaWQgPT09IGlkKSwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdob3Zlcic+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHIney4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RoJ3suLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICBcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkcy5tYXAoaW5wdXRGaWVsZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbnB1dEZpZWxkLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPjxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+PGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aW5wdXRGaWVsZHMubGVuZ3RoID09PSAxfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGaWVsZHMoaW5wdXRGaWVsZC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSZW1vdmVJY29uIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEFkZEljb24gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAvLyBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+U2VuZDwvYnV0dG9uPlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9