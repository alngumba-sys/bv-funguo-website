import { useEffect } from 'react';

/**
 * Performance monitoring component
 * Reports Web Vitals metrics to console in development
 * Can be extended to send to analytics in production
 */
export function PerformanceMonitor() {
  useEffect(() => {
    // Only monitor in development or if explicitly enabled
    if (process.env.NODE_ENV === 'development') {
      // Monitor page load performance
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          // Use requestIdleCallback to avoid blocking
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              const perfData = window.performance.timing;
              const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
              const connectTime = perfData.responseEnd - perfData.requestStart;
              const renderTime = perfData.domComplete - perfData.domLoading;
              const domReady = perfData.domContentLoadedEventEnd - perfData.navigationStart;

              console.log('📊 Performance Metrics:');
              console.log(`  Page Load Time: ${pageLoadTime}ms`);
              console.log(`  Connection Time: ${connectTime}ms`);
              console.log(`  Render Time: ${renderTime}ms`);
              console.log(`  DOM Ready: ${domReady}ms`);

              // Get First Paint and First Contentful Paint
              const paintEntries = performance.getEntriesByType('paint');
              paintEntries.forEach((entry) => {
                console.log(`  ${entry.name}: ${Math.round(entry.startTime)}ms`);
              });

              // Log navigation timing
              if (performance.getEntriesByType('navigation').length > 0) {
                const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                console.log(`  DNS Lookup: ${Math.round(navTiming.domainLookupEnd - navTiming.domainLookupStart)}ms`);
                console.log(`  TCP Connection: ${Math.round(navTiming.connectEnd - navTiming.connectStart)}ms`);
                console.log(`  Time to First Byte: ${Math.round(navTiming.responseStart - navTiming.requestStart)}ms`);
              }
            });
          }
        });
      }

      // Monitor long tasks (tasks over 50ms)
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.duration > 50) {
                console.warn(`⚠️ Long Task detected: ${Math.round(entry.duration)}ms`);
              }
            }
          });
          observer.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // Long task API not supported
        }

        // Monitor layout shifts
        try {
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if ((entry as any).hadRecentInput) continue;
              console.log(`📐 Layout Shift: ${(entry as any).value.toFixed(4)}`);
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS API not supported
        }

        // Monitor Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`🎨 Largest Contentful Paint: ${Math.round(lastEntry.startTime)}ms`);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP API not supported
        }
      }

      // Log memory usage if available
      if ('memory' in performance && (performance as any).memory) {
        const memory = (performance as any).memory;
        console.log('💾 Memory Usage:');
        console.log(`  Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
        console.log(`  Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
        console.log(`  Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
      }
    }
  }, []);

  // This component doesn't render anything
  return null;
}

// Helper to report to analytics (extend as needed)
export function reportWebVitals(metric: { name: string; value: number; id: string }) {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    // Example: analytics.track('web-vital', metric)
    console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
  }
}
