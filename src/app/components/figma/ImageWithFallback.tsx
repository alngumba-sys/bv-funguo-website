import React, { useState, useEffect } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Image failed to load:', props.src, e);
    }
    setDidError(true)
  }

  const handleLoad = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Image loaded successfully:', props.src);
    }
    setIsLoaded(true)
  }

  // Preload critical images
  useEffect(() => {
    if (props.src && typeof props.src === 'string') {
      const img = new Image();
      img.src = props.src;
    }
  }, [props.src]);

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={{
        ...style,
        // Ensure no background color or placeholder is shown during loading
        backgroundColor: 'transparent',
        // Images render immediately without any loading state
      }} 
      {...rest} 
      onError={handleError} 
      onLoad={handleLoad} 
      // Ensure images are decoded immediately for instant display
      decoding="sync"
      // Prevent any lazy loading that might show placeholders
      loading="eager"
    />
  )
}