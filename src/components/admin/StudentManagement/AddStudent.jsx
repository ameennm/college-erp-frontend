import { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stepper, Step, StepLabel, Grid, MenuItem } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

const steps = ['Personal Details', 'Academic Details', 'Guardian Details', 'Review'];

export default function AddStudent({ open, onClose }) {
  const { addStudent, batches } = useDataStore();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', gender: '', address: '',
    rollNumber: '', admissionNumber: '', batchId: '', admissionDate: '',
    fatherName: '', fatherPhone: '', motherName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = () => {
    addStudent({
      id: `s${Date.now()}`,
      userId: `u${Date.now()}`,
      role: 'student',
      fullName: `${formData.firstName} ${formData.lastName}`,
      ...formData,
      status: 'active',
      totalAttendancePercentage: 0
    });
    onClose();
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}><TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth type="date" label="DOB" name="dob" InputLabelProps={{shrink: true}} value={formData.dob} onChange={handleChange} /></Grid>
            <Grid item xs={6}>
              <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}><TextField fullWidth label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Admission No" name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} /></Grid>
            <Grid item xs={6}>
              <TextField select fullWidth label="Batch" name="batchId" value={formData.batchId} onChange={handleChange}>
                {batches.map(b => <MenuItem key={b.id} value={b.id}>{b.name}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={6}><TextField fullWidth type="date" label="Admission Date" name="admissionDate" InputLabelProps={{shrink: true}} value={formData.admissionDate} onChange={handleChange} /></Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}><TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} /></Grid>
            <Grid item xs={6}><TextField fullWidth label="Father Phone" name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Mother Name" name="motherName" value={formData.motherName} onChange={handleChange} /></Grid>
          </Grid>
        );
      case 3:
        return (
          <Box mt={2}>
            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Roll No:</strong> {formData.rollNumber}</p>
            <p><strong>Batch:</strong> {batches.find(b => b.id === formData.batchId)?.name}</p>
          </Box>
        );
      default: return 'Unknown step';
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add New Student</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => <Step key={label}><StepLabel>{label}</StepLabel></Step>)}
        </Stepper>
        {getStepContent(activeStep)}
      </DialogContent>
      <DialogActions>
        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
