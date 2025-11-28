export const calculateAttendancePercentage = (attendanceRecords, status = 'present') => {
  if (!attendanceRecords || attendanceRecords.length === 0) return 0;
  
  const present = attendanceRecords.filter(a => a.status === status).length;
  return ((present / attendanceRecords.length) * 100).toFixed(2);
};

export const calculateOverallAttendance = (studentId, allAttendance) => {
  const studentAttendance = allAttendance.filter(a => a.studentId === studentId);
  return calculateAttendancePercentage(studentAttendance);
};

export const calculateSubjectWiseAttendance = (studentId, courseId, allAttendance, timetable) => {
  const courseTimetableIds = timetable.filter(t => t.courseId === courseId).map(t => t.id);
  const courseAttendance = allAttendance.filter(a => 
    a.studentId === studentId && courseTimetableIds.includes(a.timetableId)
  );
  
  return {
    total: courseAttendance.length,
    present: courseAttendance.filter(a => a.status === 'present').length,
    absent: courseAttendance.filter(a => a.status === 'absent').length,
    late: courseAttendance.filter(a => a.status === 'late').length,
    percentage: calculateAttendancePercentage(courseAttendance)
  };
};
