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

// src/task/stylelint/index.ts
var stylelint_exports = {};
__export(stylelint_exports, {
  stylelint: () => stylelint
});
module.exports = __toCommonJS(stylelint_exports);
var import_utils_node = require("@iicoding/utils-node");
var stylelint = (lintFilePath = "./src", configFilePath = "./.stylelint.js") => {
  return async (next, ...params) => {
    try {
      const lintDir = (0, import_utils_node.getProjectPath)(lintFilePath);
      const configFile = (0, import_utils_node.getProjectPath)(configFilePath);
      await (0, import_utils_node.runAsync)(
        `stylelint '${lintDir}**/*.less' '${lintDir}/**/*.css' '${lintDir}/**/*.scss' --fix --cache --config ${configFile}`
      );
      import_utils_node.logger.succeed("stylelint 校验通过");
      next(...params);
    } catch (err) {
      import_utils_node.logger.fail("stylelint 校验未通过, 请检查样式代码：");
      console.log(err);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stylelint
});
