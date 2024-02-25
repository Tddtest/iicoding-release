var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/task/npm-pub/index.ts
var npm_pub_exports = {};
__export(npm_pub_exports, {
  npmPub: () => npmPub
});
module.exports = __toCommonJS(npm_pub_exports);
var import_utils = require("@iicoding/utils");
var import_global_register = require("../global-register");
var npmPub = async (next, params) => {
  import_utils.logger.start({ text: "正在进行发布操作" });
  try {
    (0, import_global_register.registerSigint)();
    await (0, import_utils.runAsync)("npm publish --access public");
    import_utils.logger.succeed("发布成功!");
    next(params);
  } catch (error) {
    import_utils.logger.fail({ text: "发布失败即将进入回退操作" });
    global.rollbackPackage(error.message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  npmPub
});
