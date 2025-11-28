import { Chip, IconButton, Box, Typography, Button } from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { useDataStore } from '../../../store/dataStore';
import DataTable from '../../shared/DataTable';

export default function LeaveList() {
  const { leaveApplications, updateLeaveApplication } = useDataStore();

  const handleAction = (id, status) => {
    updateLeaveApplication(id, { status });
  };

  const columns = [
    { field: 'applicantId', headerName: 'Applicant ID', width: 150 },
    { field: 'leaveType', headerName: 'Type', width: 120 },
    { field: 'fromDate', headerName: 'From', width: 120 },
    { field: 'reason', headerName: 'Reason', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (p) => (
        <Chip label={p.value} color={p.value === 'approved' ? 'success' : p.value === 'rejected' ? 'error' : 'warning'} />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (p) => p.row.status === 'pending' && (
        <Box>
          <IconButton color="success" onClick={() => handleAction(p.id, 'approved')}><Check /></IconButton>
          <IconButton color="error" onClick={() => handleAction(p.id, 'rejected')}><Close /></IconButton>
        </Box>
      )
    }
  ];

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>Leave Management</Typography>
      <DataTable rows={leaveApplications} columns={columns} />
    </Box>
  );
}
