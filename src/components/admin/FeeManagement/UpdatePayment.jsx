import { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Divider } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';

export default function UpdatePayment({ open, onClose, fee }) {
  const { updateFee, addTransaction } = useDataStore();
  const [amount, setAmount] = useState('');
  const [mode, setMode] = useState('Cash');

  const handleSubmit = () => {
    const paid = Number(amount);
    const newPaid = fee.amountPaid + paid;
    const newBalance = fee.amount - newPaid;
    
    updateFee(fee.id, {
      amountPaid: newPaid,
      balance: newBalance,
      status: newBalance <= 0 ? 'paid' : 'partial'
    });

    addTransaction({
      id: `txn${Date.now()}`,
      studentId: fee.studentId,
      feeId: fee.id,
      amount: paid,
      paymentDate: new Date().toISOString().split('T')[0],
      paymentMode: mode,
      receiptNumber: `RCP${Date.now()}`
    });
    
    onClose();
  };

  if (!fee) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Payment</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} minWidth={300}>
          <Typography><strong>Fee Type:</strong> {fee.feeType}</Typography>
          <Typography><strong>Balance Due:</strong> ₹{fee.balance}</Typography>
          <Divider />
          <TextField label="Amount Paying" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          <TextField select label="Payment Mode" value={mode} onChange={e => setMode(e.target.value)} SelectProps={{native: true}}>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={Number(amount) > fee.balance}>Submit Payment</Button>
      </DialogActions>
    </Dialog>
  );
}
