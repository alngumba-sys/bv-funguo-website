import React, { memo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Memoized image component to prevent unnecessary re-renders
export const OptimizedImage = memo<React.ComponentProps<typeof ImageWithFallback>>(
  ({ src, alt, className, style, ...props }) => {
    return (
      <ImageWithFallback
        src={src}
        alt={alt}
        className={className}
        style={style}
        {...props}
      />
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if src, className, or critical style props change
    return (
      prevProps.src === nextProps.src &&
      prevProps.className === nextProps.className &&
      prevProps.alt === nextProps.alt
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';
