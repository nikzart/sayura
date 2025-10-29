import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';

interface PortableTextRendererProps {
  value: any;
  className?: string;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium tracking-wide mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-900 mb-2 mt-4">{children}</h4>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-gold hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

export default function PortableTextRenderer({ value, className = '' }: PortableTextRendererProps) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
