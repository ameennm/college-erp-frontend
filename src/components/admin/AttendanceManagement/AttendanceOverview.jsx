import { Box, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useDataStore } from '../../../store/dataStore';
import ColorCodedGrid from '../../shared/ColorCodedGrid';

export default function AttendanceOverview() {
  const { students, attendance } = useDataStore();
  const [tab, setTab] = useState(0);

  // Group by status
  const stats = {
    present: attendance.filter(a => a.status === 'present').length,
    absent: attendance.filter(a => a.status === 'absent').length,
    late: attendance.filter(a => a.status === 'late').length
  };

  // Transform for grid
  const currentAttendance = attendance.reduce((acc, curr) => {
    acc[curr.studentId] = curr.status;
    return acc;
  }, {});

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Attendance Overview</Typography>
      
      <Box display="flex" gap={4} mb={3}>
        <Typography color="success.main" variant="h6">Present: {stats.present}</Typography>
        <Typography color="error.main" variant="h6">Absent: {stats.absent}</Typography>
        <Typography color="warning.main" variant="h6">Late: {stats.late}</Typography>
      </Box>

      <ColorCodedGrid students={students} attendance={currentAttendance} editMode={false} />
    </Box>
  );
}
