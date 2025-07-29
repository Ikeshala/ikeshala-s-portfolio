import { useState, useRef, useEffect } from 'react'

interface FilterCarouselProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const FilterCarousel = ({ filters, activeFilter, onFilterChange }: FilterCarouselProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [shouldCenter, setShouldCenter] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
  }

  const checkIfShouldCenter = () => {
    if (!scrollContainerRef.current || !containerRef.current) return
    
    const scrollContainer = scrollContainerRef.current
    const container = containerRef.current
    
    // Check if content width is less than container width
    const contentWidth = scrollContainer.scrollWidth
    const containerWidth = container.clientWidth
    
    setShouldCenter(contentWidth <= containerWidth)
  }

  useEffect(() => {
    checkScrollPosition()
    checkIfShouldCenter()
    
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition)
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition)
    }
  }, [filters])

  // Re-check centering when filters change
  useEffect(() => {
    checkIfShouldCenter()
  }, [filters])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const scrollAmount = 200
    const currentScroll = scrollContainerRef.current.scrollLeft
    const newScroll = direction === 'left' 
      ? Math.max(0, currentScroll - scrollAmount)
      : currentScroll + scrollAmount
    
    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={containerRef} className="relative group">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </button>
      )}

      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className={`flex gap-3 overflow-x-auto scrollbar-hide px-2 py-1 transition-all duration-300 ${
          shouldCenter ? 'justify-center' : 'justify-start'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`glass-button px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              activeFilter === filter 
                ? 'gemini-gradient text-white' 
                : 'glass-morphism text-white hover:bg-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterCarousel 