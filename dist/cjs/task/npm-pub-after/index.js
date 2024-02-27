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

// src/task/npm-pub-after/index.ts
var npm_pub_after_exports = {};
__export(npm_pub_after_exports, {
  npmPubAfter: () => npmPubAfter
});
module.exports = __toCommonJS(npm_pub_after_exports);
var import_utils_node = require("@iicoding/utils-node");
var import_update_version = require("../update-version");
var npmPubAfter = async (next, params) => {
  try {
    if (global.updatedPackage) {
      await (0, import_update_version._updateVersion)(global.updatedPackage);
    }
  } catch (err) {
    import_utils_node.logger.fail("发布之后的操作失败，请检查后手动恢复文件");
    global.rollbackPackage(err.message);
    return;
  }
  next(params);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  npmPubAfter
});
