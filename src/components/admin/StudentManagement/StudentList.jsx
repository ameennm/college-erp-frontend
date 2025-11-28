import { Chip, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useDataStore } from '../../../store/dataStore';
import DataTable from '../../shared/DataTable';

export default function StudentList() {
  const { students } = useDataStore();

  const columns = [
    { field: 'rollNumber', headerName: 'Roll No', width: 150 },
    { field: 'fullName', headerName: 'Name', width: 200 },
    { field: 'batchId', headerName: 'Batch', width: 150 }, // Ideally map ID to Name
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'active' ? 'success' : 'default'}
          size="small"
        />
      )
    },
    {
      field: 'totalAttendancePercentage',
      headerName: 'Attendance %',
      width: 150,
      valueGetter: (value) => `${value?.toFixed(1) || 0}%`
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: () => (
        <>
          <IconButton size="small"><Edit /></IconButton>
          <IconButton size="small"><Delete /></IconButton>
        </>
      )
    }
  ];

  return (
    <DataTable
      rows={students}
      columns={columns}
      exportFilename="Students_List"
    />
  );
}
