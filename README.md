## npm 包命令行发布工具
解放双手，简化发布流程，提高效率

### 通过中间件机制 按任务执行，自由度高，可定制性强。
案例：

```typescript
import {
  build,
  getVersion,
  npmAuth,
  npmPub,
  npmPubAfter,
  npmPubBefore,
  updateVersion,
  composeTaskQueue,
} from '@iicoding/release';
import type { TFn } from '@iicoding/release';

const pickKeys = () => {
  return ['devDependencies', 'scripts'];
}

/**
 * 自定义 task
 * @param next 下一个 task， 不需要关心，会自动注入此函数，如果希望继续下一个任务，则调用此函数即可
 * @param params 下一个任务需要的参数，可自由传递.
 */
const definedTask = (next: TFn, params?: unknown) => {
  // 要处理的逻辑
  next(params);
  // 其他参数可以自定义追加, 自由定制
  // next({ ...params, ...other })
}

// 可根据自身需求，增加、删减。
const taskQueue = [
  build, // 打包
  getVersion, // 获取当前版本
  updateVersion, // 更新要发布的版本
  npmAuth, // 验证npm 账户
  npmPubBefore(pickKeys), // 发布之前的操作 
  npmPub, // npm 发布
  npmPubAfter, // 发布之后的操作
  gitPush, // git 提交
  patchTag, // 打tag
];

const startRelease = composeTaskQueue(taskQueue);

startRelease();

```

#### 执行过程
