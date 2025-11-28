import { Box, Typography, Paper, Grid } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function TimetableBuilder() {
  const { timeSlots, dayOrders, timetable } = useDataStore();

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Timetable Builder</Typography>
      
      <Paper sx={{ overflowX: 'auto', p: 2 }}>
        <Box display="grid" gridTemplateColumns="100px repeat(8, 1fr)" gap={1} minWidth={1000}>
          <Box fontWeight="bold">Day / Slot</Box>
          {timeSlots.map(slot => (
            <Box key={slot.id} textAlign="center" fontWeight="bold">
              {slot.startTime}
            </Box>
          ))}

          {dayOrders.slice(0, 5).map(day => (
            <>
              <Box key={day.id} fontWeight="bold">Day {day.dayNumber}</Box>
              {timeSlots.map(slot => {
                const entry = timetable.find(t => t.dayOrder === day.dayNumber && t.timeSlotId === slot.id);
                return (
                  <Box 
                    key={slot.id} 
                    p={1} 
                    bgcolor={entry ? "primary.light" : "grey.100"} 
                    borderRadius={1} 
                    textAlign="center"
                    fontSize="0.8rem"
                  >
                    {entry ? (
                      <>
                        <strong>{entry.courseId}</strong>
                        <br/>
                        {entry.roomNumber}
                      </>
                    ) : '-'}
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
