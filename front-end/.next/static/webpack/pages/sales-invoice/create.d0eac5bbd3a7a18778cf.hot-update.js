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
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      rnumber = _useState[0],
      setRnumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date(Date.now()).toLocaleDateString(undefined, options)),
      invoiceDate = _useState2[0],
      setInvoiceDate = _useState2[1];

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
                        value: invoiceDate,
                        onChange: function onChange(e) {
                          console.log(invoiceDate);
                          setInvoiceDate(e.target.value);
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
                        lineNumber: 177,
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
                        lineNumber: 178,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
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
                          lineNumber: 189,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
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
                        lineNumber: 191,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
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
                        lineNumber: 202,
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
                        lineNumber: 203,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
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
                          lineNumber: 214,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
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
                        lineNumber: 216,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
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
                        lineNumber: 228,
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
                        lineNumber: 229,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
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
                          lineNumber: 240,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 238,
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
                        lineNumber: 242,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Payment Type", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 253,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
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
                        lineNumber: 258,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cash",
                        children: "Cash"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cheque",
                        children: "Cheque"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "online",
                        children: "Online/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bank",
                        children: "Bank/Transfer"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "tds",
                        children: "TDS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "bad_debts",
                        children: "Bad Debts/Kasar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "cel",
                        children: "Currency Exchange Loss"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Payment Notes"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
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
                      lineNumber: 272,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
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
            lineNumber: 285,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "ps-btn",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
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

_s(CreateProductPage, "NA1Ru8RlsDY9b8ZJ4e5xLY5Bdf0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib3B0aW9ucyIsInllYXIiLCJtb250aCIsImRheSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInJudW1iZXIiLCJzZXRSbnVtYmVyIiwiRGF0ZSIsIm5vdyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImludm9pY2VEYXRlIiwic2V0SW52b2ljZURhdGUiLCJjaGFsbGFuRGF0ZSIsInNldENoYWxsYW5EYXRlIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiaW52b2ljZU51bWJlciIsInNldEludm9pY2VOdW1iZXIiLCJjaGFsbGFuTnVtYmVyIiwic2V0Q2hhbGxhbk51bWJlciIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJybm90ZSIsInNldFJub3RlIiwiaHNuIiwic2V0SHNuQ29kZSIsInVuaXRPZk1lYXN1cmUiLCJzZXRVbml0T2ZNZWFzdXJlIiwicGF5bWVudE9wdGlvbiIsInNldFBheW1lbnRPcHRpb24iLCJwdHlwZSIsInNldFB0eXBlIiwiY2dzdCIsInNldENnc3QiLCJzZ3N0Iiwic2V0U2dzdCIsImlnc3QiLCJzZXRJZ3N0IiwiY29tcGFueURhdGEiLCJzZXRDb21wYW55RGF0YSIsImNlc3NQZXIiLCJzZXRDZXNzUGVyIiwiY2Vzc0FtdCIsInNldENlc3NBbXQiLCJzZWxsUHJpY2UiLCJzZXRTZWxsUHJpY2UiLCJzZWxsUHJpY2VXaXRoVGF4Iiwic2V0U2VsbFByaWNlV2l0aFRheCIsInB1cmNoYXNlUHJpY2UiLCJzZXRQdXJjaGFzZVByaWNlIiwicHVyY2hhc2VQcmljZVdpdGhUYXgiLCJzZXRQdXJjaGFzZVByaWNlV2l0aFRheCIsInVzZUVmZmVjdCIsInRvZ2dsZURyYXdlck1lbnUiLCJmZXRjaFVzZXJDdXN0b21lcnMiLCJmZXRjaEludm9pY2VEYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsImdldEN1c3RvbWVycyIsImNvbXBhbnlEZXRhaWxzIiwiZmlsdGVyIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImtleSIsImN1c3RvbWVyX25hbWUiLCJnc3RfbnVtYmVyIiwiYWRkcmVzcyIsImxhbmRtYXJrIiwiY2l0eSIsInN0YXRlIiwibWFyZ2luUmlnaHQiLCJwYXJzZUludCIsIm1hcmdpbkxlZnQiLCJzZXRSZWNlaXB0RGF0ZSIsImJhY2siLCJjb25uZWN0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBRTVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFBRUMsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLFNBQUssRUFBRSxNQUExQjtBQUFrQ0MsT0FBRyxFQUFFO0FBQXZDLEdBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFKNEIsa0JBS0VDLHNEQUFRLENBQUMsQ0FBRCxDQUxWO0FBQUEsTUFLckJDLE9BTHFCO0FBQUEsTUFLWkMsVUFMWTs7QUFBQSxtQkFNVUYsc0RBQVEsQ0FBQyxJQUFJRyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxFQUFULEVBQXFCQyxrQkFBckIsQ0FBd0NDLFNBQXhDLEVBQWtEWixPQUFsRCxDQUFELENBTmxCO0FBQUEsTUFNckJhLFdBTnFCO0FBQUEsTUFNUkMsY0FOUTs7QUFBQSxtQkFPVVIsc0RBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FQbEI7QUFBQSxN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QUFBQTtBQUFBO0FBQUEsMkJBM0hKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBeU1JO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNJO0FBQ0kscUJBQVMsRUFBQyxzQkFEZDtBQUVJLGdCQUFJLEVBQUMsR0FGVDtBQUVhLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTNFLE1BQU0sQ0FBQ3dGLElBQVAsRUFBTjtBQUFBLGFBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBek1KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTROSCxDQTdSRDs7R0FBTXpGLGlCO1VBRWFFLHFELEVBRUVNLHVEOzs7S0FKZlIsaUI7QUE4UlMwRiwwSEFBTyxDQUFDLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNPLEdBQWpCO0FBQUEsQ0FBRCxDQUFQLENBQThCM0YsaUJBQTlCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUuZDBlYWM1YmJkM2E3YTE4Nzc4Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0JztcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkJztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJhZGlvLCBJbnB1dCwgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJzIH0gZnJvbSAnfi9uZXR3b3Jrcy9hcGknO1xyXG5cclxuY29uc3QgQ3JlYXRlUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3JudW1iZXIsIHNldFJudW1iZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpbnZvaWNlRGF0ZSwgc2V0SW52b2ljZURhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoRGF0ZS5ub3coKSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCxvcHRpb25zKSlcclxuICAgIGNvbnN0IFtjaGFsbGFuRGF0ZSwgc2V0Q2hhbGxhbkRhdGVdID0gdXNlU3RhdGUobmV3IERhdGUpXHJcbiAgICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaW52b2ljZU51bWJlciwgc2V0SW52b2ljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NoYWxsYW5OdW1iZXIsIHNldENoYWxsYW5OdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtjb21wYW55TmFtZSwgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtybm90ZSwgc2V0Um5vdGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtoc24sIHNldEhzbkNvZGVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt1bml0T2ZNZWFzdXJlLCBzZXRVbml0T2ZNZWFzdXJlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcGF5bWVudE9wdGlvbiwgc2V0UGF5bWVudE9wdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3B0eXBlLCBzZXRQdHlwZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2Nnc3QsIHNldENnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZ3N0LCBzZXRTZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaWdzdCwgc2V0SWdzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2NvbXBhbnlEYXRhLCBzZXRDb21wYW55RGF0YV0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtjZXNzUGVyLCBzZXRDZXNzUGVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2Vzc0FtdCwgc2V0Q2Vzc0FtdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3NlbGxQcmljZSwgc2V0U2VsbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc2VsbFByaWNlV2l0aFRheCwgc2V0U2VsbFByaWNlV2l0aFRheF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3B1cmNoYXNlUHJpY2UsIHNldFB1cmNoYXNlUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtwdXJjaGFzZVByaWNlV2l0aFRheCwgc2V0UHVyY2hhc2VQcmljZVdpdGhUYXhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlck1lbnUoZmFsc2UpKTtcclxuXHJcbiAgICAgICAgZmV0Y2hVc2VyQ3VzdG9tZXJzKClcclxuICAgICAgICBmZXRjaEludm9pY2VEYXRhKClcclxuXHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY29tcGFueU5hbWUpXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW52b2ljZURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjEzMzgvaW52b2ljZXMvY291bnQnKVxyXG4gICAgICAgIHNldEludm9pY2VOdW1iZXIocmVzLmRhdGEgKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlckN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDdXN0b21lcnMoKVxyXG4gICAgICAgIHNldEN1c3RvbWVycyhyZXMuZGF0YSlcclxuXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnlOYW1lKTtcclxuICAgICAgICBjb25zdCBjb21wYW55RGV0YWlscyA9IGN1c3RvbWVycy5maWx0ZXIoKGRhdGEpID0+IChkYXRhLmlkID09IGNvbXBhbnlOYW1lKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21wYW55RGV0YWlsc1swXSlcclxuICAgICAgICBzZXRDb21wYW55RGF0YShjb21wYW55RGV0YWlsc1swXSk7XHJcbiAgICB9LCBbY29tcGFueU5hbWVdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT1cIkNyZWF0ZSBuZXcgU2FsZXMgSW52b2ljZVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNhbGVzIEludm9pY2VcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnZvaWNlREYgQ3JlYXRlIE5ldyBTYWxlcyBJbnZvaWNlIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBzLW5ldy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IGhhbmRsZVN1Ym1pdChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1mb3JtIHBzLWZvcm0tLW5ldy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+Q3VzdG9tZXIgSW5mb3JtYXRpb248L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTS9TLjxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJzLm1hcCgoZGF0YSwga2V5KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+e2RhdGEuY3VzdG9tZXJfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1NUL1BBTiBOdW1iZXI8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURhdGEgPyBjb21wYW55RGF0YS5nc3RfbnVtYmVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9kdWN0IG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YSA/IGNvbXBhbnlEYXRhLmFkZHJlc3MgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5sYW5kbWFyayArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhLmNpdHkgKyAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55RGF0YS5zdGF0ZSArICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5kaWEuXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcy1ibG9jay0tZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+SW52b2ljZSBEZXRhaWxzPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkludm9pY2UgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2UgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VEYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGludm9pY2VEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludm9pY2VEYXRlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYWxsYW4gTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhbGxhbk51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENoYWxsYW5OdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWxsYW4gRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1wiMTMtMDYtMjAyMVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2hhbGxhbkRhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QLk8uIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnZvaWNlTnVtYmVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLk8uIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcIjEzLTA2LTIwMjFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJlY2VpcHREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkwuTy4gTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hhbGxhbk51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENoYWxsYW5OdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUtV2F5IERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcIjEzLTA2LTIwMjFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENoYWxsYW5EYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBUeXBlPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFB0eXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVHlwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2FzaFwiPkNhc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZXF1ZVwiPkNoZXF1ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib25saW5lXCI+T25saW5lL1RyYW5zZmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYW5rXCI+QmFuay9UcmFuc2Zlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGRzXCI+VERTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYWRfZGVidHNcIj5CYWQgRGVidHMvS2FzYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbFwiPkN1cnJlbmN5IEV4Y2hhbmdlIExvc3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IE5vdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Um5vdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0b3JkYXRhXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb3JtX19ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHMtYnRuXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUuYXBwKShDcmVhdGVQcm9kdWN0UGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=