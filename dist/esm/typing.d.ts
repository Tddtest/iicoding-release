declare interface global {
  pubSuccess: false; // 是否发布成功
  originPackage: Record<string, any>;
  updatedPackage: Record<string, any>;
  rollbackPackage(): Promise<boolean | void>;
}
