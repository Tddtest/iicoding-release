type TFn = (...args: any[]) => any;
export declare const _updateVersion: (content: Record<string, any>) => Promise<void>;
export declare const updateVersion: (next: TFn, params: Record<string, any>) => Promise<void>;
export {};
