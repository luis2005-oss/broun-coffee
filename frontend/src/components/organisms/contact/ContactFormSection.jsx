import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"
import { Title } from "../../atoms/titles"
import { Button } from "../../atoms/buttons"
import { Paragraph } from "../../atoms/paragraph"

function ContactFormSection() {
  return (
    <section className="relative w-full py-20 px-4 -mt-20 z-20">
      
      <div className="max-w-6xl mx-auto bg-[#121212]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,187,0,0.2)] rounded-xl overflow-hidden border border-[#FFBB00]/50 grid grid-cols-1 lg:grid-cols-2">
        
        <div className="relative p-10 md:p-14 flex flex-col justify-between overflow-hidden">
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 transition-transform duration-700 hover:scale-105"></div>
          
          <div className="absolute inset-0 bg-linera-to-b from-[#06141F]/80 via-[#06141F]/60 to-[#000000]/90"></div>
          
          <div className="relative z-10">
            <Title 
              level="h3" 
              text="Información de Contacto" 
              variant="secondary" 
              className="font-joti text-3xl mb-3 drop-shadow-md" 
            />
            <Paragraph className="text-gray-200 font-light mb-12 text-lg drop-shadow-sm">
              Encuéntranos en el corazón de la ciudad o escríbenos un mensaje.
            </Paragraph>
            
            <div className="space-y-8">
              <InfoItem icon={<FaMapMarkerAlt />} title="Dirección" text="Jr. José Galves 610 - Celendín" />
              <InfoItem icon={<FaPhoneAlt />} title="Llámanos" text="+51 929 224 940" />
              <InfoItem icon={<FaEnvelope />} title="Escríbenos" text="contacto@brouncoffee.com" />
            </div>
          </div>
          <div className="relative z-10 mt-12">
            <InfoItem icon={<FaClock />} title="Horario" text="Lun - Dom: 7:00 AM - 10:00 PM" />
          </div>
        </div>

        <div className="p-10 md:p-14 bg-[#18181b]">
          <Title 
            level="h3" 
            text="Envíanos un Mensaje" 
            className="text-white font-bold text-2xl mb-2" 
          />
          <p className="text-gray-400 mb-8 text-sm">Comunícate con nosotros y te responderemos a la brevedad.</p>
          
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MinimalInput label="Nombre Completo" placeholder="Ej: Wesley Voltran" type="text" />
              <MinimalInput label="Correo Electrónico" placeholder="WeVo@email.com" type="email" />
            </div>
            
            <MinimalInput label="Teléfono" placeholder="Ej: 999 999 999" type="text" />
            
            <div className="flex flex-col gap-2 group">
              <label className="text-sm font-medium text-[#FFBB00] group-focus-within:text-white transition-colors">Mensaje</label>
              <textarea 
                className="w-full bg-[#202023] border-b border-gray-600 focus:border-[#FFBB00] text-gray-200 py-2 outline-none resize-none transition-colors h-32 placeholder-gray-600"
                placeholder="Escribe aquí tu mensaje..."
              ></textarea>
            </div>

            <Button 
              text="Enviar Mensaje" 
              className="w-full mt-2 bg-linear-to-r from-[#FFBB00] to-[#A66A06] text-black font-bold hover:scale-[1.02] shadow-lg hover:shadow-[#FFBB00]/20 py-4 rounded-xl transition-all cursor-pointer"
            />
          </form>
        </div>

      </div>
    </section>
  )
}

// --- Componentes Auxiliares ---

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="p-3 border-2 border-[#FFBB00]/50 rounded-xl text-[#FFBB00] text-lg group-hover:bg-[#FFBB00] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,187,0,0.1)]">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg mb-0.5 drop-shadow-sm">{title}</h4>
        <Paragraph className="text-gray-300 font-normal text-base">{text}</Paragraph>
      </div>
    </div>
  )
}

function MinimalInput({ label, placeholder, type }) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-sm font-medium text-[#FFBB00] group-focus-within:text-white transition-colors">
        {label}
      </label>
      <input 
        type={type} 
        className="w-full bg-transparent border-b border-gray-600 text-gray-200 py-2 outline-none focus:border-[#FFBB00] transition-colors placeholder-gray-600"
        placeholder={placeholder}
      />
    </div>
  )
}

export { ContactFormSection }