'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ColorSelectorProps {
  colors: string[];
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
}

const getColorValue = (colorName: string): string => {
  const name = colorName.toLowerCase();

  if (name.includes('gold')) return '#a17713';
  if (name.includes('black')) return '#000000';
  if (name.includes('white') || name.includes('ivory') || name.includes('champagne')) return '#f5f5f5';
  if (name.includes('navy') || name.includes('midnight')) return '#1e3a8a';
  if (name.includes('blue') || name.includes('teal')) return '#3b82f6';
  if (name.includes('red') || name.includes('crimson') || name.includes('wine') || name.includes('burgundy') || name.includes('maroon')) return '#dc2626';
  if (name.includes('green') || name.includes('emerald')) return '#10b981';
  if (name.includes('pink') || name.includes('rose') || name.includes('coral') || name.includes('peach')) return '#ec4899';
  if (name.includes('purple') || name.includes('lavender') || name.includes('plum')) return '#a855f7';
  if (name.includes('grey') || name.includes('gray') || name.includes('charcoal')) return '#6b7280';
  if (name.includes('beige') || name.includes('camel')) return '#d4a574';
  if (name.includes('mint')) return '#6ee7b7';
  if (name.includes('multi') || name.includes('pastel')) return 'linear-gradient(135deg, #fecaca 0%, #bfdbfe 25%, #a7f3d0 50%, #fde68a 75%, #fed7aa 100%)';

  return '#9ca3af'; // Default gray
};

export default function ColorSelector({ colors, selectedColor, onColorSelect }: ColorSelectorProps) {
  const [selected, setSelected] = useState(selectedColor || colors[0]);

  const handleColorSelect = (color: string) => {
    setSelected(color);
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  if (colors.length === 0) return null;

  return (
    <div className="mb-8">
      <label className="block text-sm tracking-wide uppercase text-gray-700 mb-3">
        Color: <span className="font-medium text-black">{selected}</span>
      </label>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const colorValue = getColorValue(color);
          const isSelected = selected === color;
          const isGradient = colorValue.startsWith('linear');

          return (
            <motion.button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                isSelected ? 'border-gold scale-110' : 'border-gray-300 hover:border-gray-400'
              }`}
              whileHover={{ scale: isSelected ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={color}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: colorValue,
                  border: colorValue.toLowerCase().includes('#f5f5f5') || colorValue.toLowerCase().includes('white') ? '1px solid #e5e7eb' : 'none',
                }}
              />
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
