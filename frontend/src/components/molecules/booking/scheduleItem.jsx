function ScheduleItem({ day, time, isLast, borderColor, timeColor }) {
  return (
    <div className={`flex justify-between items-center py-2 ${!isLast ? `border-b ${borderColor}` : ''}`}>
      <span className="font-semibold text-gray-700">{day}</span>
      <span className={`${timeColor} font-medium`}>{time}</span>
    </div>
  );
}

export {ScheduleItem}