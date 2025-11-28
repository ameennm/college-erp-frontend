import { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Button, TextField, Grid, Autocomplete } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

const steps = ['Exam Details', 'Course Selection', 'Room Allocation', 'Review'];

export default function ExamScheduler() {
  const { courses } = useDataStore();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}><TextField fullWidth label="Exam Name" /></Grid>
            <Grid item xs={6}><TextField fullWidth type="date" label="Start Date" InputLabelProps={{shrink: true}} /></Grid>
            <Grid item xs={6}><TextField fullWidth type="date" label="End Date" InputLabelProps={{shrink: true}} /></Grid>
          </Grid>
        );
      case 1:
        return (
          <Autocomplete
            multiple
            options={courses}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Select Courses" placeholder="Courses" />}
            sx={{ mt: 2 }}
          />
        );
      default: return <Typography mt={2}>Step content coming soon...</Typography>;
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Schedule New Exam</Typography>
      <Stepper activeStep={activeStep}>
        {steps.map(label => <Step key={label}><StepLabel>{label}</StepLabel></Step>)}
      </Stepper>
      
      <Box mt={2}>
        {getStepContent(activeStep)}
        
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} variant="contained">
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
