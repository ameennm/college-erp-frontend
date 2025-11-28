import { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, Card, CardContent, Chip } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';
import ColorCodedGrid from '../../shared/ColorCodedGrid';
import { Edit, Check, Info } from '@mui/icons-material';

export default function MarkAttendance() {
  const { students, attendance, addAttendance } = useDataStore();
  const [selectedBatch, setSelectedBatch] = useState('batch001');
  const [editMode, setEditMode] = useState(false);
  const [currentAttendance, setCurrentAttendance] = useState({});

  // Filter students for batch
  const batchStudents = students.filter(s => s.batchId === selectedBatch);

  // Load initial state (mock: all present)
  useState(() => {
    const initial = {};
    batchStudents.forEach(s => initial[s.id] = 'present');
    setCurrentAttendance(initial);
  }, [selectedBatch]);

  const toggleStatus = (studentId) => {
    const statuses = ['present', 'absent', 'late', 'letoff'];
    const current = currentAttendance[studentId] || 'present';
    const next = statuses[(statuses.indexOf(current) + 1) % statuses.length];
    setCurrentAttendance(prev => ({ ...prev, [studentId]: next }));
  };

  const handleSubmit = () => {
    alert('Attendance Submitted Successfully! ✅');
    setEditMode(false);
  };

  // Calculate stats
  const stats = {
    total: batchStudents.length,
    present: Object.values(currentAttendance).filter(s => s === 'present').length,
    absent: Object.values(currentAttendance).filter(s => s === 'absent').length,
    late: Object.values(currentAttendance).filter(s => s === 'late').length
  };

  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Mark Attendance
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track and manage student attendance for your classes
        </Typography>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'stretch', sm: 'center' },
              gap: 2,
              mb: 3
            }}
          >
            <TextField
              select
              label="Select Class"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              sx={{
                minWidth: { xs: '100%', sm: 250 },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
              size="medium"
            >
              <MenuItem value="batch001">CS-A-2023</MenuItem>
              <MenuItem value="batch002">CS-B-2023</MenuItem>
            </TextField>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                onClick={() => setEditMode(!editMode)}
                variant={editMode ? "outlined" : "contained"}
                startIcon={editMode ? <Check /> : <Edit />}
                sx={{
                  minWidth: 120,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                {editMode ? 'Cancel' : 'Edit Mode'}
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                disabled={!editMode}
                startIcon={<Check />}
                sx={{
                  minWidth: 120,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  background: editMode ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)' : undefined,
                  '&:hover': {
                    background: editMode ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)' : undefined
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          {/* Stats Row */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              p: 2,
              bgcolor: '#F8FAFC',
              borderRadius: 2,
              mb: 3
            }}
          >
            <Chip
              label={`Total: ${stats.total}`}
              sx={{
                bgcolor: '#6366F1',
                color: 'white',
                fontWeight: 600,
                px: 1
              }}
            />
            <Chip
              label={`Present: ${stats.present}`}
              sx={{
                bgcolor: '#10B981',
                color: 'white',
                fontWeight: 600,
                px: 1
              }}
            />
            <Chip
              label={`Absent: ${stats.absent}`}
              sx={{
                bgcolor: '#EF4444',
                color: 'white',
                fontWeight: 600,
                px: 1
              }}
            />
            <Chip
              label={`Late: ${stats.late}`}
              sx={{
                bgcolor: '#F59E0B',
                color: 'white',
                fontWeight: 600,
                px: 1
              }}
            />
          </Box>

          {/* Info message */}
          {editMode && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                bgcolor: '#EFF6FF',
                borderRadius: 2,
                border: '1px solid #BFDBFE',
                mb: 3
              }}
            >
              <Info sx={{ color: '#3B82F6', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#1E40AF' }}>
                Click on student cards to toggle attendance status
              </Typography>
            </Box>
          )}

          <ColorCodedGrid
            students={batchStudents}
            attendance={currentAttendance}
            onToggle={toggleStatus}
            editMode={editMode}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
