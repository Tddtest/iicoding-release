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

// src/task/git-tag/index.ts
var git_tag_exports = {};
__export(git_tag_exports, {
  patchTag: () => patchTag
});
module.exports = __toCommonJS(git_tag_exports);
var import_utils = require("@iicoding/utils");
var patchTag = async (next, params) => {
  import_utils.logger.start({ text: "git tag patch 开始..." });
  try {
    const version = `v${params.version}`;
    await (0, import_utils.runAsync)(`git tag ${version} && git push origin tag ${version}`);
    import_utils.logger.succeed("git tag patch 成功");
  } catch (err) {
    import_utils.logger.fail(`patch tag failed: ${err}`);
  }
  next(true);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  patchTag
});
