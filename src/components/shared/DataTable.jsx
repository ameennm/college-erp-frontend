import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function DataTable({ columns, rows, onSearch, exportFilename, ...props }) {
  const [searchText, setSearchText] = useState('');

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${exportFilename}.xlsx`);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          size="small"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          sx={{ width: 300 }}
        />
        {exportFilename && (
          <Button variant="outlined" onClick={handleExport}>Export to Excel</Button>
        )}
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 50, page: 0 },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
        autoHeight
        disableRowSelectionOnClick
        {...props}
      />
    </Box>
  );
}
