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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      transports = _useState[0],
      setTransports = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      transport = _useState2[0],
      setTransport = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      transportData = _useState3[0],
      setTransportData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      rnumber = _useState4[0],
      setRnumber = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date().toISOString().slice(0, 10)),
      invoiceDate = _useState5[0],
      setInvoiceDate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      poDate = _useState6[0],
      setPoDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date().toISOString().slice(0, 10)),
      ewayDate = _useState7[0],
      setEwayDate = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      challanDate = _useState8[0],
      setChallanDate = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      customers = _useState9[0],
      setCustomers = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      invoiceNumber = _useState10[0],
      setInvoiceNumber = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      challanNumber = _useState11[0],
      setChallanNumber = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      companyName = _useState12[0],
      setCompanyName = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      rnote = _useState13[0],
      setRnote = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      hsn = _useState14[0],
      setHsnCode = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      unitOfMeasure = _useState15[0],
      setUnitOfMeasure = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      paymentOption = _useState16[0],
      setPaymentOption = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      ptype = _useState17[0],
      setPtype = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cgst = _useState18[0],
      setCgst = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sgst = _useState19[0],
      setSgst = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      igst = _useState20[0],
      setIgst = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      companyData = _useState21[0],
      setCompanyData = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessPer = _useState22[0],
      setCessPer = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessAmt = _useState23[0],
      setCessAmt = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPrice = _useState24[0],
      setSellPrice = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPriceWithTax = _useState25[0],
      setSellPriceWithTax = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePrice = _useState26[0],
      setPurchasePrice = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePriceWithTax = _useState27[0],
      setPurchasePriceWithTax = _useState27[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_8__["toggleDrawerMenu"])(false));
    fetchUserCustomers();
    fetchInvoiceData();
    fetchTransports();
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
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://127.0.0.1:1338/invoices/count');

            case 2:
              res = _context3.sent;
              setInvoiceNumber(res.data + 1);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchInvoiceData.apply(this, arguments);
  }

  function fetchTransports() {
    return _fetchTransports.apply(this, arguments);
  }

  function _fetchTransports() {
    _fetchTransports = Object(C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var res;
      return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://127.0.0.1:1338/transports');

            case 2:
              res = _context4.sent;
              setTransports(res.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _fetchTransports.apply(this, arguments);
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(transport);
    var transportDetails = transports.filter(function (data) {
      return data.id == transport;
    });
    console.log(transportDetails[0]);
    setTransportData(transportDetails[0]);
  }, [transport]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Create new Sales Invoice",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Sales Invoice",
      description: "InvoiceDF Create New Sales Invoice "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
                  lineNumber: 105,
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
                        lineNumber: 109,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
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
                        lineNumber: 113,
                        columnNumber: 49
                      }, _this), customers.map(function (data, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                          value: data.id,
                          children: data.customer_name
                        }, data.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 57
                        }, _this);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["GST/PAN Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: companyData ? companyData.gst_number : "",
                      className: "form-control",
                      readOnly: true,
                      type: "text",
                      placeholder: "Enter product name..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                      className: "form-control",
                      readOnly: true,
                      value: companyData ? companyData.address + ', ' + companyData.landmark + ', ' + companyData.city + ', ' + companyData.state + ', ' + "India." : "",
                      rows: "5",
                      name: "editordata"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Invoice Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "Invoice Number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: invoiceNumber,
                        onChange: function onChange(e) {
                          return setInvoiceNumber(parseInt(e.target.value));
                        },
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginLeft: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: ["Invoice Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 175,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: invoiceDate,
                        onChange: function onChange(e) {
                          return setInvoiceDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "Challan Number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: challanNumber,
                        onChange: function onChange(e) {
                          return setChallanNumber(parseInt(e.target.value));
                        },
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginLeft: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: ["Challan Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: challanDate,
                        onChange: function onChange(e) {
                          return setChallanDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "P.O. Number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: invoiceNumber,
                        onChange: function onChange(e) {
                          return setInvoiceNumber(parseInt(e.target.value));
                        },
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginLeft: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: ["P.O. Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 226,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: poDate,
                        onChange: function onChange(e) {
                          return setPoDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "L.O. Number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: challanNumber,
                        onChange: function onChange(e) {
                          return setChallanNumber(parseInt(e.target.value));
                        },
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginLeft: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: ["E-Way Date", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: ewayDate,
                        onChange: function onChange(e) {
                          return setEwayDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 254,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["DISPATCH THROUGH", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 65
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setTransport(e.target.value);
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "",
                        children: "Select Transports"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 49
                      }, _this), transports.map(function (data, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                          value: data.id,
                          children: data.name
                        }, data.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 274,
                          columnNumber: 57
                        }, _this);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "Transport ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        disabled: true,
                        value: transport,
                        onChange: function onChange(e) {
                          return setTransport(parseInt(e.target.value));
                        },
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "form-group",
                      style: {
                        marginRight: 25
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                        children: "Vehicle Number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 293,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: transportData.vehicle_no,
                        disabled: true,
                        className: "form-control",
                        type: "number"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 294,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
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
            lineNumber: 309,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, _this);
};

_s(CreateProductPage, "oa+c97t5RsWnaQP0zthiXWhsUng=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidHJhbnNwb3J0cyIsInNldFRyYW5zcG9ydHMiLCJ0cmFuc3BvcnQiLCJzZXRUcmFuc3BvcnQiLCJ0cmFuc3BvcnREYXRhIiwic2V0VHJhbnNwb3J0RGF0YSIsInJudW1iZXIiLCJzZXRSbnVtYmVyIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJpbnZvaWNlRGF0ZSIsInNldEludm9pY2VEYXRlIiwicG9EYXRlIiwic2V0UG9EYXRlIiwiZXdheURhdGUiLCJzZXRFd2F5RGF0ZSIsImNoYWxsYW5EYXRlIiwic2V0Q2hhbGxhbkRhdGUiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsImNoYWxsYW5OdW1iZXIiLCJzZXRDaGFsbGFuTnVtYmVyIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInJub3RlIiwic2V0Um5vdGUiLCJoc24iLCJzZXRIc25Db2RlIiwidW5pdE9mTWVhc3VyZSIsInNldFVuaXRPZk1lYXN1cmUiLCJwYXltZW50T3B0aW9uIiwic2V0UGF5bWVudE9wdGlvbiIsInB0eXBlIiwic2V0UHR5cGUiLCJjZ3N0Iiwic2V0Q2dzdCIsInNnc3QiLCJzZXRTZ3N0IiwiaWdzdCIsInNldElnc3QiLCJjb21wYW55RGF0YSIsInNldENvbXBhbnlEYXRhIiwiY2Vzc1BlciIsInNldENlc3NQZXIiLCJjZXNzQW10Iiwic2V0Q2Vzc0FtdCIsInNlbGxQcmljZSIsInNldFNlbGxQcmljZSIsInNlbGxQcmljZVdpdGhUYXgiLCJzZXRTZWxsUHJpY2VXaXRoVGF4IiwicHVyY2hhc2VQcmljZSIsInNldFB1cmNoYXNlUHJpY2UiLCJwdXJjaGFzZVByaWNlV2l0aFRheCIsInNldFB1cmNoYXNlUHJpY2VXaXRoVGF4IiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhd2VyTWVudSIsImZldGNoVXNlckN1c3RvbWVycyIsImZldGNoSW52b2ljZURhdGEiLCJmZXRjaFRyYW5zcG9ydHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwiZ2V0Q3VzdG9tZXJzIiwiY29tcGFueURldGFpbHMiLCJmaWx0ZXIiLCJpZCIsInRyYW5zcG9ydERldGFpbHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImtleSIsImN1c3RvbWVyX25hbWUiLCJnc3RfbnVtYmVyIiwiYWRkcmVzcyIsImxhbmRtYXJrIiwiY2l0eSIsInN0YXRlIiwibWFyZ2luUmlnaHQiLCJwYXJzZUludCIsIm1hcmdpbkxlZnQiLCJuYW1lIiwidmVoaWNsZV9ubyIsImJhY2siLCJjb25uZWN0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBRTVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUo0QixrQkFLUUMsc0RBQVEsQ0FBQyxFQUFELENBTGhCO0FBQUEsTUFLckJDLFVBTHFCO0FBQUEsTUFLVEMsYUFMUzs7QUFBQSxtQkFNS0Ysc0RBQVEsQ0FBQyxFQUFELENBTmI7QUFBQSxNQU10QkcsU0FOc0I7QUFBQSxNQU1aQyxZQU5ZOztBQUFBLG1CQU9XSixzREFBUSxDQUFDLEVBQUQsQ0FQbkI7QUFBQSxNQU90QkssYUFQc0I7QUFBQSxNQU9SQyxnQkFQUTs7QUFBQSxtQkFRRU4sc0RBQVEsQ0FBQyxDQUFELENBUlY7QUFBQSxNQVFyQk8sT0FScUI7QUFBQSxNQVFaQyxVQVJZOztBQUFBLG1CQVNVUixzREFBUSxDQUFDLElBQUlTLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FBRCxDQVRsQjtBQUFBLE1BU3JCQyxXQVRxQjtBQUFBLE1BU1JDLGNBVFE7O0FBQUEsbUJBVUFiLHNEQUFRLENBQUMsSUFBSVMsSUFBSixFQUFELENBVlI7QUFBQSxNQVVyQkssTUFWcUI7QUFBQSxNQVViQyxTQVZhOztBQUFBLG1CQVdJZixzREFBUSxDQUFDLElBQUlTLElBQUosR0FBV0MsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FBRCxDQVhaO0FBQUEsTUFXckJLLFFBWHFCO0FBQUEsTUFXWEMsV0FYVzs7QUFBQSxtQkFZVWpCLHNEQUFRLENBQUMsSUFBSVMsSUFBSixFQUFELENBWmxCO0FBQUEsTUFZckJTLFdBWnFCO0FBQUEsTUFZUkMsY0FaUTs7QUFBQSxtQkFhTW5CLHNEQUFRLENBQUMsRUFBRCxDQWJkO0FBQUEsTUFhckJvQixTQWJxQjtBQUFBLE1BYVZDLFlBYlU7O0FBQUEsb0JBY2NyQixzREFBUSxDQUFDLENBQUQsQ0FkdEI7QUFBQSxNQWNyQnNCLGFBZHFCO0FBQUEsTUFjTkMsZ0JBZE07O0FBQUEsb0JBZWN2QixzREFBUSxDQUFDLENBQUQsQ0FmdEI7QUFBQSxNQWVyQndCLGFBZnFCO0FBQUEsTUFlTkMsZ0JBZk07O0FBQUEsb0JBZ0JVekIsc0RBQVEsQ0FBQyxFQUFELENBaEJsQjtBQUFBLE1BZ0JyQjBCLFdBaEJxQjtBQUFBLE1BZ0JSQyxjQWhCUTs7QUFBQSxvQkFpQkYzQixzREFBUSxDQUFDLEVBQUQsQ0FqQk47QUFBQSxNQWlCckI0QixLQWpCcUI7QUFBQSxNQWlCZEMsUUFqQmM7O0FBQUEsb0JBa0JGN0Isc0RBQVEsQ0FBQyxFQUFELENBbEJOO0FBQUEsTUFrQnJCOEIsR0FsQnFCO0FBQUEsTUFrQmhCQyxVQWxCZ0I7O0FBQUEsb0JBbUJjL0Isc0RBQVEsQ0FBQyxFQUFELENBbkJ0QjtBQUFBLE1BbUJyQmdDLGFBbkJxQjtBQUFBLE1BbUJOQyxnQkFuQk07O0FBQUEsb0JBb0JjakMsc0RBQVEsQ0FBQyxFQUFELENBcEJ0QjtBQUFBLE1Bb0JyQmtDLGFBcEJxQjtBQUFBLE1Bb0JOQyxnQkFwQk07O0FBQUEsb0JBcUJGbkMsc0RBQVEsQ0FBQyxFQUFELENBckJOO0FBQUEsTUFxQnJCb0MsS0FyQnFCO0FBQUEsTUFxQmRDLFFBckJjOztBQUFBLG9CQXNCSnJDLHNEQUFRLENBQUMsQ0FBRCxDQXRCSjtBQUFBLE1Bc0JyQnNDLElBdEJxQjtBQUFBLE1Bc0JmQyxPQXRCZTs7QUFBQSxvQkF1Qkp2QyxzREFBUSxDQUFDLENBQUQsQ0F2Qko7QUFBQSxNQXVCckJ3QyxJQXZCcUI7QUFBQSxNQXVCZkMsT0F2QmU7O0FBQUEsb0JBd0JKekMsc0RBQVEsQ0FBQyxDQUFELENBeEJKO0FBQUEsTUF3QnJCMEMsSUF4QnFCO0FBQUEsTUF3QmZDLE9BeEJlOztBQUFBLG9CQXlCVTNDLHNEQUFRLENBQUMsRUFBRCxDQXpCbEI7QUFBQSxNQXlCckI0QyxXQXpCcUI7QUFBQSxNQXlCUkMsY0F6QlE7O0FBQUEsb0JBMEJFN0Msc0RBQVEsQ0FBQyxDQUFELENBMUJWO0FBQUEsTUEwQnJCOEMsT0ExQnFCO0FBQUEsTUEwQlpDLFVBMUJZOztBQUFBLG9CQTJCRS9DLHNEQUFRLENBQUMsQ0FBRCxDQTNCVjtBQUFBLE1BMkJyQmdELE9BM0JxQjtBQUFBLE1BMkJaQyxVQTNCWTs7QUFBQSxvQkE0Qk1qRCxzREFBUSxDQUFDLENBQUQsQ0E1QmQ7QUFBQSxNQTRCckJrRCxTQTVCcUI7QUFBQSxNQTRCVkMsWUE1QlU7O0FBQUEsb0JBNkJvQm5ELHNEQUFRLENBQUMsQ0FBRCxDQTdCNUI7QUFBQSxNQTZCckJvRCxnQkE3QnFCO0FBQUEsTUE2QkhDLG1CQTdCRzs7QUFBQSxvQkE4QmNyRCxzREFBUSxDQUFDLENBQUQsQ0E5QnRCO0FBQUEsTUE4QnJCc0QsYUE5QnFCO0FBQUEsTUE4Qk5DLGdCQTlCTTs7QUFBQSxvQkErQjRCdkQsc0RBQVEsQ0FBQyxDQUFELENBL0JwQztBQUFBLE1BK0JyQndELG9CQS9CcUI7QUFBQSxNQStCQ0MsdUJBL0JEOztBQWlDNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaNUQsWUFBUSxDQUFDNkQsMEVBQWdCLENBQUMsS0FBRCxDQUFqQixDQUFSO0FBRUFDLHNCQUFrQjtBQUNsQkMsb0JBQWdCO0FBQ2hCQyxtQkFBZTtBQUdsQixHQVJRLEVBUU4sRUFSTSxDQUFUOztBQVVBLE1BQU1DLFlBQVk7QUFBQSxnWEFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxlQUFDLENBQUNDLGNBQUY7O0FBRGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpGLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBS0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZekMsV0FBWjs7QUFoRDRCLFdBbURibUMsZ0JBbkRhO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlYQW1ENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDc0JPLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSxzQ0FBVixDQUR0Qjs7QUFBQTtBQUNVQyxpQkFEVjtBQUVJL0MsOEJBQWdCLENBQUMrQyxHQUFHLENBQUNDLElBQUosR0FBVyxDQUFaLENBQWhCOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkQ0QjtBQUFBO0FBQUE7O0FBQUEsV0F1RGJULGVBdkRhO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdYQXVENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDc0JNLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSxrQ0FBVixDQUR0Qjs7QUFBQTtBQUNVQyxpQkFEVjtBQUVJcEUsMkJBQWEsQ0FBQ29FLEdBQUcsQ0FBQ0MsSUFBTCxDQUFiOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkQ0QjtBQUFBO0FBQUE7O0FBNEQ1QixNQUFNWCxrQkFBa0I7QUFBQSxpWEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMWSxtRUFBWSxFQURQOztBQUFBO0FBQ2pCRixpQkFEaUI7QUFFdkJqRCwwQkFBWSxDQUFDaUQsR0FBRyxDQUFDQyxJQUFMLENBQVo7O0FBRnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWxCWCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBS0FGLHlEQUFTLENBQUMsWUFBTTtBQUNaUSxXQUFPLENBQUNDLEdBQVIsQ0FBWXpDLFdBQVo7QUFDQSxRQUFNK0MsY0FBYyxHQUFHckQsU0FBUyxDQUFDc0QsTUFBVixDQUFpQixVQUFDSCxJQUFEO0FBQUEsYUFBV0EsSUFBSSxDQUFDSSxFQUFMLElBQVdqRCxXQUF0QjtBQUFBLEtBQWpCLENBQXZCO0FBQ0F3QyxXQUFPLENBQUNDLEdBQVIsQ0FBWU0sY0FBYyxDQUFDLENBQUQsQ0FBMUI7QUFDQTVCLGtCQUFjLENBQUM0QixjQUFjLENBQUMsQ0FBRCxDQUFmLENBQWQ7QUFDSCxHQUxRLEVBS04sQ0FBQy9DLFdBQUQsQ0FMTSxDQUFUO0FBTUFnQyx5REFBUyxDQUFDLFlBQU07QUFDWlEsV0FBTyxDQUFDQyxHQUFSLENBQVloRSxTQUFaO0FBQ0EsUUFBTXlFLGdCQUFnQixHQUFHM0UsVUFBVSxDQUFDeUUsTUFBWCxDQUFrQixVQUFDSCxJQUFEO0FBQUEsYUFBV0EsSUFBSSxDQUFDSSxFQUFMLElBQVd4RSxTQUF0QjtBQUFBLEtBQWxCLENBQXpCO0FBQ0ErRCxXQUFPLENBQUNDLEdBQVIsQ0FBWVMsZ0JBQWdCLENBQUMsQ0FBRCxDQUE1QjtBQUNBdEUsb0JBQWdCLENBQUNzRSxnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQWhCO0FBQ0gsR0FMUSxFQUtOLENBQUN6RSxTQUFELENBTE0sQ0FBVDtBQVNBLHNCQUNJLHFFQUFDLDRFQUFEO0FBQWtCLFNBQUssRUFBQywwQkFBeEI7QUFBQSw0QkFDSSxxRUFBQyxrRkFBRDtBQUNJLFdBQUssRUFBQyxlQURWO0FBRUksaUJBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFTLGVBQVMsRUFBQyxhQUFuQjtBQUFBLDZCQUNJO0FBQ0ksZ0JBQVEsRUFBRSxrQkFBQTZELENBQUM7QUFBQSxpQkFBSUQsWUFBWSxDQUFDQyxDQUFELENBQWhCO0FBQUEsU0FEZjtBQUVJLGlCQUFTLEVBQUMsOEJBRmQ7QUFBQSxnQ0FHSTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyw4Q0FBZjtBQUFBLHFDQUNJO0FBQVEseUJBQVMsRUFBQyxvQkFBbEI7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUssMkJBQVMsRUFBQyxtQkFBZjtBQUFBLDBDQUNJO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0k7QUFBQSxzREFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFJSTtBQUFRLCtCQUFTLEVBQUMsY0FBbEI7QUFBaUMsOEJBQVEsRUFBRSxrQkFBQUEsQ0FBQztBQUFBLCtCQUFJckMsY0FBYyxDQUFDcUMsQ0FBQyxDQUFDYSxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSx1QkFBNUM7QUFBQSw4Q0FFSTtBQUFRLDZCQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSixFQUtRMUQsU0FBUyxDQUFDMkQsR0FBVixDQUFjLFVBQUNSLElBQUQsRUFBT1MsR0FBUDtBQUFBLDRDQUVWO0FBQXNCLCtCQUFLLEVBQUVULElBQUksQ0FBQ0ksRUFBbEM7QUFBQSxvQ0FBdUNKLElBQUksQ0FBQ1U7QUFBNUMsMkJBQWFWLElBQUksQ0FBQ0ksRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGVTtBQUFBLHVCQUFkLENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQWtCSTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNJO0FBQUEsZ0VBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFJSTtBQUNJLDJCQUFLLEVBQUUvQixXQUFXLEdBQUdBLFdBQVcsQ0FBQ3NDLFVBQWYsR0FBNEIsRUFEbEQ7QUFFSSwrQkFBUyxFQUFDLGNBRmQ7QUFHSSw4QkFBUSxFQUFFLElBSGQ7QUFJSSwwQkFBSSxFQUFDLE1BSlQ7QUFLSSxpQ0FBVyxFQUFDO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWxCSixlQThCSTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDRDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBSUk7QUFDSSwrQkFBUyxFQUFDLGNBRGQ7QUFFSSw4QkFBUSxFQUFFLElBRmQ7QUFHSSwyQkFBSyxFQUNEdEMsV0FBVyxHQUFHQSxXQUFXLENBQUN1QyxPQUFaLEdBQXNCLElBQXRCLEdBQ1Z2QyxXQUFXLENBQUN3QyxRQURGLEdBQ2EsSUFEYixHQUVWeEMsV0FBVyxDQUFDeUMsSUFGRixHQUVTLElBRlQsR0FHVnpDLFdBQVcsQ0FBQzBDLEtBSEYsR0FHVSxJQUhWLEdBSVYsUUFKTyxHQUlJLEVBUnZCO0FBVUksMEJBQUksRUFBQyxHQVZUO0FBV0ksMEJBQUksRUFBQztBQVhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQXVESTtBQUFLLHVCQUFTLEVBQUMsOENBQWY7QUFBQSxxQ0FDSTtBQUFRLHlCQUFTLEVBQUMsb0JBQWxCO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFLLDJCQUFTLEVBQUMsbUJBQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsS0FBZjtBQUFBLDRDQUNJO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQTRCLDJCQUFLLEVBQUU7QUFBRUMsbUNBQVcsRUFBRTtBQUFmLHVCQUFuQztBQUFBLDhDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFDSSw2QkFBSyxFQUFFakUsYUFEWDtBQUVJLGdDQUFRLEVBQUUsa0JBQUEwQyxDQUFDO0FBQUEsaUNBQUl6QyxnQkFBZ0IsQ0FBQ2lFLFFBQVEsQ0FBQ3hCLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBcEI7QUFBQSx5QkFGZjtBQUdJLGlDQUFTLEVBQUMsY0FIZDtBQUlJLDRCQUFJLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQVdJO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQTRCLDJCQUFLLEVBQUU7QUFBRVcsa0NBQVUsRUFBRTtBQUFkLHVCQUFuQztBQUFBLDhDQUNJO0FBQUEsZ0VBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBS0k7QUFDSSw2QkFBSyxFQUFFN0UsV0FEWDtBQUVJLGdDQUFRLEVBQUUsa0JBQUFvRCxDQUFDO0FBQUEsaUNBQUluRCxjQUFjLENBQUNtRCxDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLHlCQUZmO0FBR0ksaUNBQVMsRUFBQyxjQUhkO0FBSUksNEJBQUksRUFBQyxNQUpUO0FBS0ksbUNBQVcsRUFBQztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUEyQkk7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSw0Q0FDSTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUE0QiwyQkFBSyxFQUFFO0FBQUVTLG1DQUFXLEVBQUU7QUFBZix1QkFBbkM7QUFBQSw4Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUVJO0FBQ0ksNkJBQUssRUFBRS9ELGFBRFg7QUFFSSxnQ0FBUSxFQUFFLGtCQUFBd0MsQ0FBQztBQUFBLGlDQUFJdkMsZ0JBQWdCLENBQUMrRCxRQUFRLENBQUN4QixDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFULENBQXBCO0FBQUEseUJBRmY7QUFHSSxpQ0FBUyxFQUFDLGNBSGQ7QUFJSSw0QkFBSSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFXSTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUE0QiwyQkFBSyxFQUFFO0FBQUVXLGtDQUFVLEVBQUU7QUFBZCx1QkFBbkM7QUFBQSw4Q0FDSTtBQUFBLGdFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUtJO0FBQ0ksNkJBQUssRUFBRXZFLFdBRFg7QUFFSSxnQ0FBUSxFQUFFLGtCQUFBOEMsQ0FBQztBQUFBLGlDQUFJN0MsY0FBYyxDQUFDNkMsQ0FBQyxDQUFDYSxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSx5QkFGZjtBQUdJLGlDQUFTLEVBQUMsY0FIZDtBQUlJLDRCQUFJLEVBQUMsTUFKVDtBQUtJLG1DQUFXLEVBQUM7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTNCSixlQW9ESTtBQUFLLDZCQUFTLEVBQUMsS0FBZjtBQUFBLDRDQUNJO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQTRCLDJCQUFLLEVBQUU7QUFBRVMsbUNBQVcsRUFBRTtBQUFmLHVCQUFuQztBQUFBLDhDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFDSSw2QkFBSyxFQUFFakUsYUFEWDtBQUVJLGdDQUFRLEVBQUUsa0JBQUEwQyxDQUFDO0FBQUEsaUNBQUl6QyxnQkFBZ0IsQ0FBQ2lFLFFBQVEsQ0FBQ3hCLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBcEI7QUFBQSx5QkFGZjtBQUdJLGlDQUFTLEVBQUMsY0FIZDtBQUlJLDRCQUFJLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQVdJO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQTRCLDJCQUFLLEVBQUU7QUFBRVcsa0NBQVUsRUFBRTtBQUFkLHVCQUFuQztBQUFBLDhDQUNJO0FBQUEsNkRBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBS0k7QUFDSSw2QkFBSyxFQUFFM0UsTUFEWDtBQUVJLGdDQUFRLEVBQUUsa0JBQUFrRCxDQUFDO0FBQUEsaUNBQUlqRCxTQUFTLENBQUNpRCxDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEseUJBRmY7QUFHSSxpQ0FBUyxFQUFDLGNBSGQ7QUFJSSw0QkFBSSxFQUFDLE1BSlQ7QUFLSSxtQ0FBVyxFQUFDO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFwREosZUE4RUk7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSw0Q0FDSTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUE0QiwyQkFBSyxFQUFFO0FBQUVTLG1DQUFXLEVBQUU7QUFBZix1QkFBbkM7QUFBQSw4Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUVJO0FBQ0ksNkJBQUssRUFBRS9ELGFBRFg7QUFFSSxnQ0FBUSxFQUFFLGtCQUFBd0MsQ0FBQztBQUFBLGlDQUFJdkMsZ0JBQWdCLENBQUMrRCxRQUFRLENBQUN4QixDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFULENBQXBCO0FBQUEseUJBRmY7QUFHSSxpQ0FBUyxFQUFDLGNBSGQ7QUFJSSw0QkFBSSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFXSTtBQUFLLCtCQUFTLEVBQUMsWUFBZjtBQUE0QiwyQkFBSyxFQUFFO0FBQUVXLGtDQUFVLEVBQUU7QUFBZCx1QkFBbkM7QUFBQSw4Q0FDSTtBQUFBLDhEQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQUtJO0FBQ0ksNkJBQUssRUFBRXpFLFFBRFg7QUFFSSxnQ0FBUSxFQUFFLGtCQUFBZ0QsQ0FBQztBQUFBLGlDQUFJL0MsV0FBVyxDQUFDK0MsQ0FBQyxDQUFDYSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLHlCQUZmO0FBR0ksaUNBQVMsRUFBQyxjQUhkO0FBSUksNEJBQUksRUFBQyxNQUpUO0FBS0ksbUNBQVcsRUFBQztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBOUVKLGVBdUdJO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0k7QUFBQSxrRUFDb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQUlJO0FBQVEsK0JBQVMsRUFBQyxjQUFsQjtBQUFpQyw4QkFBUSxFQUFFLGtCQUFBZCxDQUFDO0FBQUEsK0JBQUk1RCxZQUFZLENBQUM0RCxDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBLHVCQUE1QztBQUFBLDhDQUVJO0FBQVEsNkJBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKLEVBS1E3RSxVQUFVLENBQUM4RSxHQUFYLENBQWUsVUFBQ1IsSUFBRCxFQUFPUyxHQUFQO0FBQUEsNENBRVg7QUFBc0IsK0JBQUssRUFBRVQsSUFBSSxDQUFDSSxFQUFsQztBQUFBLG9DQUF1Q0osSUFBSSxDQUFDbUI7QUFBNUMsMkJBQWFuQixJQUFJLENBQUNJLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRlc7QUFBQSx1QkFBZixDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBdkdKLGVBd0hJO0FBQUssNkJBQVMsRUFBQyxLQUFmO0FBQUEsNENBQ0k7QUFBSywrQkFBUyxFQUFDLFlBQWY7QUFBNEIsMkJBQUssRUFBRTtBQUFFWSxtQ0FBVyxFQUFFO0FBQWYsdUJBQW5DO0FBQUEsOENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFFSTtBQUNJLGdDQUFRLEVBQUUsSUFEZDtBQUVJLDZCQUFLLEVBQUVwRixTQUZYO0FBR0ksZ0NBQVEsRUFBRSxrQkFBQTZELENBQUM7QUFBQSxpQ0FBSTVELFlBQVksQ0FBQ29GLFFBQVEsQ0FBQ3hCLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBaEI7QUFBQSx5QkFIZjtBQUlJLGlDQUFTLEVBQUMsY0FKZDtBQUtJLDRCQUFJLEVBQUM7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixlQVlJO0FBQUssK0JBQVMsRUFBQyxZQUFmO0FBQTRCLDJCQUFLLEVBQUU7QUFBRVMsbUNBQVcsRUFBRTtBQUFmLHVCQUFuQztBQUFBLDhDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUk7QUFDSSw2QkFBSyxFQUFFbEYsYUFBYSxDQUFDc0YsVUFEekI7QUFFSSxnQ0FBUSxFQUFFLElBRmQ7QUFHSSxpQ0FBUyxFQUFDLGNBSGQ7QUFJSSw0QkFBSSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXhISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQWtOSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDSTtBQUNJLHFCQUFTLEVBQUMsc0JBRGQ7QUFFSSxnQkFBSSxFQUFDLEdBRlQ7QUFFYSxtQkFBTyxFQUFFO0FBQUEscUJBQU0vRixNQUFNLENBQUNnRyxJQUFQLEVBQU47QUFBQSxhQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxT0gsQ0FyVEQ7O0dBQU1qRyxpQjtVQUVhRSxxRCxFQUVFRSx1RDs7O0tBSmZKLGlCO0FBc1RTa0csMEhBQU8sQ0FBQyxVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDUSxHQUFqQjtBQUFBLENBQUQsQ0FBUCxDQUE4Qm5HLGlCQUE5QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGVzLWludm9pY2UvY3JlYXRlLmMxMGFiMzdkMjY4MjEzZjA1ODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdCc7XHJcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tICd+L3N0b3JlL2FwcC9hY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGdldEN1c3RvbWVycyB9IGZyb20gJ34vbmV0d29ya3MvYXBpJztcclxuXHJcbmNvbnN0IENyZWF0ZVByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RyYW5zcG9ydHMsIHNldFRyYW5zcG9ydHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdFt0cmFuc3BvcnQsc2V0VHJhbnNwb3J0IF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3RbdHJhbnNwb3J0RGF0YSxzZXRUcmFuc3BvcnREYXRhXT0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbcm51bWJlciwgc2V0Um51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2ludm9pY2VEYXRlLCBzZXRJbnZvaWNlRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKVxyXG4gICAgY29uc3QgW3BvRGF0ZSwgc2V0UG9EYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKVxyXG4gICAgY29uc3QgW2V3YXlEYXRlLCBzZXRFd2F5RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKVxyXG4gICAgY29uc3QgW2NoYWxsYW5EYXRlLCBzZXRDaGFsbGFuRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSlcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpbnZvaWNlTnVtYmVyLCBzZXRJbnZvaWNlTnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2hhbGxhbk51bWJlciwgc2V0Q2hhbGxhbk51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jub3RlLCBzZXRSbm90ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2hzbiwgc2V0SHNuQ29kZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3VuaXRPZk1lYXN1cmUsIHNldFVuaXRPZk1lYXN1cmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXltZW50T3B0aW9uLCBzZXRQYXltZW50T3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcHR5cGUsIHNldFB0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY2dzdCwgc2V0Q2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Nnc3QsIHNldFNnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpZ3N0LCBzZXRJZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY29tcGFueURhdGEsIHNldENvbXBhbnlEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2Nlc3NQZXIsIHNldENlc3NQZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjZXNzQW10LCBzZXRDZXNzQW10XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2VsbFByaWNlLCBzZXRTZWxsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZWxsUHJpY2VXaXRoVGF4LCBzZXRTZWxsUHJpY2VXaXRoVGF4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcHVyY2hhc2VQcmljZSwgc2V0UHVyY2hhc2VQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3B1cmNoYXNlUHJpY2VXaXRoVGF4LCBzZXRQdXJjaGFzZVByaWNlV2l0aFRheF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlRHJhd2VyTWVudShmYWxzZSkpO1xyXG5cclxuICAgICAgICBmZXRjaFVzZXJDdXN0b21lcnMoKVxyXG4gICAgICAgIGZldGNoSW52b2ljZURhdGEoKVxyXG4gICAgICAgIGZldGNoVHJhbnNwb3J0cygpXHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW52b2ljZURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjEzMzgvaW52b2ljZXMvY291bnQnKVxyXG4gICAgICAgIHNldEludm9pY2VOdW1iZXIocmVzLmRhdGEgKyAxKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFuc3BvcnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMToxMzM4L3RyYW5zcG9ydHMnKVxyXG4gICAgICAgIHNldFRyYW5zcG9ydHMocmVzLmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyQ3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEN1c3RvbWVycygpXHJcbiAgICAgICAgc2V0Q3VzdG9tZXJzKHJlcy5kYXRhKVxyXG5cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEZXRhaWxzID0gY3VzdG9tZXJzLmZpbHRlcigoZGF0YSkgPT4gKGRhdGEuaWQgPT0gY29tcGFueU5hbWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlEZXRhaWxzWzBdKVxyXG4gICAgICAgIHNldENvbXBhbnlEYXRhKGNvbXBhbnlEZXRhaWxzWzBdKTtcclxuICAgIH0sIFtjb21wYW55TmFtZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyYW5zcG9ydCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0RGV0YWlscyA9IHRyYW5zcG9ydHMuZmlsdGVyKChkYXRhKSA9PiAoZGF0YS5pZCA9PSB0cmFuc3BvcnQpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyYW5zcG9ydERldGFpbHNbMF0pXHJcbiAgICAgICAgc2V0VHJhbnNwb3J0RGF0YSh0cmFuc3BvcnREZXRhaWxzWzBdKTtcclxuICAgIH0sIFt0cmFuc3BvcnRdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT1cIkNyZWF0ZSBuZXcgU2FsZXMgSW52b2ljZVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNhbGVzIEludm9pY2VcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnZvaWNlREYgQ3JlYXRlIE5ldyBTYWxlcyBJbnZvaWNlIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBzLW5ldy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IGhhbmRsZVN1Ym1pdChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1mb3JtIHBzLWZvcm0tLW5ldy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+Q3VzdG9tZXIgSW5mb3JtYXRpb248L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTS9TLjxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzLm1hcCgoZGF0YSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+e2RhdGEuY3VzdG9tZXJfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1NUL1BBTiBOdW1iZXI8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmFkZHJlc3MgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5sYW5kbWFyayArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLmNpdHkgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5zdGF0ZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5kaWEuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+SW52b2ljZSBEZXRhaWxzPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkludm9pY2UgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2UgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VEYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW52b2ljZURhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhbGxhbiBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFsbGFuTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2hhbGxhbk51bWJlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbGxhbiBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhbGxhbkRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFsbGFuRGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlAuTy4gTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuTy4gRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBvRGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MLk8uIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYWxsYW5OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFsbGFuTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLVdheSBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXdheURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFd2F5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERJU1BBVENIIFRIUk9VR0g8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2UgPT4gc2V0VHJhbnNwb3J0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVHJhbnNwb3J0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0cy5tYXAoKGRhdGEsIGtleSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PntkYXRhLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRyYW5zcG9ydCBJRDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJhbnNwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VHJhbnNwb3J0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlZlaGljbGUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJhbnNwb3J0RGF0YS52ZWhpY2xlX25vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBzLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9