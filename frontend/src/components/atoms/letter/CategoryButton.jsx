function CategoryButton({ icono, nombre, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm shadow-sm ${
        isActive
          ? "bg-[#4b2e11] text-[#fff6e8]"
          : "bg-[#f7d9b6] text-[#5a3710] border border-[#d7b78a]"
      }`}
    >
      <span>{icono}</span>
      <span className="hidden sm:inline">{nombre}</span>
    </button>
  );
}

export { CategoryButton };