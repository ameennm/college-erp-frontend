import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Paper, BottomNavigation, BottomNavigationAction, Menu, MenuItem, Avatar } from '@mui/material';
import { Dashboard, EventNote, AttachMoney, Assignment, School, Logout } from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function StudentLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ pb: 7, minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Portal
          </Typography>
          <IconButton onClick={handleMenu} color="inherit">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                {user?.fullName?.charAt(0)}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
        >
          <BottomNavigationAction label="Home" value="/student/dashboard" icon={<Dashboard />} />
          <BottomNavigationAction label="Attendance" value="/student/attendance" icon={<EventNote />} />
          <BottomNavigationAction label="Fees" value="/student/fees" icon={<AttachMoney />} />
          <BottomNavigationAction label="Timetable" value="/student/timetable" icon={<Assignment />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
