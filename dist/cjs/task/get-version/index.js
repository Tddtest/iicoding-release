var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/task/get-version/index.ts
var get_version_exports = {};
__export(get_version_exports, {
  getOriginPackage: () => getOriginPackage,
  getVersion: () => getVersion
});
module.exports = __toCommonJS(get_version_exports);
var import_inc = __toESM(require("semver/functions/inc"));
var import_inquirer = __toESM(require("inquirer"));
var import_utils = require("@iicoding/utils");
var getOriginPackage = () => {
  let result = {};
  try {
    result = JSON.parse((0, import_utils.getFileSync)((0, import_utils.getProjectPath)("package.json")));
  } catch (err) {
    import_utils.logger.fail("获取 package.json 信息失败，请联系此npm包作者");
  }
  return result;
};
var getOriginVersion = () => {
  const pkg = getOriginPackage();
  return pkg.version;
};
var getVersionByUserSelected = async (types, options) => {
  const choices = types.map((level) => {
    const value = options[level];
    return {
      name: `${level} => ${value}`,
      value
    };
  });
  return import_inquirer.default.prompt([
    {
      type: "list",
      name: "version",
      message: "选择要发布的版本（方向键切换）：",
      choices
    }
  ]);
};
var getNextVersionOptions = () => {
  const originVersion = getOriginVersion();
  return {
    major: (0, import_inc.default)(originVersion, "major"),
    minor: (0, import_inc.default)(originVersion, "minor"),
    patch: (0, import_inc.default)(originVersion, "patch"),
    premajor: (0, import_inc.default)(originVersion, "premajor"),
    preminor: (0, import_inc.default)(originVersion, "preminor"),
    prepatch: (0, import_inc.default)(originVersion, "prepatch"),
    prerelease: (0, import_inc.default)(originVersion, "prerelease")
  };
};
var getNewVersion = async () => {
  const nextVersionOptions = getNextVersionOptions();
  const nextVersionKeys = Object.keys(nextVersionOptions);
  const { version } = await getVersionByUserSelected(nextVersionKeys, nextVersionOptions);
  return version;
};
var getVersion = async (next, params) => {
  const originVersion = getOriginVersion();
  import_utils.logger.succeed({ text: `当前版本为：${originVersion}`, chalkColor: "yellow" });
  const version = await getNewVersion();
  next({ ...params, version });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getOriginPackage,
  getVersion
});
