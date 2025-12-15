import { AboutUsHistoryContainer } from "../../atoms/aboutUs/AboutUsHistoryContainer"
import { Title } from "../../atoms/titles"
import { Paragraph } from "../../atoms/paragraph"

function AboutUsHistoryBlock() {
  return (
    <AboutUsHistoryContainer>
      
      <Title 
        level="h3" 
        text="Nuestra Historia" 
        variant="secondary"
        className="font-joti mb-6 drop-shadow-md"
      />
      
      <Paragraph 
        size="large" 
        className="max-w-4xl text-gray-200 leading-relaxed font-light break-words"
        text="Fundado en 2023, Broun Coffee nació del sueño de crear un refugio donde el tiempo se detiene. Lo que comenzó como una pequeña barra de espresso se ha convertido en el corazón de la comunidad, un lugar donde cada taza cuenta una historia y cada cliente se convierte en familia. Aquí no solo servimos café; servimos momentos, tradición y la pasión por lo auténtico."
      />

    </AboutUsHistoryContainer>
  )
}
export { AboutUsHistoryBlock }