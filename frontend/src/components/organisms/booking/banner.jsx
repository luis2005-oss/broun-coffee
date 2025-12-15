import { Article } from "../../molecules/booking/bannerArticle"
import { BannerCoffee } from "../../molecules/home/bannerCupCoffe"

function Banner() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-cover transition-all duration-300"
        style={{
          backgroundImage: "url('/IMG-BOOKING.jpeg')",
        }}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      <Article 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      />

      <BannerCoffee
        src="/CUP-BOOKING.png"
        alt="imagen de la taza de café"
        position={`
          bottom-8 left-10
          sm:bottom-8 sm:left-30
          lg:bottom-11 lg:left-48
          xl:bottom-11 xl:left-58 
          2xl:bottom-12 2xl:left-72
        `}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
        data-aos-easing="ease-out-back"
      />
    </section>
  )
}

export { Banner }