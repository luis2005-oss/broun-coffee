import { FaLocationDot } from "react-icons/fa6";
import { Link } from "../atoms/links";



function LocationNavbar () {
  const location = 'Jr. José Galves 610 - Celendín'
    return(
        <Link 
          target='_black'
          href='https://maps.app.goo.gl/vVZ61ztE83h5e7V2A'
          variant="danger"
        >
          <FaLocationDot className="text-red-500 "/>
          <small className="text-[#FFBB00] transition-all duration-300 hover:text-amber-300 text-amber-100">{location}</small>
        </Link>
    )
}

export {LocationNavbar}