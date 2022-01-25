webpackHotUpdate_N_E("pages/sales-invoice/create-sales",{

/***/ "./components/Table/columns.js":
/*!*************************************!*\
  !*** ./components/Table/columns.js ***!
  \*************************************/
/*! exports provided: COLUMNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var COLUMNS = [{
  Header: 'SR.',
  Footer: 'SR.',
  accessor: 'SR',
  disableFilters: true,
  sticky: 'left'
}, {
  Header: 'PRODUCT / OTHER CHARGES',
  Footer: 'PRODUCT / OTHER CHARGES',
  accessor: 'PRODUCT',
  sticky: 'left'
}, {
  Header: 'HSN/SAC CODE',
  Footer: 'HSN/SAC CODE',
  accessor: 'HSN_SAC',
  sticky: 'left'
}, {
  Header: 'QTY.',
  Footer: 'QTY.',
  accessor: 'QTY' // Cell: ({ value }) => {
  //   return format(new Date(value), 'dd/MM/yyyy')
  // }

}, {
  Header: 'PRICE (RS)',
  Footer: 'PRICE (RS)',
  accessor: 'PRICE'
}, {
  Header: 'DISCOUNT',
  Footer: 'DISCOUNT',
  accessor: 'DISCOUNT'
}, {
  Header: 'CGST',
  Footer: 'CGST',
  accessor: 'CGST'
}, {
  Header: 'SGST',
  Footer: 'SGST',
  accessor: 'SGST'
}, {
  Header: 'IGST',
  Footer: 'IGST',
  accessor: 'IGST'
}, {
  Header: ' CESS',
  Footer: ' CESS',
  accessor: ' CESS'
}, {
  Header: 'TOTAL',
  Footer: ' TOTAL',
  accessor: ' TOTAL'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9jb2x1bW5zLmpzIl0sIm5hbWVzIjpbIkNPTFVNTlMiLCJIZWFkZXIiLCJGb290ZXIiLCJhY2Nlc3NvciIsImRpc2FibGVGaWx0ZXJzIiwic3RpY2t5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUcsQ0FDckI7QUFDRUMsUUFBTSxFQUFFLEtBRFY7QUFFRUMsUUFBTSxFQUFFLEtBRlY7QUFHRUMsVUFBUSxFQUFFLElBSFo7QUFJRUMsZ0JBQWMsRUFBRSxJQUpsQjtBQUtFQyxRQUFNLEVBQUU7QUFMVixDQURxQixFQVFyQjtBQUNFSixRQUFNLEVBQUUseUJBRFY7QUFFRUMsUUFBTSxFQUFFLHlCQUZWO0FBR0VDLFVBQVEsRUFBRSxTQUhaO0FBSUVFLFFBQU0sRUFBRTtBQUpWLENBUnFCLEVBY3JCO0FBQ0VKLFFBQU0sRUFBRSxjQURWO0FBRUVDLFFBQU0sRUFBRSxjQUZWO0FBR0VDLFVBQVEsRUFBRSxTQUhaO0FBSUVFLFFBQU0sRUFBRTtBQUpWLENBZHFCLEVBc0JyQjtBQUNFSixRQUFNLEVBQUUsTUFEVjtBQUVFQyxRQUFNLEVBQUUsTUFGVjtBQUdFQyxVQUFRLEVBQUUsS0FIWixDQUlFO0FBQ0E7QUFDQTs7QUFORixDQXRCcUIsRUE4QnJCO0FBQ0VGLFFBQU0sRUFBRSxZQURWO0FBRUVDLFFBQU0sRUFBRSxZQUZWO0FBR0VDLFVBQVEsRUFBRTtBQUhaLENBOUJxQixFQW1DckI7QUFDRUYsUUFBTSxFQUFFLFVBRFY7QUFFRUMsUUFBTSxFQUFFLFVBRlY7QUFHRUMsVUFBUSxFQUFFO0FBSFosQ0FuQ3FCLEVBd0NyQjtBQUNFRixRQUFNLEVBQUUsTUFEVjtBQUVFQyxRQUFNLEVBQUUsTUFGVjtBQUdFQyxVQUFRLEVBQUU7QUFIWixDQXhDcUIsRUE2Q3JCO0FBQ0VGLFFBQU0sRUFBRSxNQURWO0FBRUVDLFFBQU0sRUFBRSxNQUZWO0FBR0VDLFVBQVEsRUFBRTtBQUhaLENBN0NxQixFQWtEckI7QUFDRUYsUUFBTSxFQUFFLE1BRFY7QUFFRUMsUUFBTSxFQUFFLE1BRlY7QUFHRUMsVUFBUSxFQUFFO0FBSFosQ0FsRHFCLEVBdURyQjtBQUNFRixRQUFNLEVBQUUsT0FEVjtBQUVFQyxRQUFNLEVBQUUsT0FGVjtBQUdFQyxVQUFRLEVBQUU7QUFIWixDQXZEcUIsRUE0RHJCO0FBQ0VGLFFBQU0sRUFBRSxPQURWO0FBRUVDLFFBQU0sRUFBRSxRQUZWO0FBR0VDLFVBQVEsRUFBRTtBQUhaLENBNURxQixDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlcy1pbnZvaWNlL2NyZWF0ZS1zYWxlcy42OTM3ZDhlZTUzZjRmYzFiNzAwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBjb25zdCBDT0xVTU5TID0gW1xuICB7XG4gICAgSGVhZGVyOiAnU1IuJyxcbiAgICBGb290ZXI6ICdTUi4nLFxuICAgIGFjY2Vzc29yOiAnU1InLFxuICAgIGRpc2FibGVGaWx0ZXJzOiB0cnVlLFxuICAgIHN0aWNreTogJ2xlZnQnXG4gIH0sXG4gIHtcbiAgICBIZWFkZXI6ICdQUk9EVUNUIC8gT1RIRVIgQ0hBUkdFUycsXG4gICAgRm9vdGVyOiAnUFJPRFVDVCAvIE9USEVSIENIQVJHRVMnLFxuICAgIGFjY2Vzc29yOiAnUFJPRFVDVCcsXG4gICAgc3RpY2t5OiAnbGVmdCdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ0hTTi9TQUMgQ09ERScsXG4gICAgRm9vdGVyOiAnSFNOL1NBQyBDT0RFJyxcbiAgICBhY2Nlc3NvcjogJ0hTTl9TQUMnLFxuICAgIHN0aWNreTogJ2xlZnQnXG4gIH0sXG5cblxuICB7XG4gICAgSGVhZGVyOiAnUVRZLicsXG4gICAgRm9vdGVyOiAnUVRZLicsXG4gICAgYWNjZXNzb3I6ICdRVFknLFxuICAgIC8vIENlbGw6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAvLyAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodmFsdWUpLCAnZGQvTU0veXl5eScpXG4gICAgLy8gfVxuICB9LFxuICB7XG4gICAgSGVhZGVyOiAnUFJJQ0UgKFJTKScsXG4gICAgRm9vdGVyOiAnUFJJQ0UgKFJTKScsXG4gICAgYWNjZXNzb3I6ICdQUklDRSdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ0RJU0NPVU5UJyxcbiAgICBGb290ZXI6ICdESVNDT1VOVCcsXG4gICAgYWNjZXNzb3I6ICdESVNDT1VOVCdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ0NHU1QnLFxuICAgIEZvb3RlcjogJ0NHU1QnLFxuICAgIGFjY2Vzc29yOiAnQ0dTVCdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ1NHU1QnLFxuICAgIEZvb3RlcjogJ1NHU1QnLFxuICAgIGFjY2Vzc29yOiAnU0dTVCdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ0lHU1QnLFxuICAgIEZvb3RlcjogJ0lHU1QnLFxuICAgIGFjY2Vzc29yOiAnSUdTVCdcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJyBDRVNTJyxcbiAgICBGb290ZXI6ICcgQ0VTUycsXG4gICAgYWNjZXNzb3I6ICcgQ0VTUydcbiAgfSxcbiAge1xuICAgIEhlYWRlcjogJ1RPVEFMJyxcbiAgICBGb290ZXI6ICcgVE9UQUwnLFxuICAgIGFjY2Vzc29yOiAnIFRPVEFMJ1xuICB9LFxuXSJdLCJzb3VyY2VSb290IjoiIn0=