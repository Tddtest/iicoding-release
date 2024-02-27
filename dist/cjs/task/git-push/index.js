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

// src/task/git-push/index.ts
var git_push_exports = {};
__export(git_push_exports, {
  gitPush: () => gitPush,
  pushCode: () => pushCode
});
module.exports = __toCommonJS(git_push_exports);
var import_inquirer = __toESM(require("inquirer"));
var import_utils_node = require("@iicoding/utils-node");
async function checkCommit() {
  const { commitMsg } = await import_inquirer.default.prompt([
    {
      type: "string",
      name: "commitMsg",
      message: `请输入符合 ${import_utils_node.chalk.green("angular commit")} 规范的 git commit 的信息：`
    }
  ]);
  return commitMsg;
}
function isMathCommit(commitMsg) {
  const isMath = /^(feat|fix|docs|style|refactor|test|chore|perf)(\(.+\))?:\s.+/.test(commitMsg);
  if (!isMath) {
    throw new Error(import_utils_node.chalk.red("commit format error(提交格式不符合angular规范)"));
  }
}
var pushCode = async () => {
  const commitMsg = await checkCommit();
  isMathCommit(commitMsg);
  import_utils_node.logger.start({ text: "推送代码至远程仓库 . . ." });
  const currentBranch = (0, import_utils_node.runSync)("git symbolic-ref --short HEAD");
  const isExistCurrentBranch = (0, import_utils_node.runSync)(`git branch -r | grep -w "origin/${currentBranch}"`);
  console.log(`\r
当前推送分支为：${import_utils_node.chalk.green(isExistCurrentBranch)}`);
  await (0, import_utils_node.runAsync)("git add .");
  await (0, import_utils_node.runAsync)(`git commit -m "${commitMsg}"`);
  if (!isExistCurrentBranch) {
    await (0, import_utils_node.runAsync)(`git push --set-upstream origin ${currentBranch}`);
  } else {
    await (0, import_utils_node.runAsync)("git push");
  }
};
var gitPush = async (next, params) => {
  try {
    await pushCode();
    import_utils_node.logger.succeed("已推送至远程仓库");
    next(params);
  } catch (error) {
    import_utils_node.logger.fail({ text: "push 代码失败, 如未发布则即将进入回退操作" });
    global.rollbackPackage(error.message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gitPush,
  pushCode
});
