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

// src/task/execute-end/index.ts
var execute_end_exports = {};
__export(execute_end_exports, {
  executeEnd: () => executeEnd
});
module.exports = __toCommonJS(execute_end_exports);
var import_utils_node = require("@iicoding/utils-node");
var executeEnd = () => {
  import_utils_node.logger.start({ text: " " });
  import_utils_node.logger.succeed("所有 release 任务已全部执行完成");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  executeEnd
});
