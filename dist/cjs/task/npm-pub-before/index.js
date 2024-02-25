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

// src/task/npm-pub-before/index.ts
var npm_pub_before_exports = {};
__export(npm_pub_before_exports, {
  npmPubBefore: () => npmPubBefore
});
module.exports = __toCommonJS(npm_pub_before_exports);
var import_utils = require("@iicoding/utils");
var import_update_version = require("../update-version");
var import_get_version = require("../get-version");
var npmPubBefore = (omitPackagesKeysFn, machiningPkg) => {
  return async (next, params) => {
    const pickKeys = omitPackagesKeysFn();
    if (Array.isArray(pickKeys) && pickKeys.length) {
      const pkg = (0, import_get_version.getOriginPackage)();
      global.updatedPackage = pkg;
      let record = { ...pkg };
      pickKeys.forEach((key) => {
        if (pkg[key]) {
          delete record[key];
        }
      });
      if (machiningPkg) {
        record = machiningPkg(record);
      }
      try {
        await (0, import_update_version._updateVersion)(record);
      } catch (err) {
        import_utils.logger.start({ text: " " });
        import_utils.logger.fail("发布之前的操作失败，请检查，即将自动回退版本");
        global.rollbackPackage(err.message);
        return;
      }
    }
    next(params);
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  npmPubBefore
});
