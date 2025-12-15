import { Paragraph } from "../../atoms/paragraph"
import { Title } from "../../atoms/titles"
import { BannerBgCurve } from "../../molecules/bannerBgCurve"
import { BannerButtons } from "../../molecules/home/bannerButtons"
import { BannerCoffee } from "../../molecules/home/bannerCupCoffe"

function HomeBanner() {
  const title  = 'BROWN COFFEE'
  const description = `"Siéntete como en casa. Aquí te esperamos con café recién molido,
          postres recién horneados y helados irresistibles. Cada visita es una oportunidad
          para desconectarte y disfrutar del momento. Déjate envolver por el aroma,
          los sabores y la calidez de nuestro espacio."`

  return (
    <section 
      className="
        relative 
        h-[70vh]       
        md:h-[85vh]    
        lg:h-screen    
        w-full 
        overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat 
          transition-all duration-300 
          sm:bg-position-[center_30%]
        "
        style={{ backgroundImage: "url('/HOME_LOGO.jpg')" }}
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      <article 
        className="
          absolute inset-0 
          flex flex-col 
          justify-start          
          sm:justify-center      
          items-start 
          px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 
          text-white 
          z-10 
          pt-24 md:pt-0
        "
      >
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Title
            text={title}
            level="h1"
            weight="bold"
            variant="primary"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Paragraph 
            text={description}
            size="large"
            variant="primary"
            className="max-w-2xl lg:max-w-3xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
          />
        </div>
          <BannerBgCurve design={1}/>
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <BannerButtons/>
        </div>
      </article>
        <BannerCoffee/>

    </section>
  )
}

export { HomeBanner }