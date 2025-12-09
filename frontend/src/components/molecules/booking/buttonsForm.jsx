import { Button } from "../../atoms/buttons"
import { Link } from "../../atoms/links"

function Buttons({ handleSubmit }) {
  return (
    <div
      className="
        flex 
        flex-nowrap 
        justify-around
        gap-4
        mt-6 
        w-full
        no-scrollbar
      "
    >
      <Button
        variant="secondary"
        text={'Reservar'}
        onClick={handleSubmit}
        className="font-semibold "
      />

      <Link
        href='#schedules'
        variant="primary"
        text={'Ver Horarios'}
        className="text-white text-base "
      />
    </div>
  )
}

export { Buttons }
