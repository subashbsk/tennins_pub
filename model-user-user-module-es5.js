function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["model-user-user-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-user-account/delete-user-account.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-user-account/delete-user-account.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeleteUserAccountDeleteUserAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form_devarea\">\n          <div class=\"box-body\">\n            <div class=\"delete row book_course_label\">\n              <div class=\"col-md-12\">\n                <div>\n                  <div class=\"modal-dialog\">\n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Supprimer le compte</h4>\n                      </div>\n                      <div class=\"modal-body\">\n                        <br />\n                        <div\n                          class=\"form-group bmd-form-grou bmd-form-group is-filled\"\n                        >\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              Appuyez sur supprimer compte si vous voulez\n                              supprimer votre compte et supprimer toutes vos\n                              données personnelles\n                              <br /><br />\n                              Nous sommes désolés de vous voir partir\n                              <br /><br />\n                              Supprimer votre compte signifie supprimer toutes\n                              vos données personnelles, et l’annulation de tous\n                              les abonnements. Cela ne peut pas être annulé.\n                              <br /><br />\n                              Si vous avez des questions, veuillez communiquer\n                              avec nous à admin@ohmytennis.com.\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"modal-footer\">\n                        <div class=\"text-center\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div\n                                class=\"form_buttons\"\n                                style=\"text-align: center; padding: 0px 20px;\"\n                              >\n                                <button\n                                  type=\"button\"\n                                  id=\"cancelBtn\"\n                                  class=\"btn btn-danger\"\n                                  (click)=\"modalclose()\"\n                                  style=\"cursor: pointer;border-radius: 20px 20px 20px;\"\n                                >\n                                  Annuler\n                                </button>\n                                <button\n                                  type=\"button\"\n                                  class=\"btn btn-success\"\n                                  (click)=\"_delete_account()\"\n                                  style=\"cursor: pointer;border-radius: 20px 20px 20px;\"\n                                >\n                                   Supprimer le compte\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userchangepassword/userchangepassword.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userchangepassword/userchangepassword.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserchangepasswordUserchangepasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content cours_individualsec\">\n    <div class=\"container-fluid\">\n        <div class=\"~row\">\n            <div class=\"form_devarea col-md-12\" style=\"max-width: 100%;\">\n                <div class=\"\">\n                    <div class=\"tab-content\">\n                        <div class=\"form_section\" id=\"availabilityDiv\" style=\"max-width: 100%;\">\n                            <div *ngIf=\"alertMsg.show\" class=\"alert {{alertMsg.type}} alert-dismissible text-center\">\n                                <button type=\"button\" (click)=\"_closeAlertMessage($event)\"\n                                    class=\"close\"><span>&times;</span></button> {{alertMsg.msg}}\n                            </div>\n                            <form autocomplete=\"off\" [formGroup]=\"changePasswordForm\" autocomplete=\"off\"\n                                (ngSubmit)=\"changePassword(changePasswordForm)\" class=\"usereye\">\n                                <div class=\"col-xs-12 col-md-8\">\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Mot de passe actuel\n                                                    <span class=\"red\">*</span></label>\n                                            </div>\n\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input  [type]=\"show ? 'text' : 'password'\" minlength=\"8\" formControlName=\"password\"\n                                                    name=\"password\" class=\"form-control fields\"\n                                                    placeholder=\"Mot de passe\"\n                                                    [ngClass]=\"{ 'alert_field': cForm.password.errors && (cForm.password.touched || cForm.password.dirty)}\">\n                                                    <a (click)=\"onClickPasswordfield()\">\n                                                        <i class=\"fa fa-eye field-icon\" aria-hidden=\"true\" *ngIf=\"!show\"></i>\n                                                        <i class=\"fa fa-eye-slash field-icon\" aria-hidden=\"true\"\n                                                            *ngIf=\"show\"></i>\n                                                    </a>\n                                                <div *ngIf=\"cForm.password.errors && (cForm.password.touched || cForm.password.dirty)\"\n                                                    class=\"invalid-feedback\">\n                                                    <div class=\"alert_text\">Les mots de passe doivent comporter au moins\n                                                        8 caractères avec majuscules, chiffres\n                                                        et caractères spéciaux.</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Nouveau mot de passe <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input  [type]=\"show1 ? 'text' : 'password'\" minlength=\"8\" formControlName=\"newPassword\"\n                                                    name=\"newPassword\" class=\"form-control fields\"\n                                                    placeholder=\"Mot de passe\"\n                                                    [ngClass]=\"{ 'alert_field': cForm.newPassword.errors && (cForm.newPassword.touched || cForm.newPassword.dirty)}\">\n                                                    <a (click)=\"onClickPasswordfield1()\">\n                                                        <i class=\"fa fa-eye field-icon\" aria-hidden=\"true\" *ngIf=\"!show1\"></i>\n                                                        <i class=\"fa fa-eye-slash field-icon\" aria-hidden=\"true\"\n                                                            *ngIf=\"show1\"></i>\n                                                    </a>\n                                                <div *ngIf=\"cForm.newPassword.errors && (cForm.newPassword.touched || cForm.newPassword.dirty)\"\n                                                    class=\"invalid-feedback\">\n                                                    <div class=\"alert_text\">Veuillez entrer un nouveau mot de passe.Les mots de passe doivent comporter au moins\n                                                        8 caractères avec majuscules, chiffres\n                                                        et caractères spéciaux.</div>\n                                                </div>\n                                               \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>\n                                                    Confirmez le mot de passe <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input  [type]=\"show2 ? 'text' : 'password'\" minlength=\"8\" formControlName=\"confirmPassword\"\n                                                    name=\"confirmPassword\" class=\"form-control fields\"\n                                                    placeholder=\"Mot de passe\"\n                                                    [ngClass]=\"{ 'alert_field': cForm.confirmPassword.errors && (cForm.confirmPassword.touched || cForm.confirmPassword.dirty)}\">\n                                                    <a (click)=\"onClickPasswordfield2()\">\n                                                        <i class=\"fa fa-eye field-icon\" aria-hidden=\"true\" *ngIf=\"!show2\"></i>\n                                                        <i class=\"fa fa-eye-slash field-icon\" aria-hidden=\"true\"\n                                                            *ngIf=\"show2\"></i>\n                                                    </a>\n                                                <div *ngIf=\"cForm.confirmPassword.errors && (cForm.confirmPassword.touched || cForm.confirmPassword.dirty) && cForm.confirmPassword.errors.confirmedValidator\"\n                                                    class=\"invalid-feedback\">\n                                                    <div class=\"alert_text\">Veuillez entrer un nouveau mot de passe.Les mots de passe doivent comporter au moins\n                                                        8 caractères avec majuscules, chiffres\n                                                        et caractères spéciaux.</div>\n                                                </div>\n                                               \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 text-center\">\n                                        <button type=\"submit\" id=\"submit\" class=\"btn btn-primary\"\n                                            style=\"margin-left: 99px;\">\n                                            Changer le mot de passe</button>\n                                        <a (click)=\"makeEnable()\" style=\"margin-left:20px; color: #ffffff;\"\n                                            class=\"btn btn-info\"><i class=\"fa fa-edit\"></i> Annuler</a>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userdashboard/userdashboard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdashboard/userdashboard.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserdashboardUserdashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\" style=\"margin-top: 30px;\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ CoursIndividuel }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours individuels réservés</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-success card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ CoursCollectifOndemand }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours collectifs ondemand réservés</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-danger card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ CoursCollectifClub }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours collectif club réservés</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ Stage }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours stage terminés</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ Tournament }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours tournament terminés</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-success card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ TeamBuilding }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours team building terminés</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-danger card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"\">{{ Animation }}</i>\n                        </div>\n                        <h3 class=\"card-title\">Nombre de cours animation terminés</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userheader/userheader.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userheader/userheader.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserheaderUserheaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>userheader works!</p>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userleftpanelcomponent/userleftpanelcomponent.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userleftpanelcomponent/userleftpanelcomponent.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserleftpanelcomponentUserleftpanelcomponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\">\n  <div class=\"logo\">\n    <a href=\"#\" class=\"simple-text logo-normal\">\n      <img src=\"../../assets/images/admin_logo.png\" alt=\"\" />\n    </a>\n  </div>\n  <div class=\"sidebar-wrapper\">\n    <div class=\"user_profsm\">\n      <img src=\"{{ image }}\" alt=\"{{ this.username }}\" class=\"user_smicon\" />\n      <span>{{ this.username }}</span>\n    </div>\n    {{ this.url }}\n    <ul class=\"nav mynav\">\n      <li *ngFor=\"let l of leftPanel(); let i = index\" class=\"nav-item\"\n        [ngClass]=\"l.path === this.router.url ? 'active' : null\">\n        <a (click)=\"navActiveIndex = i\" routerLink=\"{{ l.path }}\" class=\"nav-link\" href=\"javascript:;\">\n          <i [ngClass]=\"l.iclass\"></i>\n          <p [ngClass]=\"l.style ? 'nav-sub-title' : null\" [innerHTML]=\"l.title\"></p>\n\n        </a>\n\n        <a routerLink=\"{{ l.path }}\" (click)=\"bookingclick()\" *ngIf=\"l.path === '/user/reservation'\"\n          class=\"nav-link notification\" href=\"javascript:;\">\n          <i [ngClass]=\"l.iclass\"></i>\n          <p [ngClass]=\"l.style ? 'nav-sub-title' : null\" [innerHTML]=\"l.title\"></p>\n          <span class=\"badge\" *ngIf=\"count_id\">{{count_id}}</span>\n        </a>\n        <a routerLink=\"{{ l.path }}\" (click)=\"bookingclick()\" *ngIf=\"l.path === '/user/notification'\"\n          class=\"nav-link notification\" href=\"javascript:;\">\n          <i [ngClass]=\"l.iclass\"></i>\n          <p [ngClass]=\"l.style ? 'nav-sub-title' : null\" [innerHTML]=\"l.title\"></p>\n          <span class=\"badge\" *ngIf=\"count_id\">{{count_id}}</span>\n        </a>\n\n      </li>\n      <li class=\"nav-item\">\n        <a (click)=\"_logout()\" class=\"nav-link\" href=\"javascript:;\">\n          <i class=\"far far-sign-out-o\"></i>\n          <p>DECONNEXION</p>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/usernotification/usernotification.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usernotification/usernotification.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsernotificationUsernotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form_devarea\">\n                    <div class=\"box-body\">\n                        <div class=\"row book_course_label\">\n                            <div class=\"col-md-4\">\n                                <label for=\"filter\" class=\"control-label\"><b>Filtre</b></label>\n                                <input (keyup)=\"filtersearch()\" [(ngModel)]=\"filter\" placeholder=\"Filtre\"\n                                    class=\"form-control\" />\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <label for=\"\" class=\"control-label\"><b>Cours</b></label>\n                                <select [(ngModel)]=\"course\" (change)=\"filtersearch()\" class=\"form-control \">\n                                    <option selected value=\"\">Sélectionner</option>\n                                    <option value=\"CoursIndividuel\">Cours particulier</option>\n                                    <option value=\"CoursCollectifOndemand\">Cours collectif ondemand</option>\n                                    <option value=\"CoursCollectifClub\">Cours collectif club</option>\n                                    <option value=\"Stage\">Stage</option>\n                                    <option value=\"Tournoi\">Tournoi</option>\n                                    <option value=\"TeamBuilding\">Team building</option>\n                                    <option value=\"Animation\">Animation</option>\n                                </select>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <label for=\"\" class=\"control-label\"><b>Statut</b></label>\n                                <select [(ngModel)]=\"status\" (change)=\"filtersearch()\" class=\"form-control \">\n                                    <option selected value=\"\">Sélectionner</option>\n                                    <option value=\"A\">Approuvé</option>\n                                    <option value=\"R\">Demande de réservation</option>\n                                    <option value=\"B\">Réservé</option>\n                                    <option value=\"S\">Reprogrammer</option>\n                                    <option value=\"C\">Annulé</option>\n                                    <option value=\"UC\">Prestation annulé</option>\n\n                                </select>\n                            </div>\n\n                        </div>\n\n                        <div class=\"book_coursetab\" style=\"overflow-x: auto;\">\n                            <table class=\"table book_coursetable\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\">N</th>\n                                        <th>Coach Nom</th>\n                                        <th>Cours</th>\n                                        <th>Date</th>\n                                        <!-- <th>Heure</th> -->\n                                        <th>Statut</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr\n                                        *ngFor=\"let rowData of rowDataCollection | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                        <td> {{rowData[0]}} </td>\n                                        <td align=\"left\"> {{rowData[9]}} {{rowData[10]}} </td>\n                                        <td align=\"left\"> {{rowData[2]}} </td>\n                                        <td> {{rowData[3]}}</td>\n                                        <!-- <td>{{rowData[4]}} </td> -->\n                                        <td>\n                                            <span *ngIf=\"rowData[6] == 'B'\" style=\"color: #3cd376;\">Réservé</span>\n                                            <span *ngIf=\"rowData[6] == 'A'\" style=\"color: #dbb126;\">Approuvé</span>\n                                            <span *ngIf=\"rowData[6] == 'R'\" style=\"color: #b86735;\">Demande de\n                                                réservation</span>\n                                            <span *ngIf=\"rowData[6] == 'S'\" style=\"color:darkblue;\">Reprogrammer</span>\n                                            <span *ngIf=\"rowData[6] == 'C'\" style=\"color: #f00612;\">Annulé</span>\n                                            <span *ngIf=\"rowData[6] == 'UC'\" style=\"color: #111110;\">Prestation\n                                                annulé</span>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Précédent\"\n                                style=\"float: right; padding: 11px;\" nextLabel=\"Prochain\" directionLinks=\"true\"\n                                autoHide=\"true\" responsive=\"true\">\n                            </pagination-controls>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"myModal_edit_course\" class=\"modal fade\" role=\"dialog\"\n        [ngStyle]=\"{'display' : dialogStatus ? 'block':'none', 'opacity':1}\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" (click)=\"modalclose()\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Formulaire d'approbation des utilisateurs</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <br>\n                    <div *ngIf=\"alertMsg.show\" class=\"alert {{alertMsg.type}} alert-dismissible text-center\">\n                        <button type=\"button\" (click)=\"_closeAlertMessage($event)\"\n                            class=\"close\"><span>&times;</span></button> {{alertMsg.msg}}\n                    </div>\n\n                    <div class=\"form-group bmd-form-grou bmd-form-group is-filled alert alert-danger\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">Remarque: Le montant doit être payé 24 heures avant le début de la\n                                session / de l'événement. Aucun remboursement après paiement.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <table class=\"table table-bordered\">\n                                    <tbody>\n                                        <tr>\n                                            <th scope=\"col\">Coach</th>\n                                            <td scope=\"col\">{{user_name}}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Cours</th>\n                                            <td scope=\"col\">{{course}}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Prix</th>\n                                            <td scope=\"col\">{{amount |currency:'EUR':'symbol':'2.2-2':'fr'}}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Paquet sélectionné</th>\n                                            <td scope=\"col\">{{remaining_status}}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">DATE</th>\n                                            <th scope=\"col\">{{booking_date | date:'dd/MM/yyyy'}}</th>\n                                        </tr>\n                                        <tr *ngFor=\"let slots of slotRowDatas\">\n                                            <td scope=\"col\">{{slots.booking_date | date:'dd/MM/yyyy'}}</td>\n                                            <td scope=\"col\">{{slots.booking_time}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div id=\"payer\">\n                                    <button\n                                        *ngIf=\"book_status=='A' && course != 'Tournoi' && course != 'TeamBuilding' && course != 'Animation'\"\n                                        type=\"button\" class=\"btn btn-success\" (click)=\"pay(amount,booking_Id,userEmail)\"\n                                        data-dismiss=\"modal\">PAYER</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"course =='CoursCollectifClub'\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Course Name</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"Remarks\" [(ngModel)]=\"Remarks\" name=\"Remarks\" readonly type=\"text\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"course =='CoursCollectifClub'\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Prix (€)</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"discount\" [(ngModel)]=\"discount\" name=\"discount\" type=\"text\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"course =='Stage' && amount == 0\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Prix (€)</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"discount\" [(ngModel)]=\"discount\" name=\"discount\" type=\"text\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div align=\"center\" *ngIf=\"course == 'CoursCollectifOndemand' && booked_users.length>1\">\n                        <table width=\"100%\" class=\"available_table\">\n                            <tbody>\n                                <tr>\n                                    <th colspan=\"2\">Booked Users</th>\n                                </tr>\n                                <tr *ngFor=\"let user of booked_users\">\n                                    <td>{{user.firstName}} {{user.lastName}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div align=\"center\"\n                        *ngIf=\"course == 'Tournoi' || course == 'TeamBuilding' || course == 'Animation'\">\n                        <div class=\"stepwizard_section\">\n                            <div class=\"row setup-content\">\n                                <div class=\"wizard_outer\">\n                                    <div class=\"col-md-12\">\n                                        <br>\n                                        <h4>Reservation Details</h4>\n                                        <div class=\"stepwizard_section\" align=\"left\">\n                                            <div class=\"row setup-content\">\n                                                <div class=\"wizard_outer\"\n                                                    style=\"border: 1px solid #e75b00;padding: 13px;margin: 27px;\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Nom de\n                                                                            l'entreprise /\n                                                                            personne :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Name_of_company}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Email\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Email}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Téléphone\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Mobile}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Date\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Date}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course !== 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Adresse\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Address}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course !== 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Code\n                                                                            Postal\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Postalcode}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course == 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Level\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Level}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Nombre\n                                                                            de\n                                                                            personne :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Number_of_person}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div id=\"payer\">\n                                                            <button *ngIf=\"book_status=='A'\" type=\"button\"\n                                                                class=\"btn btn-success\"\n                                                                (click)=\"pay(amount,booking_Id,reservation.Email)\"\n                                                                data-dismiss=\"modal\">PAYER</button>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"clearfix\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"modal-footer\">\n                    <div class=\"text-center\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                            </div>\n                            <div class=\"col-md-8\" style=\"padding: 0px 10px;\">\n                                <div class=\"form_buttons\" style=\"text-align: left; padding: 0px 0px;\">\n                                    <button *ngIf=\"book_status=='R'\" type=\"button\" class=\"btn btn-danger\"\n                                        (click)=\"cancelreq()\" data-dismiss=\"modal\">Annuler</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userparter/userparter.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userparter/userparter.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserparterUserparterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>userparter works!</p>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserprofileUserprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content cours_individualsec\">\n    <div class=\"container-fluid\">\n        <div class=\"~row\">\n            <div class=\"form_devarea col-md-12\" style=\"max-width: 100%;\">\n                <div class=\"\">\n                    <div class=\"text-right\">\n                        <div class=\"form_buttons\">\n                    \n                            <a data-toggle=\"modal\" id=\"enableBtn\" data-target=\"#myModal_edit_course\"\n                                class=\"btn btn-info des_save_btn course_edit_btn ng-binding\">Modifier</a>\n                        </div>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div class=\"form_section\" id=\"availabilityDiv\" style=\"max-width: 100%;\">\n                            <div *ngIf=\"alertMsg.show\" class=\"alert {{alertMsg.type}} alert-dismissible text-center\">\n                                <button type=\"button\" (click)=\"_closeAlertMessage($event)\" class=\"close\"><span>&times;</span></button>\n                                {{alertMsg.msg}}\n                            </div>\n\n                            <form #user=\"ngForm\" (ngSubmit)=\"onSubmit(res)\">\n                                <!-- <div class=\"col-xs-12\">\n                                    <a (click)=\"makeEnable()\" style=\"float:right;margin-bottom:20px; color: #ffffff;\"\n                                        class=\"btn btn-info\"><i class=\"fa fa-edit\"></i>\n                                        MODIFIER</a>\n                                </div> -->\n                                <div class=\"clearfix\"></div>\n                                <div class=\"col-xs-12 col-md-8\">\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Prénom <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8 ss-cap\">\n                                                <input type=\"text\" [(ngModel)]=\"res.firstName\" #firstName=\"ngModel\"\n                                                 onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'\n                                                    [ngClass]=\"{'alert_field': (firstName.errors && (firstName.touched || firstName.dirty))}\"\n                                                    name=\"firstName\" class=\"form-control\" placeholder=\"Prénom\" readonly\n                                                    required>\n                                                <ng-container\n                                                    *ngIf=\"firstName.errors && (firstName.touched || firstName.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"firstName.errors.required\">Indiquez\n                                                        votre\n                                                        Prénom.</span>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Nom <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8 ss-cap\">\n                                                <input type=\"text\" [(ngModel)]=\"res.lastName\" #lastName=\"ngModel\"\n                                                  onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'\n                                                    [ngClass]=\"{'alert_field': (lastName.errors && (lastName.touched || lastName.dirty))}\"\n                                                    name=\"lastName\" class=\"form-control\" placeholder=\"Nom\" readonly\n                                                    required>\n                                                <ng-container\n                                                    *ngIf=\"lastName.errors && (lastName.touched || lastName.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"lastName.errors.required\">Indiquez\n                                                        votre Nom.</span>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Téléphone <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"res.mobile\"\n                                                   pattern=\"^[0,3][0-9]{0,10}$\" maxlength=\"10\" #mobile=\"ngModel\"\n                                                    [ngClass]=\"{'alert_field': (mobile.errors && (mobile.touched || mobile.dirty))}\"\n                                                    name=\"mobile\" placeholder=\"Téléphone\" readonly required>\n                                                <ng-container *ngIf=\"mobile.errors && (mobile.touched || mobile.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"mobile.errors.required\">Indiquez\n                                                        votre téléphone.</span>\n                                                    <span class=\"alert_text\" *ngIf=\"mobile.errors.pattern\">Indiquez\n                                                        votre téléphone.</span>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>E-mail <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input type=\"text\" class=\"form-control\" id=\"email\"\n                                                    [(ngModel)]=\"res.email\" name=\"email\" placeholder=\"user@user.com\"\n                                                    readonly required>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Code postal <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <input [(ngModel)]=\"res.postalCode\" #postalCode=\"ngModel\"\n                                                    [ngClass]=\"{'alert_field': (postalCode.errors && (postalCode.touched || postalCode.dirty))}\"\n                                                    name=\"postalCode\" class=\"form-control\" minlength=\"5\" maxlength=\"5\"\n                                                    onKeyPress=\"if(this.postalCode.length>=5) return false;\"\n                                                    type=\"text\" placeholder=\"Code postal\"\n                                                    (change)=\"searchCity($event)\" readonly required>\n                                                <ng-container\n                                                    *ngIf=\"postalCode.errors && (postalCode.touched || postalCode.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"postalCode.errors.required\">Indiquez\n                                                        votre code postal.</span>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Ville<span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <select  [(ngModel)]=\"res.cityId\" style=\"height:45px\"\n                                                    class=\"form-control select-tab\" #ville=\"ngModel\" name=\"res.ville\" disabled id=\"Coach_City\"\n                                                    [ngClass]=\"{'alert_field': (ville.errors && (ville.touched || ville.dirty))}\">\n                                                    <option *ngFor=\"let city of selectedCity\"\n                                                        [value]=\"city.Code_commune_INSEE\">\n                                                        {{ city.Libelle_acheminement }}</option>\n                                                </select>\n\n                                                <ng-container *ngIf=\"ville.errors && (ville.touched || ville.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"ville.errors.required\">Indiquez votre emplacement.</span>\n                                                </ng-container>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Address<span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <textarea class=\"form-control\" id=\"address\" style=\"height:110px;\" disabled\n                                                    readonly required  name=\"res.address\"\n                                                    placeholder=\"La description\"\n                                                    >\n                                                                    </textarea>\n                                        \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>La description<span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <textarea class=\"form-control\" id=\"address\" style=\"height:110px;\" disabled\n                                                    readonly required [(ngModel)]=\"res.address\" name=\"res.address\"\n                                                    #address=\"ngModel\" placeholder=\"La description\"\n                                                    [ngClass]=\"{'alert_field': (address.errors && (address.touched || address.dirty))}\">\n                                                                    </textarea>\n                                                <ng-container\n                                                    *ngIf=\"address.errors && (address.touched || address.dirty)\">\n                                                    <span class=\"alert_text\" *ngIf=\"address.errors.required\">Indiquez\n                                                        votre\n                                                        Emplacement.</span>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-md-4\">\n                                                <label>Niveau de tennis <span class=\"red\">*</span></label>\n                                            </div>\n                                            <div class=\"col-xs-12 col-md-8\">\n                                                <select class=\"form-control select-tab\" disabled [(ngModel)]=\"res.User_Level\"\n                                                    name=\"User_Level\" placeholder=\"Niveau de tennis\" disabled id=\"NiveauSelect\" >\n                                                    <option value=\"Débutant\" selected>Débutant</option>\n                                                    <option value=\"Moyen\">Moyen</option>\n                                                    <option value=\"Fort\">Fort</option>\n                                                    <option value=\"40\">40</option>\n                                                    <option value=\"30/4\">30/4</option>\n                                                    <option value=\"30/3\">30/3</option>\n                                                    <option value=\"30/2\">30/2</option>\n                                                    <option value=\"30/1\">30/1</option>\n                                                    <option value=\"30\">30</option>\n                                                    <option value=\"15/5\">15/5</option>\n                                                    <option value=\"15/4\">15/4</option>\n                                                    <option value=\"15/3\">15/3</option>\n                                                    <option value=\"15/2\">15/2</option>\n                                                    <option value=\"15/1\">15/1</option>\n                                                    <option value=\"15\">15</option>\n                                                    <option value=\"5/6\">5/6</option>\n                                                    <option value=\"4/6\">4/6</option>\n                                                    <option value=\"3/6\">3/6</option>\n                                                    <option value=\"2/6\">2/6</option>\n                                                    <option value=\"1/6\">1/6</option>\n                                                    <option value=\"0\">0</option>\n                                                    <option value=\"-2/6\">-2/6</option>\n                                                    <option value=\"-4/6\">-4/6</option>\n                                                    <option value=\"-15\">-15</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 text-center\">\n                                        <button type=\"submit\" [disabled]=\"!user.valid || submit_disabled\" id=\"submit\"\n                                           readonly disabled class=\"btn btn-primary\"\n                                            style=\"margin-left: 99px;\">SAUVEGARDER</button>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group bmd-form-group\">\n                                        <div class=\"card card-profile\">\n                                            <div class=\"card-avatar\">\n                                                <a>\n                                                    <img class=\"img\" src={{res.User_Image}}>\n                                                </a>\n                                            </div>\n                                            <div class=\"user_profile card-body\">\n                                                <h4 class=\"card-title\">Photo de profil</h4>\n                                                <div class=\"upload-btn-wrapper\">\n                                                    <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n                                                    <input class=\"myfile\" type=\"file\" name=\"myfile\"\n                                                        (change)=\"changeListener($event)\" disabled />\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"myModal_edit_course\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Confirmer les modifications</h4>\n            </div>\n            <div class=\"modal-body\" style=\"padding: 15px!important;\">\n                <p>Êtes-vous sûr de vouloir faire les changements?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" (click)=\"makeEnable()\" class=\"btn btn-success\" data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px;\">Oui</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px;\">Annuler</button>\n            </div>\n        </div>\n\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userreservation/userreservation.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userreservation/userreservation.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserreservationUserreservationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form_devarea\">\n                    <div class=\"box-body\">\n                        <div class=\"row book_course_label\">\n                            <div class=\"col-md-4\">\n                                <label for=\"filter\" class=\"control-label\"><b>Filtre</b></label>\n                                <input (keyup)=\"filtersearch()\" [(ngModel)]=\"filter\" placeholder=\"Filtre\"\n                                    class=\"form-control\" />\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <label for=\"\" class=\"control-label\"><b>Cours</b></label>\n                                <select [(ngModel)]=\"course\" (change)=\"filtersearch()\" class=\"form-control \">\n                                    <option selected value=\"\">Sélectionner</option>\n                                    <option value=\"CoursIndividuel\">Cours particulier</option>\n                                    <option value=\"CoursCollectifOndemand\">Cours collectif à la demande</option>\n                                    <option value=\"CoursCollectifClub\">Cours collectif en club</option>\n                                    <option value=\"Stage\">Stage</option>\n                                    <option value=\"Tournoi\">Toumoi amical</option>\n                                    <option value=\"TeamBuilding\">Team building</option>\n                                    <option value=\"Animation\">Animation</option>\n                                </select>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <label for=\"\" class=\"control-label\"><b>Statut</b></label>\n                                <select [(ngModel)]=\"status\" (change)=\"filtersearch()\" class=\"form-control \">\n                                    <option selected value=\"\">Sélectionner</option>\n                                    <option value=\"A\">Approuvé</option>\n                                    <option value=\"R\">Demande de réservation</option>\n                                    <option value=\"B\">Réservé</option>\n                                    <option value=\"S\">Reprogrammé</option>\n                                    <option value=\"C\">Annulé</option>\n                                    <option value=\"UC\">Prestation annulée</option>\n\n                                </select>\n                            </div>\n\n                        </div>\n\n                        <div class=\"book_coursetab\" style=\"overflow-x: auto;\">\n                            <table class=\"table book_coursetable\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\">N</th>\n                                        <th>Nom du coach</th>\n                                        <th>Cours</th>\n                                        <th>Date</th>\n                                        <!-- <th>Heure</th> -->\n                                        <th>Statut</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr\n                                        *ngFor=\"let rowData of rowDataCollection | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                        <td> {{rowData[0]}} </td>\n                                        <td align=\"left\"> {{rowData[9]}} {{rowData[10]}} </td>\n                                        <td align=\"left\"> {{ rowData[2].charAt(0).toUpperCase() + rowData[2].slice(1).toLowerCase() }} </td>\n                                        <td> {{rowData[3]}}</td>\n                                        <!-- <td>{{rowData[4]}} </td> -->\n                                        <td>\n                                            <span *ngIf=\"rowData[6] == 'B'\" style=\"color: #3cd376;\">Réservé</span>\n                                            <span *ngIf=\"rowData[6] == 'A'\" style=\"color: #dbb126;\">Approuvé</span>\n                                            <span *ngIf=\"rowData[6] == 'R'\" style=\"color: #b86735;\">Demande de\n                                                réservation</span>\n                                            <span *ngIf=\"rowData[6] == 'S'\" style=\"color:darkblue;\">Reprogrammer</span>\n                                            <span *ngIf=\"rowData[6] == 'C'\" style=\"color: #f00612;\">Annulé</span>\n                                            <span *ngIf=\"rowData[6] == 'UC'\" style=\"color: #111110;\">Prestation\n                                                annulé</span>\n\n                                        </td>\n                                        <td><a class=\"btn des_abt_btn view_reservation\" data-toggle=\"modal\"\n                                                style=\"cursor: pointer;\" data-target=\"#myModal_edit_course\"\n                                                id=\"bookingDetailPage\" (click)=\"cancelDialog(rowData)\">VOIR\n\n                                            </a>\n\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Précédent\"\n                                style=\"float: right; padding: 11px;\" nextLabel=\"Prochain\" directionLinks=\"true\"\n                                autoHide=\"true\" responsive=\"true\">\n                            </pagination-controls>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"myModal_edit_course\" class=\"modal fade\" role=\"dialog\"\n        [ngStyle]=\"{'display' : dialogStatus ? 'block':'none', 'opacity':1}\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" (click)=\"modalclose()\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\"> Confirmation de la réservation du cours </h4>\n                    <!-- {{nameofleassson | lowercase}} -->\n                </div>\n                <div class=\"modal-body\">\n                    <br>\n                    \n                    <div class=\"form-group bmd-form-grou bmd-form-group is-filled alert alert-danger\"\n                        style=\"display: None;\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">Remarque: Le montant doit être payé 24 heures avant le début de la\n                                session / de l'événement. Aucun remboursement après paiement.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <table class=\"table table-bordered\">\n                                    <tbody>\n                                        <tr>\n                                            <th scope=\"col\">Coach</th>\n                                            <td scope=\"col\">{{ user_name | titlecase }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Cours</th>\n                                            <td scope=\"col\">{{ nameofleassson.charAt(0).toUpperCase() + nameofleassson.slice(1).toLowerCase() }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Prix</th>\n                                            <!-- <td scope=\"col\" *ngIf=\"amount ; else amt\">&nbsp;{{amount |currency:'EUR':'symbol':'2.2-2':'fr'}}</td>\n                                            <ng-template #amt>&nbsp;\n                                                {{amount |currency:'EUR':'symbol':'1.2-2':'fr'}}\n                                            </ng-template> -->\n                                            <td scope=\"col\">&nbsp;{{!amount ? 'À définir' : amount |currency:'EUR':'symbol':'2.2-2':'fr'}}</td>\n                                        </tr>\n                                        <tr>\n                                            <th scope=\"col\">Adresse</th>\n                                            <td scope=\"col\">{{course_details.address}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"course !='TeamBuilding' &&  course !='Tournoi' && course !='Animation'  && course !='Stage'\">\n                                            <th scope=\"col\">Nombre d'heures</th>\n                                            <td scope=\"col\">{{remaining_status}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"course =='CoursCollectifClub'\">\n                                            <th scope=\"col\">Heure de début </th>\n                                            <td scope=\"col\">{{bookingStarttime}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"course =='CoursCollectifClub'\">\n                                            <th scope=\"col\">Heure de fin</th>\n                                            <td scope=\"col\">{{bookingEndtime}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"course=='Stage' || course=='Tournoi'\">\n                                            <th scope=\"col\">Date</th>\n                                            <th scope=\"col\">{{course_details.from_date}} au {{ course_details.to_date}}</th>\n                                        </tr>\n                                        <tr *ngIf=\"course!='Stage' && course!='Tournoi'\">\n                                            <th scope=\"col\">Date</th>\n                                            <th scope=\"col\">{{booking_date | date:'dd-MM-yyyy'}}</th>\n                                        </tr>\n                                        <tr *ngFor=\"let slots of slotRowDatas\">\n                                            <td scope=\"col\">{{slots.booking_date | date:'dd-MM-yyyy'}}</td>\n                                            <td scope=\"col\">{{slots.booking_time}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div id=\"payer\">\n                                    <button\n                                        *ngIf=\"book_status=='A' && course != 'Tournoi' && course != 'TeamBuilding' && course != 'Animation'\"\n                                        type=\"button\" class=\"btn btn-success\" (click)=\"pay(amount,booking_Id,userEmail)\"\n                                        data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px 20px;\">PAYER</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <div *ngIf=\"course =='CoursCollectifClub'\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Course Name</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"Remarks\" [(ngModel)]=\"Remarks\" name=\"Remarks\" readonly type=\"text\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"course =='CoursCollectifClub'\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Prix (€)</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"discount\" [(ngModel)]=\"discount\" name=\"discount\" type=\"text\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div> -->\n                    <div *ngIf=\"course =='Stage' && amount == 0\" class=\"form-group bmd-form-group\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <label>Prix (€)</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input id=\"discount\" [(ngModel)]=\"discount\" name=\"discount\" type=\"text\" \n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                    <div align=\"center\" *ngIf=\"course == 'CoursCollectifOndemand' && booked_users.length>1\">\n                        <table width=\"100%\" class=\"available_table\">\n                            <tbody>\n                                <tr>\n                                    <th colspan=\"2\">Booked Users</th>\n                                </tr>\n                                <tr *ngFor=\"let user of booked_users\">\n                                    <td>{{user.firstName}} {{user.lastName}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div align=\"center\"\n                        *ngIf=\"course == 'Tournoi' || course == 'TeamBuilding' || course == 'Animation'\">\n                        <div class=\"stepwizard_section\">\n                            <div class=\"row setup-content\">\n                                <div class=\"wizard_outer\">\n                                    <div class=\"col-md-12\">\n                                        <br>\n                                        <h4>Détails de la réservation</h4>\n                                        <div class=\"stepwizard_section\" align=\"left\">\n                                            <div class=\"row setup-content\">\n                                                <div class=\"wizard_outer\"\n                                                    style=\"border: 1px solid #e75b00;padding: 13px;margin: 27px;\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Nom de\n                                                                            l'entreprise /\n                                                                            personne :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Name_of_company}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Email (pour paiement)\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Email}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Téléphone\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Mobile}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Date\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Date}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course !== 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Adresse\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Address}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course !== 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Code\n                                                                            Postal\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Postalcode}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div *ngIf=\"course == 'Tournoi'\"\n                                                            class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Niveau\n                                                                            :</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Level}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group bmd-form-grou bmd-form-group is-filled\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-5\">\n                                                                    <label style=\"text-align: initial;\"><strong>Nombre\n                                                                            de personnes:</strong></label>\n                                                                </div>\n                                                                <div class=\"col-md-7\">\n                                                                    <label>{{reservation.Number_of_person}}</label>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div id=\"payer\">\n                                                            <button *ngIf=\"book_status=='A'\" type=\"button\"\n                                                                class=\"btn btn-success\"\n                                                                (click)=\"pay(amount,booking_Id,reservation.Email)\"\n                                                                data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px 20px\">PAYER</button>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"clearfix\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"modal-footer\">\n                    <div class=\"text-center\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                            </div>\n                            <div class=\"col-md-8\" style=\"padding: 0px 10px;\">\n                                <div class=\"form_buttons\" style=\"text-align: left; padding: 0px 0px;\">\n                                    <!-- <a data-toggle=\"modal\"  data-target=\"#myModal_save_course\"  class=\"btn btn-success des_save_btn\">Enregistrer</a> -->\n                                    <button *ngIf=\"book_status=='R'\" type=\"button\" class=\"btn btn-danger\"\n                                        (click)=\"cancelreq()\" data-dismiss=\"modal\" \n                                        style=\"border-radius: 20px 20px 20px 20px;margin-left: -52px;\">Annuler</button>\n                                    <!-- <button type=\"button\" (click)=\"closemodal()\" class=\"btn btn-default\" data-dismiss=\"modal\">Proche</button> -->\n                                </div>\n\n                               \n\n                            </div>\n\n                           \n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"alertMsg.show\" class=\"alert {{alertMsg.type}} alert-dismissible text-center\">\n                    <button type=\"button\" (click)=\"_closeAlertMessage($event)\"\n                        class=\"close\"><span>&times;</span></button> {{alertMsg.msg}}\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/userreview/userreview.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userreview/userreview.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserreviewUserreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form_devarea\">\n                    <div class=\"box-body\">\n                        <div *ngIf=\"alertMsg.show\" class=\"alert {{\n                    alertMsg.type\n                  }} alert-dismissible text-center\">\n                            <button type=\"button\" (click)=\"_closeAlertMessage($event)\" class=\"close\">\n                                <span>&times;</span>\n                            </button>\n                            {{ alertMsg.msg }}\n                        </div>\n                        <div class=\"book_coursetab\" style=\"overflow-x: auto;\">\n                            <table class=\"table book_coursetable\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\">N</th>\n                                        <th>Nom</th>\n                                        <th>Cours</th>\n                                        <th>Date</th>\n                                        <th>Comments</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"cutomerReviewCollection.length==0\">\n                                        <td colspan=\"6\" class=\"text-center\" style=\"font-size: 14px;padding-top: 30px;\">\n                                            AUCUNE DONNEE DISPONIBLE</td>\n                                    </tr>\n                                    <tr\n                                        *ngFor=\"let rowData of cutomerReviewCollection | paginate: { itemsPerPage: 10, currentPage: p }; let i=index\">\n                                        <td>{{ i+1 }}</td>\n                                        <td> {{rowData.first_name }} {{rowData.last_name }}</td>\n                                        <td align=\"left\"> {{rowData.course}} </td>\n                                        <td align=\"left\"> {{rowData.review_date}} </td>\n                                        <td> {{rowData.comments}}</td>\n                                        <td>\n                                            <a data-toggle=\"modal\" id=\"enableBtn\"\n                                                (click)=\"commentairesClick(rowData.commentsid)\"\n                                                data-target=\"#myModal_delete_course\"\n                                                class=\"btn btn-primary des_save_btn course_edit_btn ng-binding\">supprimer</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <pagination-controls (pageChange)=\"p = $event\" previousLabel=\"Précédent\"\n                                style=\"float: right; padding: 11px;\" nextLabel=\"Prochain\" directionLinks=\"true\"\n                                autoHide=\"true\" responsive=\"true\">\n                            </pagination-controls>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!-- Delete Modal -->\n<div id=\"myModal_delete_course\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Confirmer la délétion</h4>\n            </div>\n            <div class=\"modal-body\" style=\"padding: 15px!important;\">\n                <p>Êtes-vous sûr de vouloir delete commentaires ?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" (click)=\"deleteCourse(comments_id)\" class=\"btn btn-success\"\n                    data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px;\">Oui</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"border-radius: 20px 20px 20px;\">Annuler</button>\n            </div>\n        </div>\n\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/usersignout/usersignout.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usersignout/usersignout.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersignoutUsersignoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>usersignout works!</p>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/usersparring/usersparring.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usersparring/usersparring.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersparringUsersparringComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>usersparring works!</p>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/usertopnavbar/usertopnavbar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usertopnavbar/usertopnavbar.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsertopnavbarUsertopnavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"nav_bar1\">\n  <div class=\"nav_container1\">\n    <div class=\"brand\">\n      TABLEAU DE BORD\n    </div>\n    <nav class=\"navi\">\n      <div class=\"nav_mobile1\">\n        <!-- <a (click)=\"clickEvent()\" id=\"nav_toggle1\"><span></span></a> -->\n        <a id=\"nav_toggle1\"><span></span></a>\n      </div>\n      <ul class=\"nav_list1\">\n        <li class=\"content_center\">\n          <form class=\"form-inline\">\n            <input class=\"form-control mr-sm-2 text_box_search\" style=\"border-radius:7px;\" type=\"search\"\n              placeholder=\"Rechercher\" aria-label=\"Rechercher\" />\n          </form>\n        </li>\n        <li class=\"content_center\">\n          <button class=\"btn btn-outline-success pl-2 my-2 my-sm-0\" type=\"submit\">\n            Rechercher\n          </button>\n        </li>\n        <li>\n          <a class=\"nav-link\" href=\"#\" role=\"button\" (click)=\"_logout()\" aria-haspopup=\"true\" aria-expanded=\"false\"\n            style=\"color: #fff;\">\n            <i  _ngcontent-rlr-c4 _ngcontent-ajm-c3=\"\" class=\"fa fa-sign-out\"></i>&nbsp;Se\n            deconnecter</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</section>";

    /***/
  },

  /***/"./src/app/model/user/user.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/model/user/user.module.ts ***!
    \*******************************************/
  /*! exports provided: UserModule */
  /***/
  function srcAppModelUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-pagination */"./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _shared_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./../../shared/app.shared.module */"./src/app/shared/app.shared.module.ts");
    /* harmony import */
    var _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../shared/app.constant */"./src/app/shared/app.constant.ts");
    /* harmony import */
    var _user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var src_app_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! src/app/userdashboard/userdashboard.component */"./src/app/userdashboard/userdashboard.component.ts");
    /* harmony import */
    var src_app_userheader_userheader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! src/app/userheader/userheader.component */"./src/app/userheader/userheader.component.ts");
    /* harmony import */
    var src_app_userleftpanelcomponent_userleftpanelcomponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! src/app/userleftpanelcomponent/userleftpanelcomponent.component */"./src/app/userleftpanelcomponent/userleftpanelcomponent.component.ts");
    /* harmony import */
    var src_app_usertopnavbar_usertopnavbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! src/app/usertopnavbar/usertopnavbar.component */"./src/app/usertopnavbar/usertopnavbar.component.ts");
    /* harmony import */
    var src_app_userreservation_userreservation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! src/app/userreservation/userreservation.component */"./src/app/userreservation/userreservation.component.ts");
    /* harmony import */
    var src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! src/app/userprofile/userprofile.component */"./src/app/userprofile/userprofile.component.ts");
    /* harmony import */
    var src_app_userreview_userreview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! src/app/userreview/userreview.component */"./src/app/userreview/userreview.component.ts");
    /* harmony import */
    var src_app_userparter_userparter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! src/app/userparter/userparter.component */"./src/app/userparter/userparter.component.ts");
    /* harmony import */
    var src_app_usersparring_usersparring_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! src/app/usersparring/usersparring.component */"./src/app/usersparring/usersparring.component.ts");
    /* harmony import */
    var src_app_userchangepassword_userchangepassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! src/app/userchangepassword/userchangepassword.component */"./src/app/userchangepassword/userchangepassword.component.ts");
    /* harmony import */
    var src_app_usersignout_usersignout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! src/app/usersignout/usersignout.component */"./src/app/usersignout/usersignout.component.ts");
    /* harmony import */
    var src_app_usernotification_usernotification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! src/app/usernotification/usernotification.component */"./src/app/usernotification/usernotification.component.ts");
    /* harmony import */
    var src_app_pages_delete_user_account_delete_user_account_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! src/app/pages/delete-user-account/delete-user-account.component */"./src/app/pages/delete-user-account/delete-user-account.component.ts");

    /* [ Shared Module ] */

    /* [ Constant ] */

    var routes = [{
      path: "",
      component: _user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
      data: {
        title: "User"
      },
      children: [{
        path: "",
        pathMatch: "full",
        redirectTo: "userdashboard"
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.DASHBOARD.SELF,
        component: src_app_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserdashboardComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.DASHBOARD.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.PROFILE.SELF,
        component: src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_15__["UserprofileComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.PROFILE.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.RESERVATION.SELF,
        component: src_app_userreservation_userreservation_component__WEBPACK_IMPORTED_MODULE_14__["UserreservationComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.RESERVATION.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.NOTIFICATION.SELF,
        component: src_app_usernotification_usernotification_component__WEBPACK_IMPORTED_MODULE_21__["UsernotificationComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.NOTIFICATION.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.REVIEWS.SELF,
        component: src_app_userreview_userreview_component__WEBPACK_IMPORTED_MODULE_16__["UserreviewComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.REVIEWS.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.PARTNER.SELF,
        component: src_app_userparter_userparter_component__WEBPACK_IMPORTED_MODULE_17__["UserparterComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.PARTNER.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.SPARRING.SELF,
        component: src_app_usersparring_usersparring_component__WEBPACK_IMPORTED_MODULE_18__["UsersparringComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.SPARRING.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.CHANGEPASSWORD.SELF,
        component: src_app_userchangepassword_userchangepassword_component__WEBPACK_IMPORTED_MODULE_19__["UserchangepasswordComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.CHANGEPASSWORD.TITLE
        }
      }, {
        path: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.DELETE_USER_ACCOUNT.SELF,
        component: src_app_pages_delete_user_account_delete_user_account_component__WEBPACK_IMPORTED_MODULE_22__["DeleteUserAccountComponent"],
        data: {
          title: _shared_app_constant__WEBPACK_IMPORTED_MODULE_8__["RoutingPath"].USERS.DELETE_USER_ACCOUNT.TITLE
        }
      }, {
        path: "**",
        component: src_app_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserdashboardComponent"]
      }]
    }];
    var UserModule = /*#__PURE__*/_createClass(function UserModule() {
      _classCallCheck(this, UserModule);
    });
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], src_app_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserdashboardComponent"], src_app_usertopnavbar_usertopnavbar_component__WEBPACK_IMPORTED_MODULE_13__["UsertopnavbarComponent"], src_app_userheader_userheader_component__WEBPACK_IMPORTED_MODULE_11__["UserheaderComponent"], src_app_userleftpanelcomponent_userleftpanelcomponent_component__WEBPACK_IMPORTED_MODULE_12__["UserleftpanelcomponentComponent"], src_app_userreservation_userreservation_component__WEBPACK_IMPORTED_MODULE_14__["UserreservationComponent"], src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_15__["UserprofileComponent"], src_app_userreview_userreview_component__WEBPACK_IMPORTED_MODULE_16__["UserreviewComponent"], src_app_userparter_userparter_component__WEBPACK_IMPORTED_MODULE_17__["UserparterComponent"], src_app_usersparring_usersparring_component__WEBPACK_IMPORTED_MODULE_18__["UsersparringComponent"], src_app_userchangepassword_userchangepassword_component__WEBPACK_IMPORTED_MODULE_19__["UserchangepasswordComponent"], src_app_usersignout_usersignout_component__WEBPACK_IMPORTED_MODULE_20__["UsersignoutComponent"], src_app_usernotification_usernotification_component__WEBPACK_IMPORTED_MODULE_21__["UsernotificationComponent"], src_app_pages_delete_user_account_delete_user_account_component__WEBPACK_IMPORTED_MODULE_22__["DeleteUserAccountComponent"]],
      imports: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["AppSharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [src_app_userleftpanelcomponent_userleftpanelcomponent_component__WEBPACK_IMPORTED_MODULE_12__["UserleftpanelcomponentComponent"], src_app_usertopnavbar_usertopnavbar_component__WEBPACK_IMPORTED_MODULE_13__["UsertopnavbarComponent"]]
    })], UserModule);

    /***/
  },

  /***/"./src/app/pages/delete-user-account/delete-user-account.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/delete-user-account/delete-user-account.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPagesDeleteUserAccountDeleteUserAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".nav > li {\n  position: relative;\n  display: block !important;\n}\n\n.nav-sub-title {\n  display: inline-block !important;\n  line-height: 18px !important;\n}\n\n.tour_mainmenu:hover .tour_submenu {\n  display: block;\n}\n\n.tour_submenu {\n  display: none;\n}\n\n.stage_mainmenu:hover .stage_submenu {\n  display: block;\n}\n\n.stage_submenu {\n  display: none;\n}\n\n.animation_mainmenu:hover .animation_submenu {\n  display: block;\n}\n\n.animation_submenu {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVsZXRlLXVzZXItYWNjb3VudC9FOlxcRnJlZWxhbmNlXFx0ZW5uaXNcXE9oTXlUZW5uaXNfV2ViLTAzLTA0LTIwMjMtbWFzdGVyXFxPaE15VGVubmlzX1dlYi0wMy0wNC0yMDIzLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGRlbGV0ZS11c2VyLWFjY291bnRcXGRlbGV0ZS11c2VyLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlbGV0ZS11c2VyLWFjY291bnQvZGVsZXRlLXVzZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURIQTtFQUNFLGNBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGV0ZS11c2VyLWFjY291bnQvZGVsZXRlLXVzZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYgPiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5uYXYtc3ViLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4udG91cl9tYWlubWVudTpob3ZlciAudG91cl9zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udG91cl9zdWJtZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFnZV9tYWlubWVudTpob3ZlciAuc3RhZ2Vfc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN0YWdlX3N1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYW5pbWF0aW9uX21haW5tZW51OmhvdmVyIC5hbmltYXRpb25fc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFuaW1hdGlvbl9zdWJtZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIiwiLm5hdiA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXN1Yi10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xufVxuXG4udG91cl9tYWlubWVudTpob3ZlciAudG91cl9zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50b3VyX3N1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3RhZ2VfbWFpbm1lbnU6aG92ZXIgLnN0YWdlX3N1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0YWdlX3N1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYW5pbWF0aW9uX21haW5tZW51OmhvdmVyIC5hbmltYXRpb25fc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYW5pbWF0aW9uX3N1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/pages/delete-user-account/delete-user-account.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/delete-user-account/delete-user-account.component.ts ***!
    \****************************************************************************/
  /*! exports provided: DeleteUserAccountComponent */
  /***/
  function srcAppPagesDeleteUserAccountDeleteUserAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DeleteUserAccountComponent", function () {
      return DeleteUserAccountComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./../../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    /* [ Spinner ] */

    var DeleteUserAccountComponent = /*#__PURE__*/function (_model_user_user_comp) {
      _inherits(DeleteUserAccountComponent, _model_user_user_comp);
      var _super = _createSuper(DeleteUserAccountComponent);
      function DeleteUserAccountComponent(activatedRoute, router, appService, location, spinner) {
        _classCallCheck(this, DeleteUserAccountComponent);
        return _super.call(this, activatedRoute, router, appService, location, spinner);
      }
      _createClass(DeleteUserAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = "SUPPRIMER UN COMPTE";
        }
      }, {
        key: "_delete_account",
        value: function _delete_account() {
          var _this = this;
          var coach = JSON.parse(localStorage.getItem("onmytennis"));
          if (coach) {
            var coach1 = JSON.parse(coach);
            var emailId = {
              emailId: coach1.email
            };
            this.spinner.show();
            this.appService.create("/user/accountdeletebyemail", emailId).subscribe(function (data) {
              if (data.isSuccess == true) {
                _this.spinner.hide();
                _this._setSession("removeItem");
                _this._gotoPath("/");
              } else {
                _this.spinner.hide();
              }
            });
          }
        }
      }, {
        key: "modalclose",
        value: function modalclose() {
          this.spinner.show();
          this.router.navigate(["/user/dashboard"], {
            queryParams: {}
          });
          this.spinner.hide();
        }
      }]);
      return DeleteUserAccountComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]);
    DeleteUserAccountComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };
    DeleteUserAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-delete-user-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./delete-user-account.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delete-user-account/delete-user-account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./delete-user-account.component.scss */"./src/app/pages/delete-user-account/delete-user-account.component.scss"))["default"]]
    })], DeleteUserAccountComponent);

    /***/
  },

  /***/"./src/app/userchangepassword/userchangepassword.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/userchangepassword/userchangepassword.component.scss ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserchangepasswordUserchangepasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".fields.alert_field,\n.alert_field {\n  border: 1px solid red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmNoYW5nZXBhc3N3b3JkL0U6XFxGcmVlbGFuY2VcXHRlbm5pc1xcT2hNeVRlbm5pc19XZWItMDMtMDQtMjAyMy1tYXN0ZXJcXE9oTXlUZW5uaXNfV2ViLTAzLTA0LTIwMjMtbWFzdGVyL3NyY1xcYXBwXFx1c2VyY2hhbmdlcGFzc3dvcmRcXHVzZXJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcmNoYW5nZXBhc3N3b3JkL3VzZXJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlcmNoYW5nZXBhc3N3b3JkL3VzZXJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZHMuYWxlcnRfZmllbGQsXG4uYWxlcnRfZmllbGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufSIsIi5maWVsZHMuYWxlcnRfZmllbGQsXG4uYWxlcnRfZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/userchangepassword/userchangepassword.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/userchangepassword/userchangepassword.component.ts ***!
    \********************************************************************/
  /*! exports provided: UserchangepasswordComponent */
  /***/
  function srcAppUserchangepasswordUserchangepasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserchangepasswordComponent", function () {
      return UserchangepasswordComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _confirmed_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../confirmed.validator */"./src/app/confirmed.validator.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    /* [ Spinner ] */

    var UserchangepasswordComponent = /*#__PURE__*/function (_app_component__WEBPA) {
      _inherits(UserchangepasswordComponent, _app_component__WEBPA);
      var _super2 = _createSuper(UserchangepasswordComponent);
      function UserchangepasswordComponent(formBuilder, activatedRoute, router, appService, location, spinner) {
        var _this2;
        _classCallCheck(this, UserchangepasswordComponent);
        _this2 = _super2.call(this, activatedRoute, router, appService, location, spinner);
        _this2.formBuilder = formBuilder;
        _this2.show = false;
        _this2.show1 = false;
        _this2.show2 = false;
        _this2.showPassword = false;
        return _this2;
      }
      _createClass(UserchangepasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changePasswordForm = this.formBuilder.group({
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          }, {
            validator: [Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_7__["ConfirmedValidator"])('newPassword', 'confirmPassword')]
          });
        }
      }, {
        key: "makeEnable",
        value: function makeEnable() {
          console.log('prod-issues');
        }
        /* [ Form controls ] */
      }, {
        key: "cForm",
        get: function get() {
          return this.changePasswordForm.controls;
        }
      }, {
        key: "changePassword",
        value: function changePassword(isValid) {
          var _this3 = this;
          if (isValid.status === "VALID") {
            var userData = JSON.parse(this._setSession("getItem"));
            var value = {
              email: userData["email"],
              role: userData["roleId"],
              password: this.changePasswordForm.value.newPassword
            };
            this.appService.create("/user/setNewPassword", value).subscribe(function (response) {
              if (response && response.isSuccess == true) {
                isValid.reset();
                _this3._showAlertMessage("alert-success", "Le mot de passe a été changé avec succès");
              } else {
                _this3._showAlertMessage("alert-danger", "Impossible de continuer. S'il vous plaît essayer après un certain temps");
              }
              _this3.spinner.hide();
            }, function (error) {});
          }
        }
        // }
        // Funtion for click events
      }, {
        key: "onClickPasswordfield",
        value: function onClickPasswordfield() {
          this.show = !this.show;
        }
      }, {
        key: "onClickPasswordfield1",
        value: function onClickPasswordfield1() {
          this.show1 = !this.show1;
        }
      }, {
        key: "onClickPasswordfield2",
        value: function onClickPasswordfield2() {
          this.show2 = !this.show2;
        }
      }]);
      return UserchangepasswordComponent;
    }(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]);
    UserchangepasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
      }];
    };
    UserchangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userchangepassword",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userchangepassword.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userchangepassword/userchangepassword.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userchangepassword.component.scss */"./src/app/userchangepassword/userchangepassword.component.scss"))["default"]]
    })], UserchangepasswordComponent);

    /***/
  },

  /***/"./src/app/userdashboard/userdashboard.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/userdashboard/userdashboard.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserdashboardUserdashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkYXNoYm9hcmQvdXNlcmRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/userdashboard/userdashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/userdashboard/userdashboard.component.ts ***!
    \**********************************************************/
  /*! exports provided: UserdashboardComponent */
  /***/
  function srcAppUserdashboardUserdashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserdashboardComponent", function () {
      return UserdashboardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    var UserdashboardComponent = /*#__PURE__*/function (_model_user_user_comp2) {
      _inherits(UserdashboardComponent, _model_user_user_comp2);
      var _super3 = _createSuper(UserdashboardComponent);
      function UserdashboardComponent(activatedRoute, router, appService, location, spinner) {
        _classCallCheck(this, UserdashboardComponent);
        return _super3.call(this, activatedRoute, router, appService, location, spinner);
      }
      _createClass(UserdashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = 'TABLEAU DE BORD';
          this.getcoursecount();
        }
      }, {
        key: "getcoursecount",
        value: function getcoursecount() {
          var _this4 = this;
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user = JSON.parse(users);
          var userid = {
            "User_ID": user.id
          };
          this.spinner.show();
          this.appService.create("/user/getallreservationcounts", userid).subscribe(function (response) {
            if (response && response["data"]) {
              var data = response["data"];
              _this4.CoursIndividuel = data.CoursIndividuel;
              _this4.CoursCollectifOndemand = data.CoursCollectifOndemand;
              _this4.CoursCollectifClub = data.CoursCollectifClub;
              _this4.Stage = data.Stage;
              _this4.Tournament = data.Tournament;
              _this4.TeamBuilding = data.TeamBuilding;
              _this4.Animation = data.Animation;
            }
            _this4.spinner.hide();
          });
        }
      }]);
      return UserdashboardComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UserdashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };
    UserdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userdashboard.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userdashboard/userdashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userdashboard.component.scss */"./src/app/userdashboard/userdashboard.component.scss"))["default"]]
    })], UserdashboardComponent);

    /***/
  },

  /***/"./src/app/userheader/userheader.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/userheader/userheader.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserheaderUserheaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJoZWFkZXIvdXNlcmhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/userheader/userheader.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/userheader/userheader.component.ts ***!
    \****************************************************/
  /*! exports provided: UserheaderComponent */
  /***/
  function srcAppUserheaderUserheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserheaderComponent", function () {
      return UserheaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var UserheaderComponent = /*#__PURE__*/function () {
      function UserheaderComponent() {
        _classCallCheck(this, UserheaderComponent);
      }
      _createClass(UserheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return UserheaderComponent;
    }();
    UserheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userheader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userheader.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userheader/userheader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userheader.component.scss */"./src/app/userheader/userheader.component.scss"))["default"]]
    })], UserheaderComponent);

    /***/
  },

  /***/"./src/app/userleftpanelcomponent/userleftpanelcomponent.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/userleftpanelcomponent/userleftpanelcomponent.component.scss ***!
    \******************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserleftpanelcomponentUserleftpanelcomponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".notification {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  border-radius: 2px;\n}\n\n.notification .badge {\n  position: absolute;\n  top: -8px;\n  right: -11px;\n  padding: 0px 4px;\n  border-radius: 50%;\n  background: red;\n  color: white;\n  width: 26px;\n  height: 29px;\n}\n\n.nav-item:nth-child(3) > a:nth-child(1), .nav-item:nth-child(4) > a:nth-child(1) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmxlZnRwYW5lbGNvbXBvbmVudC9FOlxcRnJlZWxhbmNlXFx0ZW5uaXNcXE9oTXlUZW5uaXNfV2ViLTAzLTA0LTIwMjMtbWFzdGVyXFxPaE15VGVubmlzX1dlYi0wMy0wNC0yMDIzLW1hc3Rlci9zcmNcXGFwcFxcdXNlcmxlZnRwYW5lbGNvbXBvbmVudFxcdXNlcmxlZnRwYW5lbGNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcmxlZnRwYW5lbGNvbXBvbmVudC91c2VybGVmdHBhbmVsY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElFO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FEU0U7RUFDRSxhQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC91c2VybGVmdHBhbmVsY29tcG9uZW50L3VzZXJsZWZ0cGFuZWxjb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcbiAgICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgXG4gIFxuICAubm90aWZpY2F0aW9uIC5iYWRnZSB7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAtMTFweDtcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgfVxuXG4gIC8vIC5ub3RpZmljYXRpb246bnRoLW9mLXR5cGUoMykge1xuICAvLyAgIGRpc3BsYXk6IG5vbmU7XG4gIC8vIH1cblxuICAubmF2LWl0ZW06bnRoLWNoaWxkKDMpID4gYTpudGgtY2hpbGQoMSksIC5uYXYtaXRlbTpudGgtY2hpbGQoNCkgPiBhOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiIsIi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5ub3RpZmljYXRpb24gLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMTFweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLm5hdi1pdGVtOm50aC1jaGlsZCgzKSA+IGE6bnRoLWNoaWxkKDEpLCAubmF2LWl0ZW06bnRoLWNoaWxkKDQpID4gYTpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/userleftpanelcomponent/userleftpanelcomponent.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/userleftpanelcomponent/userleftpanelcomponent.component.ts ***!
    \****************************************************************************/
  /*! exports provided: UserleftpanelcomponentComponent */
  /***/
  function srcAppUserleftpanelcomponentUserleftpanelcomponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserleftpanelcomponentComponent", function () {
      return UserleftpanelcomponentComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");

    /* [ Spinner ] */

    var UserleftpanelcomponentComponent = /*#__PURE__*/function (_model_user_user_comp3) {
      _inherits(UserleftpanelcomponentComponent, _model_user_user_comp3);
      var _super4 = _createSuper(UserleftpanelcomponentComponent);
      function UserleftpanelcomponentComponent(activatedRoute, router, appService, location, spinner) {
        var _this5;
        _classCallCheck(this, UserleftpanelcomponentComponent);
        _this5 = _super4.call(this, activatedRoute, router, appService, location, spinner);
        _this5.navActiveIndex = "";
        _this5.image = "https://www.w3schools.com/howto/img_avatar.png";
        return _this5;
      }
      _createClass(UserleftpanelcomponentComponent, [{
        key: "capitalizeFLetter",
        value: function capitalizeFLetter(name) {
          return name[0].toUpperCase() + name.slice(1);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;
          this.getBookingDetails();
          var coach = JSON.parse(localStorage.getItem("onmytennis"));
          if (coach) {
            var coach1 = JSON.parse(coach);
            if (coach1.roleId == 1) {
              this.spinner.show();
              var useremail = {
                User_Email: coach1.email
              };
              this.appService.create("/user/getuserbyid", useremail).subscribe(function (data) {
                if (data.isSuccess == true) {
                  _this6.image = data.data.User_list[0].User_Image;
                  //console.log(this.image);
                  if (_this6.image == null) {
                    _this6.image = "https://www.w3schools.com/howto/img_avatar.png";
                  }
                  _this6.spinner.hide();
                } else {
                  _this6.spinner.hide();
                }
              });
            } else if (coach1.roleId == 2) {
              this.spinner.show();
              var Coach_Email = {
                Coach_Email: coach1.Coach_Email
              };
              this.appService.create("/coach/getcoachbyid", Coach_Email).subscribe(function (data) {
                if (data.isSuccess == true) {
                  _this6.image = data.data.coach_list[0].Coach_Image;
                  if (_this6.image == null) _this6.image = "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png";
                  //console.log(this.image);
                  _this6.spinner.hide();
                } else {
                  _this6.spinner.hide();
                }
              });
            }
            if (coach1.firstName + " " + coach1.lastName) this.username = this.capitalizeFLetter(coach1.firstName + " " + coach1.lastName);
          }
        }
      }, {
        key: "getBookingDetails",
        value: function getBookingDetails() {
          var _this7 = this;
          var coach = JSON.parse(localStorage.getItem("onmytennis"));
          if (coach) {
            var coach1 = JSON.parse(coach);
            this.roleid = coach1.roleId;
            //console.log('coach Id ' + JSON.stringify(coach1.id));
            if (coach1.roleId == 1) {
              var userdetails = {
                user_Id: coach1.id
              };
              this.appService.getAll("/user/getallbookings", userdetails).subscribe(function (response) {
                if (response && response["data"]) {
                  _this7.count_id = response["data"].length;
                }
              });
            }
          }
        }
      }, {
        key: "bookingclick",
        value: function bookingclick() {
          var coach = JSON.parse(localStorage.getItem("onmytennis"));
          if (coach) {
            var coach1 = JSON.parse(coach);
            this.roleid = coach1.roleId;
            if (this.roleid == 1) {
              var coachdetails = {
                markread: 1,
                user_Id: coach1.id
              };
              this.appService.create("/user/updateallBookings", coachdetails).subscribe(function (response) {
                if (response && response["data"]) {
                  //this.count_id = response["data"].length;
                }
              });
            }
          }
        }
      }, {
        key: "_logout",
        value: function _logout() {
          this._setSession("removeItem");
          this._gotoPath("/");
        }
      }, {
        key: "_delete_account",
        value: function _delete_account() {
          var _this8 = this;
          var coach = JSON.parse(localStorage.getItem("onmytennis"));
          if (coach) {
            var coach1 = JSON.parse(coach);
            var emailId = {
              email: coach1.email
            };
            this.spinner.show();
            this.appService.create("/user/accountdeletebyemail", emailId).subscribe(function (data) {
              if (data.isSuccess == true) {
                _this8.spinner.hide();
                _this8._setSession("removeItem");
                _this8._gotoPath("/");
              } else {
                _this8.spinner.hide();
              }
            });
          }
        }
      }, {
        key: "leftPanel",
        value: function leftPanel() {
          return [{
            title: "TABLEAU DE BORD",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.DASHBOARD.SELF"),
            iclass: "far far-th-large",
            style: false
          }, {
            title: "MON COMPTE",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.PROFILE.SELF"),
            iclass: "far far-user-o",
            style: false
          }, {
            title: "MES RESERVATIONS",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.RESERVATION.SELF"),
            iclass: "far far-reser-o noti",
            style: false
          }, {
            title: "NOTIFICATIONS",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.NOTIFICATION.SELF"),
            iclass: "far far-bell-o",
            style: false
          }, {
            title: "AVIS ET COMMENTAIRES",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.REVIEWS.SELF"),
            iclass: "far far-comments-o",
            style: false
          }, {
            title: "CHANGER MOT DE PASSE",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.CHANGEPASSWORD.SELF"),
            iclass: "far far-key-o",
            style: false
          }, {
            title: "SUPPRIMER LE COMPTE",
            path: "/" + this._const("PATH.USERS.SELF") + "/" + this._const("PATH.USERS.DELETE_USER_ACCOUNT.SELF"),
            iclass: "far far deleteacc",
            style: false
          }];
        }
      }]);
      return UserleftpanelcomponentComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]);
    UserleftpanelcomponentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };
    UserleftpanelcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userleftpanelcomponent",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userleftpanelcomponent.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userleftpanelcomponent/userleftpanelcomponent.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userleftpanelcomponent.component.scss */"./src/app/userleftpanelcomponent/userleftpanelcomponent.component.scss"))["default"]]
    })], UserleftpanelcomponentComponent);

    /***/
  },

  /***/"./src/app/usernotification/usernotification.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/usernotification/usernotification.component.scss ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUsernotificationUsernotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJub3RpZmljYXRpb24vdXNlcm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/usernotification/usernotification.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/usernotification/usernotification.component.ts ***!
    \****************************************************************/
  /*! exports provided: UsernotificationComponent */
  /***/
  function srcAppUsernotificationUsernotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsernotificationComponent", function () {
      return UsernotificationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! moment */"./node_modules/moment/moment.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    var UsernotificationComponent = /*#__PURE__*/function (_model_user_user_comp4) {
      _inherits(UsernotificationComponent, _model_user_user_comp4);
      var _super5 = _createSuper(UsernotificationComponent);
      function UsernotificationComponent(activatedRoute, router, appService, location, spinner) {
        var _this9;
        _classCallCheck(this, UsernotificationComponent);
        _this9 = _super5.call(this, activatedRoute, router, appService, location, spinner);
        _this9.user_name = "";
        _this9.slotRowDatas = [];
        _this9.remaining_status = "";
        _this9.slot_view = [];
        _this9.frommindate = new Date(Date.now() - 24 * 60 * 60 * 1000);
        _this9.rowDataCollection = [];
        _this9.filterDataCollection = [];
        _this9.dialogStatus = false;
        _this9.booking_Id = "";
        _this9.booking_time = "";
        _this9.booking_date = "";
        _this9.data = [];
        _this9.Fdata = [];
        _this9.filter = "";
        _this9.course = "";
        _this9.status = "";
        _this9.amt = 0;
        _this9.book_status = "";
        _this9.discount = "";
        _this9.booked_users = [];
        _this9.Remarks = "";
        _this9.email = "";
        _this9.p = "";
        _this9.course_demand = {
          Price_2pl_1hr: "",
          Price_3pl_1hr: "",
          Price_4pl_1hr: "",
          Price_5pl_1hr: "",
          Price_6pl_1hr: ""
        };
        _this9.reservation = {
          Address: "",
          Coach_Id: "",
          Course: "",
          Date: "",
          Email: "",
          Level: "",
          Mobile: "",
          Name_of_company: "",
          Number_of_person: "",
          Postalcode: ""
        };
        _this9.handler = null;
        return _this9;
      }
      _createClass(UsernotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadStripe();
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = "MES RESERVATIONS";
          this.getReservationData();
        }
      }, {
        key: "formatDate",
        value: function formatDate(input) {
          var datePart = input.split("-");
          var year = datePart[0],
            // get only two digits
            month = datePart[1],
            day = datePart[2];
          return day + "-" + month + "-" + year;
        }
      }, {
        key: "closemodal",
        value: function closemodal() {
          this.reservation = {
            Address: "",
            Coach_Id: "",
            Course: "",
            Date: "",
            Email: "",
            Level: "",
            Mobile: "",
            Name_of_company: "",
            Number_of_person: "",
            Postalcode: ""
          };
        }
      }, {
        key: "pay",
        value: function pay(amount, bookid, email) {
          var _this10 = this;
          //this.closeModal();
          var handler = window.StripeCheckout.configure({
            key: "pk_test_51HHX7vCieC0KYCQX8h84YusmPyLrrFlgj9EtgnWHeo35uJg1GMw7xeQeW8gpTp6IhLT3WSnscNcX9cx8SCU97XZu00vp5ZncMS",
            locale: "fr",
            token: function token(_token) {
              var userdata = {
                token: _token.id,
                email: _token.email,
                amount: amount
              };
              _this10.appService.create("/admin/payments", userdata).subscribe(function (response) {
                if (response.isSuccess == true) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Paiement réussi!', '', 'success');
                  _this10.setstatus(_token.id, amount, bookid);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Paiement échoué!', '', 'error');
                }
              });
            }
          });
          handler.open({
            name: "Oh My Tennis",
            email: email,
            description: "RESERVER UN COURS",
            amount: amount * 100,
            currency: "EUR"
          });
        }
      }, {
        key: "setstatus",
        value: function setstatus(tokenid, amount, bookid) {
          var _this11 = this;
          if (tokenid) {
            var details = {
              token: tokenid,
              amount: amount,
              booking_id: bookid,
              status: "B"
            };
            this.appService.create("/coach/setpayment", details).subscribe(function (val) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (val.isSuccess == true) {
                        this._showAlertMessage("alert-success", "Payment Successfully");
                      } else {
                        this._showAlertMessage("alert-danger", "Payment Failed");
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            });
            this.ngOnInit();
          }
        }
      }, {
        key: "filtersearch",
        value: function filtersearch() {
          var _this12 = this;
          if (!this.filter) this.filter = "";
          this.data = this.Fdata.filter(function (x) {
            return (x.firstName.toLowerCase().includes(_this12.filter.toLowerCase()) || x.lastName.toLowerCase().includes(_this12.filter.toLowerCase()) || x.bookingDate.includes(_this12.filter.toLowerCase()) || _this12.filter == "") && (x.bookingCourse == _this12.course || _this12.course == "") && (x.status == _this12.status || _this12.status == "");
          });
          this.rowDataCollection = [];
          for (var row = 0; row < this.data.length; row++) {
            var rowCollection = [];
            var date = this.data[row].bookingDate.split("T");
            rowCollection.push(row + 1);
            rowCollection.push(this.data[row].user_Name);
            rowCollection.push(this.bookingCourseNames(this.data[row].bookingCourse));
            rowCollection.push(this.formatDate(date[0]));
            rowCollection.push(this.data[row].BookingTime);
            rowCollection.push(this.data[row].bookingDate);
            rowCollection.push(this.data[row].status);
            rowCollection.push(this.data[row].booking_Id);
            rowCollection.push(this.data[row].amount);
            this.discount = this.data[row].amount;
            rowCollection.push(this.data[row].firstName);
            rowCollection.push(this.data[row].lastName);
            rowCollection.push(this.data[row].CourseName);
            rowCollection.push(this.data[row].Remarks);
            rowCollection.push(this.data[row].email);
            this.rowDataCollection.push(rowCollection);
            date = [];
          }
        }
      }, {
        key: "getReservationData",
        value: function getReservationData() {
          var _this13 = this;
          var res;
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user = JSON.parse(users);
          this.userEmail = user.email;
          var userid = {
            user_Id: user.id
          };
          this.spinner.show();
          this.appService.getAll("/user/getuserreservationdetails", userid).subscribe(function (response) {
            if (response && response["isSuccess"] == true) {
              _this13.data = response["data"].reserve;
              _this13.Fdata = response["data"].reserve;
              _this13.rowDataCollection = [];
              for (var row = 0; row < _this13.data.length; row++) {
                var rowCollection = [];
                var date = _this13.data[row].bookingDate.split("T");
                rowCollection.push(row + 1);
                rowCollection.push(_this13.data[row].user_Name);
                rowCollection.push(_this13.bookingCourseNames(_this13.data[row].bookingCourse));
                rowCollection.push(_this13.formatDate(date[0]));
                rowCollection.push(_this13.data[row].BookingTime);
                rowCollection.push(_this13.data[row].bookingDate);
                rowCollection.push(_this13.data[row].status);
                rowCollection.push(_this13.data[row].booking_Id);
                rowCollection.push(_this13.data[row].amount);
                _this13.discount = _this13.data[row].amount;
                rowCollection.push(_this13.data[row].firstName);
                rowCollection.push(_this13.data[row].lastName);
                rowCollection.push(_this13.data[row].CourseName);
                rowCollection.push(_this13.data[row].Remarks);
                rowCollection.push(_this13.data[row].email);
                rowCollection.push(_this13.data[row].slot);
                rowCollection.push(_this13.data[row].remaingSlotStatus);
                _this13.rowDataCollection.push(rowCollection);
                date = [];
              }
              _this13.spinner.hide();
            } else {
              _this13.spinner.hide();
            }
          });
        }
      }, {
        key: "bookingCourseNames",
        value: function bookingCourseNames(bookingCourse) {
          var bookingCourseNames = {
            CoursIndividuel: 'Cours particuliers',
            CoursCollectifOndemand: 'Cours collectifs à la demande',
            TeamBuilding: 'Team building',
            CoursCollectifClub: 'Cours collectifs en club'
          };
          return bookingCourseNames[bookingCourse] ? bookingCourseNames[bookingCourse] : bookingCourse;
        }
      }, {
        key: "cancelDialog",
        value: function cancelDialog(rowData) {
          var _this14 = this;
          this.course = rowData[2];
          this.amount = rowData[8];
          this.booking_date = rowData[5];
          this.book_status = rowData[6];
          this.dialogStatus = true;
          this.booking_Id = rowData[7];
          this.booking_time = rowData[4];
          this.Remarks = rowData[12];
          this.email = rowData[13];
          this.slot_view = rowData[14];
          this.user_name = rowData[9] + " " + rowData[10];
          this.remaining_status = rowData[15] == "Yes" ? "10 Heures" : "1 Heure";
          if ((this.course == "CoursIndividuel" || this.course == "CoursCollectifOndemand" || this.course == "CoursCollectifClub") && rowData[14].length > 0) {
            this.slotRowDatas = rowData[14];
          }
          if (this.course == "TeamBuilding" || this.course == "Tournoi" || this.course == "Animation") {
            var get = {
              course: rowData[2],
              booking_id: rowData[7]
            };
            this.appService.getAll("/coachdetail/getbookcourse", get).subscribe(function (val) {
              if (val.isSuccess == true) {
                _this14.reservation = val.data.booking[0];
                _this14.reservation.Date = moment__WEBPACK_IMPORTED_MODULE_7__(_this14.reservation.Date).format("DD-MM-YYYY");
              }
            });
          }
        }
      }, {
        key: "modalclose",
        value: function modalclose() {
          this.reservation = {
            Address: "",
            Coach_Id: "",
            Course: "",
            Date: "",
            Email: "",
            Level: "",
            Mobile: "",
            Name_of_company: "",
            Number_of_person: "",
            Postalcode: ""
          };
          this.booked_users = [];
        }
      }, {
        key: "cancelreq",
        value: function cancelreq() {
          var _this15 = this;
          var res;
          var coach = JSON.parse(localStorage.getItem("Coach"));
          var statusData = {
            Coach_ID: coach.Coach_ID,
            status: "UC",
            booking_id: this.booking_Id,
            booking_time: this.booking_time,
            discount: this.discount,
            amount: this.amount,
            booking_date: this.booking_date,
            course: this.course,
            email: this.email
          };
          this.spinner.show();
          this.appService.create("/user/cancelreservations", statusData).subscribe(function (response) {
            if (response && response["data"]) {
              res = response;
              _this15.spinner.hide();
              _this15._showAlertMessage("alert-success", "Réservation annulée avec succès");
              _this15.ngOnInit();
            } else {
              _this15._showAlertMessage("alert-danger", "Réservation annulée échouée");
            }
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          var _this16 = this;
          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = function () {
              _this16.handler = window.StripeCheckout.configure({
                key: 'pk_test_51HHX7vCieC0KYCQX8h84YusmPyLrrFlgj9EtgnWHeo35uJg1GMw7xeQeW8gpTp6IhLT3WSnscNcX9cx8SCU97XZu00vp5ZncMS',
                locale: 'auto',
                token: function token(_token2) {}
              });
            };
            window.document.body.appendChild(s);
          }
        }
      }]);
      return UsernotificationComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UsernotificationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };
    UsernotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usernotification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usernotification.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/usernotification/usernotification.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usernotification.component.scss */"./src/app/usernotification/usernotification.component.scss"))["default"]]
    })], UsernotificationComponent);

    /***/
  },

  /***/"./src/app/userparter/userparter.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/userparter/userparter.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserparterUserparterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYXJ0ZXIvdXNlcnBhcnRlci5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/userparter/userparter.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/userparter/userparter.component.ts ***!
    \****************************************************/
  /*! exports provided: UserparterComponent */
  /***/
  function srcAppUserparterUserparterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserparterComponent", function () {
      return UserparterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var UserparterComponent = /*#__PURE__*/function () {
      function UserparterComponent() {
        _classCallCheck(this, UserparterComponent);
      }
      _createClass(UserparterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return UserparterComponent;
    }();
    UserparterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userparter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userparter.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userparter/userparter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userparter.component.scss */"./src/app/userparter/userparter.component.scss"))["default"]]
    })], UserparterComponent);

    /***/
  },

  /***/"./src/app/userprofile/userprofile.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/userprofile/userprofile.component.scss ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserprofileUserprofileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".fields.alert_field,\n.alert_field {\n  border: 1px solid red !important;\n}\n\ninput[type][readonly] {\n  cursor: not-allowed;\n}\n\ninput[type=checkbox][readonly] {\n  cursor: not-allowed;\n  margin-top: 4px;\n  margin-right: 12px;\n  position: relative;\n}\n\ninput[type=select][readonly] {\n  pointer-events: none;\n}\n\ninput[type=option][readonly] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvRTpcXEZyZWVsYW5jZVxcdGVubmlzXFxPaE15VGVubmlzX1dlYi0wMy0wNC0yMDIzLW1hc3RlclxcT2hNeVRlbm5pc19XZWItMDMtMDQtMjAyMy1tYXN0ZXIvc3JjXFxhcHBcXHVzZXJwcm9maWxlXFx1c2VycHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksZ0NBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFFSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkcy5hbGVydF9maWVsZCxcbi5hbGVydF9maWVsZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlXVtyZWFkb25seV17XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW3JlYWRvbmx5XSB7XG4gICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwic2VsZWN0XCJdW3JlYWRvbmx5XSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJvcHRpb25cIl1bcmVhZG9ubHldIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuIiwiLmZpZWxkcy5hbGVydF9maWVsZCxcbi5hbGVydF9maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlXVtyZWFkb25seV0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XVtyZWFkb25seV0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPXNlbGVjdF1bcmVhZG9ubHldIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9b3B0aW9uXVtyZWFkb25seV0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/userprofile/userprofile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userprofile/userprofile.component.ts ***!
    \******************************************************/
  /*! exports provided: UserprofileComponent */
  /***/
  function srcAppUserprofileUserprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () {
      return UserprofileComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js");
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    var UserprofileComponent = /*#__PURE__*/function (_model_user_user_comp5) {
      _inherits(UserprofileComponent, _model_user_user_comp5);
      var _super6 = _createSuper(UserprofileComponent);
      function UserprofileComponent(activatedRoute, router, appService, location, spinner) {
        var _this17;
        _classCallCheck(this, UserprofileComponent);
        _this17 = _super6.call(this, activatedRoute, router, appService, location, spinner);
        _this17.res = {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          postalCode: "",
          ville: "",
          User_Level: "",
          cityId: "",
          address: "",
          User_Image: "../../assets/images/profile_blackwhite.png"
        };
        _this17.submit_disabled = true;
        _this17.selectedCity = null;
        _this17.team_error = false;
        _this17.propagateChange = function (result, file, type) {
          _this17.res.User_Image = result;
        };
        return _this17;
      }
      _createClass(UserprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = "MON COMPTE";
        }
      }, {
        key: "searchCity",
        value: function searchCity(e) {
          var _this18 = this;
          if (e && e.target.value) {
            this.appService.getAll("/city/" + e.target.value).subscribe(function (response) {
              if (response && response["data"]) {
                _this18.selectedCity = response.data.city_list;
                if (_this18.selectedCity.length > 0) _this18.res.cityId = _this18.selectedCity[0].Code_commune_INSEE;
              }
            }, function (error) {});
          }
        }
      }, {
        key: "citySearch",
        value: function citySearch(code) {
          var _this19 = this;
          this.appService.getAll("/city/" + code).subscribe(function (response) {
            if (response && response["data"]) {
              _this19.selectedCity = response.data.city_list;
              if (_this19.selectedCity.length > 0) _this19.res.cityId = _this19.selectedCity[0].Code_commune_INSEE;
            }
          }, function (error) {});
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this20 = this;
          var team = [];
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user = JSON.parse(users);
          var useremail = {
            User_Email: user.email
          };
          this.spinner.show();
          this.appService.create("/user/getuserbyid", useremail).subscribe(function (data) {
            console.log(data);
            localStorage.setItem("updatedData", JSON.stringify(data.data.User_list[0]));
            if (data.isSuccess == true) {
              _this20.spinner.hide();
            } else {
              _this20.spinner.hide();
            }
            var codePostal = data.data.User_list[0].postalCode;
            _this20.citySearch(codePostal);
            _this20.res = data.data.User_list[0];
            _this20.res.ville = data.data.User_list[0].cityId;
            if (_this20.res.User_Image == null) {
              _this20.res.User_Image = "../../assets/images/profile_blackwhite.png";
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(res) {
          var _this21 = this;
          jquery__WEBPACK_IMPORTED_MODULE_7__("#trans_error").hide();
          jquery__WEBPACK_IMPORTED_MODULE_7__("#cheque_error").hide();
          this.appService.create("/user/updateprofile", res).subscribe(function (response) {
            if (response && response.isSuccess == true) {
              _this21._showAlertMessage("alert-success", "Mise a jour avec succès");
            } else {
              _this21._showAlertMessage("alert-danger", "Échec de la mise à jour");
            }
          });
        }
      }, {
        key: "makeEnable",
        value: function makeEnable(tab) {
          jquery__WEBPACK_IMPORTED_MODULE_7__("#submit").prop("readonly", false);
          this.submit_disabled = false;
          jquery__WEBPACK_IMPORTED_MODULE_7__("#email").prop("disabled", true);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#Coach_Resume").prop("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#exampleFormControlSelect1").prop("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#Coach_City").prop("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#address").prop("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#NiveauSelect").prop("disabled", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__(".myfile").prop("disabled", false);
          if (tab == "0" || tab == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("readonly", false);
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("required", true);
            jquery__WEBPACK_IMPORTED_MODULE_7__("#submit").prop("disabled", false);
          } else if (tab == '1' || tab == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("readonly", false);
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("required", true);
            jquery__WEBPACK_IMPORTED_MODULE_7__("#submit1").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_7__("#submit1").prop("disabled", false);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("readonly", false);
            jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("required", true);
            jquery__WEBPACK_IMPORTED_MODULE_7__("#submit").prop("disabled", false);
          }
          var formInputItem = document.querySelectorAll(".form_devarea")[0].querySelectorAll("input");
          formInputItem.forEach(function (inputElement) {
            inputElement.removeAttribute("disabled");
          });
        }
        // makeEnable() {
        //   $(".form-group :input").prop("readonly", false);
        //   $(".form-group .select-tab").prop("disabled", false);
        //   $(".form-group :input").prop("required", true);
        //   $("#email").prop("disabled", true);
        //   $(".myfile").prop("disabled", false);
        //   $("#submit").prop("readonly", false);
        //   $(".myfile,.upload-btn-wrapper").css("cursor", "pointer");
        //   this.submit_disabled = false;
        // }
      }, {
        key: "changeListener",
        value: function changeListener($event) {
          this.readThis($event.target);
        }
      }, {
        key: "readThis",
        value: function readThis(inputValue) {
          var _this22 = this;
          var file = inputValue.files[0];
          var reader = new FileReader();
          if (file.size <= 34887 && file.type == "image/jpeg" || file.type == "image/png") {
            reader.readAsDataURL(file);
            reader.onload = function (_event) {
              _this22.propagateChange(reader.result, file, file.type);
            };
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              icon: "error",
              title: "Erreur",
              text: 'Veuillez télécharger uniquement des fichiers portant les extensions .jpeg/.jpg/.png /.jfif et dont la taille est inférieure à 33KB.',
              confirmButtonText: "OUI"
            });
            return;
          }
        }
      }, {
        key: "enableForm",
        value: function enableForm() {
          var itransport = document.querySelectorAll(".form-check-input");
          itransport.forEach(function (checkItem) {
            checkItem.removeAttribute("disabled");
          });
          var formInputItem = document.querySelectorAll(".form_devarea")[0].querySelectorAll("input");
          formInputItem.forEach(function (inputElement) {
            inputElement.removeAttribute("disabled");
          });
          jquery__WEBPACK_IMPORTED_MODULE_7__("#exampleFormControlTextarea1").prop("readonly", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__("#exampleFormControlTextarea1").prop("required", true);
          jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("readonly", false);
          jquery__WEBPACK_IMPORTED_MODULE_7__(".form-group :input").prop("required", true);
          var Enregistrer = document.querySelector("#Enregistrer");
          Enregistrer.style.display = "inline";
          var elebebtn = document.querySelector("#enableBtn");
          elebebtn.style.display = "none";
          var icancel = document.querySelector("#cancel");
          icancel.style.display = "inline";
        }
      }]);
      return UserprofileComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UserprofileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userprofile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userprofile.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userprofile.component.scss */"./src/app/userprofile/userprofile.component.scss"))["default"]]
    })], UserprofileComponent);

    /***/
  },

  /***/"./src/app/userreservation/userreservation.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/userreservation/userreservation.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserreservationUserreservationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#payer {\n  text-align: center;\n}\n\n.required {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnJlc2VydmF0aW9uL0U6XFxGcmVlbGFuY2VcXHRlbm5pc1xcT2hNeVRlbm5pc19XZWItMDMtMDQtMjAyMy1tYXN0ZXJcXE9oTXlUZW5uaXNfV2ViLTAzLTA0LTIwMjMtbWFzdGVyL3NyY1xcYXBwXFx1c2VycmVzZXJ2YXRpb25cXHVzZXJyZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcnJlc2VydmF0aW9uL3VzZXJyZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLGtCQUFBO0FDRVA7O0FEREE7RUFBVSxVQUFBO0FDS1YiLCJmaWxlIjoic3JjL2FwcC91c2VycmVzZXJ2YXRpb24vdXNlcnJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BheWVye3RleHQtYWxpZ246IGNlbnRlcjt9XG4ucmVxdWlyZWR7Y29sb3I6cmVkO30iLCIjcGF5ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";

    /***/
  },

  /***/"./src/app/userreservation/userreservation.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/userreservation/userreservation.component.ts ***!
    \**************************************************************/
  /*! exports provided: UserreservationComponent */
  /***/
  function srcAppUserreservationUserreservationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserreservationComponent", function () {
      return UserreservationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! moment */"./node_modules/moment/moment.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    var UserreservationComponent = /*#__PURE__*/function (_model_user_user_comp6) {
      _inherits(UserreservationComponent, _model_user_user_comp6);
      var _super7 = _createSuper(UserreservationComponent);
      function UserreservationComponent(activatedRoute, router, appService, location, spinner) {
        var _this23;
        _classCallCheck(this, UserreservationComponent);
        _this23 = _super7.call(this, activatedRoute, router, appService, location, spinner);
        _this23.user_name = "";
        _this23.slotRowDatas = [];
        _this23.remaining_status = "";
        _this23.slot_view = [];
        _this23.frommindate = new Date(Date.now() - 24 * 60 * 60 * 1000);
        _this23.rowDataCollection = [];
        _this23.filterDataCollection = [];
        _this23.dialogStatus = false;
        _this23.booking_Id = "";
        _this23.booking_time = "";
        _this23.bookingStarttime = "";
        _this23.bookingEndtime = "";
        _this23.booking_date = "";
        _this23.booking_end_date = "";
        _this23.data = [];
        _this23.Fdata = [];
        _this23.filter = "";
        _this23.course = "";
        _this23.status = "";
        _this23.amt = 0;
        _this23.book_status = "";
        _this23.discount = "";
        _this23.booked_users = [];
        _this23.Remarks = "";
        _this23.email = "";
        _this23.p = "";
        _this23.course_details = {
          cityname: "",
          Postalcode: "",
          address: "",
          from_date: "",
          to_date: ""
        };
        _this23.course_demand = {
          Price_2pl_1hr: "",
          Price_3pl_1hr: "",
          Price_4pl_1hr: "",
          Price_5pl_1hr: "",
          Price_6pl_1hr: ""
        };
        _this23.reservation = {
          Address: "",
          Coach_Id: "",
          Course: "",
          Date: "",
          Email: "",
          Level: "",
          Mobile: "",
          Name_of_company: "",
          Number_of_person: "",
          Postalcode: ""
        };
        _this23.handler = null;
        return _this23;
      }
      _createClass(UserreservationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadStripe();
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = "MES RESERVATIONS";
          this.getReservationData();
        }
      }, {
        key: "formatDate",
        value: function formatDate(input) {
          var datePart = input.split("-");
          var year = datePart[0],
            // get only two digits
            month = datePart[1],
            day = datePart[2];
          return day + "-" + month + "-" + year;
        }
      }, {
        key: "closemodal",
        value: function closemodal() {
          this.reservation = {
            Address: "",
            Coach_Id: "",
            Course: "",
            Date: "",
            Email: "",
            Level: "",
            Mobile: "",
            Name_of_company: "",
            Number_of_person: "",
            Postalcode: ""
          };
        }
      }, {
        key: "pay",
        value: function pay(amount, bookid, email) {
          var _this24 = this;
          //this.closeModal();
          var handler = window.StripeCheckout.configure({
            key: "pk_test_51HHX7vCieC0KYCQX8h84YusmPyLrrFlgj9EtgnWHeo35uJg1GMw7xeQeW8gpTp6IhLT3WSnscNcX9cx8SCU97XZu00vp5ZncMS",
            locale: "fr",
            token: function token(_token3) {
              var userdata = {
                token: _token3.id,
                email: _token3.email,
                amount: amount
              };
              _this24.appService.create("/admin/payments", userdata).subscribe(function (response) {
                if (response.isSuccess == true) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Paiement réussi!', '', 'success');
                  _this24.setstatus(_token3.id, amount, bookid);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Paiement échoué!', '', 'error');
                }
              });
            }
          });
          handler.open({
            name: "Oh My Tennis",
            email: email,
            description: "",
            amount: amount * 100,
            currency: "EUR"
          });
        }
      }, {
        key: "setstatus",
        value: function setstatus(tokenid, amount, bookid) {
          var _this25 = this;
          if (tokenid) {
            var details = {
              token: tokenid,
              amount: amount,
              booking_id: bookid,
              status: "B"
            };
            this.appService.create("/coach/setpayment", details).subscribe(function (val) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this25, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (val.isSuccess == true) {
                        this._showAlertMessage("alert-success", "Payment Successfully");
                      } else {
                        this._showAlertMessage("alert-danger", "Payment Failed");
                      }
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
            this.ngOnInit();
          }
        }
      }, {
        key: "filtersearch",
        value: function filtersearch() {
          var _this26 = this;
          if (!this.filter) this.filter = "";
          this.data = this.Fdata.filter(function (x) {
            return (x.firstName.toLowerCase().includes(_this26.filter.toLowerCase()) || x.lastName.toLowerCase().includes(_this26.filter.toLowerCase()) || x.bookdatefillter.includes(_this26.filter.toString()) || _this26.filter == "") && (x.bookingCourse == _this26.course || _this26.course == "") && (x.status == _this26.status || _this26.status == "");
          });
          this.rowDataCollection = [];
          for (var row = 0; row < this.data.length; row++) {
            var rowCollection = [];
            var date = this.data[row].bookingDate.split("T");
            var coursName = '';
            if (this.data[row].bookingCourse == 'CoursIndividuel') {
              coursName = 'Cours particulier';
            } else if (this.data[row].bookingCourse == 'CoursCollectifOndemand') {
              coursName = 'Cours Collectif Ondemand';
            } else if (this.data[row].bookingCourse == 'CoursCollectifClub') {
              coursName = 'Cours Collectif Club';
            } else if (this.data[row].bookingCourse == 'Tournoi') {
              coursName = 'Tournois';
            } else if (this.data[row].bookingCourse == 'TeamBuilding') {
              coursName = 'Team building';
            } else {
              coursName = this.data[row].bookingCourse;
            }
            rowCollection.push(row + 1);
            rowCollection.push(this.data[row].user_Name);
            rowCollection.push(coursName);
            // rowCollection.push(this.data[row].bookingCourse);
            rowCollection.push(this.data[row].bookdatefillter);
            rowCollection.push(this.data[row].BookingTime);
            rowCollection.push(this.data[row].bookingDate);
            rowCollection.push(this.data[row].status);
            rowCollection.push(this.data[row].booking_Id);
            rowCollection.push(this.data[row].amount);
            this.discount = this.data[row].amount;
            rowCollection.push(this.data[row].firstName);
            rowCollection.push(this.data[row].lastName);
            rowCollection.push(this.data[row].CourseName);
            rowCollection.push(this.data[row].Remarks);
            rowCollection.push(this.data[row].email);
            rowCollection.push(this.data[row].bookingEnd);
            this.rowDataCollection.push(rowCollection);
            date = [];
          }
        }
      }, {
        key: "getReservationData",
        value: function getReservationData() {
          var _this27 = this;
          var res;
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user = JSON.parse(users);
          this.userEmail = user.email;
          var userid = {
            user_Id: user.id
          };
          this.spinner.show();
          this.appService.getAll("/user/getuserreservationdetails", userid).subscribe(function (response) {
            if (response && response["isSuccess"] == true) {
              _this27.data = response["data"].reserve;
              _this27.Fdata = response["data"].reserve;
              // debugger;
              _this27.rowDataCollection = [];
              for (var row = 0; row < _this27.data.length; row++) {
                var rowCollection = [];
                var date = _this27.data[row].bookingDate.split("T");
                var coursName = '';
                if (_this27.data[row].bookingCourse == 'CoursCollectifOndemand') {
                  _this27.course = 'CoursCollectifOndemand';
                  coursName = 'Cours collectifs à la demande';
                  _this27.nameofleassson = 'Cours collectifs à la demande';
                } else if (_this27.data[row].bookingCourse == 'CoursIndividuel') {
                  _this27.course = 'CoursIndividuel';
                  coursName = 'Cours Particuliers';
                  _this27.nameofleassson = 'Cours Particuliers';
                } else if (_this27.data[row].bookingCourse == 'CoursCollectifClub') {
                  _this27.course = 'CoursCollectifClub';
                  coursName = 'Cours collectifs en club';
                  _this27.nameofleassson = 'Cours collectifs en club';
                } else if (_this27.data[row].bookingCourse == 'Tournoi') {
                  _this27.course = 'Tournoi';
                  coursName = 'Tournois';
                  _this27.nameofleassson = 'Tournois';
                } else if (_this27.data[row].bookingCourse == 'TeamBuilding') {
                  _this27.course = 'TeamBuilding';
                  coursName = 'Team building';
                  _this27.nameofleassson = 'Team building';
                } else {
                  _this27.course = _this27.data[row].bookingCourse;
                  coursName = _this27.data[row].bookingCourse;
                  _this27.nameofleassson = _this27.data[row].bookingCourse;
                }
                rowCollection.push(row + 1);
                rowCollection.push(_this27.data[row].user_Name);
                // rowCollection.push(this.data[row].bookingCourse);
                rowCollection.push(coursName);
                // rowCollection.push(this.formatDate(date[0]));
                rowCollection.push(_this27.data[row].bookdatefillter);
                rowCollection.push(_this27.data[row].BookingTime);
                rowCollection.push(_this27.data[row].bookingDate);
                // rowCollection.push(this.data[row].bookdatefillter);
                rowCollection.push(_this27.data[row].status);
                rowCollection.push(_this27.data[row].booking_Id);
                rowCollection.push(_this27.data[row].amount);
                _this27.discount = _this27.data[row].amount;
                rowCollection.push(_this27.data[row].firstName);
                rowCollection.push(_this27.data[row].lastName);
                rowCollection.push(_this27.data[row].CourseName);
                rowCollection.push(_this27.data[row].Remarks);
                rowCollection.push(_this27.data[row].email);
                rowCollection.push(_this27.data[row].slot);
                rowCollection.push(_this27.data[row].remaingSlotStatus);
                rowCollection.push(_this27.data[row].bookingEnd);
                rowCollection.push(_this27.data[row].bookingCourseID); //
                _this27.rowDataCollection.push(rowCollection);
                date = [];
              }
              _this27.spinner.hide();
            } else {
              _this27.spinner.hide();
            }
          });
        }
      }, {
        key: "cancelDialog",
        value: function cancelDialog(rowData) {
          var _this28 = this;
          // debugger;
          if (rowData[2] == 'CoursCollectifOndemand') {
            this.course = 'CoursCollectifOndemand';
            this.nameofleassson = 'Cours collectifs à la demande';
          } else if (rowData[2] == 'CoursIndividuel') {
            this.course = 'CoursIndividuel';
            this.nameofleassson = 'Cours Particuliers';
          } else if (rowData[2] == 'CoursCollectifClub') {
            this.course = 'CoursCollectifClub';
            this.nameofleassson = 'Cours collectifs en club';
          } else if (rowData[2] == 'Tournoi') {
            this.course = 'Tournoi';
            this.nameofleassson = 'Tournois';
          } else if (rowData[2] == 'TeamBuilding') {
            this.course = 'TeamBuilding';
            this.nameofleassson = 'Team building';
          } else {
            this.course = rowData[2];
            this.nameofleassson = rowData[2];
          }
          this.amount = rowData[8];
          this.booking_date = rowData[5];
          this.book_status = rowData[6];
          this.dialogStatus = true;
          this.booking_Id = rowData[7];
          this.booking_time = rowData[4];
          //debugger;
          this.bookingStarttime = rowData[4] != '' && rowData[4] != null ? rowData[4].split('-')[0] : "";
          this.bookingEndtime = rowData[4] != '' && rowData[4] != null ? rowData[4].split('-')[1] : "";
          this.Remarks = rowData[12];
          this.email = rowData[13];
          this.slot_view = rowData[14];
          this.user_name = rowData[9] + " " + rowData[10];
          this.booking_end_date = rowData[16];
          //Get Course Details
          var bookingdetails = {
            courseId: rowData[17],
            coursName: this.course
          };
          this.spinner.show();
          this.appService.create("/coach/getparticularcoursedetails", bookingdetails).subscribe(function (response) {
            _this28.spinner.hide();
            if (response.data.course.length > 0) {
              _this28.course_details = response.data.course[0];
            }
          });
          this.remaining_status = rowData[15] == "Yes" ? "10 Heures" : "1 Heure";
          if ((this.course == "CoursIndividuel" || this.course == "CoursCollectifOndemand" || this.course == "CoursCollectifClub") && rowData[14].length > 0) {
            this.slotRowDatas = rowData[14];
          }
          if (this.course == "TeamBuilding" || this.course == "Tournoi" || this.course == "Animation") {
            var get = {
              course: rowData[2],
              booking_id: rowData[7]
            };
            this.appService.getAll("/coachdetail/getbookcourse", get).subscribe(function (val) {
              if (val.isSuccess == true) {
                _this28.reservation = val.data.booking[0];
                _this28.reservation.Date = moment__WEBPACK_IMPORTED_MODULE_7__(_this28.reservation.Date).format("DD-MM-YYYY");
              }
            });
          }
        }
      }, {
        key: "modalclose",
        value: function modalclose() {
          this.reservation = {
            Address: "",
            Coach_Id: "",
            Course: "",
            Date: "",
            Email: "",
            Level: "",
            Mobile: "",
            Name_of_company: "",
            Number_of_person: "",
            Postalcode: ""
          };
          this.booked_users = [];
        }
      }, {
        key: "cancelreq",
        value: function cancelreq() {
          var _this29 = this;
          var res;
          var coach = JSON.parse(localStorage.getItem("Coach"));
          var statusData = {
            Coach_ID: coach.Coach_ID,
            status: "UC",
            booking_id: this.booking_Id,
            booking_time: this.booking_time,
            discount: this.discount,
            amount: this.amount,
            booking_date: this.booking_date,
            course: this.course,
            email: this.email
          };
          this.spinner.show();
          this.appService.create("/user/cancelreservations", statusData).subscribe(function (response) {
            if (response && response["data"]) {
              res = response;
              _this29.spinner.hide();
              _this29._showAlertMessage("alert-success", "Réservation annulée avec succès");
              _this29.ngOnInit();
            } else {
              _this29._showAlertMessage("alert-danger", "Réservation annulée échouée");
            }
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          var _this30 = this;
          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = function () {
              _this30.handler = window.StripeCheckout.configure({
                key: 'pk_test_51HHX7vCieC0KYCQX8h84YusmPyLrrFlgj9EtgnWHeo35uJg1GMw7xeQeW8gpTp6IhLT3WSnscNcX9cx8SCU97XZu00vp5ZncMS',
                locale: 'auto',
                token: function token(_token4) {
                  // You can access the token ID with `token.id`.
                  // Get the token ID to your server-side code for use.
                  //console.log('tt token '+ token)
                  //alert('Payment Success!!');
                }
              });
            };
            window.document.body.appendChild(s);
          }
        }
      }]);
      return UserreservationComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UserreservationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };
    UserreservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userreservation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userreservation.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userreservation/userreservation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userreservation.component.scss */"./src/app/userreservation/userreservation.component.scss"))["default"]]
    })], UserreservationComponent);

    /***/
  },

  /***/"./src/app/userreview/userreview.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/userreview/userreview.component.scss ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUserreviewUserreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyZXZpZXcvdXNlcnJldmlldy5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/userreview/userreview.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/userreview/userreview.component.ts ***!
    \****************************************************/
  /*! exports provided: UserreviewComponent */
  /***/
  function srcAppUserreviewUserreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserreviewComponent", function () {
      return UserreviewComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! moment */"./node_modules/moment/moment.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    var UserreviewComponent = /*#__PURE__*/function (_model_user_user_comp7) {
      _inherits(UserreviewComponent, _model_user_user_comp7);
      var _super8 = _createSuper(UserreviewComponent);
      function UserreviewComponent(activatedRoute, router, appService, location, spinner) {
        var _this31;
        _classCallCheck(this, UserreviewComponent);
        _this31 = _super8.call(this, activatedRoute, router, appService, location, spinner);
        _this31.cutomerReviewCollection = [];
        _this31.p = "";
        return _this31;
      }
      _createClass(UserreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spinner.show();
          this.getReviewDetails();
          var titile = document.getElementsByClassName("brand");
          if (titile) titile[0].innerHTML = 'COMMENTAIRES';
        }
      }, {
        key: "getReviewDetails",
        value: function getReviewDetails() {
          var _this32 = this;
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user1 = JSON.parse(users);
          var userid = {
            User_Id: user1.id
          };
          this.appService.getAll("/user/getallreviewsbyuser", userid).subscribe(function (response) {
            if (response && response["data"]) {
              for (var i = 0; i < response["data"].length; i++) {
                _this32.cutomerReviewCollection.push({
                  commentsid: response["data"][i].commentsId,
                  comments: response["data"][i].comments,
                  first_name: response["data"][i].firstName,
                  last_name: response["data"][i].lastName,
                  course: response["data"][i].course,
                  review_date: moment__WEBPACK_IMPORTED_MODULE_7__(response["data"][i].created_at).format("YYYY-MM-DD")
                });
              }
            }
            _this32.spinner.hide();
          });
        }
      }, {
        key: "commentairesClick",
        value: function commentairesClick(id) {
          this.comments_id = id;
        }
      }, {
        key: "deleteCourse",
        value: function deleteCourse(comeentsid) {
          var _this33 = this;
          var users = JSON.parse(localStorage.getItem("onmytennis"));
          var user1 = JSON.parse(users);
          var comments = {
            UserId: user1.id,
            Id: comeentsid
          };
          this.appService.create("/course/deletecommentairesbyuser", comments).subscribe(function (response) {
            _this33.spinner.hide();
            if (response && response.isSuccess == true) {
              _this33._showAlertMessage("alert-success", "Supprimé avec succès");
              window.scrollTo(0, 0);
            } else {
              _this33.spinner.hide();
              _this33._showAlertMessage("alert-danger", "Échec de la mise à jour");
            }
          });
        }
      }]);
      return UserreviewComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UserreviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }];
    };
    UserreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userreview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./userreview.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/userreview/userreview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./userreview.component.scss */"./src/app/userreview/userreview.component.scss"))["default"]]
    })], UserreviewComponent);

    /***/
  },

  /***/"./src/app/usersignout/usersignout.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/usersignout/usersignout.component.scss ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUsersignoutUsersignoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzaWdub3V0L3VzZXJzaWdub3V0LmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./src/app/usersignout/usersignout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/usersignout/usersignout.component.ts ***!
    \******************************************************/
  /*! exports provided: UsersignoutComponent */
  /***/
  function srcAppUsersignoutUsersignoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsersignoutComponent", function () {
      return UsersignoutComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var UsersignoutComponent = /*#__PURE__*/function () {
      function UsersignoutComponent() {
        _classCallCheck(this, UsersignoutComponent);
      }
      _createClass(UsersignoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return UsersignoutComponent;
    }();
    UsersignoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usersignout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usersignout.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/usersignout/usersignout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usersignout.component.scss */"./src/app/usersignout/usersignout.component.scss"))["default"]]
    })], UsersignoutComponent);

    /***/
  },

  /***/"./src/app/usersparring/usersparring.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/usersparring/usersparring.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUsersparringUsersparringComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzcGFycmluZy91c2Vyc3BhcnJpbmcuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/usersparring/usersparring.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/usersparring/usersparring.component.ts ***!
    \********************************************************/
  /*! exports provided: UsersparringComponent */
  /***/
  function srcAppUsersparringUsersparringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsersparringComponent", function () {
      return UsersparringComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var UsersparringComponent = /*#__PURE__*/function () {
      function UsersparringComponent() {
        _classCallCheck(this, UsersparringComponent);
      }
      _createClass(UsersparringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return UsersparringComponent;
    }();
    UsersparringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usersparring',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usersparring.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/usersparring/usersparring.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usersparring.component.scss */"./src/app/usersparring/usersparring.component.scss"))["default"]]
    })], UsersparringComponent);

    /***/
  },

  /***/"./src/app/usertopnavbar/usertopnavbar.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/usertopnavbar/usertopnavbar.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUsertopnavbarUsertopnavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJ0b3BuYXZiYXIvdXNlcnRvcG5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/usertopnavbar/usertopnavbar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/usertopnavbar/usertopnavbar.component.ts ***!
    \**********************************************************/
  /*! exports provided: UsertopnavbarComponent */
  /***/
  function srcAppUsertopnavbarUsertopnavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsertopnavbarComponent", function () {
      return UsertopnavbarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _model_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../model/user/user.component */"./src/app/model/user/user.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/shared/app.service */"./src/app/shared/app.service.ts");
    /* harmony import */
    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-spinner */"./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    var UsertopnavbarComponent = /*#__PURE__*/function (_model_user_user_comp8) {
      _inherits(UsertopnavbarComponent, _model_user_user_comp8);
      var _super9 = _createSuper(UsertopnavbarComponent);
      function UsertopnavbarComponent(activatedRoute, router, appService, location, spinner) {
        _classCallCheck(this, UsertopnavbarComponent);
        return _super9.call(this, activatedRoute, router, appService, location, spinner);
      }
      _createClass(UsertopnavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "_logout",
        value: function _logout() {
          this._setSession('removeItem');
          this._gotoPath('/');
        }
        /* [ Local Storage - SET, GET, DELETE ] */
      }, {
        key: "_setSession",
        value: function _setSession(method) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var resp;
          var getItem;
          if (method === 'setItem') {
            localStorage.setItem(this._const('SESSION_NAME'), JSON.stringify(value));
            getItem = localStorage.getItem(this._const('SESSION_NAME'));
            resp = getItem ? true : false;
          } else if (method === 'getItem') {
            resp = JSON.parse(localStorage.getItem(this._const('SESSION_NAME')));
          } else if (method === 'removeItem') {
            localStorage.removeItem(this._const('SESSION_NAME'));
            getItem = localStorage.getItem(this._const('SESSION_NAME'));
            resp = getItem ? false : true;
          }
          return resp;
        }
      }, {
        key: "_getSession",
        value: function _getSession() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var data = JSON.parse(this._setSession('getItem'));
          if (val) {
            return data[val];
          }
          return data;
        }
      }]);
      return UsertopnavbarComponent;
    }(_model_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]);
    UsertopnavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_shared_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };
    UsertopnavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usertopnavbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usertopnavbar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/usertopnavbar/usertopnavbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usertopnavbar.component.scss */"./src/app/usertopnavbar/usertopnavbar.component.scss"))["default"]]
    })], UsertopnavbarComponent);

    /***/
  }
}]);
//# sourceMappingURL=model-user-user-module-es5.js.map