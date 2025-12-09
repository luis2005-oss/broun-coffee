import { MdBusinessCenter, MdAccessTime } from 'react-icons/md';
import { Title } from '../../atoms/titles';
import { Paragraph } from '../../atoms/paragraph';

function Schedules() {
  const title = 'Horarios de Atención';
  const description = 'Estamos disponibles para atenderte en los siguientes horarios. Nuestro equipo está comprometido con brindarte el mejor servicio.';

  return (
    <section id="horarios" className="py-12 px-4 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <Title
            level="h2"
            text={title}
            align="center"
            weight="bold"
          />
          <Paragraph
            text={description}
            className="text-center text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base" />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-6 md:p-8 border border-blue-200 transition-transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <MdBusinessCenter className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Horario de Oficina</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                  <span className="text-blue-700 font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-300">
                  <span className="font-semibold text-gray-700">Sábados</span>
                  <span className="text-blue-700 font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-700">Domingos</span>
                  <span className="text-red-600 font-medium">Cerrado</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-md">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Nota:</span> Atención presencial y telefónica durante estos horarios.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 md:p-8 border border-green-200 transition-transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <MdAccessTime className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Horario 24/7</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-green-300">
                  <span className="font-semibold text-gray-700">Todos los días</span>
                  <span className="text-green-700 font-medium">24 Horas</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-300">
                  <span className="font-semibold text-gray-700">Línea directa</span>
                  <span className="text-green-700 font-medium">Siempre activa</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-700">Respuesta</span>
                  <span className="text-green-700 font-medium">Inmediata</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-md">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Disponible:</span> Chat en línea, WhatsApp y correo electrónico 24/7.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export { Schedules };