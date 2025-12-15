import { Title } from "../../atoms/titles"
import { AboutUsHistoryBlock } from "../../molecules/aboutUs/AboutUsHistoryBlock"
import { AboutUsGalleryImage } from "../../atoms/aboutUs/AboutUsGalleryImage"

function AboutUsGallerySection() {
  return (
    <section className="relative py-24 px-4 w-full min-h-screen flex flex-col items-center">
      
      <div className="max-w-7xl w-full">
        
        <Title 
          level="h2" 
          text="Un Espacio Hecho para Ti" 
          variant="primary"
          className="font-joti mb-16 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          
          <AboutUsGalleryImage 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
            alt="Interior Cafetería"
            className="md:row-span-2" 
          />

          <AboutUsGalleryImage
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
            alt="Detalle Café"
          />

          <AboutUsGalleryImage 
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop" 
            alt="Ambiente"
            className="md:row-span-2" 
          />

          <AboutUsGalleryImage 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" 
            alt="Grano de Café"
          />


        </div>
          <AboutUsHistoryBlock />
      </div>
    </section>
  )
}
export { AboutUsGallerySection }