import { Typography, Box, Card, CardContent } from '@mui/material';
import { useDataStore } from '../../store/dataStore';
import StatsCard from '../shared/StatsCard';
import { People, School, AttachMoney, EventNote } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function AdminDashboard() {
  const { students, teachers, fees, attendance } = useDataStore();

  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const pendingFees = fees.filter(f => f.status !== 'paid').reduce((sum, f) => sum + f.balance, 0);

  // Calculate average attendance
  const avgAttendance = (students.reduce((sum, s) => sum + s.totalAttendancePercentage, 0) / totalStudents).toFixed(1);

  // Mock data for charts
  const feeData = [
    { name: 'Aug', collected: 4000, pending: 2400 },
    { name: 'Sep', collected: 3000, pending: 1398 },
    { name: 'Oct', collected: 2000, pending: 9800 },
    { name: 'Nov', collected: 2780, pending: 3908 },
    { name: 'Dec', collected: 1890, pending: 4800 },
  ];

  const batchData = [
    { name: 'CS-A', value: 60 },
    { name: 'CS-B', value: 55 },
    { name: 'ECE-A', value: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ pb: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'text.primary' }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your institution today.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 5
        }}
      >
        <StatsCard title="Total Students" value={totalStudents} icon={<School />} color="#6366F1" />
        <StatsCard title="Total Staff" value={totalTeachers} icon={<People />} color="#10B981" />
        <StatsCard title="Pending Fees" value={`₹${(pendingFees / 100000).toFixed(1)}L`} icon={<AttachMoney />} color="#EF4444" subtitle="Total Outstanding" />
        <StatsCard title="Avg Attendance" value={`${avgAttendance}%`} icon={<EventNote />} color="#F59E0B" />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 3
        }}
      >
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Fee Collection Trends
            </Typography>
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={feeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="name"
                    stroke="#6B7280"
                    style={{ fontSize: '0.875rem' }}
                  />
                  <YAxis
                    stroke="#6B7280"
                    style={{ fontSize: '0.875rem' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                  />
                  <Line
                    type="monotone"
                    dataKey="collected"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Collected"
                  />
                  <Line
                    type="monotone"
                    dataKey="pending"
                    stroke="#EF4444"
                    strokeWidth={3}
                    dot={{ fill: '#EF4444', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Pending"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Student Distribution
            </Typography>
            <Box sx={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={batchData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {batchData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={['#6366F1', '#10B981', '#F59E0B'][index % 3]}
                      />
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
