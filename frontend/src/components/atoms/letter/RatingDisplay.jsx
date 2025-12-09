import { FaStar } from "react-icons/fa";

function RatingDisplay({ rating }) {
  return (
    <span className="flex items-center gap-1">
      <strong>{rating}</strong>
      <FaStar />
    </span>
  );
}

export { RatingDisplay };