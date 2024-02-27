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

// src/task/global-register/index.ts
var global_register_exports = {};
__export(global_register_exports, {
  globalRegister: () => globalRegister,
  registerSigint: () => registerSigint
});
module.exports = __toCommonJS(global_register_exports);
var readline = __toESM(require("readline"));
var process = __toESM(require("process"));
var import_utils_node = require("@iicoding/utils-node");
var import_get_version = require("../get-version");
var import_update_version = require("../update-version");
var globalRegister = (next, params) => {
  const pkg = (0, import_get_version.getOriginPackage)();
  const originPackage = JSON.parse(JSON.stringify(pkg));
  global.originPackage = originPackage;
  global.rollbackPackage = async (flowErr = "", callback) => {
    import_utils_node.logger.fail({ text: flowErr || "release 流程出错正在回退版本", chalkColor: "red" });
    try {
      const currentPkg = (0, import_get_version.getOriginPackage)();
      const currentPackage = JSON.parse(JSON.stringify(currentPkg));
      if (!global.pubSuccess && currentPackage.version !== originPackage.version) {
        await (0, import_update_version._updateVersion)(originPackage);
        import_utils_node.logger.succeed({ text: "版本回退成功，您可以尝试重新release", chalkColor: "green" });
      }
    } catch (rollbackErr) {
      import_utils_node.logger.fail(`回退版本号出错请手动回退，原版本号为：${originPackage.version}, 错误信息如下：${rollbackErr}`);
    }
    callback == null ? void 0 : callback();
  };
  next(params);
};
var registerSigint = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  async function handleInterrupt() {
    import_utils_node.logger.stop();
    global.rollbackPackage("已手动中断程序，若版本已修改，将自动回退版本", () => {
      import_utils_node.logger.stop();
      rl.close();
      setTimeout(() => {
        process.exit();
      }, 500);
    });
  }
  rl.on("SIGINT", handleInterrupt);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  globalRegister,
  registerSigint
});
