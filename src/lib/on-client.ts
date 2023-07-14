export function onClient<T>(fn: () => T): T | undefined {
  if (typeof window !== "undefined") {
    return fn();
  }
}
