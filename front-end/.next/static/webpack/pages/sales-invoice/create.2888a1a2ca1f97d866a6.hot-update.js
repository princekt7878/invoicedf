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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      transport = _useState2[0];

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
                        return e.target.value;
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
                          value: data.name,
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
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Payment Notes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
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
                      lineNumber: 284,
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
            lineNumber: 297,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
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

_s(CreateProductPage, "/9ibxngyhdDix/zCdwlaWxFBclI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidHJhbnNwb3J0cyIsInNldFRyYW5zcG9ydHMiLCJ0cmFuc3BvcnQiLCJ0cmFuc3BvcnREYXRhIiwic2V0VHJhbnNwb3J0RGF0YSIsInJudW1iZXIiLCJzZXRSbnVtYmVyIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJpbnZvaWNlRGF0ZSIsInNldEludm9pY2VEYXRlIiwicG9EYXRlIiwic2V0UG9EYXRlIiwiZXdheURhdGUiLCJzZXRFd2F5RGF0ZSIsImNoYWxsYW5EYXRlIiwic2V0Q2hhbGxhbkRhdGUiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsImNoYWxsYW5OdW1iZXIiLCJzZXRDaGFsbGFuTnVtYmVyIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInJub3RlIiwic2V0Um5vdGUiLCJoc24iLCJzZXRIc25Db2RlIiwidW5pdE9mTWVhc3VyZSIsInNldFVuaXRPZk1lYXN1cmUiLCJwYXltZW50T3B0aW9uIiwic2V0UGF5bWVudE9wdGlvbiIsInB0eXBlIiwic2V0UHR5cGUiLCJjZ3N0Iiwic2V0Q2dzdCIsInNnc3QiLCJzZXRTZ3N0IiwiaWdzdCIsInNldElnc3QiLCJjb21wYW55RGF0YSIsInNldENvbXBhbnlEYXRhIiwiY2Vzc1BlciIsInNldENlc3NQZXIiLCJjZXNzQW10Iiwic2V0Q2Vzc0FtdCIsInNlbGxQcmljZSIsInNldFNlbGxQcmljZSIsInNlbGxQcmljZVdpdGhUYXgiLCJzZXRTZWxsUHJpY2VXaXRoVGF4IiwicHVyY2hhc2VQcmljZSIsInNldFB1cmNoYXNlUHJpY2UiLCJwdXJjaGFzZVByaWNlV2l0aFRheCIsInNldFB1cmNoYXNlUHJpY2VXaXRoVGF4IiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhd2VyTWVudSIsImZldGNoVXNlckN1c3RvbWVycyIsImZldGNoSW52b2ljZURhdGEiLCJmZXRjaFRyYW5zcG9ydHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwiZ2V0Q3VzdG9tZXJzIiwiY29tcGFueURldGFpbHMiLCJmaWx0ZXIiLCJpZCIsInRyYW5zcG9ydERldGFpbHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImtleSIsImN1c3RvbWVyX25hbWUiLCJnc3RfbnVtYmVyIiwiYWRkcmVzcyIsImxhbmRtYXJrIiwiY2l0eSIsInN0YXRlIiwibWFyZ2luUmlnaHQiLCJwYXJzZUludCIsIm1hcmdpbkxlZnQiLCJuYW1lIiwiYmFjayIsImNvbm5lY3QiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFFNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSjRCLGtCQUtRQyxzREFBUSxDQUFDLEVBQUQsQ0FMaEI7QUFBQSxNQUtyQkMsVUFMcUI7QUFBQSxNQUtUQyxhQUxTOztBQUFBLG1CQU1QRixzREFBUSxDQUFDLENBQUQsQ0FORDtBQUFBLE1BTXRCRyxTQU5zQjs7QUFBQSxtQkFPV0gsc0RBQVEsQ0FBQyxFQUFELENBUG5CO0FBQUEsTUFPdEJJLGFBUHNCO0FBQUEsTUFPUkMsZ0JBUFE7O0FBQUEsbUJBUUVMLHNEQUFRLENBQUMsQ0FBRCxDQVJWO0FBQUEsTUFRckJNLE9BUnFCO0FBQUEsTUFRWkMsVUFSWTs7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QSxrQ0FDSTtBQUNJLHFCQUFTLEVBQUMsc0JBRGQ7QUFFSSxnQkFBSSxFQUFDLEdBRlQ7QUFFYSxtQkFBTyxFQUFFO0FBQUEscUJBQU1qRixNQUFNLENBQUM4RixJQUFQLEVBQU47QUFBQSxhQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU1JO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRNSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5TkgsQ0F6U0Q7O0dBQU0vRixpQjtVQUVhRSxxRCxFQUVFRSx1RDs7O0tBSmZKLGlCO0FBMFNTZ0csMEhBQU8sQ0FBQyxVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTyxHQUFqQjtBQUFBLENBQUQsQ0FBUCxDQUE4QmpHLGlCQUE5QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGVzLWludm9pY2UvY3JlYXRlLjI4ODhhMWEyY2ExZjk3ZDg2NmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdCc7XHJcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tICd+L3N0b3JlL2FwcC9hY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGdldEN1c3RvbWVycyB9IGZyb20gJ34vbmV0d29ya3MvYXBpJztcclxuXHJcbmNvbnN0IENyZWF0ZVByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RyYW5zcG9ydHMsIHNldFRyYW5zcG9ydHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdFt0cmFuc3BvcnQsIF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3RbdHJhbnNwb3J0RGF0YSxzZXRUcmFuc3BvcnREYXRhXT0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbcm51bWJlciwgc2V0Um51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2ludm9pY2VEYXRlLCBzZXRJbnZvaWNlRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKVxyXG4gICAgY29uc3QgW3BvRGF0ZSwgc2V0UG9EYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKVxyXG4gICAgY29uc3QgW2V3YXlEYXRlLCBzZXRFd2F5RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKVxyXG4gICAgY29uc3QgW2NoYWxsYW5EYXRlLCBzZXRDaGFsbGFuRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSlcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpbnZvaWNlTnVtYmVyLCBzZXRJbnZvaWNlTnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2hhbGxhbk51bWJlciwgc2V0Q2hhbGxhbk51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jub3RlLCBzZXRSbm90ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2hzbiwgc2V0SHNuQ29kZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3VuaXRPZk1lYXN1cmUsIHNldFVuaXRPZk1lYXN1cmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXltZW50T3B0aW9uLCBzZXRQYXltZW50T3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcHR5cGUsIHNldFB0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY2dzdCwgc2V0Q2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Nnc3QsIHNldFNnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpZ3N0LCBzZXRJZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY29tcGFueURhdGEsIHNldENvbXBhbnlEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2Nlc3NQZXIsIHNldENlc3NQZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjZXNzQW10LCBzZXRDZXNzQW10XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2VsbFByaWNlLCBzZXRTZWxsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZWxsUHJpY2VXaXRoVGF4LCBzZXRTZWxsUHJpY2VXaXRoVGF4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcHVyY2hhc2VQcmljZSwgc2V0UHVyY2hhc2VQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3B1cmNoYXNlUHJpY2VXaXRoVGF4LCBzZXRQdXJjaGFzZVByaWNlV2l0aFRheF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlRHJhd2VyTWVudShmYWxzZSkpO1xyXG5cclxuICAgICAgICBmZXRjaFVzZXJDdXN0b21lcnMoKVxyXG4gICAgICAgIGZldGNoSW52b2ljZURhdGEoKVxyXG4gICAgICAgIGZldGNoVHJhbnNwb3J0cygpXHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW52b2ljZURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjEzMzgvaW52b2ljZXMvY291bnQnKVxyXG4gICAgICAgIHNldEludm9pY2VOdW1iZXIocmVzLmRhdGEgKyAxKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmFuc3BvcnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMToxMzM4L3RyYW5zcG9ydHMnKVxyXG4gICAgICAgIHNldFRyYW5zcG9ydHMocmVzLmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyQ3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEN1c3RvbWVycygpXHJcbiAgICAgICAgc2V0Q3VzdG9tZXJzKHJlcy5kYXRhKVxyXG5cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEZXRhaWxzID0gY3VzdG9tZXJzLmZpbHRlcigoZGF0YSkgPT4gKGRhdGEuaWQgPT0gY29tcGFueU5hbWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlEZXRhaWxzWzBdKVxyXG4gICAgICAgIHNldENvbXBhbnlEYXRhKGNvbXBhbnlEZXRhaWxzWzBdKTtcclxuICAgIH0sIFtjb21wYW55TmFtZV0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyYW5zcG9ydCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0RGV0YWlscyA9IHRyYW5zcG9ydHMuZmlsdGVyKChkYXRhKSA9PiAoZGF0YS5pZCA9PSB0cmFuc3BvcnQpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyYW5zcG9ydERldGFpbHNbMF0pXHJcbiAgICAgICAgc2V0VHJhbnNwb3J0RGF0YSh0cmFuc3BvcnREZXRhaWxzWzBdKTtcclxuICAgIH0sIFt0cmFuc3BvcnRdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT1cIkNyZWF0ZSBuZXcgU2FsZXMgSW52b2ljZVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNhbGVzIEludm9pY2VcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnZvaWNlREYgQ3JlYXRlIE5ldyBTYWxlcyBJbnZvaWNlIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBzLW5ldy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IGhhbmRsZVN1Ym1pdChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1mb3JtIHBzLWZvcm0tLW5ldy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+Q3VzdG9tZXIgSW5mb3JtYXRpb248L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTS9TLjxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzLm1hcCgoZGF0YSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+e2RhdGEuY3VzdG9tZXJfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1NUL1BBTiBOdW1iZXI8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmFkZHJlc3MgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5sYW5kbWFyayArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLmNpdHkgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5zdGF0ZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5kaWEuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+SW52b2ljZSBEZXRhaWxzPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkludm9pY2UgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2UgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VEYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW52b2ljZURhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhbGxhbiBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGFsbGFuTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2hhbGxhbk51bWJlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbGxhbiBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhbGxhbkRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFsbGFuRGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlAuTy4gTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuTy4gRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBvRGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MLk8uIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYWxsYW5OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFsbGFuTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLVdheSBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXdheURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFd2F5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERJU1BBVENIIFRIUk9VR0g8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2UgPT4gKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVHJhbnNwb3J0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0cy5tYXAoKGRhdGEsIGtleSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEubmFtZX0+e2RhdGEubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBOb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJub3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBzLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9