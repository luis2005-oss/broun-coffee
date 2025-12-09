function PriceTag({ precio }) {
  return (
    <div className="absolute top-0 left-0 p-4 z-10 ml-38 bg-white/40 rounded-3xl">
      <span className="font-semibold ml-2">{precio}</span>
    </div>
  );
}

export { PriceTag };