import { memo } from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

// Lightweight skeleton loader for better perceived performance
export const Skeleton = memo<SkeletonProps>(({ 
  className = '', 
  variant = 'rectangular',
  width,
  height
}) => {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
});

Skeleton.displayName = 'Skeleton';

// Hero section skeleton
export const HeroSkeleton = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white pt-20">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <div className="flex gap-4 pt-8">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
        <div>
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
));

HeroSkeleton.displayName = 'HeroSkeleton';
