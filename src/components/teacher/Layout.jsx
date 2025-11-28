import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Paper, BottomNavigation, BottomNavigationAction, Menu, MenuItem, Avatar } from '@mui/material';
import { Dashboard, EventNote, EventBusy, Assignment, Menu as MenuIcon, Logout } from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function TeacherLayout() {
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
            Teacher Portal
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
          <BottomNavigationAction label="Home" value="/teacher/dashboard" icon={<Dashboard />} />
          <BottomNavigationAction label="Attendance" value="/teacher/attendance" icon={<EventNote />} />
          <BottomNavigationAction label="Timetable" value="/teacher/timetable" icon={<Assignment />} />
          <BottomNavigationAction label="Leave" value="/teacher/leave" icon={<EventBusy />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
