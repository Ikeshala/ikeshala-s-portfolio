import { useState, useEffect, useRef } from 'react'
import { getImagePath } from '../utils/imageUtils'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  placeholder?: string
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjMyMTM2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // For eager loading or first 6 images, load immediately
    if (loading === 'eager') {
      setImageSrc(getImagePath(src))
      return
    }

    // For lazy loading, use a more aggressive approach
    const img = imgRef.current
    if (!img) return

    // Check if element is already visible
    const rect = img.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200

    if (isVisible) {
      // If visible, load immediately
      setImageSrc(getImagePath(src))
    } else {
      // If not visible, use a more aggressive Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(getImagePath(src))
              observer.unobserve(img)
            }
          })
        },
        {
          rootMargin: '300px 0px', // Much more aggressive - load 300px before visible
          threshold: 0.01 // Trigger as soon as any part is visible
        }
      )

      observer.observe(img)

      return () => {
        if (img) {
          observer.unobserve(img)
        }
      }
    }
  }, [src, loading])

  const handleLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleError = () => {
    setImageError(true)
    setImageLoaded(false)
    // Fallback to placeholder on error
    setImageSrc(placeholder)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc || placeholder}
        alt={alt}
        className={`w-full h-full object-cover image-optimized transition-opacity duration-200 ${
          imageLoaded ? 'opacity-100 image-loaded' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
      />
      
      {/* Loading skeleton - only show briefly */}
      {!imageLoaded && !imageError && imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
          <div className="flex items-center justify-center h-full">
            <div className="text-white/60 text-xs">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-image text-xl text-white/40 mb-1"></i>
            <div className="text-white/60 text-xs">Image not available</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage 