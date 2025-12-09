import { MdCake } from "react-icons/md";
import { FaCoffee, FaCookie } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { CategoryButton } from "../../atoms/letter/CategoryButton";

function CategoryNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const categorias = [
    { id: "cafes", nombre: "Cafes", icono: <FaCoffee />, ruta: "/letter" },
    { id: "galletas", nombre: "Galletas", icono: <FaCookie />, ruta: "/LetterPageCookie" },
    { id: "tortas", nombre: "Tortas", icono: <MdCake />, ruta: "/LetterPageCake" },
  ];

  return (
    <nav className="flex items-center gap-3">
      {categorias.map((cat) => (
        <CategoryButton
          key={cat.id}
          icono={cat.icono}
          nombre={cat.nombre}
          isActive={location.pathname === cat.ruta}
          onClick={() => navigate(cat.ruta)}
        />
      ))}
    </nav>
  );
}

export { CategoryNav };