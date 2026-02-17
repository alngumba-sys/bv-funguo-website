// Production-specific optimizations

// Remove console logs in production
export function disableConsoleInProduction() {
  if (process.env.NODE_ENV === 'production') {
    const noop = () => {};
    console.log = noop;
    console.info = noop;
    console.warn = noop;
    console.debug = noop;
    // Keep console.error for critical debugging
  }
}

// Initialize production optimizations
export function initProductionOptimizations() {
  disableConsoleInProduction();

  // Enable React strict mode optimizations
  if (process.env.NODE_ENV === 'production') {
    // Disable React DevTools in production
    if (typeof window !== 'undefined') {
      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
        isDisabled: true,
        supportsFiber: true,
        inject: () => {},
        onCommitFiberRoot: () => {},
        onCommitFiberUnmount: () => {},
      };
    }
  }
}

// Call this at app initialization
if (typeof window !== 'undefined') {
  initProductionOptimizations();
}
