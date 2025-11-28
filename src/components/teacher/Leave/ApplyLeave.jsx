import { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, Fab, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Chip } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useDataStore } from '../../../store/dataStore';
import { useAuthStore } from '../../../store/authStore';

export default function ApplyLeave() {
  const { user } = useAuthStore();
  const { leaveApplications, addLeaveApplication } = useDataStore();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ type: 'Casual', fromDate: '', toDate: '', reason: '' });

  const myLeaves = leaveApplications.filter(l => l.applicantId === user.id);

  const handleSubmit = () => {
    addLeaveApplication({
      id: Date.now(),
      applicantId: user.id,
      leaveType: formData.type,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      reason: formData.reason,
      status: 'pending'
    });
    setOpen(false);
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '80vh' }}>
      <Typography variant="h5" gutterBottom>Leave History</Typography>
      
      <Grid container spacing={2}>
        {myLeaves.map(leave => (
          <Grid item xs={12} key={leave.id}>
            <Box p={2} bgcolor="white" borderRadius={2} boxShadow={1} display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">{leave.leaveType} Leave</Typography>
                <Typography variant="body2" color="textSecondary">{leave.fromDate} - {leave.toDate}</Typography>
                <Typography variant="caption">{leave.reason}</Typography>
              </Box>
              <Chip 
                label={leave.status} 
                color={leave.status === 'approved' ? 'success' : leave.status === 'rejected' ? 'error' : 'warning'} 
                size="small" 
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Fab color="primary" sx={{ position: 'fixed', bottom: 80, right: 20 }} onClick={() => setOpen(true)}>
        <Add />
      </Fab>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Apply for Leave</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField select label="Type" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Sick">Sick</MenuItem>
            </TextField>
            <TextField type="date" label="From" InputLabelProps={{shrink: true}} onChange={(e) => setFormData({...formData, fromDate: e.target.value})} />
            <TextField type="date" label="To" InputLabelProps={{shrink: true}} onChange={(e) => setFormData({...formData, toDate: e.target.value})} />
            <TextField label="Reason" multiline rows={3} onChange={(e) => setFormData({...formData, reason: e.target.value})} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Apply</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
