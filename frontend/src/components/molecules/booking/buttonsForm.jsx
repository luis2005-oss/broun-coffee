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
        type='submit'
        onClick={handleSubmit}
        className="font-semibold "

      />

      <Link
        href='#schedules'
        variant="button"
        text={'Ver Horarios'}
        className="font-semibold "
      />
    </div>
  )
}

export { Buttons }
