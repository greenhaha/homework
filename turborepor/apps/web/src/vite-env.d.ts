/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_ENV?: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: (pattern: string, options?: { eager?: boolean }) => Record<string, unknown>;
  }
}
export {};
