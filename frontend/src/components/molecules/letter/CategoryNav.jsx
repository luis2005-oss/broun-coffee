import { CategoryButton } from "../../atoms/letter/CategoryButton";
import { FaCoffee, FaCookie, FaBirthdayCake } from "react-icons/fa";

function CategoryNav({ categories, onSelectCategory }) {
  if (!categories || categories.length === 0) return null;

  const getIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('cafe') || lowerName.includes('café')) return <FaCoffee />;
    if (lowerName.includes('cookie') || lowerName.includes('galleta')) return <FaCookie />;
    return <FaBirthdayCake />; 
  };

  return (
    // CAMBIOS:
    // 1. top-[100px]: Baja la barra para que no toque tu menú principal.
    // 2. justify-start: Alineación izquierda estricta.
    // 3. pl-4 md:pl-8: Padding izquierdo para que no empiece pegado al borde.
    <nav className="sticky mb-4 top-[90px] md:top-[100px] z-40 py-4 bg-[#020202]/95 backdrop-blur-md shadow-2xl border-b border-[#d6c394]/30 transition-all">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Contenedor Flex: justify-start y scroll horizontal si es necesario */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide justify-start pl-2">
          {categories.map((cat) => (
            <div key={cat.idCategory} className="flex-shrink-0 cursor-pointer">
              <CategoryButton
                nombre={cat.name}
                icono={getIcon(cat.name)}
                onClick={() => onSelectCategory(cat.idCategory)} 
                isActive={false} 
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export { CategoryNav };