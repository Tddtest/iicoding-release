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

// src/task/git-push-other-project/index.ts
var git_push_other_project_exports = {};
__export(git_push_other_project_exports, {
  gitPushOtherProject: () => gitPushOtherProject
});
module.exports = __toCommonJS(git_push_other_project_exports);
var import_utils = require("@iicoding/utils");
var gitPushOtherProject = (otherProjectPath) => {
  return async (next, params) => {
    const selfPath = (0, import_utils.getProjectPath)();
    try {
      await (0, import_utils.runAsync)(`cd ${otherProjectPath}`);
      console.log("getProjectPath", (0, import_utils.getProjectPath)());
      console.log("process", process.cwd());
      await (0, import_utils.runAsync)("npm run push");
      await (0, import_utils.runAsync)(selfPath);
      next(params);
    } catch (err) {
      import_utils.logger.fail(`去目标地址：${otherProjectPath} 操作git提交失败，请检查后自行提交, ${err.message}`);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gitPushOtherProject
});
