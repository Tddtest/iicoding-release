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

// src/task/build-project/index.ts
var build_project_exports = {};
__export(build_project_exports, {
  build: () => build
});
module.exports = __toCommonJS(build_project_exports);
var import_utils_node = require("@iicoding/utils-node");
var build = async (next, ...params) => {
  import_utils_node.logger.start({ text: "开始构建项目", chalkColor: "magenta" });
  try {
    await (0, import_utils_node.runAsync)("npm run build");
    import_utils_node.logger.succeed("项目构建成功");
    next(...params);
  } catch (error) {
    import_utils_node.logger.fail(`项目构建失败${error}`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build
});
