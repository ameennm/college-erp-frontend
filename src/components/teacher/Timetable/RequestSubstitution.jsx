import { useState } from 'react';
import { Box, Typography, TextField, Button, Autocomplete, Snackbar } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function RequestSubstitution() {
  const { timetable } = useDataStore();
  const [open, setOpen] = useState(false);

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Request Substitution</Typography>
      <Box display="flex" flexDirection="column" gap={2} maxWidth={500}>
        <TextField type="date" label="Date" InputLabelProps={{shrink: true}} />
        <Autocomplete
          options={timetable} // Mock filter needed
          getOptionLabel={(opt) => `${opt.courseId} (${opt.timeSlotId})`}
          renderInput={(params) => <TextField {...params} label="Select Class" />}
        />
        <TextField label="Reason" multiline rows={3} />
        <Button variant="contained" onClick={() => setOpen(true)}>Submit Request</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Request Sent" />
    </Box>
  );
}
