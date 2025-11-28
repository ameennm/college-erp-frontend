import { Box, Typography, Button } from '@mui/material';
import DataTable from '../../shared/DataTable';

export default function MarksView() {
  const rows = [
    { id: 1, subject: 'Data Structures', ia1: '18/20', ia2: '19/20', ia3: '17/20', total: '54/60' },
    { id: 2, subject: 'DBMS', ia1: '15/20', ia2: '18/20', ia3: '16/20', total: '49/60' }
  ];

  const columns = [
    { field: 'subject', headerName: 'Subject', width: 200 },
    { field: 'ia1', headerName: 'IA 1', width: 100 },
    { field: 'ia2', headerName: 'IA 2', width: 100 },
    { field: 'ia3', headerName: 'IA 3', width: 100 },
    { field: 'total', headerName: 'Total', width: 100, renderCell: (p) => <strong>{p.value}</strong> }
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Internal Assessment</Typography>
      <DataTable rows={rows} columns={columns} />
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>External Results</Typography>
        <Typography color="textSecondary">Results not published yet.</Typography>
      </Box>
    </Box>
  );
}
