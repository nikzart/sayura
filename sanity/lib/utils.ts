// Helper function to format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Helper function to get color hex value
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

// Helper function to get file URL from Sanity
export function getFileUrl(fileRef: any): string | null {
  if (!fileRef || !fileRef.asset || !fileRef.asset._ref) return null;

  const [, id, extension] = fileRef.asset._ref.split('-');
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
}
