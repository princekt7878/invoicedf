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
      var data, response;
      return C_Users_Kamlesh_OneDrive_Desktop_ravi_invoicedf_front_end_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                name: pname,
                note: pnote,
                hsn: hsn,
                unit_measurement: unitOfMeasure,
                stock: stock,
                product_type: ptype,
                cgst: cgst,
                sgst: sgst,
                igst: igst,
                cess: cessPer,
                cess_amt: cessAmt,
                sell_price: sellPrice,
                sell_price_tax: sellPriceWithTax,
                purchase_price: purchasePrice,
                purchase_price_tax: purchasePriceWithTax
              };
              _context.next = 4;
              return fetch('http://localhost:1337/products', {
                method: 'POST',
                // *GET, POST, PUT, DELETE, etc.
                mode: 'cors',
                // no-cors, *cors, same-origin
                cache: 'no-cache',
                // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin',
                // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

                },
                redirect: 'follow',
                // manual, *follow, error
                referrerPolicy: 'no-referrer',
                // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header

              });

            case 4:
              response = _context.sent;

            case 5:
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
      lineNumber: 76,
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
                  children: "General"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Receipt Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
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
                      lineNumber: 94,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["Company Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
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
                        lineNumber: 109,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "grams",
                        children: "Cypher's Technolabs"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                        value: "kg",
                        children: "InvoiceDF"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: ["GST/PAN Number", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("sup", {
                        children: "*"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 63
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
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
                      lineNumber: 118,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
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
                      lineNumber: 129,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figure", {
                className: "ps-block--form-box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("figcaption", {
                  children: "Payment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "ps-block__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
                      children: "Amount"
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
            lineNumber: 85,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
        lineNumber: 81,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsZXMtaW52b2ljZS9jcmVhdGUtc2FsZXMtaW52b2ljZS5qc3giXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJybnVtYmVyIiwic2V0Um51bWJlciIsIkRhdGUiLCJyZWNlaXB0RGF0ZSIsInNldFJlY2VpcHREYXRlIiwicm5vdGUiLCJzZXRSbm90ZSIsImhzbiIsInNldEhzbkNvZGUiLCJ1bml0T2ZNZWFzdXJlIiwic2V0VW5pdE9mTWVhc3VyZSIsInBheW1lbnRPcHRpb24iLCJzZXRQYXltZW50T3B0aW9uIiwicHR5cGUiLCJzZXRQdHlwZSIsImNnc3QiLCJzZXRDZ3N0Iiwic2dzdCIsInNldFNnc3QiLCJpZ3N0Iiwic2V0SWdzdCIsImNlc3NQZXIiLCJzZXRDZXNzUGVyIiwiY2Vzc0FtdCIsInNldENlc3NBbXQiLCJzZWxsUHJpY2UiLCJzZXRTZWxsUHJpY2UiLCJzZWxsUHJpY2VXaXRoVGF4Iiwic2V0U2VsbFByaWNlV2l0aFRheCIsInB1cmNoYXNlUHJpY2UiLCJzZXRQdXJjaGFzZVByaWNlIiwicHVyY2hhc2VQcmljZVdpdGhUYXgiLCJzZXRQdXJjaGFzZVByaWNlV2l0aFRheCIsInVzZUVmZmVjdCIsInRvZ2dsZURyYXdlck1lbnUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwibmFtZSIsInBuYW1lIiwibm90ZSIsInBub3RlIiwidW5pdF9tZWFzdXJlbWVudCIsInN0b2NrIiwicHJvZHVjdF90eXBlIiwiY2VzcyIsImNlc3NfYW10Iiwic2VsbF9wcmljZSIsInNlbGxfcHJpY2VfdGF4IiwicHVyY2hhc2VfcHJpY2UiLCJwdXJjaGFzZV9wcmljZV90YXgiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXJQb2xpY3kiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldERhdGEiLCJtYXJnaW5SaWdodCIsImJhY2siLCJjb25uZWN0Iiwic3RhdGUiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFKNEIsa0JBS0VDLHNEQUFRLENBQUMsQ0FBRCxDQUxWO0FBQUEsTUFLckJDLE9BTHFCO0FBQUEsTUFLWkMsVUFMWTs7QUFBQSxtQkFNVUYsc0RBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FObEI7QUFBQSxNQU1yQkMsV0FOcUI7QUFBQSxNQU1SQyxjQU5ROztBQUFBLG1CQU9GTCxzREFBUSxDQUFDLEVBQUQsQ0FQTjtBQUFBLE1BT3JCTSxLQVBxQjtBQUFBLE1BT2RDLFFBUGM7O0FBQUEsbUJBUUZQLHNEQUFRLENBQUMsRUFBRCxDQVJOO0FBQUEsTUFRckJRLEdBUnFCO0FBQUEsTUFRaEJDLFVBUmdCOztBQUFBLG1CQVNjVCxzREFBUSxDQUFDLEVBQUQsQ0FUdEI7QUFBQSxNQVNyQlUsYUFUcUI7QUFBQSxNQVNOQyxnQkFUTTs7QUFBQSxtQkFVY1gsc0RBQVEsQ0FBQyxFQUFELENBVnRCO0FBQUEsTUFVckJZLGFBVnFCO0FBQUEsTUFVTkMsZ0JBVk07O0FBQUEsbUJBV0ZiLHNEQUFRLENBQUMsRUFBRCxDQVhOO0FBQUEsTUFXckJjLEtBWHFCO0FBQUEsTUFXZEMsUUFYYzs7QUFBQSxtQkFZSmYsc0RBQVEsQ0FBQyxDQUFELENBWko7QUFBQSxNQVlyQmdCLElBWnFCO0FBQUEs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QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF4REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFxSUk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxFQUFDLHNCQURkO0FBRUksZ0JBQUksRUFBQyxHQUZUO0FBRWEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNdkUsTUFBTSxDQUFDMEUsSUFBUCxFQUFOO0FBQUEsYUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFNSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFySUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0pILENBek5EOztHQUFNM0UsaUI7VUFFYUUscUQsRUFFRUUsdUQ7OztLQUpmSixpQjtBQTBOUzRFLDBIQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsR0FBakI7QUFBQSxDQUFELENBQVAsQ0FBOEI5RSxpQkFBOUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYWxlcy1pbnZvaWNlL2NyZWF0ZS1zYWxlcy1pbnZvaWNlLmY4NTQ0ZTJjZDE4OGI4Y2IyOTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdCc7XHJcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tICd+L3N0b3JlL2FwcC9hY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBDcmVhdGVQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtybnVtYmVyLCBzZXRSbnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcmVjZWlwdERhdGUsIHNldFJlY2VpcHREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKVxyXG4gICAgY29uc3QgW3Jub3RlLCBzZXRSbm90ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2hzbiwgc2V0SHNuQ29kZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3VuaXRPZk1lYXN1cmUsIHNldFVuaXRPZk1lYXN1cmVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXltZW50T3B0aW9uLCBzZXRQYXltZW50T3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcHR5cGUsIHNldFB0eXBlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbY2dzdCwgc2V0Q2dzdF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Nnc3QsIHNldFNnc3RdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpZ3N0LCBzZXRJZ3N0XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbY2Vzc1Blciwgc2V0Q2Vzc1Blcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2Nlc3NBbXQsIHNldENlc3NBbXRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzZWxsUHJpY2UsIHNldFNlbGxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3NlbGxQcmljZVdpdGhUYXgsIHNldFNlbGxQcmljZVdpdGhUYXhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtwdXJjaGFzZVByaWNlLCBzZXRQdXJjaGFzZVByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcHVyY2hhc2VQcmljZVdpdGhUYXgsIHNldFB1cmNoYXNlUHJpY2VXaXRoVGF4XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh0b2dnbGVEcmF3ZXJNZW51KGZhbHNlKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbmFtZTogcG5hbWUsXHJcbiAgICAgICAgICAgIG5vdGU6IHBub3RlLFxyXG4gICAgICAgICAgICBoc24sXHJcbiAgICAgICAgICAgIHVuaXRfbWVhc3VyZW1lbnQ6IHVuaXRPZk1lYXN1cmUsXHJcbiAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICBwcm9kdWN0X3R5cGU6IHB0eXBlLFxyXG4gICAgICAgICAgICBjZ3N0LFxyXG4gICAgICAgICAgICBzZ3N0LFxyXG4gICAgICAgICAgICBpZ3N0LFxyXG4gICAgICAgICAgICBjZXNzOiBjZXNzUGVyLFxyXG4gICAgICAgICAgICBjZXNzX2FtdDogY2Vzc0FtdCxcclxuICAgICAgICAgICAgc2VsbF9wcmljZTogc2VsbFByaWNlLFxyXG4gICAgICAgICAgICBzZWxsX3ByaWNlX3RheDogc2VsbFByaWNlV2l0aFRheCxcclxuICAgICAgICAgICAgcHVyY2hhc2VfcHJpY2U6IHB1cmNoYXNlUHJpY2UsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX3ByaWNlX3RheDogcHVyY2hhc2VQcmljZVdpdGhUYXgsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcHJvZHVjdHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxyXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXHJcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPVwiQ3JlYXRlIG5ldyBJbndhcmQgUmVjZWlwdFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIklud2FyZCBSZWNlaXB0XCJcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSW52b2ljZURGIENyZWF0ZSBOZXcgSW53YXJkIFJlY2VpcHQgXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHMtbmV3LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gaGFuZGxlU3VibWl0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0gcHMtZm9ybS0tbmV3LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWZvcm1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTYgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInBzLWJsb2NrLS1mb3JtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5HZW5lcmFsPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VpcHQgTnVtYmVyPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JudW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJudW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IE5hbWU8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2UgPT4gc2V0VW5pdE9mTWVhc3VyZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEN1c3RvbWVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JhbXNcIj5DeXBoZXIncyBUZWNobm9sYWJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZ1wiPkludm9pY2VERjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdTVC9QQU4gTnVtYmVyPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGF0YSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREYXRhKHsgbm90ZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRvcmRhdGFcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHMtYmxvY2stLWZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlBheW1lbnQ8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2dzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2dzdChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlcyBpbiAo4oK5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPio8L3N1cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVjZWlwdERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJlY2VpcHREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4qPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtlID0+IHNldFBheW1lbnRPcHRpb24oZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17cGF5bWVudE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25fYWNjb3VudFwiPk9uIEFjY291bnQ8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib25faW52b2ljZVwiPk9uIEludm9pY2U8L1JhZGlvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgVHlwZTxzdXA+Kjwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQdHlwZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFR5cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhc2hcIj5DYXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVxdWVcIj5DaGVxdWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9ubGluZVwiPk9ubGluZS9UcmFuc2Zlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFua1wiPkJhbmsvVHJhbnNmZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRkc1wiPlREUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFkX2RlYnRzXCI+QmFkIERlYnRzL0thc2FyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxcIj5DdXJyZW5jeSBFeGNoYW5nZSBMb3NzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBOb3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFJub3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdG9yZGF0YVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInBzLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlLmFwcCkoQ3JlYXRlUHJvZHVjdFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9