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

// src/task/update-version/index.ts
var update_version_exports = {};
__export(update_version_exports, {
  _updateVersion: () => _updateVersion,
  updateVersion: () => updateVersion
});
module.exports = __toCommonJS(update_version_exports);
var import_utils = require("@iicoding/utils");
var import_get_version = require("../get-version");
var _updateVersion = async (content) => {
  return (0, import_utils.updateFile)((0, import_utils.getProjectPath)("package.json"), JSON.stringify(content, null, 2));
};
var updateVersion = async (next, params) => {
  if (params == null) {
    throw new Error("请重新执行release并选择版本号");
  }
  if (!(0, import_utils.isObject)(params)) {
    throw new Error("请检查上一部执行是否出错，如多次重试无法成功请联系npm包作者");
  }
  if (!params.version) {
    throw new Error("未接收到您选择的版本，请重试!");
  }
  import_utils.logger.start({ text: "正在修改版本号....\r\n", chalkColor: "yellow" });
  const pkg = (0, import_get_version.getOriginPackage)();
  const newPkg = { ...pkg, version: params.version };
  try {
    await _updateVersion(newPkg);
    import_utils.logger.succeed({ text: `修改版本号成功, 新版本号为：${params.version}`, chalkColor: "green" });
  } catch (error) {
    import_utils.logger.fail(`修改版本号出错 ${error.message}`);
  }
  next({ version: params.version });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _updateVersion,
  updateVersion
});
