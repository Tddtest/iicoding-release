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

// src/task/copy-file/index.ts
var copy_file_exports = {};
__export(copy_file_exports, {
  copyFile: () => copyFile
});
module.exports = __toCommonJS(copy_file_exports);
var import_utils_node = require("@iicoding/utils-node");
var copyFile = (destRoot, projectFileName, src = ["dist", "package.json", "README.md"]) => {
  return async (next, params) => {
    const promises = src.map((target) => (0, import_utils_node.copyFileOrDirectory)((0, import_utils_node.getProjectPath)(target), `${destRoot}/${projectFileName}/${target}`));
    Promise.all(promises).then(() => next(params)).catch((err) => {
      console.log(err.message);
    });
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  copyFile
});
