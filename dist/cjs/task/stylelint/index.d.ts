import type { TFn } from '@iicoding/utils';
export declare const stylelint: (lintFilePath?: string, configFilePath?: string) => (next: TFn, ...params: any[]) => Promise<void>;
