import { Paragraph } from "../../atoms/paragraph"

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

export {InfoItem}