import { Grid, Typography, Box } from '@mui/material';
import { useDataStore } from '../../../store/dataStore';
import { useAuthStore } from '../../../store/authStore';
import { AttachMoney } from '@mui/icons-material';

export default function FeeDashboard() {
  const { user } = useAuthStore();
  const { fees } = useDataStore();
  
  const myFees = fees.filter(f => f.studentId === user.id);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>My Fees</Typography>
      
      <Grid container spacing={2}>
        {myFees.map(fee => (
          <Grid item xs={12} key={fee.id}>
            <Box 
              p={2} 
              bgcolor="white" 
              borderRadius={2} 
              borderLeft={`6px solid ${fee.status === 'paid' ? '#50C878' : '#FF6B6B'}`}
              boxShadow={1}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">{fee.feeType}</Typography>
                  <Typography variant="h5">₹{fee.amount}</Typography>
                  <Typography variant="caption" color="textSecondary">Due: {fee.dueDate}</Typography>
                </Box>
                <Box textAlign="right">
                  <Typography 
                    variant="button" 
                    sx={{ 
                      bgcolor: fee.status === 'paid' ? 'success.light' : 'error.light', 
                      color: fee.status === 'paid' ? 'success.dark' : 'error.dark',
                      px: 1, py: 0.5, borderRadius: 1 
                    }}
                  >
                    {fee.status.toUpperCase()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
