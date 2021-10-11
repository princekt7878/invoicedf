webpackHotUpdate_N_E("pages/sales-invoice/create",{

/***/ "./pages/sales-invoice/create.jsx":
/*!****************************************!*\
  !*** ./pages/sales-invoice/create.jsx ***!
  \****************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _networks_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/networks/api */ "./networks/api.js");




var _jsxFileName = "C:\\Users\\Kamlesh\\OneDrive\\Desktop\\ravi\\invoicedf\\front-end\\pages\\sales-invoice\\create.jsx",
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      customers = _useState3[0],
      setCustomers = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      companyName = _useState4[0],
      setCompanyName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      rnote = _useState5[0],
      setRnote = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      hsn = _useState6[0],
      setHsnCode = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      unitOfMeasure = _useState7[0],
      setUnitOfMeasure = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      paymentOption = _useState8[0],
      setPaymentOption = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      ptype = _useState9[0],
      setPtype = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cgst = _useState10[0],
      setCgst = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sgst = _useState11[0],
      setSgst = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      igst = _useState12[0],
      setIgst = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      companyData = _useState13[0],
      setCompanyData = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessPer = _useState14[0],
      setCessPer = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessAmt = _useState15[0],
      setCessAmt = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPrice = _useState16[0],
      setSellPrice = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPriceWithTax = _useState17[0],
      setSellPriceWithTax = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePrice = _useState18[0],
      setPurchasePrice = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePriceWithTax = _useState19[0],
      setPurchasePriceWithTax = _useState19[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_8__["toggleDrawerMenu"])(false));
    fetchUserCustomers();
    fetchInvoiceData();
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

  console.log(companyName);

  function fetchInvoiceData() {
    return _fetchInvoiceData.apply(this, arguments);
  }

  function _fetchInvoiceData() {
    _fetchInvoiceData = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res;
      return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://127.0.0.1/invoices/count');

            case 2:
              res = _context3.sent;
              steInvoiceNumber(res.data + 1);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchInvoiceData.apply(this, arguments);
  }

  var fetchUserCustomers = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res;
      return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_networks_api__WEBPACK_IMPORTED_MODULE_11__["getCustomers"])();

            case 2:
              res = _context2.sent;
              setCustomers(res.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchUserCustomers() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(companyName);
    var companyDetails = customers.filter(function (data) {
      return data.id == companyName;
    });
    console.log(companyDetails[0]);
    setCompanyData(companyDetails[0]);
  }, [companyName]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Create new Sales Invoice",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Sales Invoice",
      description: "InvoiceDF Create New Sales Invoice "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
                  lineNumber: 87,
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
                        lineNumber: 91,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setCompanyName(e.target.value);
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "",
                        children: "Select Customers"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 49
                      }, _this), customers.map(function (data, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                          value: data.id,
                          children: data.customer_name
                        }, data.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 57
                        }, _this);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["GST/PAN Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: companyData ? companyData.gst_number : "",
                      className: "form-control",
                      readOnly: true,
                      type: "text",
                      placeholder: "Enter product name..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                      className: "form-control",
                      readOnly: true,
                      value: companyData ? companyData.address + ', ' + companyData.landmark + ', ' + companyData.city + ', ' + companyData.state + ', ' + "India." : "",
                      rows: "5",
                      name: "editordata"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Invoice Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Invoice Number"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
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
                      lineNumber: 145,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
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
                      lineNumber: 159,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
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
                        lineNumber: 170,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
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
                          lineNumber: 175,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
                          value: "on_invoice",
                          children: "On Invoice"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Type", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
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
                        lineNumber: 188,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cash",
                        children: "Cash"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cheque",
                        children: "Cheque"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "online",
                        children: "Online/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bank",
                        children: "Bank/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "tds",
                        children: "TDS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 193,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bad_debts",
                        children: "Bad Debts/Kasar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cel",
                        children: "Currency Exchange Loss"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Payment Notes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
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
                      lineNumber: 202,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
            lineNumber: 215,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, _this);
};

