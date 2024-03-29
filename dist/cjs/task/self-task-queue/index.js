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

// src/task/self-task-queue/index.ts
var self_task_queue_exports = {};
__export(self_task_queue_exports, {
  gitSubmoduleRelease: () => gitSubmoduleRelease
});
module.exports = __toCommonJS(self_task_queue_exports);
var import_utils_node = require("@iicoding/utils-node");
var import__ = require("../..");
var pickKeys = () => {
  return ["devDependencies", "scripts"];
};
var machiningPkg = (record) => {
  record.scripts = {
    ...record.scripts,
    "push": "node script.js"
  };
  record.devDependencies = {
    "@iicoding/release": "latest"
  };
  return record;
};
var getTaskQueue = (targetDir, namespace) => {
  return [
    import__.build,
    import__.getVersion,
    import__.updateVersion,
    import__.npmAuth,
    (0, import__.npmPubBefore)(pickKeys, machiningPkg),
    import__.npmPub,
    (0, import__.copyFile)((0, import_utils_node.getProjectPath)(`../../${targetDir}`), namespace),
    import__.npmPubAfter
    // gitPushOtherProject(getProjectPath('../../../release')),
    // gitPush,
    // patchTag,
  ];
};
var gitSubmoduleRelease = (targetDir, namespace) => {
  return (0, import__.composeTaskQueue)(getTaskQueue(targetDir, namespace));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gitSubmoduleRelease
});
