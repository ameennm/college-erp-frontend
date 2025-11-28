import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function ExportButton({ data, filename, label = "Export Excel" }) {
  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <Button
      variant="contained"
      startIcon={<Download />}
      onClick={handleExport}
    >
      {label}
    </Button>
  );
}
