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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      challanDate = _useState3[0],
      setChallanDate = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      customers = _useState4[0],
      setCustomers = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      invoiceNumber = _useState5[0],
      setInvoiceNumber = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      challanNumber = _useState6[0],
      setChallanNumber = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      companyName = _useState7[0],
      setCompanyName = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      rnote = _useState8[0],
      setRnote = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      hsn = _useState9[0],
      setHsnCode = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      unitOfMeasure = _useState10[0],
      setUnitOfMeasure = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      paymentOption = _useState11[0],
      setPaymentOption = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      ptype = _useState12[0],
      setPtype = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cgst = _useState13[0],
      setCgst = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sgst = _useState14[0],
      setSgst = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      igst = _useState15[0],
      setIgst = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      companyData = _useState16[0],
      setCompanyData = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessPer = _useState17[0],
      setCessPer = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      cessAmt = _useState18[0],
      setCessAmt = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPrice = _useState19[0],
      setSellPrice = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sellPriceWithTax = _useState20[0],
      setSellPriceWithTax = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePrice = _useState21[0],
      setPurchasePrice = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      purchasePriceWithTax = _useState22[0],
      setPurchasePriceWithTax = _useState22[1];

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
      lineNumber: 78,
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
                  lineNumber: 90,
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
                        lineNumber: 94,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
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
                        lineNumber: 98,
                        columnNumber: 49
                      }, _this), customers.map(function (data, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                          value: data.id,
                          children: data.customer_name
                        }, data.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 57
                        }, _this);
                      })]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["GST/PAN Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                      value: companyData ? companyData.gst_number : "",
                      className: "form-control",
                      readOnly: true,
                      type: "text",
                      placeholder: "Enter product name..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
                      className: "form-control",
                      readOnly: true,
                      value: companyData ? companyData.address + ', ' + companyData.landmark + ', ' + companyData.city + ', ' + companyData.state + ', ' + "India." : "",
                      rows: "5",
                      name: "editordata"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Invoice Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
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
                        lineNumber: 148,
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
                        lineNumber: 149,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
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
                          lineNumber: 160,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: "13-06-2021",
                        onChange: function onChange(e) {
                          return setReceiptDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
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
                        lineNumber: 174,
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
                        lineNumber: 175,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
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
                          lineNumber: 186,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                        value: "13-06-2021",
                        onChange: function onChange(e) {
                          return setChallanDate(e.target.value);
                        },
                        className: "form-control",
                        type: "date",
                        placeholder: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Type", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
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
                        lineNumber: 204,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cash",
                        children: "Cash"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cheque",
                        children: "Cheque"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "online",
                        children: "Online/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bank",
                        children: "Bank/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "tds",
                        children: "TDS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bad_debts",
                        children: "Bad Debts/Kasar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cel",
                        children: "Currency Exchange Loss"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Payment Notes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
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
                      lineNumber: 218,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
            lineNumber: 231,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, _this);
};

