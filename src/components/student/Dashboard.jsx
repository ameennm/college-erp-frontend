import { Typography, Box, Card, CardContent } from '@mui/material';
import { useAuthStore } from '../../store/authStore';
import { useDataStore } from '../../store/dataStore';
import StatsCard from '../shared/StatsCard';
import { EventNote, AttachMoney, Assignment } from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function StudentDashboard() {
  const { user } = useAuthStore();
  const { students, timetable } = useDataStore();

  const studentData = students.find(s => s.userId === user.id);
  const attendance = studentData?.totalAttendancePercentage || 0;
  const todayClasses = timetable.filter(t => t.dayOrder === 1).length;

  const data = [
    { name: 'Present', value: Math.round(attendance) },
    { name: 'Absent', value: Math.round(100 - attendance) },
  ];
  const COLORS = ['#10B981', '#EF4444'];

  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome, {user?.fullName?.split(' ')[0]}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your academic dashboard and progress
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
          gap: 3,
          mb: 4
        }}
      >
        {/* Attendance Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Overall Attendance
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative'
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    background: attendance > 75
                      ? 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
                      : 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', sm: '3rem' }
                  }}
                >
                  {attendance}%
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {attendance > 75 ? 'Good standing' : 'Needs improvement'}
                </Typography>
              </Box>
              <Box sx={{ width: 160, height: 160 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <StatsCard
          title="Classes Today"
          value={todayClasses}
          icon={<Assignment />}
          color="#6366F1"
        />
        <StatsCard
          title="Fee Due"
          value="₹5k"
          icon={<AttachMoney />}
          color="#EF4444"
          subtitle="Payable"
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
