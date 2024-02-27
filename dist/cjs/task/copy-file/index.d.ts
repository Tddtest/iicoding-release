import type { TFn } from '@iicoding/utils';
export declare const copyFile: (destRoot: string, projectFileName: string, src?: string[]) => (next: TFn, params?: unknown) => Promise<void>;
