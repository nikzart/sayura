import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
