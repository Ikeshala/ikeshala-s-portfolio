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
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

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
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    )

    if (loading === 'lazy') {
      observer.observe(img)
    } else {
      setImageSrc(getImagePath(src))
    }

    return () => {
      if (img) {
        observer.unobserve(img)
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
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover image-optimized transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100 image-loaded' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
      />
      
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
          <div className="flex items-center justify-center h-full">
            <div className="text-white/60 text-sm">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-image text-2xl text-white/40 mb-2"></i>
            <div className="text-white/60 text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage 