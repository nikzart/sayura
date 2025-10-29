import {
  Sparkles,
  Heart,
  Leaf,
  Users,
  Award,
  Shield,
  Star,
  Target,
  LucideIcon
} from 'lucide-react';

interface ValueIconProps {
  iconName: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  leaf: Leaf,
  users: Users,
  award: Award,
  shield: Shield,
  star: Star,
  target: Target,
};

export default function ValueIcon({
  iconName,
  size = 28,
  className = '',
  strokeWidth = 1
}: ValueIconProps) {
  const IconComponent = iconMap[iconName.toLowerCase()] || Sparkles;

  return (
    <IconComponent
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
