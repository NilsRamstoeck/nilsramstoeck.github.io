declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.worker.js' {
  const content: import('esbuild-worker-plugin').WorkerConstructor;
  export default content;
}
