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
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Kamlesh\\OneDrive\\Desktop\\ravi\\invoicedf\\front-end\\components\\Table\\BasicTable.js",
    _this = undefined,
    _s = $RefreshSig$();

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

  // const classes = useStyles()
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
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
    setInputFields([].concat(Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields), [{
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
      firstName: '',
      lastName: ''
    }]));
  };

  var handleRemoveFields = function handleRemoveFields(id) {
    var values = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(inputFields);

    values.splice(values.findIndex(function (value) {
      return value.id === id;
    }), 1);
    setInputFields(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "Add New Member"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [inputFields.map(function (inputField) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            name: "firstName",
            label: "First Name",
            variant: "filled",
            value: inputField.firstName,
            onChange: function onChange(event) {
              return handleChangeInput(inputField.id, event);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            name: "lastName",
            label: "Last Name",
            variant: "filled",
            value: inputField.lastName,
            onChange: function onChange(event) {
              return handleChangeInput(inputField.id, event);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            disabled: inputFields.length === 1,
            onClick: function onClick() {
              return handleRemoveFields(inputField.id);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            onClick: handleAddFields
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this)]
        }, inputField.id, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        // className={classes.button}
        variant: "contained",
        color: "primary",
        type: "submit",
        endIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Icon, {
          children: "send"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 20
        }, _this),
        onClick: handleSubmit,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 5
  }, _this);
};

