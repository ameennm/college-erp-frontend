import { Box, Typography, Paper } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function MyTimetable() {
  const { timetable } = useDataStore();
  // Filter logic for student's batch would go here
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom>My Timetable</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {/* Mock Day View */}
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box minWidth={60}>
            <Typography variant="h6">09:00</Typography>
            <Typography variant="caption" color="textSecondary">AM</Typography>
          </Box>
          <Box flex={1} p={1} bgcolor="primary.light" borderRadius={1} borderLeft="4px solid #4A90E2">
            <Typography variant="subtitle1" fontWeight="bold">Data Structures</Typography>
            <Typography variant="body2">Room 301 • Dr. Smith</Typography>
          </Box>
        </Paper>
        
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box minWidth={60}>
            <Typography variant="h6">10:00</Typography>
            <Typography variant="caption" color="textSecondary">AM</Typography>
          </Box>
          <Box flex={1} p={1} bgcolor="secondary.light" borderRadius={1} borderLeft="4px solid #50C878">
            <Typography variant="subtitle1" fontWeight="bold">DBMS</Typography>
            <Typography variant="body2">Room 301 • Dr. Priya</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
