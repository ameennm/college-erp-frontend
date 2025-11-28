import { Box, Typography, Paper } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function MyTimetable() {
  const { timetable, timeSlots } = useDataStore();
  const days = [1, 2, 3, 4, 5];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>My Weekly Timetable</Typography>
      <Paper sx={{ overflowX: 'auto', p: 2 }}>
        <Box display="grid" gridTemplateColumns="80px repeat(5, 1fr)" gap={1} minWidth={800}>
          <Box></Box>
          {days.map(d => <Box key={d} fontWeight="bold" textAlign="center">Day {d}</Box>)}
          
          {timeSlots.map(slot => (
            <>
              <Box key={`header-${slot.id}`} fontSize="0.8rem" py={1}>{slot.startTime}</Box>
              {days.map(day => {
                const entry = timetable.find(t => t.dayOrder === day && t.timeSlotId === slot.id); // Mock filter for current teacher
                return (
                  <Box 
                    key={`${day}-${slot.id}`} 
                    bgcolor={entry ? 'primary.light' : 'grey.50'} 
                    p={1} 
                    borderRadius={1}
                    fontSize="0.8rem"
                    textAlign="center"
                  >
                    {entry ? (
                      <>
                        <strong>{entry.courseId}</strong>
                        <br/>
                        {entry.batchId}
                      </>
                    ) : ''}
                  </Box>
                )
              })}
            </>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
