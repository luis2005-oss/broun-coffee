import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"
import { Title } from "../../atoms/titles"
import { Button } from "../../atoms/buttons"
import { Paragraph } from "../../atoms/paragraph"
import { InfoItem } from "../../molecules/contact/infoItem"
import { MinimalInput } from "../../molecules/contact/minimalInput"
import { useState } from "react"
import { messageValidator } from "../../../validations/validationsMessage"
import { apiFetch } from "../../../helpers/apiFetch"

function ContactFormSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      //  Validación
      await messageValidator.validateAsync({
        name,
        email,
        phone,
        message
      })

      // Envío
      const data = await apiFetch('/contact', 'POST', {
        name,
        email,
        phone,
        message
      })

      setSuccess(data.message || 'Mensaje enviado con éxito')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

    } catch (error) {
      console.error(error)
      setError(error.message || 'Ocurrió un error al enviar el mensaje')
    }
  }

  return (
    <section className="relative w-full py-20 px-4 -mt-20 z-20">
      <div
        className="max-w-6xl mx-auto bg-[#121212]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,187,0,0.2)] rounded-xl overflow-hidden border border-[#FFBB00]/50 grid grid-cols-1 lg:grid-cols-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="relative p-10 md:p-14 flex flex-col justify-between overflow-hidden">

          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 transition-transform duration-700 hover:scale-105"></div>

          <div className="absolute inset-0 bg-linera-to-b from-[#06141F]/80 via-[#06141F]/60 to-[#000000]/90"></div>

          <div className="relative z-10">
            {/* Título del panel - Aparece con fade */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Title
                level="h3"
                text="Información de Contacto"
                variant="secondary"
                className="font-joti text-3xl mb-3 drop-shadow-md"
              />
              <Paragraph className="text-gray-200 font-light mb-12 text-lg drop-shadow-sm">
                Encuéntranos en el corazón de la ciudad o escríbenos un mensaje.
              </Paragraph>
            </div>

            {/* Items de información - Aparecen en cascada */}
            <div className="space-y-8">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <InfoItem icon={<FaMapMarkerAlt />} title="Dirección" text="Jr. José Galves 610 - Celendín" />
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <InfoItem icon={<FaPhoneAlt />} title="Llámanos" text="+51 929 224 940" />
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <InfoItem icon={<FaEnvelope />} title="Escríbenos" text="contacto@brouncoffee.com" />
              </div>
            </div>
          </div>

          {/* Horario - Aparece al final */}
          <div
            className="relative z-10 mt-12"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <InfoItem icon={<FaClock />} title="Horario" text="Lun - Dom: 7:00 AM - 10:00 PM" />
          </div>
        </div>

        {/* Panel derecho - Formulario */}
        <div className="p-10 md:p-14 bg-[#18181b]">

          {/* Título del formulario */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {error && <span className="text-red-500 text-sm">{error}</span>}
            {success && <span className="text-green-600 text-sm">{success}</span>}

            <Title
              level="h3"
              text="Envíanos un Mensaje"
              className="text-white font-bold text-2xl mb-2"
            />
            <p className="text-gray-400 mb-8 text-sm">Comunícate con nosotros y te responderemos a la brevedad.</p>
          </div>

          {/* Formulario */}
          <form 
            className="flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <MinimalInput 
                label="Nombre Completo" 
                placeholder="Ej: Wesley Voltran" 
                type="text"
                value={name}
                onChange={(e) =>{
                  e.preventDefault()
                  setName(e.target.value)
                }}
                />
              <MinimalInput 
                label="Correo Electrónico" 
                placeholder="WeVo@email.com" 
                type="email"
                value={email}
                onChange={(e) =>{
                  e.preventDefault()
                  setEmail(e.target.value)
                }} 
                />
            </div>

            {/* Teléfono */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <MinimalInput 
                label="Teléfono" 
                placeholder="Ej: 999 999 999" 
                type="text" 
                value={phone}
                onChange={(e) =>{
                  e.preventDefault()
                  setPhone(e.target.value)
                }}
                />
            </div>

            {/* Mensaje */}
            <div
              className="flex flex-col gap-2 group"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <label className="text-sm font-medium text-[#FFBB00] group-focus-within:text-white transition-colors">Mensaje</label>
              <textarea
                className="w-full bg-[#202023] border-b border-gray-600 focus:border-[#FFBB00] text-gray-200 py-2 outline-none resize-none transition-colors h-32 placeholder-gray-600"
                placeholder="Escribe aquí tu mensaje..."
                value={message}
                onChange={(e) =>{
                  e.preventDefault()
                  setMessage(e.target.value)
                }}
              ></textarea>
            </div>

            {/* Botón */}
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <Button
                type='submit'
                text="Enviar Mensaje"
                className="w-full mt-2 bg-linear-to-r from-[#FFBB00] to-[#A66A06] text-black font-bold hover:scale-[1.02] shadow-lg hover:shadow-[#FFBB00]/20 py-4 rounded-xl transition-all cursor-pointer"
              />
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
export { ContactFormSection }