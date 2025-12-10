import { ScheduleItem } from "../../molecules/booking/scheduleItem";
import { ScheduleNote } from "../../molecules/booking/scheduleNote";
import { ScheduleHeader } from "../../molecules/booking/scheduleHeader";

function ScheduleCard({ 
  icon, 
  title, 
  bgGradient, 
  borderColor, 
  iconBgColor,
  scheduleItems,
  note 
}) {
  return (
    <div className={`${bgGradient} rounded-lg p-6 md:p-8 border ${borderColor} transition-transform hover:scale-105 duration-300`}>
      <ScheduleHeader 
        icon={icon} 
        title={title} 
        bgColor={iconBgColor} 
      />
      
      <div className="space-y-3">
        {scheduleItems.map((item, index) => (
          <ScheduleItem
            key={index}
            day={item.day}
            time={item.time}
            isLast={index === scheduleItems.length - 1}
            borderColor={item.borderColor}
            timeColor={item.timeColor}
          />
        ))}
      </div>
      
      <ScheduleNote note={note} />
    </div>
  );
}

export {ScheduleCard}