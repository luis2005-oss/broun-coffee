
import { MdBusinessCenter, MdAccessTime } from 'react-icons/md';
import { Title } from '../../atoms/titles';
import { Paragraph } from '../../atoms/paragraph';
import { ScheduleCard } from './scheduleCard';

function Schedules() {
  const title = 'Horarios de Atención';
  const description = 'Estamos disponibles para atenderte en los siguientes horarios. Nuestro equipo está comprometido con brindarte el mejor servicio.';

  const officeSchedule = [
    { day: 'Lunes - Viernes', time: '8:00 AM - 6:00 PM', borderColor: 'border-blue-300', timeColor: 'text-blue-700' },
    { day: 'Sábados', time: '9:00 AM - 2:00 PM', borderColor: 'border-blue-300', timeColor: 'text-blue-700' },
    { day: 'Domingos', time: 'Cerrado', borderColor: 'border-blue-300', timeColor: 'text-red-600' }
  ];

  const emergencySchedule = [
    { day: 'Todos los días', time: '24 Horas', borderColor: 'border-green-300', timeColor: 'text-green-700' },
    { day: 'Línea directa', time: 'Siempre activa', borderColor: 'border-green-300', timeColor: 'text-green-700' },
    { day: 'Respuesta', time: 'Inmediata', borderColor: 'border-green-300', timeColor: 'text-green-700' }
  ];

  return (
    <section id="schedules" className="py-12 px-4 md:py-16 lg:py-20 bg-gray-50">
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
            className="text-center text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            <ScheduleCard
              icon={MdBusinessCenter}
              title="Horario de Oficina"
              bgGradient="bg-gradient-to-br from-blue-50 to-blue-100"
              borderColor="border-blue-200"
              iconBgColor="bg-blue-500"
              scheduleItems={officeSchedule}
              note="Atención presencial y telefónica durante estos horarios."
            />

            <ScheduleCard
              icon={MdAccessTime}
              title="Horario 24/7"
              bgGradient="bg-gradient-to-br from-green-50 to-green-100"
              borderColor="border-green-200"
              iconBgColor="bg-green-500"
              scheduleItems={emergencySchedule}
              note="Chat en línea, WhatsApp y correo electrónico 24/7."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export {Schedules}