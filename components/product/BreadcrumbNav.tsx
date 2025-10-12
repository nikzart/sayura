import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbNavProps {
  category: string;
  productName: string;
}

export default function BreadcrumbNav({ category, productName }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-gold transition-colors">
        Home
      </Link>
      <ChevronRight size={14} />
      <Link href="/new-arrivals" className="hover:text-gold transition-colors">
        {category}
      </Link>
      <ChevronRight size={14} />
      <span className="text-gray-900 font-medium">{productName}</span>
    </nav>
  );
}
