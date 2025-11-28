import { Box, Paper, Typography, Tooltip } from '@mui/material';

export default function ColorCodedGrid({ students, attendance, onToggle, editMode }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return '#50C878';
      case 'absent': return '#FF6B6B';
      case 'late': return '#FFA500';
      case 'letoff': return '#4A90E2';
      default: return '#E0E0E0';
    }
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(80px, 1fr))" gap={2}>
      {students.map(student => {
        const status = attendance[student.id] || 'present';
        const fullName = student.fullName || student.name || 'Unknown';
        const firstName = fullName.split(' ')[0];
        
        return (
          <Tooltip key={student.id} title={fullName}>
            <Paper
              onClick={() => editMode && onToggle(student.id)}
              sx={{
                p: 2,
                textAlign: 'center',
                cursor: editMode ? 'pointer' : 'default',
                bgcolor: getStatusColor(status),
                color: 'white',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                '&:hover': editMode ? { opacity: 0.8, transform: 'scale(1.05)' } : {}
              }}
            >
              <Typography variant="h6">{student.rollNumber || 'N/A'}</Typography>
              <Typography variant="caption">{firstName}</Typography>
            </Paper>
          </Tooltip>
        );
      })}
    </Box>
  );
}
