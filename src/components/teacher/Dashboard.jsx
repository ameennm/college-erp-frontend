import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAuthStore } from '../../store/authStore';
import { useDataStore } from '../../store/dataStore';
import StatsCard from '../shared/StatsCard';
import { EventNote, EventBusy, Assignment } from '@mui/icons-material';

export default function TeacherDashboard() {
  const { user } = useAuthStore();
  const { timetable, leaveApplications } = useDataStore();

  const todayClasses = timetable.filter(t => t.teacherId === user.id && t.dayOrder === 1).length;
  const leavesTaken = leaveApplications.filter(l => l.applicantId === user.id).length;

  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome back, {user?.fullName?.split(' ')[0]}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's your schedule and tasks for today
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 4
        }}
      >
        <StatsCard
          title="Classes Today"
          value={todayClasses}
          icon={<Assignment />}
          color="#6366F1"
        />
        <StatsCard
          title="Leaves Taken"
          value={leavesTaken}
          icon={<EventBusy />}
          color="#F59E0B"
        />
        <StatsCard
          title="Pending Tasks"
          value="3"
          icon={<EventNote />}
          color="#EF4444"
        />
      </Box>

      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Today's Schedule
          </Typography>
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              bgcolor: '#F8FAFC',
              borderRadius: 2,
              border: '2px dashed #E5E7EB'
            }}
          >
            <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>
              No classes scheduled for the rest of the day.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Check your timetable for upcoming classes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
