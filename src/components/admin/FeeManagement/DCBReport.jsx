import { Box, Typography } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';
import DataTable from '../../shared/DataTable';

export default function DCBReport() {
  const { fees } = useDataStore();

  // Aggregate by fee type
  const aggregated = fees.reduce((acc, fee) => {
    if (!acc[fee.feeType]) {
      acc[fee.feeType] = { id: fee.feeType, type: fee.feeType, demand: 0, collection: 0, balance: 0 };
    }
    acc[fee.feeType].demand += fee.amount;
    acc[fee.feeType].collection += fee.amountPaid;
    acc[fee.feeType].balance += fee.balance;
    return acc;
  }, {});

  const rows = Object.values(aggregated);

  const columns = [
    { field: 'type', headerName: 'Fee Type', width: 200 },
    { field: 'demand', headerName: 'Total Demand', width: 150 },
    { field: 'collection', headerName: 'Collection', width: 150 },
    { field: 'balance', headerName: 'Balance', width: 150 },
    { 
      field: 'percentage', 
      headerName: 'Collection %', 
      width: 150, 
      valueGetter: (params) => `${((params.row.collection / params.row.demand) * 100).toFixed(1)}%` 
    }
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>DCB Report (Demand-Collection-Balance)</Typography>
      <DataTable rows={rows} columns={columns} exportFilename="DCB_Report" />
    </Box>
  );
}
