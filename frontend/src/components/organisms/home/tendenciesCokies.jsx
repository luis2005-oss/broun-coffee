import { useEffect, useRef } from "react";
import { TendenciesCard } from "../../molecules/home/homeTendeciesCard";

function TendenciesCokies() {
  const trackRef = useRef(null);
  const speed = 0.4;

  // Datos estáticos usando tus imágenes de la carpeta public
  const tendenciesCookies = [
    {
      img: "/GT-CHIPS.png",
      title: "Galleta Chispas",
      description: "Clásica y crujiente, repleta de deliciosas chispas de chocolate.",
    },
    {
      img: "/GT-OREO.png",
      title: "Galleta Oreo",
      description: "Sabor inconfundible con trozos de tu galleta favorita.",
    },
    {
      img: "/GT-CHOCOLATE.png",
      title: "Full Chocolate",
      description: "Para los amantes del cacao, una explosión de sabor intenso.",
    },
    {
      img: "/GT-WAFER.png",
      title: "Wafer Vainilla",
      description: "Capas ligeras y crujientes con un suave relleno de crema.",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let animationId;

    const animate = () => {
      x -= speed;
      // Reinicia cuando se ha desplazado la mitad del contenido
      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }
      track.style.transform = `translateX(${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {/* Pasamos los datos a la prop 'tendenciesCoffee' para reutilizar la tarjeta sin editarla */}
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCookies} />
        </div>
        {/* Duplicado para el efecto infinito */}
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCookies} />
        </div>
      </div>
    </div>
  );
}

export { TendenciesCokies };