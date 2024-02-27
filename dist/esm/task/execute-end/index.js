import { logger } from '@iicoding/utils-node';
export var executeEnd = function executeEnd() {
  logger.start({
    text: ' '
  });
  logger.succeed('所有 release 任务已全部执行完成');
};