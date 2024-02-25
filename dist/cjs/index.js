var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("./task/eslint"), module.exports);
__reExport(src_exports, require("./task/stylelint"), module.exports);
__reExport(src_exports, require("./task/build-project"), module.exports);
__reExport(src_exports, require("./task/get-version"), module.exports);
__reExport(src_exports, require("./task/update-version"), module.exports);
__reExport(src_exports, require("./task/npm-auth"), module.exports);
__reExport(src_exports, require("./task/npm-pub-after"), module.exports);
__reExport(src_exports, require("./task/npm-pub"), module.exports);
__reExport(src_exports, require("./task/npm-pub-before"), module.exports);
__reExport(src_exports, require("./task/copy-file"), module.exports);
__reExport(src_exports, require("./task/git-push-other-project"), module.exports);
__reExport(src_exports, require("./task/git-push"), module.exports);
__reExport(src_exports, require("./task/git-tag"), module.exports);
__reExport(src_exports, require("./task"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./task/eslint"),
  ...require("./task/stylelint"),
  ...require("./task/build-project"),
  ...require("./task/get-version"),
  ...require("./task/update-version"),
  ...require("./task/npm-auth"),
  ...require("./task/npm-pub-after"),
  ...require("./task/npm-pub"),
  ...require("./task/npm-pub-before"),
  ...require("./task/copy-file"),
  ...require("./task/git-push-other-project"),
  ...require("./task/git-push"),
  ...require("./task/git-tag"),
  ...require("./task")
});
