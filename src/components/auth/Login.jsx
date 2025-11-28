import { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, FormControlLabel, Checkbox, Alert, Container } from '@mui/material';
import { useAuthStore } from '../../store/authStore';
import { mockData } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('admin@college.edu'); // Default for demo
  const [password, setPassword] = useState('admin123'); // Default for demo
  const [error, setError] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Find user in mockData
    // We search across all potential user arrays in mockData but really we should have a unified users table or link
    // The mockData.users array contains basic auth info
    const user = mockData.users.find(u => u.email === email && u.password === password);

    if (user) {
      login(user);
      navigate(`/${user.role}/dashboard`);
    } else {
      setError('Invalid email or password');
    }
  };

  const fillCredentials = (role) => {
    if (role === 'admin') {
      setEmail('admin@college.edu');
      setPassword('admin123');
    } else if (role === 'teacher') {
      setEmail('smith@college.edu');
      setPassword('teacher123');
    } else if (role === 'student') {
      setEmail('cs001@student.college.edu');
      setPassword('student123');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" color="primary" fontWeight="bold" gutterBottom>
            College ERP
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Sign in to your account
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.2 }}
            >
              Sign In
            </Button>
            
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                Demo Credentials (Click to fill):
              </Typography>
              <Box display="flex" justifyContent="center" gap={1}>
                <Button size="small" variant="outlined" onClick={() => fillCredentials('admin')}>Admin</Button>
                <Button size="small" variant="outlined" onClick={() => fillCredentials('teacher')}>Teacher</Button>
                <Button size="small" variant="outlined" onClick={() => fillCredentials('student')}>Student</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
