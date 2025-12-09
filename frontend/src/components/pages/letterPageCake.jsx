import { MyTemplate } from "../templates/myTemplate";
import { ProductHeader } from "../organisms/letter/ProductHeader";
import { ProductGrid } from "../organisms/letter/ProductGrid";

function LetterPageCake() {
  const tortas = [
    {
      nombre: "Torta de Chocolate",
      precio: "S/.25.00",
      rating: 4.8,
      imagen: "/TR-ARANDANO.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-CHOCOLATE.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-FRESA.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-LECHE.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-LIMON.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-MENTA-CHOCOLATE.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-TRESLECHES.png",
    },
    {
      nombre: "Torta de Fresa",
      precio: "S/.22.00",
      rating: 4.6,
      imagen: "/TR-ZANAHORIA.png",
    },
  ];

  const handleOrder = (product) => {
    console.log("Pedido:", product);
  };

  return (
    <MyTemplate className="pt-20">
      <div className="w-full bg-[#FFFAD3]">
        <ProductHeader title="Tortas" />
        <ProductGrid products={tortas} onOrder={handleOrder} />
      </div>
    </MyTemplate>
  );
}

export { LetterPageCake };