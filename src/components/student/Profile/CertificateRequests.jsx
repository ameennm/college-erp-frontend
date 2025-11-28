import { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogContent, TextField, Chip, MenuItem } from '@mui/material';
import DataTable from '../../shared/DataTable';

export default function CertificateRequests() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('Bonafide');

  const rows = [
    { id: 1, type: 'Bonafide', date: '2024-11-20', status: 'Issued' }
  ];

  const columns = [
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'date', headerName: 'Request Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 150, renderCell: (p) => <Chip label={p.value} color="success" /> }
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Certificate Requests</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Request New</Button>
      </Box>
      <DataTable rows={rows} columns={columns} />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} minWidth={300}>
            <TextField select label="Certificate Type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="Bonafide">Bonafide</MenuItem>
              <MenuItem value="TC">Transfer Certificate</MenuItem>
              <MenuItem value="Conduct">Conduct Certificate</MenuItem>
            </TextField>
            <TextField label="Reason" multiline rows={3} />
            <Button variant="contained" onClick={() => setOpen(false)}>Submit Request</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
