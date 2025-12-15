import { useEffect, useRef } from "react";
import { TendenciesCard } from "../../molecules/home/homeTendeciesCard";

function TendenciesCakes() {
  const trackRef = useRef(null);
  const speed = 0.4;

  const tendenciesCakes = [
    {
      img: "/TR-CHOCOLATE.png",
      title: "Tarta Chocolate",
      description: "Esponjosa y húmeda, con cobertura de ganache artesanal.",
    },
    {
      img: "/TR-FRESA.png",
      title: "Cheesecake Fresa",
      description: "Base crujiente y crema suave con fresas frescas de temporada.",
    },
    {
      img: "/TR-LIMON.png",
      title: "Pie de Limón",
      description: "El equilibrio perfecto entre lo dulce y lo cítrico.",
    },
    {
      img: "/TR-TRESLECHES.png",
      title: "Tres Leches",
      description: "Tradicional, jugoso y cubierto de merengue suave.",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let animationId;

    const animate = () => {
      x -= speed;
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
        {/* Reutilizamos la misma prop para no romper el componente hijo */}
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCakes} />
        </div>
        <div className="flex gap-8 px-4">
          <TendenciesCard tendenciesCoffee={tendenciesCakes} />
        </div>
      </div>
    </div>
  );
}

export { TendenciesCakes };