import type { TFn } from '@iicoding/utils';
export declare const eslint: (lintFilePath?: string, configFilePath?: string) => (next: TFn, ...params: any[]) => Promise<void>;
