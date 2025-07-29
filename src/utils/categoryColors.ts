export const getCategoryColor = (category: string) => {
  // Check for custom categories in localStorage
  const customCategories = (() => {
    try {
      return JSON.parse(localStorage.getItem('customCategories') || '[]')
    } catch {
      return []
    }
  })()
  const custom = customCategories.find((c: any) => c.name === category)
  if (custom) {
    // Use the custom color for bg, text, and border
    return `bg-[${custom.color}/20] text-[${custom.color}] border-[${custom.color}/30]`
  }
  switch (category) {
    case 'Web Solutions':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    case 'Mobile Apps':
      return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'Web Applications':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    case 'Design Systems':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    case 'Branding & Identity':
      return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    case 'Desktop Applications':
      return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
} 