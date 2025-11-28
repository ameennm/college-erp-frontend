import { Chip, Box, Typography, Button } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';
import DataTable from '../../shared/DataTable';
import StatsCard from '../../shared/StatsCard';
import { AttachMoney, MoneyOff } from '@mui/icons-material';

export default function FeeDashboard() {
  const { fees } = useDataStore();

  const totalDemand = fees.reduce((sum, f) => sum + f.amount, 0);
  const totalCollected = fees.reduce((sum, f) => sum + f.amountPaid, 0);
  const totalPending = totalDemand - totalCollected;

  const columns = [
    { field: 'studentId', headerName: 'Student ID', width: 150 },
    { field: 'feeType', headerName: 'Fee Type', width: 150 },
    { field: 'amount', headerName: 'Total', width: 120 },
    { field: 'balance', headerName: 'Balance', width: 120 },
    { field: 'dueDate', headerName: 'Due Date', width: 150 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 120,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={params.value === 'paid' ? 'success' : params.value === 'pending' ? 'error' : 'warning'} 
          size="small" 
        />
      )
    }
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Fee Management</Typography>
        <Button variant="contained">Add Fee Demand</Button>
      </Box>

      <Box display="flex" gap={3} mb={4}>
        <Box flex={1}><StatsCard title="Total Demand" value={`₹${(totalDemand/100000).toFixed(2)}L`} icon={<AttachMoney />} color="#4A90E2" /></Box>
        <Box flex={1}><StatsCard title="Collected" value={`₹${(totalCollected/100000).toFixed(2)}L`} icon={<AttachMoney />} color="#50C878" /></Box>
        <Box flex={1}><StatsCard title="Pending" value={`₹${(totalPending/100000).toFixed(2)}L`} icon={<MoneyOff />} color="#FF6B6B" /></Box>
      </Box>

      <Typography variant="h6" gutterBottom>Recent Fee Records</Typography>
      <DataTable 
        rows={fees} 
        columns={columns} 
        exportFilename="Fee_Report" 
      />
    </Box>
  );
}
