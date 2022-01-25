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
        className: classes.button,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9CYXNpY1RhYmxlLmpzIl0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJ1c2VTdGF0ZSIsImlkIiwidXVpZHY0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbnB1dEZpZWxkcyIsInNldElucHV0RmllbGRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZUlucHV0IiwiZXZlbnQiLCJuZXdJbnB1dEZpZWxkcyIsIm1hcCIsImkiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZHMiLCJoYW5kbGVSZW1vdmVGaWVsZHMiLCJ2YWx1ZXMiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJpbnB1dEZpZWxkIiwibGVuZ3RoIiwiY2xhc3NlcyIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0dBQU1SLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUtc2FsZXMuNmFkZWI5MTRkMWM0ZDViMjdkODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuLy8gaW1wb3J0IE1PQ0tfREFUQSBmcm9tICcuL01PQ0tfREFUQS5qc29uJ1xuLy8gaW1wb3J0IHsgQ09MVU1OUyB9IGZyb20gJy4vY29sdW1ucydcbi8vIC8vIGltcG9ydCAnLi90YWJsZS5jc3MnXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBleHBvcnQgY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcbi8vICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gQ09MVU1OUywgW10pXG4vLyAgIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IE1PQ0tfREFUQSwgW10pXG5cbi8vICAgY29uc3Qge1xuLy8gICAgIGdldFRhYmxlUHJvcHMsXG4vLyAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4vLyAgICAgaGVhZGVyR3JvdXBzLFxuLy8gICAgIGZvb3Rlckdyb3Vwcyxcbi8vICAgICByb3dzLFxuLy8gICAgIHByZXBhcmVSb3dcbi8vICAgfSA9IHVzZVRhYmxlKHtcbi8vICAgICBjb2x1bW5zLFxuLy8gICAgIGRhdGFcbi8vICAgfSlcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG5cbi8vICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0naG92ZXInPlxuLy8gICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbi8vICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RyJ3suLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuLy8gICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbi8vICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0aCd7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdGhlYWQ+XG4vLyAgICAgICAgIDxzY3JvbGxWaWV3IGhvcml6bz4gXG4vLyAgICAgICAgICAgPHRib2R5ICA+XG4vLyAgICAgICAgICAgICB7Lyoge3Jvd3MubWFwKHJvdyA9PiB7XG4vLyAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcbi8vICAgICAgICAgICAgIHJldHVybiAoICovfVxuLy8gICAgICAgICAgICAgey8qIDx0ciBjbGFzc05hbWU9J3RyJyB7Li4ucm93LmdldFJvd1Byb3BzKCl9PiAqL31cbi8vICAgICAgICAgICAgIHsvKiB7cm93LmNlbGxzLm1hcChjZWxsID0+IHsgKi99XG4vLyAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0cic+XG4vLyAgICAgICAgICAgICAgIDx0aD48L3RoPlxuLy8gICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICAvLyB7Y2hhbmdlc31cbi8vICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmdzdF9udW1iZXIgOiBcIlwifVxuLy8gICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbi8vICAgICAgICAgICAgICAgICAgIC8vIHJlYWRPbmx5PXt0cnVlfVxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPjx0ZCBjbGFzc05hbWU9J3RkJz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvdGQ+PHRkIGNsYXNzTmFtZT0ndGQnPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC90ZD48dGQgY2xhc3NOYW1lPSd0ZCc+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICB7LyogfSl9ICovfVxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIHsvKiApICovfVxuLy8gICAgICAgICAgICAgey8qIH0pfSAqL31cbi8vICAgICAgICAgICA8L3Rib2R5PlxuLy8gICAgICAgICA8L3Njcm9sbFZpZXc+XG4vLyAgICAgICAgIHsvKiA8dGZvb3QgPlxuLy8gICAgICAgICAgIHtmb290ZXJHcm91cHMubWFwKGZvb3Rlckdyb3VwID0+IChcbi8vICAgICAgICAgICAgIDx0ciB7Li4uZm9vdGVyR3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcygpfT5cbi8vICAgICAgICAgICAgICAge2Zvb3Rlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRkIHsuLi5jb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0Zvb3RlcicpfTwvdGQ+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC90Zm9vdD4gKi99XG4vLyAgICAgICA8L3RhYmxlPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxuLy8gICAudGFibGUge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cbi8vICAgICAudHIge1xuLy8gICAgICAgOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAudGQge1xuLy8gICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAudGgsXG4vLyAgICAgLnRkIHtcbi8vICAgICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4vLyAgICAgICA6bGFzdC1jaGlsZCB7XG4vLyAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmLnN0aWNreSB7XG4vLyAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuLy8gICAgICAgLmhlYWRlcixcbi8vICAgICAgIC5mb290ZXIge1xuLy8gICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5oZWFkZXIge1xuLy8gICAgICAgICB0b3A6IDA7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4ICNjY2M7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5mb290ZXIge1xuLy8gICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuYm9keSB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgei1pbmRleDogMDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgW2RhdGEtc3RpY2t5LXRkXSB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIFtkYXRhLXN0aWNreS1sYXN0LWxlZnQtdGRdIHtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMnB4IDBweCAzcHggI2NjYztcbi8vICAgICAgIH1cblxuLy8gICAgICAgW2RhdGEtc3RpY2t5LWZpcnN0LXJpZ2h0LXRkXSB7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IC0ycHggMHB4IDNweCAjY2NjO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gYFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuLy8gaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuLy8gaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG4vLyBpbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbi8vIGltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuLy8gaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cblxuXG5leHBvcnQgY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcbiAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xuICAgIHsgaWQ6IHV1aWR2NCgpLCBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycgfSxcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJJbnB1dEZpZWxkc1wiLCBpbnB1dEZpZWxkcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoaWQsIGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV3SW5wdXRGaWVsZHMgPSBpbnB1dEZpZWxkcy5tYXAoaSA9PiB7XG4gICAgICBpZihpZCA9PT0gaS5pZCkge1xuICAgICAgICBpW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSlcbiAgICBcbiAgICBzZXRJbnB1dEZpZWxkcyhuZXdJbnB1dEZpZWxkcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRGaWVsZHMgPSAoKSA9PiB7XG4gICAgc2V0SW5wdXRGaWVsZHMoWy4uLmlucHV0RmllbGRzLCB7IGlkOiB1dWlkdjQoKSwgIGZpcnN0TmFtZTogJycsIGxhc3ROYW1lOiAnJyB9XSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUZpZWxkcyA9IGlkID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgID0gWy4uLmlucHV0RmllbGRzXTtcbiAgICB2YWx1ZXMuc3BsaWNlKHZhbHVlcy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUuaWQgPT09IGlkKSwgMSk7XG4gICAgc2V0SW5wdXRGaWVsZHModmFsdWVzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+QWRkIE5ldyBNZW1iZXI8L2gxPlxuICAgICAgPGZvcm0gIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICB7IGlucHV0RmllbGRzLm1hcChpbnB1dEZpZWxkID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5wdXRGaWVsZC5pZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRGaWVsZC5maXJzdE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVDaGFuZ2VJbnB1dChpbnB1dEZpZWxkLmlkLCBldmVudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZpZWxkLmxhc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlSW5wdXQoaW5wdXRGaWVsZC5pZCwgZXZlbnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lucHV0RmllbGRzLmxlbmd0aCA9PT0gMX0gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRmllbGRzKGlucHV0RmllbGQuaWQpfT5cbiAgICAgICAgICAgICAgey8qIDxSZW1vdmVJY29uIC8+ICovfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEZpZWxkc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIDxBZGRJY29uIC8+ICovfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpIH1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICBlbmRJY29uPXs8SWNvbj5zZW5kPC9JY29uPn1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgID5TZW5kPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==