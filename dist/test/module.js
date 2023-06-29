"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigCtrl = exports.AnnotationsQueryCtrl = void 0;
Object.defineProperty(exports, "Datasource", {
  enumerable: true,
  get: function get() {
    return _datasource.GenericDatasource;
  }
});
Object.defineProperty(exports, "QueryCtrl", {
  enumerable: true,
  get: function get() {
    return _query_ctrl.GenericDatasourceQueryCtrl;
  }
});
exports.QueryOptionsCtrl = void 0;
var _datasource = require("./datasource");
var _query_ctrl = require("./query_ctrl");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var GenericConfigCtrl = /*#__PURE__*/_createClass(function GenericConfigCtrl() {
  _classCallCheck(this, GenericConfigCtrl);
});
exports.ConfigCtrl = GenericConfigCtrl;
GenericConfigCtrl.templateUrl = 'partials/config.html';
var GenericQueryOptionsCtrl = /*#__PURE__*/_createClass(function GenericQueryOptionsCtrl() {
  _classCallCheck(this, GenericQueryOptionsCtrl);
});
exports.QueryOptionsCtrl = GenericQueryOptionsCtrl;
GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
var GenericAnnotationsQueryCtrl = /*#__PURE__*/_createClass(function GenericAnnotationsQueryCtrl() {
  _classCallCheck(this, GenericAnnotationsQueryCtrl);
});
exports.AnnotationsQueryCtrl = GenericAnnotationsQueryCtrl;
GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
//# sourceMappingURL=module.js.map
