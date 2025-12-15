import { AboutUsMainTitle } from "../../atoms/aboutUs/aboutUsMainTitle"
import { AboutUsFloatingImage } from "../../atoms/aboutUs/aboutUsFloatingImage"
import { AboutUsInfoCard } from "../../molecules/aboutUs/aboutUsInfoCard"

function AboutUsHeroSection() {
  const mision = `Nuestra misión es ofrecer a nuestros clientes una experiencia única a 
  través de cafés de alta calidad, postres artesanales y galletas elaboradas con dedicación, 
  brindando un ambiente acogedor y un servicio cercano. Buscamos combinar tradición y creatividad 
  para convertir cada visita en un momento especial, apoyándonos en la innovación y en nuestra plataforma
  digital para acercarnos más a nuestra comunidad.`

  const vision = `Nuestra visión es consolidarnos como una cafetería referente en nuestra ciudad, 
  reconocida por la excelencia de nuestros productos, la calidez de nuestro servicio y la innovación 
  constante. Aspiramos a crecer de manera sostenible, fortaleciendo nuestra marca y nuestra presencia digital, 
  para convertirnos en un punto de encuentro preferido por los amantes del café y la repostería artesanal.`
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 px-4">
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        <AboutUsMainTitle 
          text="Nuestra Pasión: El Café Perfecto"
          data-aos="fade-down"
          data-aos-duration="1000"
        />

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 md:gap-8 lg:gap-16">
          
          <AboutUsInfoCard 
            title="Misión"
            text={mision}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          />

          <AboutUsFloatingImage 
            src="/CUP-COFFEE.png" 
            alt="Granos de café y humo flotando"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />

          <AboutUsInfoCard 
            title="Visión"
            text={vision}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          />

        </div>
      </div>
    </section>
  )
}

export { AboutUsHeroSection }