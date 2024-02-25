import type { TFn } from '@iicoding/utils';
export declare const npmPubBefore: (omitPackagesKeysFn: TFn<string[]>, machiningPkg?: TFn<Record<string, any>>) => (next: TFn, params?: Record<string, any>) => Promise<void>;
