import { Chip, IconButton, Box, Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { useDataStore } from '../../../store/dataStore';
import DataTable from '../../shared/DataTable';

export default function AdmissionsList() {
  const { admissions } = useDataStore();

  const columns = [
    { field: 'applicantName', headerName: 'Applicant Name', width: 200 },
    { field: 'appliedCourse', headerName: 'Course', width: 200 },
    { field: 'status', headerName: 'Status', width: 150, renderCell: (p) => <Chip label={p.value} color="primary" variant="outlined" /> },
    { field: 'interviewDate', headerName: 'Interview Date', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: () => <IconButton><Visibility /></IconButton>
    }
  ];

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography variant="h5" gutterBottom>Admissions</Typography>
      <DataTable rows={admissions} columns={columns} />
    </Box>
  );
}
