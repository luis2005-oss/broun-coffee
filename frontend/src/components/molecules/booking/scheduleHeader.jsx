import { Title } from "../../atoms/titles";

function ScheduleHeader ({ icon: Icon, title, bgColor }) {
  return (
    <div className="flex items-center mb-4">
      <div className={`${bgColor} rounded-full p-3 mr-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <Title 
        level="h3"
        text={title}
        weight="bold"
      />
    </div>
  );
}

export {ScheduleHeader}