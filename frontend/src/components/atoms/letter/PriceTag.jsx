function PriceTag({ price, precio }) {
  const displayPrice = price || precio;

  if (!displayPrice) return null;

  return (
    <div className="bg-[#432a0c] text-[#FFFAD3] px-3 py-1 rounded-full text-sm font-bold shadow-md border border-[#d6c394] whitespace-nowrap z-50">
      {displayPrice}
    </div>
  );
}

export { PriceTag };