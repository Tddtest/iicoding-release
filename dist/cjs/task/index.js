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

// src/task/index.ts
var task_exports = {};
__export(task_exports, {
  composeTaskQueue: () => composeTaskQueue
});
module.exports = __toCommonJS(task_exports);
var import_utils = require("@iicoding/utils");
var import_global_register = require("./global-register");
var import_execute_end = require("./execute-end");
var composeTaskQueue = (middleware) => {
  return (0, import_utils.composeAsync)([import_global_register.globalRegister, ...middleware, import_execute_end.executeEnd]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  composeTaskQueue
});
