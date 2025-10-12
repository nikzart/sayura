interface ProductBadgesProps {
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  className?: string;
}

export default function ProductBadges({
  isNew,
  isBestSeller,
  isLimited,
  className = '',
}: ProductBadgesProps) {
  if (!isNew && !isBestSeller && !isLimited) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {isNew && (
        <span className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-4 py-2">
          New Arrival
        </span>
      )}
      {isLimited && (
        <span className="bg-black text-white text-xs font-medium tracking-widest uppercase px-4 py-2">
          Limited Edition
        </span>
      )}
      {isBestSeller && (
        <span className="bg-white border-2 border-black text-black text-xs font-medium tracking-widest uppercase px-4 py-2">
          Bestseller
        </span>
      )}
    </div>
  );
}