_s(CreateProductPage, "/ADKoQ1Ee5POQwy1L1Alyh/hzck=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwicm51bWJlciIsInNldFJudW1iZXIiLCJEYXRlIiwicmVjZWlwdERhdGUiLCJzZXRSZWNlaXB0RGF0ZSIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJybm90ZSIsInNldFJub3RlIiwiaHNuIiwic2V0SHNuQ29kZSIsInVuaXRPZk1lYXN1cmUiLCJzZXRVbml0T2ZNZWFzdXJlIiwicGF5bWVudE9wdGlvbiIsInNldFBheW1lbnRPcHRpb24iLCJwdHlwZSIsInNldFB0eXBlIiwiY2dzdCIsInNldENnc3QiLCJzZ3N0Iiwic2V0U2dzdCIsImlnc3QiLCJzZXRJZ3N0IiwiY29tcGFueURhdGEiLCJzZXRDb21wYW55RGF0YSIsImNlc3NQZXIiLCJzZXRDZXNzUGVyIiwiY2Vzc0FtdCIsInNldENlc3NBbXQiLCJzZWxsUHJpY2UiLCJzZXRTZWxsUHJpY2UiLCJzZWxsUHJpY2VXaXRoVGF4Iiwic2V0U2VsbFByaWNlV2l0aFRheCIsInB1cmNoYXNlUHJpY2UiLCJzZXRQdXJjaGFzZVByaWNlIiwicHVyY2hhc2VQcmljZVdpdGhUYXgiLCJzZXRQdXJjaGFzZVByaWNlV2l0aFRheCIsInVzZUVmZmVjdCIsInRvZ2dsZURyYXdlck1lbnUiLCJmZXRjaFVzZXJDdXN0b21lcnMiLCJmZXRjaEludm9pY2VEYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzIiwic3RlSW52b2ljZU51bWJlciIsImRhdGEiLCJnZXRDdXN0b21lcnMiLCJjb21wYW55RGV0YWlscyIsImZpbHRlciIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJrZXkiLCJjdXN0b21lcl9uYW1lIiwiZ3N0X251bWJlciIsImFkZHJlc3MiLCJsYW5kbWFyayIsImNpdHkiLCJzdGF0ZSIsInBhcnNlSW50IiwibWFyZ2luUmlnaHQiLCJiYWNrIiwiY29ubmVjdCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFKNEIsa0JBS0VDLHNEQUFRLENBQUMsQ0FBRCxDQUxWO0FBQUEsTUFLckJDLE9BTHFCO0FBQUEsTUFLWkMsVUFMWTs7QUFBQSxtQkFNVUYsc0RBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FObEI7QUFBQSxNQU1yQkMsV0FOcUI7QUFBQSxNQU1SQyxjQU5ROztBQUFBLG1CQU9LTCxzREFBUSxDQUFDLEVBQUQsQ0FQYjtBQUFBLE1BT3JCTSxTQVBxQjtBQUFBLE1BT1hDLFlBUFc7O0FBQUEsbUJBUVNQLHNEQUFRLENBQUMsRUFBRCxDQVJqQjtBQUFBLE1BUXJCUSxXQVJxQjtBQUFBLE1BUVRDLGNBUlM7O0FBQUEsbUJBU0ZULHNEQUFRLENBQUMsRUFBRCxDQVROO0FBQUEsTUFTckJVLEtBVHFCO0FBQUEsTUFTZEMsUUFUYzs7QUFBQSxtQkFVRlgsc0RBQVEsQ0FBQyxFQUFELENBVk47QUFBQSxNQVVyQlksR0FWcUI7QUFBQSxNQVVoQkMsVUFWZ0I7O0FBQUEsbUJBV2NiLHNEQUFRLENBQUMsRUFBRCxDQVh0QjtBQUFBLE1BV3JCYyxhQVhxQjtBQUFBLE1BV05DLGdCQVhNOztBQUFBLG1CQVljZixzREFBUSxDQUFDLEVBQUQsQ0FadEI7QUFBQSxNQVlyQmdCLGFB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SlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBc0lJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNJO0FBQ0kscUJBQVMsRUFBQyxzQkFEZDtBQUVJLGdCQUFJLEVBQUMsR0FGVDtBQUVhLG1CQUFPLEVBQUU7QUFBQSxxQkFBTS9ELE1BQU0sQ0FBQzBFLElBQVAsRUFBTjtBQUFBLGFBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdElKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlKSCxDQXZORDs7R0FBTTNFLGlCO1VBRWFFLHFELEVBRUVFLHVEOzs7S0FKZkosaUI7QUF3TlM0RSwwSEFBTyxDQUFDLFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEdBQWpCO0FBQUEsQ0FBRCxDQUFQLENBQThCN0UsaUJBQTlCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuMTFiZTQ2YWJiYmY4ZWM5NjM0MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0JztcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkJztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJhZGlvLCBJbnB1dCwgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJzIH0gZnJvbSAnfi9uZXR3b3Jrcy9hcGknO1xyXG5cclxuY29uc3QgQ3JlYXRlUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbcm51bWJlciwgc2V0Um51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3JlY2VpcHREYXRlLCBzZXRSZWNlaXB0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSlcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2NvbXBhbnlOYW1lLHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcm5vdGUsIHNldFJub3RlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbaHNuLCBzZXRIc25Db2RlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdW5pdE9mTWVhc3VyZSwgc2V0VW5pdE9mTWVhc3VyZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3BheW1lbnRPcHRpb24sIHNldFBheW1lbnRPcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwdHlwZSwgc2V0UHR5cGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjZ3N0LCBzZXRDZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2dzdCwgc2V0U2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lnc3QsIHNldElnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjb21wYW55RGF0YSwgc2V0Q29tcGFueURhdGFdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbY2Vzc1Blciwgc2V0Q2Vzc1Blcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2Nlc3NBbXQsIHNldENlc3NBbXRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZWxsUHJpY2UsIHNldFNlbGxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3NlbGxQcmljZVdpdGhUYXgsIHNldFNlbGxQcmljZVdpdGhUYXhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtwdXJjaGFzZVByaWNlLCBzZXRQdXJjaGFzZVByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcHVyY2hhc2VQcmljZVdpdGhUYXgsIHNldFB1cmNoYXNlUHJpY2VXaXRoVGF4XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh0b2dnbGVEcmF3ZXJNZW51KGZhbHNlKSk7XHJcblxyXG4gICAgICAgIGZldGNoVXNlckN1c3RvbWVycygpXHJcbiAgICAgICAgZmV0Y2hJbnZvaWNlRGF0YSgpXHJcblxyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbXBhbnlOYW1lKVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEludm9pY2VEYXRhKCl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xL2ludm9pY2VzL2NvdW50JylcclxuICAgICAgICBzdGVJbnZvaWNlTnVtYmVyKHJlcy5kYXRhICsgMSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZmV0Y2hVc2VyQ3VzdG9tZXJzID1hc3luYygpPT57XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q3VzdG9tZXJzKClcclxuICAgICAgICBzZXRDdXN0b21lcnMocmVzLmRhdGEpXHJcblxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21wYW55TmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29tcGFueURldGFpbHMgPSBjdXN0b21lcnMuZmlsdGVyKChkYXRhKSA9PiAoZGF0YS5pZCA9PSBjb21wYW55TmFtZSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFueURldGFpbHNbMF0pXHJcbiAgICAgICAgc2V0Q29tcGFueURhdGEoY29tcGFueURldGFpbHNbMF0pO1xyXG4gICAgfSwgW2NvbXBhbnlOYW1lXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9XCJDcmVhdGUgbmV3IFNhbGVzIEludm9pY2VcIj5cclxuICAgICAgICAgICAgPEhlYWRlckRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJTYWxlcyBJbnZvaWNlXCJcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSW52b2ljZURGIENyZWF0ZSBOZXcgU2FsZXMgSW52b2ljZSBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcy1uZXctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiBoYW5kbGVTdWJtaXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtZm9ybSBwcy1mb3JtLS1uZXctcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHMtYmxvY2stLWZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPkN1c3RvbWVyIEluZm9ybWF0aW9uPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTS9TLjxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzLm1hcCgoZGF0YSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+e2RhdGEuY3VzdG9tZXJfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1NUL1BBTiBOdW1iZXI8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmFkZHJlc3MgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5sYW5kbWFyayArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLmNpdHkgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5zdGF0ZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5kaWEuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+SW52b2ljZSBEZXRhaWxzPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW52b2ljZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2dzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2dzdChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlcyBpbiAo4oK5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVjZWlwdERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJlY2VpcHREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtlID0+IHNldFBheW1lbnRPcHRpb24oZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17cGF5bWVudE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25fYWNjb3VudFwiPk9uIEFjY291bnQ8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25faW52b2ljZVwiPk9uIEludm9pY2U8L1JhZGlvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQdHlwZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFR5cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhc2hcIj5DYXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVxdWVcIj5DaGVxdWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9ubGluZVwiPk9ubGluZS9UcmFuc2Zlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFua1wiPkJhbmsvVHJhbnNmZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRkc1wiPlREUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFkX2RlYnRzXCI+QmFkIERlYnRzL0thc2FyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxcIj5DdXJyZW5jeSBFeGNoYW5nZSBMb3NzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBOb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJub3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBzLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9