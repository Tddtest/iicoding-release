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

// src/task/eslint/index.ts
var eslint_exports = {};
__export(eslint_exports, {
  eslint: () => eslint
});
module.exports = __toCommonJS(eslint_exports);
var import_utils = require("@iicoding/utils");
var eslint = (lintFilePath = "./src", configFilePath = "./.eslintrc.js") => {
  return async (next, ...params) => {
    try {
      const lintDir = (0, import_utils.getProjectPath)(lintFilePath);
      const configFile = (0, import_utils.getProjectPath)(configFilePath);
      await (0, import_utils.runAsync)(`eslint ${lintDir} --ext .ts,.tsx,.js,.jsx --fix --cache --config ${configFile}`);
      import_utils.logger.succeed("eslint 校验通过");
      next(...params);
    } catch (err) {
      import_utils.logger.fail(`eslint校验未通过：${err}, 请检查代码`);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  eslint
});
