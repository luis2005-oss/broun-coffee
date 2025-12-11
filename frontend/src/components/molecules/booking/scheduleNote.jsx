function ScheduleNote({ note }) {
  return (
    <div className="mt-6 p-4 bg-white rounded-md">
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Nota:</span> {note}
      </p>
    </div>
  );
}

export {ScheduleNote}