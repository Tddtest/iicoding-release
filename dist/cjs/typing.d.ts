declare interface global {
  originPackage: Record<string, any>;
  updatedPackage: Record<string, any>;
  rollbackPackage(): Promise<boolean | void>;
}