_s(CreateProductPage, "J3rBqMXek+mx0aFKY7oPY5zmm1Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwicm51bWJlciIsInNldFJudW1iZXIiLCJEYXRlIiwicmVjZWlwdERhdGUiLCJzZXRSZWNlaXB0RGF0ZSIsImNoYWxsYW5EYXRlIiwic2V0Q2hhbGxhbkRhdGUiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsImNoYWxsYW5OdW1iZXIiLCJzZXRDaGFsbGFuTnVtYmVyIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInJub3RlIiwic2V0Um5vdGUiLCJoc24iLCJzZXRIc25Db2RlIiwidW5pdE9mTWVhc3VyZSIsInNldFVuaXRPZk1lYXN1cmUiLCJwYXltZW50T3B0aW9uIiwic2V0UGF5bWVudE9wdGlvbiIsInB0eXBlIiwic2V0UHR5cGUiLCJjZ3N0Iiwic2V0Q2dzdCIsInNnc3QiLCJzZXRTZ3N0IiwiaWdzdCIsInNldElnc3QiLCJjb21wYW55RGF0YSIsInNldENvbXBhbnlEYXRhIiwiY2Vzc1BlciIsInNldENlc3NQZXIiLCJjZXNzQW10Iiwic2V0Q2Vzc0FtdCIsInNlbGxQcmljZSIsInNldFNlbGxQcmljZSIsInNlbGxQcmljZVdpdGhUYXgiLCJzZXRTZWxsUHJpY2VXaXRoVGF4IiwicHVyY2hhc2VQcmljZSIsInNldFB1cmNoYXNlUHJpY2UiLCJwdXJjaGFzZVByaWNlV2l0aFRheCIsInNldFB1cmNoYXNlUHJpY2VXaXRoVGF4IiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhd2VyTWVudSIsImZldGNoVXNlckN1c3RvbWVycyIsImZldGNoSW52b2ljZURhdGEiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJkYXRhIiwiZ2V0Q3VzdG9tZXJzIiwiY29tcGFueURldGFpbHMiLCJmaWx0ZXIiLCJpZCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwia2V5IiwiY3VzdG9tZXJfbmFtZSIsImdzdF9udW1iZXIiLCJhZGRyZXNzIiwibGFuZG1hcmsiLCJjaXR5Iiwic3RhdGUiLCJtYXJnaW5SaWdodCIsInBhcnNlSW50IiwibWFyZ2luTGVmdCIsImJhY2siLCJjb25uZWN0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBRTVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUo0QixrQkFLRUMsc0RBQVEsQ0FBQyxDQUFELENBTFY7QUFBQSxNQUtyQkMsT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLG1CQU1VRixzREFBUSxDQUFDLElBQUlHLElBQUosRUFBRCxDQU5sQjtBQUFBLE1BTXJCQyxXQU5xQjtBQUFBLE1BTVJDLGNBTlE7O0FBQUEsbUJBT1VMLHNEQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBUGxCO0FBQUEsTUFPckJHLFdBUHFCO0FBQUEsTUFPUkMsY0FQUTs7QUFBQSxtQkFRTVAsc0RBQVEsQ0FBQyxFQUFELENBUmQ7QUFBQSxNQVFyQlEsU0FScUI7QUFBQSxNQVFWQyxZQVJVOztBQUFBLG1CQVNjVCxzREFBUSxDQUFDLENBQUQsQ0FUdEI7QUFBQSxNQVNyQlUsYUFUcUI7QUFBQSxNQVNOQyxnQkFUTTs7QUFBQSxtQkFVY1gsc0RBQVEsQ0FBQyxDQUFELENBVnRCO0FBQUEsTUFVckJZLGFBVnFCO0FBQUEsTUFVTkMsZ0JBVk07O0FBQUEsbUJBV1Vi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O0FBQUEsaUJBSEosZUFtSkk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxFQUFDLHNCQURkO0FBRUksZ0JBQUksRUFBQyxHQUZUO0FBRWEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNcEUsTUFBTSxDQUFDZ0YsSUFBUCxFQUFOO0FBQUEsYUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0tILENBdk9EOztHQUFNakYsaUI7VUFFYUUscUQsRUFFRUUsdUQ7OztLQUpmSixpQjtBQXdPU2tGLDBIQUFPLENBQUMsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ00sR0FBakI7QUFBQSxDQUFELENBQVAsQ0FBOEJuRixpQkFBOUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlcy1pbnZvaWNlL2NyZWF0ZS5jMDYwMDIyOTgyYjllZTZhZmUxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHQnO1xyXG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmQnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUmFkaW8sIElucHV0LCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB0b2dnbGVEcmF3ZXJNZW51IH0gZnJvbSAnfi9zdG9yZS9hcHAvYWN0aW9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRDdXN0b21lcnMgfSBmcm9tICd+L25ldHdvcmtzL2FwaSc7XHJcblxyXG5jb25zdCBDcmVhdGVQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtybnVtYmVyLCBzZXRSbnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcmVjZWlwdERhdGUsIHNldFJlY2VpcHREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKVxyXG4gICAgY29uc3QgW2NoYWxsYW5EYXRlLCBzZXRDaGFsbGFuRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSlcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpbnZvaWNlTnVtYmVyLCBzZXRJbnZvaWNlTnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2hhbGxhbk51bWJlciwgc2V0Q2hhbGxhbk51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jub3RlLCBzZXRSbm90ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2hzbiwgc2V0SHNuQ29kZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3VuaXRPZk1lYXN1cmUsIHNldFVuaXRPZk1lYXN1cmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXltZW50T3B0aW9uLCBzZXRQYXltZW50T3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcHR5cGUsIHNldFB0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY2dzdCwgc2V0Q2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Nnc3QsIHNldFNnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpZ3N0LCBzZXRJZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY29tcGFueURhdGEsIHNldENvbXBhbnlEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2Nlc3NQZXIsIHNldENlc3NQZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjZXNzQW10LCBzZXRDZXNzQW10XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2VsbFByaWNlLCBzZXRTZWxsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZWxsUHJpY2VXaXRoVGF4LCBzZXRTZWxsUHJpY2VXaXRoVGF4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcHVyY2hhc2VQcmljZSwgc2V0UHVyY2hhc2VQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3B1cmNoYXNlUHJpY2VXaXRoVGF4LCBzZXRQdXJjaGFzZVByaWNlV2l0aFRheF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlRHJhd2VyTWVudShmYWxzZSkpO1xyXG5cclxuICAgICAgICBmZXRjaFVzZXJDdXN0b21lcnMoKVxyXG4gICAgICAgIGZldGNoSW52b2ljZURhdGEoKVxyXG5cclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb21wYW55TmFtZSlcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbnZvaWNlRGF0YSgpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6MTMzOC9pbnZvaWNlcy9jb3VudCcpXHJcbiAgICAgICAgc2V0SW52b2ljZU51bWJlcihyZXMuZGF0YSArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyQ3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEN1c3RvbWVycygpXHJcbiAgICAgICAgc2V0Q3VzdG9tZXJzKHJlcy5kYXRhKVxyXG5cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhbnlEZXRhaWxzID0gY3VzdG9tZXJzLmZpbHRlcigoZGF0YSkgPT4gKGRhdGEuaWQgPT0gY29tcGFueU5hbWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlEZXRhaWxzWzBdKVxyXG4gICAgICAgIHNldENvbXBhbnlEYXRhKGNvbXBhbnlEZXRhaWxzWzBdKTtcclxuICAgIH0sIFtjb21wYW55TmFtZV0pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPVwiQ3JlYXRlIG5ldyBTYWxlcyBJbnZvaWNlXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU2FsZXMgSW52b2ljZVwiXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkludm9pY2VERiBDcmVhdGUgTmV3IFNhbGVzIEludm9pY2UgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHMtbmV3LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gaGFuZGxlU3VibWl0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0gcHMtZm9ybS0tbmV3LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWZvcm1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTYgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInBzLWJsb2NrLS1mb3JtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5DdXN0b21lciBJbmZvcm1hdGlvbjwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1ibG9ja19fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNL1MuPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgQ3VzdG9tZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnMubWFwKChkYXRhLCBrZXkpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT57ZGF0YS5jdXN0b21lcl9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHU1QvUEFOIE51bWJlcjxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmdzdF9udW1iZXIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2R1Y3QgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhID8gY29tcGFueURhdGEuYWRkcmVzcyArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLmxhbmRtYXJrICsgJywgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueURhdGEuY2l0eSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLnN0YXRlICsgJywgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmRpYS5cIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0b3JkYXRhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTYgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInBzLWJsb2NrLS1mb3JtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5JbnZvaWNlIERldGFpbHM8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW52b2ljZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW52b2ljZU51bWJlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZSBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XCIxMy0wNi0yMDIxXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRSZWNlaXB0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFsbGFuIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYWxsYW5OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaGFsbGFuTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFsbGFuIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcIjEzLTA2LTIwMjFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENoYWxsYW5EYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBUeXBlPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFB0eXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVHlwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2FzaFwiPkNhc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZXF1ZVwiPkNoZXF1ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib25saW5lXCI+T25saW5lL1RyYW5zZmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYW5rXCI+QmFuay9UcmFuc2Zlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGRzXCI+VERTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYWRfZGVidHNcIj5CYWQgRGVidHMvS2FzYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbFwiPkN1cnJlbmN5IEV4Y2hhbmdlIExvc3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IE5vdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Um5vdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0b3JkYXRhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHMtYnRuXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUuYXBwKShDcmVhdGVQcm9kdWN0UGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=