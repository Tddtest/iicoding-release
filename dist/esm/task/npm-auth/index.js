function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import inquirer from 'inquirer';
import { logger, runAsync, runShellExec } from '@iicoding/utils-node';
import { registerSigint } from "../global-register";
var pubFailed = function pubFailed(message) {
  logger.fail({
    text: '发布失败即将进入回退操作'
  });
  global.rollbackPackage(message);
};
var isSelectPubByCurrentUser = function isSelectPubByCurrentUser(name) {
  return inquirer.prompt([{
    type: 'list',
    name: name,
    message: '是否使用当前账号进行发布操作',
    choices: [{
      key: 'y',
      name: '是，立即发布',
      value: 'y'
    }, {
      key: 'n',
      name: '否，切换账号',
      value: 'n'
    }]
  }]);
};
var isLoginNpm = function isLoginNpm(name) {
  return inquirer.prompt([{
    type: 'list',
    name: name,
    message: '请选择是否立即登录',
    choices: [{
      key: 'y',
      name: '是，立即自动执行登录命令，根据提示进入页面进行登录验证',
      value: 'y'
    }, {
      key: 'n',
      name: '否，我要自己执行 npm login 进行登录操作',
      value: 'n'
    }]
  }]);
};
var logoutNpm = function logoutNpm() {
  return new Promise(function (resolve) {
    runAsync('npm logout').then(function () {
      logger.succeed({
        text: '退出成功\r\n'
      });
      resolve(true);
    }).catch(function (err) {
      resolve(false);
      logger.fail({
        text: "\u9000\u51FA npm \u8D26\u6237\u51FA\u9519\uFF0C\u8BF7\u624B\u52A8\u91CD\u8BD5, ".concat(err.message)
      });
      global.rollbackPackage('发布失败， 正在回退版本, 请稍后');
    });
  });
};
var loginNpm = function loginNpm(next, params) {
  registerSigint();
  var result = runShellExec('npm login');
  var isRunning = true;
  logger.start({
    text: '正在请求 npm 登录，如果因为网络原因长时间无结果反馈,请手动退出，重新登录\r\n',
    spinner: 'simpleDots'
  });
  result.stdout.on('data', function (r) {
    isRunning = false;
    if (r.includes('https://www.npmjs.org/login?') || r.includes('https://www.npmjs.com/login?')) {
      logger.stop();
      logger.start({
        text: ' '
      });
      logger.succeed({
        text: '请点击下面链接进入网页登录， 认证成功之后会自动进入下一步流程\r\n'
      });
      console.log(r);
    } else {
      logger.succeed("npm \u767B\u5F55\u6210\u529F ".concat(r, " \u5373\u5C06\u8FDB\u5165\u53D1\u5E03\u73AF\u8282\u3002"));
      next(params);
    }
  });
  result.stdout.on('error', function () {
    isRunning = false;
    logger.fail({
      text: '发布失败即将进入回退操作'
    });
    global.rollbackPackage('自动登录出错，正在回退版本，请稍后重试');
  });
  result.stdout.on('close', function () {
    if (isRunning) {
      logger.fail({
        text: '发布失败即将进入回退操作'
      });
      global.rollbackPackage('自动登录出错，正在回退版本，请稍后重试');
      logger.stop();
    }
  });
};
var handleNotLoggedIn = function handleNotLoggedIn(error, next, params) {
  if (error.message.includes('npm ERR! need auth This command requires you to be logged in.')) {
    logger.fail({
      text: 'npm 未登录， 请选择是否登录'
    });
    isLoginNpm('isLogin').then(function (_ref) {
      var isLogin = _ref.isLogin;
      isLogin === 'y' ? loginNpm(next, params) : pubFailed('npm 未登录，用户选择手动登录，正在回退版本, 请稍后');
    });
  } else {
    pubFailed('npm 未登录，正在回退版本, 请稍后');
  }
};
var handleToggleNpmUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(next, params) {
    var logoutStatus;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          logger.start({
            text: '正在退出当前npm账号'
          });
          // 退出当前账号
          _context.next = 3;
          return logoutNpm();
        case 3:
          logoutStatus = _context.sent;
          // 登陆新的账号
          if (logoutStatus) {
            loginNpm(next, params);
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleToggleNpmUser(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
export var npmAuth = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(next, params) {
    var res, _yield$isSelectPubByC, value, isPub;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          registerSigint();
          // （仅通过 npm who 命令查看本机是否登录）
          logger.start({
            text: '正在验证是否登录 npm'
          });
          _context2.prev = 2;
          _context2.next = 5;
          return runAsync('npm who');
        case 5:
          res = _context2.sent;
          logger.succeed("\u5F53\u524Dnpm\u767B\u5F55\u8D26\u53F7\u4E3A\uFF1A".concat(res.stdout, "\r\n"));
          _context2.next = 9;
          return isSelectPubByCurrentUser('value');
        case 9:
          _yield$isSelectPubByC = _context2.sent;
          value = _yield$isSelectPubByC.value;
          isPub = value === 'y';
          isPub ? next(params) : handleToggleNpmUser(next, params).then();
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](2);
          handleNotLoggedIn(_context2.t0, next, params);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 15]]);
  }));
  return function npmAuth(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();