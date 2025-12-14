import { useState } from "react"
import { Title } from "../../atoms/titles"
import { FormItem } from "../../molecules/formItem"
import { Buttons } from "../../molecules/booking/buttonsForm";
import { Description } from "./descriptionForm";

function Form() {
  const [clientName, setClinentName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [numberPeople, setNumberPeople] = useState('')
  const [reservationDate, setReservationDate] = useState('')
  const [reservationTime, setReservationTime] = useState('')
  const [reason, setReason] = useState('')
  const [specialRequeriment, setSpecialRequeriment] = useState('')
  const [message, setMessage] = useState('')

  
  const title = 'Reserva tu mesa y disfruta de una experiencia cómoda, sin espera. Nuestro equipo estará listo para recibirte.'
  
  const formFields = [
    {
      text: 'Nombre',
      htmlFor: 'clientName',
      name: 'clientName',
      value: clientName,
      type: 'text',
      onChange: (e) => setClinentName(e.target.value)
    },
    {
      text: 'Correo',
      htmlFor: 'email',
      name: 'email',
      value: email,
      type: 'email',
      onChange: (e) => setEmail(e.target.value)
    },

    [
      {
        text: 'Celular',
        htmlFor: 'phone',
        name: 'phone',
        value: phone,
        type: 'tel',
        onChange: (e) => setPhone(e.target.value)
      },
      {
        text: 'Nª Personas',
        htmlFor: 'peoples',
        name: 'peoples',
        value: numberPeople,
        type: 'number',
        onChange: (e) => setNumberPeople(e.target.value)
      }
    ],

    [
      {
        text: 'Fecha de la Reserva',
        htmlFor: 'date',
        name: 'date',
        value: reservationDate,
        type: 'date',
        onChange: (e) => setReservationDate (e.target.value)
      },
      {
        text: 'Hora de la reserva',
        htmlFor: 'time',
        name: 'time',
        value: reservationTime,
        type: 'time',
        onChange: (e) => setReservationTime(e.target.value)
      }
    ],

    [
      {
        text: 'Motivo',
        htmlFor: 'reason',
        name: 'reason',
        value: reason,
        type: 'select',
        onChange: (e) => setReason(e.target.value),
        options: [
          { text: 'Seleccionar...', value: '' },
          { text: 'Cumpleaños', value: 'cumpleanos' },
          { text: 'Aniversario', value: 'aniversario' },
          { text: 'Negocio', value: 'negocio' },
          { text: 'Casual', value: 'casual' }
        ]
      },
      {
        text: 'Requerimiento Especial',
        htmlFor: 'specialRequirement',
        name: 'specialRequirement',
        value: specialRequeriment,
        type: 'select',
        onChange: (e) => setSpecialRequeriment(e.target.value),
        options: [
          { text: 'Ninguno', value: '' },
          { text: 'Silla de bebé', value: 'silla-bebe' },
          { text: 'Accesibilidad', value: 'accesibilidad' },
          { text: 'Mesa especial', value: 'mesa-especial' }
        ]
      }
    ],

    {
      text: 'Mensaje',
      htmlFor: 'message',
      name: 'message',
      value:message,
      type: 'text',
      onChange: (e) => setMessage(e.target.value)
    }
  ];

  
  const handleSubmit = () => {
    console.log('Datos del formulario:', data);
    alert('Reserva enviada con éxito!');
  };
  return (
    <div className="flex flex-col gap-10 items-center mt-10 mb-10 z-[-1]">

      <Title
        level="h3"
        weight="bold"
        text={title}
        align="center"
      />

      <form className="relative flex flex-col gap-6 p-6 sm:p-10 bg-[#F7F7F7] w-[95%] sm:w-[85%] lg:w-[80%] mx-auto shadow shadow-black rounded">

        <Title
          level="h2"
          text={'Reserva ¡Aquí!'}
          align="center"
          weight="bold"
        />
        <img
          src="/IMG-RESERVS.png"
          alt="imagen de cafés"
          className="absolute w-25 sm:w-40 lg:w-60 top-2 right-2 animate-pulse"
        />
        <FormItem 
          inputVariant="secondary"
          formFields={formFields}
        />
        <Buttons handleSubmit={handleSubmit} />
        <Description/>
      </form>
    </div>
  )
}

export { Form }
