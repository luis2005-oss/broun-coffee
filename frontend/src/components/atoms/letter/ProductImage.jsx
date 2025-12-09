function ProductImage({ src, alt }) {
  return (
    <div className="w-full h-40 mb-4 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="h-full object-contain"
      />
    </div>
  );
}

export { ProductImage };