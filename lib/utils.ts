// Utility Functions

/**
 * Format price to INR currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Combine class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string, offset: number = 100): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Get color hex value from color name
 * Used for color swatches in product cards
 */
export function getColorValue(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    // Neutrals
    'Black': '#000000',
    'White': '#FFFFFF',
    'Ivory': '#FFFFF0',
    'Beige': '#F5F5DC',
    'Charcoal': '#36454F',
    'Grey': '#808080',
    'Navy': '#000080',

    // Golds & Metallics
    'Gold': '#FFD700',
    'Champagne': '#F7E7CE',
    'Rose Gold': '#B76E79',

    // Blues
    'Midnight Blue': '#191970',
    'Royal Blue': '#4169E1',
    'Teal': '#008080',

    // Reds & Pinks
    'Burgundy': '#800020',
    'Maroon': '#800000',
    'Wine': '#722F37',
    'Crimson': '#DC143C',
    'Plum': '#8E4585',
    'Rose': '#FF007F',
    'Coral': '#FF7F50',
    'Peach': '#FFE5B4',
    'Dusty Pink': '#DCAE96',

    // Greens
    'Emerald': '#50C878',
    'Mint': '#98FF98',

    // Purples
    'Lavender': '#E6E6FA',

    // Multi/Pattern
    'Multi': 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D, #95E1D3)',
    'Pastel': 'linear-gradient(90deg, #FFB3BA, #BAFFC9, #BAE1FF, #FFFFBA)',
  };

  return colorMap[colorName] || '#CCCCCC'; // Default gray if color not found
}
