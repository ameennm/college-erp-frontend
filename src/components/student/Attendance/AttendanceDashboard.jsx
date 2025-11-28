import { Typography, Box, Card, CardContent } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import StatsCard from '../../shared/StatsCard';
import { CheckCircle, Cancel, AccessTime } from '@mui/icons-material';

export default function AttendanceDashboard() {
  const data = [
    { name: 'Present', value: 102 },
    { name: 'Absent', value: 18 }
  ];
  const COLORS = ['#10B981', '#EF4444'];
  const totalClasses = 120;
  const percentage = ((102 / totalClasses) * 100).toFixed(0);

  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Attendance Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your class attendance and performance
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
          mb: 4
        }}
      >
        {/* Pie Chart Card */}
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Attendance Overview
            </Typography>
            <Box
              sx={{
                height: 320,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
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
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Centered Percentage */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  pointerEvents: 'none'
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', sm: '3rem' }
                  }}
                >
                  {percentage}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}
                >
                  Attendance
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 3
          }}
        >
          <StatsCard
            title="Total Classes"
            value={totalClasses}
            icon={<AccessTime />}
            color="#6366F1"
          />
          <StatsCard
            title="Present"
            value="102"
            icon={<CheckCircle />}
            color="#10B981"
            subtitle={`${percentage}% attendance rate`}
          />
          <StatsCard
            title="Absent"
            value="18"
            icon={<Cancel />}
            color="#EF4444"
            subtitle={`${(100 - percentage)}% missed`}
          />
        </Box>
      </Box>
    </Box>
  );
}
