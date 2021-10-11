webpackHotUpdate_N_E("pages/sales-invoice/create-sales-invoice",{

/***/ "./pages/sales-invoice/create-sales-invoice.jsx":
/*!******************************************************!*\
  !*** ./pages/sales-invoice/create-sales-invoice.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\Kamlesh\\OneDrive\\Desktop\\ravi\\invoicedf\\front-end\\pages\\sales-invoice\\create-sales-invoice.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var CreateProductPage = function CreateProductPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      rnumber = _useState[0],
      setRnumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      receiptDate = _useState2[0],
      setReceiptDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      rnote = _useState3[0],
      setRnote = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      hsn = _useState4[0],
      setHsnCode = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      unitOfMeasure = _useState5[0],
      setUnitOfMeasure = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      paymentOption = _useState6[0],
      setPaymentOption = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      ptype = _useState7[0],
      setPtype = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cgst = _useState8[0],
      setCgst = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sgst = _useState9[0],
      setSgst = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      igst = _useState10[0],
      setIgst = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessPer = _useState11[0],
      setCessPer = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessAmt = _useState12[0],
      setCessAmt = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPrice = _useState13[0],
      setSellPrice = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPriceWithTax = _useState14[0],
      setSellPriceWithTax = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePrice = _useState15[0],
      setPurchasePrice = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePriceWithTax = _useState16[0],
      setPurchasePriceWithTax = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_8__["toggleDrawerMenu"])(false));
  }, []);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Create new Inward Receipt",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Inward Receipt",
      description: "InvoiceDF Create New Inward Receipt "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
      className: "ps-new-item",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        onSubmit: function onSubmit(e) {
          return handleSubmit(e);
        },
        className: "ps-form ps-form--new-product",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "ps-form__content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Customer Information"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["M/S.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: rnumber,
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setRnumber(parseInt(e.target.value));
                      },
                      type: "number",
                      placeholder: "Enter product name..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Company Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setUnitOfMeasure(e.target.value);
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "",
                        children: "Select Customers"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "grams",
                        children: "Cypher's Technolabs"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "kg",
                        children: "InvoiceDF"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["GST/PAN Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setData({
                          name: e.target.value
                        });
                      },
                      type: "text",
                      placeholder: "Enter product name..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                      onChange: function onChange(e) {
                        return setData({
                          note: e.target.value
                        });
                      },
                      className: "form-control",
                      rows: "5",
                      name: "editordata"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Payment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Amount"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: cgst,
                      onChange: function onChange(e) {
                        return setCgst(parseInt(e.target.value));
                      },
                      placeholder: "values in (\u20B9)",
                      className: "form-control",
                      type: "number"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: receiptDate,
                      onChange: function onChange(e) {
                        return setReceiptDate(e.target.value);
                      },
                      className: "form-control",
                      type: "date",
                      placeholder: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      style: {
                        marginRight: 10
                      },
                      children: ["Payment Option", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"].Group, {
                      onChange: function onChange(e) {
                        return setPaymentOption(e.target.value);
                      },
                      value: paymentOption,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Space"], {
                        direction: "vertical",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
                          value: "on_account",
                          children: "On Account"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
                          value: "on_invoice",
                          children: "On Invoice"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Type", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setPtype(e.target.value);
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "",
                        children: "Select Type"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cash",
                        children: "Cash"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cheque",
                        children: "Cheque"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "online",
                        children: "Online/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bank",
                        children: "Bank/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "tds",
                        children: "TDS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bad_debts",
                        children: "Bad Debts/Kasar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cel",
                        children: "Currency Exchange Loss"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Payment Notes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                      onChange: function onChange(e) {
                        return setRnote(e.target.value);
                      },
                      className: "form-control",
                      rows: "2",
                      name: "editordata"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "ps-form__bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "ps-btn ps-btn--black",
            href: "#",
            onClick: function onClick() {
              return router.back();
            },
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(CreateProductPage, "k9iOBnOmV9jNmX+ZmMcyxnSYWAM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c = CreateProductPage;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state) {
  return state.app;
})(CreateProductPage));

var _c;

$RefreshReg$(_c, "CreateProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUtc2FsZXMtaW52b2ljZS5qc3giXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJybnVtYmVyIiwic2V0Um51bWJlciIsIkRhdGUiLCJyZWNlaXB0RGF0ZSIsInNldFJlY2VpcHREYXRlIiwicm5vdGUiLCJzZXRSbm90ZSIsImhzbiIsInNldEhzbkNvZGUiLCJ1bml0T2ZNZWFzdXJlIiwic2V0VW5pdE9mTWVhc3VyZSIsInBheW1lbnRPcHRpb24iLCJzZXRQYXltZW50T3B0aW9uIiwicHR5cGUiLCJzZXRQdHlwZSIsImNnc3QiLCJzZXRDZ3N0Iiwic2dzdCIsInNldFNnc3QiLCJpZ3N0Iiwic2V0SWdzdCIsImNlc3NQZXIiLCJzZXRDZXNzUGVyIiwiY2Vzc0FtdCIsInNldENlc3NBbXQiLCJzZWxsUHJpY2UiLCJzZXRTZWxsUHJpY2UiLCJzZWxsUHJpY2VXaXRoVGF4Iiwic2V0U2VsbFByaWNlV2l0aFRheCIsInB1cmNoYXNlUHJpY2UiLCJzZXRQdXJjaGFzZVByaWNlIiwicHVyY2hhc2VQcmljZVdpdGhUYXgiLCJzZXRQdXJjaGFzZVByaWNlV2l0aFRheCIsInVzZUVmZmVjdCIsInRvZ2dsZURyYXdlck1lbnUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwic2V0RGF0YSIsIm5hbWUiLCJub3RlIiwibWFyZ2luUmlnaHQiLCJiYWNrIiwiY29ubmVjdCIsInN0YXRlIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07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QUFBQSxpQkFISixlQXFJSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDSTtBQUNJLHFCQUFTLEVBQUMsc0JBRGQ7QUFFSSxnQkFBSSxFQUFDLEdBRlQ7QUFFYSxtQkFBTyxFQUFFO0FBQUEscUJBQU03QyxNQUFNLENBQUNrRCxJQUFQLEVBQU47QUFBQSxhQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3SkgsQ0F6TEQ7O0dBQU1uRCxpQjtVQUVhRSxxRCxFQUVFRSx1RDs7O0tBSmZKLGlCO0FBMExTb0QsMEhBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxHQUFqQjtBQUFBLENBQUQsQ0FBUCxDQUE4QnRELGlCQUE5QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGVzLWludm9pY2UvY3JlYXRlLXNhbGVzLWludm9pY2UuYzQ1MDg0ZmRmMWJjOWZjMDZmZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0JztcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkJztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJhZGlvLCBJbnB1dCwgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENyZWF0ZVByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3JudW1iZXIsIHNldFJudW1iZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtyZWNlaXB0RGF0ZSwgc2V0UmVjZWlwdERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUpXHJcbiAgICBjb25zdCBbcm5vdGUsIHNldFJub3RlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaHNuLCBzZXRIc25Db2RlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdW5pdE9mTWVhc3VyZSwgc2V0VW5pdE9mTWVhc3VyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3BheW1lbnRPcHRpb24sIHNldFBheW1lbnRPcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwdHlwZSwgc2V0UHR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjZ3N0LCBzZXRDZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2dzdCwgc2V0U2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lnc3QsIHNldElnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjZXNzUGVyLCBzZXRDZXNzUGVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2Vzc0FtdCwgc2V0Q2Vzc0FtdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3NlbGxQcmljZSwgc2V0U2VsbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2VsbFByaWNlV2l0aFRheCwgc2V0U2VsbFByaWNlV2l0aFRheF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3B1cmNoYXNlUHJpY2UsIHNldFB1cmNoYXNlUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtwdXJjaGFzZVByaWNlV2l0aFRheCwgc2V0UHVyY2hhc2VQcmljZVdpdGhUYXhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlck1lbnUoZmFsc2UpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPVwiQ3JlYXRlIG5ldyBJbndhcmQgUmVjZWlwdFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIklud2FyZCBSZWNlaXB0XCJcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSW52b2ljZURGIENyZWF0ZSBOZXcgSW53YXJkIFJlY2VpcHQgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHMtbmV3LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gaGFuZGxlU3VibWl0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0gcHMtZm9ybS0tbmV3LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWZvcm1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTYgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInBzLWJsb2NrLS1mb3JtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5DdXN0b21lciBJbmZvcm1hdGlvbjwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1ibG9ja19fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNL1MuPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJudW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IE5hbWU8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2UgPT4gc2V0VW5pdE9mTWVhc3VyZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JhbXNcIj5DeXBoZXIncyBUZWNobm9sYWJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZ1wiPkludm9pY2VERjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdTVC9QQU4gTnVtYmVyPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGF0YSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREYXRhKHsgbm90ZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRvcmRhdGFcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHMtYmxvY2stLWZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlBheW1lbnQ8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2dzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2dzdChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlcyBpbiAo4oK5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVjZWlwdERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJlY2VpcHREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtlID0+IHNldFBheW1lbnRPcHRpb24oZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17cGF5bWVudE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25fYWNjb3VudFwiPk9uIEFjY291bnQ8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25faW52b2ljZVwiPk9uIEludm9pY2U8L1JhZGlvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQdHlwZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFR5cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhc2hcIj5DYXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVxdWVcIj5DaGVxdWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9ubGluZVwiPk9ubGluZS9UcmFuc2Zlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFua1wiPkJhbmsvVHJhbnNmZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRkc1wiPlREUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFkX2RlYnRzXCI+QmFkIERlYnRzL0thc2FyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxcIj5DdXJyZW5jeSBFeGNoYW5nZSBMb3NzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBOb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJub3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBzLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9