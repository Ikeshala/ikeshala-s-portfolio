// Utility function to get correct image path for both development and production
export const getImagePath = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath
  }
  
  // For GitHub Pages, we need to include the base path
  // Check if we're in production (GitHub Pages)
  const isProduction = window.location.hostname === 'ikeshala.github.io'
  const basePath = isProduction ? '/ikeshala-s-portfolio' : ''
  
  // Remove leading slash if present and add base path
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  
  return `${basePath}/${cleanPath}`
} 