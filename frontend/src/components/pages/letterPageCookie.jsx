import { MyTemplate } from "../templates/myTemplate";
import { ProductHeader } from "../organisms/letter/ProductHeader";
import { ProductGrid } from "../organisms/letter/ProductGrid";

function LetterPageCookie() {
  const galletas = [
    {
      nombre: "Galleta de Chocolate",
      precio: "S/.5.00",
      rating: 4.5,
      imagen: "/GT-WAFER.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-WAFER-DOBLE.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-CHIPS.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-CHOCOLATE.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-CRAKER.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-DONA.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-MASH.png",
    },
    {
      nombre: "Galleta de Vainilla",
      precio: "S/.4.50",
      rating: 4.3,
      imagen: "/GT-OREO.png",
    },
  ];

  const handleOrder = (product) => {
    console.log("Pedido:", product);
  };

  return (
    <MyTemplate className="pt-20">
      <div className="w-full bg-[#FFFAD3]">
        <ProductHeader title="Galletas" />
        <ProductGrid products={galletas} onOrder={handleOrder} />
      </div>
    </MyTemplate>
  );
}

export { LetterPageCookie };