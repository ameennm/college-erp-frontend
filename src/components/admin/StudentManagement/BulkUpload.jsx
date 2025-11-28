import { useState } from 'react';
import { Box, Button, Typography, Paper, Alert } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import DataTable from '../../shared/DataTable';

export default function BulkUpload() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Mock parsing CSV
    const mockParsed = [
      { id: 1, rollNumber: 'CS24001', name: 'Alice', batch: 'CS-A-2024', status: 'Valid' },
      { id: 2, rollNumber: 'CS24002', name: 'Bob', batch: 'CS-A-2024', status: 'Valid' },
      { id: 3, rollNumber: 'CS24001', name: 'Charlie', batch: 'CS-A-2024', status: 'Error: Duplicate Roll No' },
    ];
    setData(mockParsed);
  };

  const columns = [
    { field: 'rollNumber', headerName: 'Roll No', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'status', headerName: 'Status', width: 200, renderCell: (p) => (
        <Typography color={p.value.includes('Error') ? 'error' : 'success.main'}>{p.value}</Typography>
    )}
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Bulk Upload Students</Typography>
      
      <Box display="flex" gap={2} mb={3}>
        <Button variant="outlined" startIcon={<CloudUpload />}>
          Download Template
        </Button>
        <Button variant="contained" component="label" startIcon={<CloudUpload />}>
          Upload CSV
          <input type="file" hidden accept=".csv" onChange={handleFileUpload} />
        </Button>
      </Box>

      {data.length > 0 && (
        <Paper sx={{ p: 2 }}>
          <DataTable rows={data} columns={columns} />
          <Box mt={2} display="flex" justify="flex-end">
            <Button variant="contained" color="success">Import Valid Records</Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
