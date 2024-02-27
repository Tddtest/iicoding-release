var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/task/npm-auth/index.ts
var npm_auth_exports = {};
__export(npm_auth_exports, {
  npmAuth: () => npmAuth
});
module.exports = __toCommonJS(npm_auth_exports);
var import_inquirer = __toESM(require("inquirer"));
var import_utils_node = require("@iicoding/utils-node");
var import_global_register = require("../global-register");
var pubFailed = (message) => {
  import_utils_node.logger.fail({ text: "发布失败即将进入回退操作" });
  global.rollbackPackage(message);
};
var isSelectPubByCurrentUser = (name) => {
  return import_inquirer.default.prompt([
    {
      type: "list",
      name,
      message: "是否使用当前账号进行发布操作",
      choices: [
        {
          key: "y",
          name: "是，立即发布",
          value: "y"
        },
        {
          key: "n",
          name: "否，切换账号",
          value: "n"
        }
      ]
    }
  ]);
};
var isLoginNpm = (name) => {
  return import_inquirer.default.prompt([
    {
      type: "list",
      name,
      message: "请选择是否立即登录",
      choices: [
        {
          key: "y",
          name: "是，立即自动执行登录命令，根据提示进入页面进行登录验证",
          value: "y"
        },
        {
          key: "n",
          name: "否，我要自己执行 npm login 进行登录操作",
          value: "n"
        }
      ]
    }
  ]);
};
var logoutNpm = () => {
  return new Promise((resolve) => {
    (0, import_utils_node.runAsync)("npm logout").then(() => {
      import_utils_node.logger.succeed({ text: "退出成功\r\n" });
      resolve(true);
    }).catch((err) => {
      resolve(false);
      import_utils_node.logger.fail({ text: `退出 npm 账户出错，请手动重试, ${err.message}` });
      global.rollbackPackage("发布失败， 正在回退版本, 请稍后");
    });
  });
};
var loginNpm = (next, params) => {
  (0, import_global_register.registerSigint)();
  const result = (0, import_utils_node.runShellExec)("npm login");
  let isRunning = true;
  import_utils_node.logger.start({ text: "正在请求 npm 登录，如果因为网络原因长时间无结果反馈,请手动退出，重新登录\r\n", spinner: "simpleDots" });
  result.stdout.on("data", (r) => {
    isRunning = false;
    if (r.includes("https://www.npmjs.org/login?") || r.includes("https://www.npmjs.com/login?")) {
      import_utils_node.logger.stop();
      import_utils_node.logger.start({ text: " " });
      import_utils_node.logger.succeed({ text: "请点击下面链接进入网页登录， 认证成功之后会自动进入下一步流程\r\n" });
      console.log(r);
    } else {
      import_utils_node.logger.succeed(`npm 登录成功 ${r} 即将进入发布环节。`);
      next(params);
    }
  });
  result.stdout.on("error", () => {
    isRunning = false;
    import_utils_node.logger.fail({ text: "发布失败即将进入回退操作" });
    global.rollbackPackage("自动登录出错，正在回退版本，请稍后重试");
  });
  result.stdout.on("close", () => {
    if (isRunning) {
      import_utils_node.logger.fail({ text: "发布失败即将进入回退操作" });
      global.rollbackPackage("自动登录出错，正在回退版本，请稍后重试");
      import_utils_node.logger.stop();
    }
  });
};
var handleNotLoggedIn = (error, next, params) => {
  if (error.message.includes("npm ERR! need auth This command requires you to be logged in.")) {
    import_utils_node.logger.fail({ text: "npm 未登录， 请选择是否登录" });
    isLoginNpm("isLogin").then(({ isLogin }) => {
      isLogin === "y" ? loginNpm(next, params) : pubFailed("npm 未登录，用户选择手动登录，正在回退版本, 请稍后");
    });
  } else {
    pubFailed("npm 未登录，正在回退版本, 请稍后");
  }
};
var handleToggleNpmUser = async (next, params) => {
  import_utils_node.logger.start({ text: "正在退出当前npm账号" });
  const logoutStatus = await logoutNpm();
  if (logoutStatus) {
    loginNpm(next, params);
  }
};
var npmAuth = async (next, params) => {
  (0, import_global_register.registerSigint)();
  import_utils_node.logger.start({ text: "正在验证是否登录 npm" });
  try {
    const res = await (0, import_utils_node.runAsync)("npm who");
    import_utils_node.logger.succeed(`当前npm登录账号为：${res.stdout}\r
`);
    const { value } = await isSelectPubByCurrentUser("value");
    const isPub = value === "y";
    isPub ? next(params) : handleToggleNpmUser(next, params).then();
  } catch (error) {
    handleNotLoggedIn(error, next, params);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  npmAuth
});