_s(BasicTable, "RLKP61WDAj4qzArkUAVnPfNObtg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJ1c2VTdGF0ZSIsImlkIiwidXVpZHY0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbnB1dEZpZWxkcyIsInNldElucHV0RmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZUlucHV0IiwiZXZlbnQiLCJuZXdJbnB1dEZpZWxkcyIsIm1hcCIsImkiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJpbnB1dEZpZWxkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bGVzLWludm9pY2UvY3JlYXRlLXNhbGVzLjMxYmY1NDkzZjYyMzJlNWUzY2M0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdyZWFjdC10YWJsZSdcbi8vIGltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcbi8vIGltcG9ydCB7IENPTFVNTlMgfSBmcm9tICcuL2NvbHVtbnMnXG4vLyAvLyBpbXBvcnQgJy4vdGFibGUuY3NzJ1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IENPTFVNTlMsIFtdKVxuLy8gICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBNT0NLX0RBVEEsIFtdKVxuXG4vLyAgIGNvbnN0IHtcbi8vICAgICBnZXRUYWJsZVByb3BzLFxuLy8gICAgIGdldFRhYmxlQm9keVByb3BzLFxuLy8gICAgIGhlYWRlckdyb3Vwcyxcbi8vICAgICBmb290ZXJHcm91cHMsXG4vLyAgICAgcm93cyxcbi8vICAgICBwcmVwYXJlUm93XG4vLyAgIH0gPSB1c2VUYWJsZSh7XG4vLyAgICAgY29sdW1ucyxcbi8vICAgICBkYXRhXG4vLyAgIH0pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuXG4vLyAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2hvdmVyJz5cbi8vICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cid7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbi8vICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGgney4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC90aD5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L3RoZWFkPlxuLy8gICAgICAgICA8c2Nyb2xsVmlldyBob3Jpem8+IFxuLy8gICAgICAgICAgIDx0Ym9keSAgPlxuLy8gICAgICAgICAgICAgey8qIHtyb3dzLm1hcChyb3cgPT4ge1xuLy8gICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4vLyAgICAgICAgICAgICByZXR1cm4gKCAqL31cbi8vICAgICAgICAgICAgIHsvKiA8dHIgY2xhc3NOYW1lPSd0cicgey4uLnJvdy5nZXRSb3dQcm9wcygpfT4gKi99XG4vLyAgICAgICAgICAgICB7Lyoge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7ICovfVxuLy8gICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndHInPlxuLy8gICAgICAgICAgICAgICA8dGg+PC90aD5cbi8vICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgLy8ge2NoYW5nZXN9XG4vLyAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cbi8vICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4vLyAgICAgICAgICAgICAgICAgICAvLyByZWFkT25seT17dHJ1ZX1cbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgey8qIH0pfSAqL31cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICB7LyogKSAqL31cbi8vICAgICAgICAgICAgIHsvKiB9KX0gKi99XG4vLyAgICAgICAgICAgPC90Ym9keT5cbi8vICAgICAgICAgPC9zY3JvbGxWaWV3PlxuLy8gICAgICAgICB7LyogPHRmb290ID5cbi8vICAgICAgICAgICB7Zm9vdGVyR3JvdXBzLm1hcChmb290ZXJHcm91cCA9PiAoXG4vLyAgICAgICAgICAgICA8dHIgey4uLmZvb3Rlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMoKX0+XG4vLyAgICAgICAgICAgICAgIHtmb290ZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0ZCB7Li4uY29sdW1uLmdldEZvb3RlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdGb290ZXInKX08L3RkPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdGZvb3Q+ICovfVxuLy8gICAgICAgPC90YWJsZT5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcbi8vICAgLnRhYmxlIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXG4vLyAgICAgLnRyIHtcbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcbi8vICAgICAgICAgLnRkIHtcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnRoLFxuLy8gICAgIC50ZCB7XG4vLyAgICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICAgOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgJi5zdGlja3kge1xuLy8gICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbi8vICAgICAgIC5oZWFkZXIsXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbi8vICAgICAgICAgei1pbmRleDogMTtcbi8vICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuaGVhZGVyIHtcbi8vICAgICAgICAgdG9wOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuZm9vdGVyIHtcbi8vICAgICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmJvZHkge1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgIHotaW5kZXg6IDA7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS10ZF0ge1xuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBbZGF0YS1zdGlja3ktbGFzdC1sZWZ0LXRkXSB7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS1maXJzdC1yaWdodC10ZF0ge1xuLy8gICAgICAgICBib3gtc2hhZG93OiAtMnB4IDBweCAzcHggI2NjYztcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIGBcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbi8vIGltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuLy8gaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG4vLyBpbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcbi8vIGltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbi8vIGltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cblxuZXhwb3J0IGNvbnN0IEJhc2ljVGFibGUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGlkOiB1dWlkdjQoKSwgZmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXRGaWVsZHNcIiwgaW5wdXRGaWVsZHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGlkLCBldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld0lucHV0RmllbGRzID0gaW5wdXRGaWVsZHMubWFwKGkgPT4ge1xuICAgICAgaWYoaWQgPT09IGkuaWQpIHtcbiAgICAgICAgaVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0pXG4gICAgXG4gICAgc2V0SW5wdXRGaWVsZHMobmV3SW5wdXRGaWVsZHMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQWRkRmllbGRzID0gKCkgPT4ge1xuICAgIHNldElucHV0RmllbGRzKFsuLi5pbnB1dEZpZWxkcywgeyBpZDogdXVpZHY0KCksICBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycgfV0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZHMgPSBpZCA9PiB7XG4gICAgY29uc3QgdmFsdWVzICA9IFsuLi5pbnB1dEZpZWxkc107XG4gICAgdmFsdWVzLnNwbGljZSh2YWx1ZXMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlLmlkID09PSBpZCksIDEpO1xuICAgIHNldElucHV0RmllbGRzKHZhbHVlcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkFkZCBOZXcgTWVtYmVyPC9oMT5cbiAgICAgIDxmb3JtICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgeyBpbnB1dEZpZWxkcy5tYXAoaW5wdXRGaWVsZCA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lucHV0RmllbGQuaWR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0RmllbGQuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZUNoYW5nZUlucHV0KGlucHV0RmllbGQuaWQsIGV2ZW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpbnB1dEZpZWxkcy5sZW5ndGggPT09IDF9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkcyhpbnB1dEZpZWxkLmlkKX0+XG4gICAgICAgICAgICAgIHsvKiA8UmVtb3ZlSWNvbiAvPiAqL31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRGaWVsZHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiA8QWRkSWNvbiAvPiAqL31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgZW5kSWNvbj17PEljb24+c2VuZDwvSWNvbj59XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICA+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=