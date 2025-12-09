import { MyTemplate } from "../templates/myTemplate";
import { ProductHeader } from "../organisms/letter/ProductHeader";
import { ProductGrid } from "../organisms/letter/ProductGrid";

function LetterPage() {
  const cafes = [
    {
      nombre: "Capuchino de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CF-CHOCOLATE.png",
    },
    {
      nombre: "Café con leche y caramelo",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CF-CARAMELO.png",
    },
    {
      nombre: "Bebida de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/VD-CHOCOLATE-2.png",
    },
    {
      nombre: "Café helado de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CHOCOLATE-HELADO.png",
    },
    {
      nombre: "Batido de Oreo",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/VATIDO-OREO.png",
    },
    {
      nombre: "Café con leche de fresa",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CF-FRESA.png",
    },
    {
      nombre: "café moca",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CF-MOCA.png",
    },
    {
      nombre: "Café con leche",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/CF-LECHE.png",
    },
  ];

  const handleOrder = (product) => {
    console.log("Pedido:", product);
  };

  return (
    <MyTemplate className="pt-20">
      <div className="w-full bg-[#FFFAD3]">
        <ProductHeader title="Cafes" />
        <ProductGrid products={cafes} onOrder={handleOrder} />
      </div>
    </MyTemplate>
  );
}

export { LetterPage };