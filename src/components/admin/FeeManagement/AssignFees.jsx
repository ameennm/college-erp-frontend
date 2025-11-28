import { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Autocomplete } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function AssignFees({ open, onClose }) {
  const { students, addFee } = useDataStore();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({ type: '', amount: '', dueDate: '' });

  const handleSubmit = () => {
    if (selectedStudent) {
      addFee({
        id: `fee${Date.now()}`,
        studentId: selectedStudent.id,
        feeType: formData.type,
        amount: Number(formData.amount),
        amountPaid: 0,
        balance: Number(formData.amount),
        dueDate: formData.dueDate,
        status: 'pending'
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Assign Fee</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <Autocomplete
            options={students}
            getOptionLabel={(option) => `${option.rollNumber} - ${option.fullName}`}
            onChange={(_, val) => setSelectedStudent(val)}
            renderInput={(params) => <TextField {...params} label="Select Student" />}
          />
          <TextField label="Fee Type" onChange={e => setFormData({...formData, type: e.target.value})} />
          <TextField label="Amount" type="number" onChange={e => setFormData({...formData, amount: e.target.value})} />
          <TextField label="Due Date" type="date" InputLabelProps={{shrink: true}} onChange={e => setFormData({...formData, dueDate: e.target.value})} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Assign</Button>
      </DialogActions>
    </Dialog>
  );
}
