export const detectTimetableConflicts = (entry, existingTimetable) => {
  const conflicts = [];
  
  // Batch conflict
  const batchConflict = existingTimetable.find(t => 
    t.batchId === entry.batchId &&
    t.dayOrder === entry.dayOrder &&
    t.timeSlotId === entry.timeSlotId &&
    t.id !== entry.id
  );
  if (batchConflict) {
    conflicts.push({
      type: 'batch',
      message: `Batch already has ${batchConflict.courseId} at this time`,
      details: batchConflict
    });
  }
  
  // Teacher conflict
  const teacherConflict = existingTimetable.find(t =>
    t.teacherId === entry.teacherId &&
    t.dayOrder === entry.dayOrder &&
    t.timeSlotId === entry.timeSlotId &&
    t.id !== entry.id
  );
  if (teacherConflict) {
    conflicts.push({
      type: 'teacher',
      message: `Teacher is already assigned to ${teacherConflict.batchId} at this time`,
      details: teacherConflict
    });
  }
  
  // Room conflict
  if (entry.roomNumber) {
    const roomConflict = existingTimetable.find(t =>
      t.roomNumber === entry.roomNumber &&
      t.dayOrder === entry.dayOrder &&
      t.timeSlotId === entry.timeSlotId &&
      t.id !== entry.id
    );
    if (roomConflict) {
      conflicts.push({
        type: 'room',
        message: `Room ${entry.roomNumber} is already booked for ${roomConflict.batchId}`,
        details: roomConflict
      });
    }
  }
  
  return conflicts;
};
