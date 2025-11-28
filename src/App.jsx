import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { useAuthStore } from './store/authStore';

// Auth
import Login from './components/auth/Login';

// Admin
import AdminLayout from './components/admin/Layout';
import AdminDashboard from './components/admin/Dashboard';
import StudentList from './components/admin/StudentManagement/StudentList';
import FeeDashboard from './components/admin/FeeManagement/FeeDashboard';
import AttendanceOverview from './components/admin/AttendanceManagement/AttendanceOverview';
import LeaveList from './components/admin/LeaveManagement/LeaveList';
import AdmissionsList from './components/admin/AdmissionTC/AdmissionsList';
import TimetableBuilder from './components/admin/Timetable/TimetableBuilder';
import ExamScheduler from './components/admin/ExamManagement/ExamScheduler';

// Teacher
import TeacherLayout from './components/teacher/Layout';
import TeacherDashboard from './components/teacher/Dashboard';
import MarkAttendance from './components/teacher/Attendance/MarkAttendance';
import ApplyLeave from './components/teacher/Leave/ApplyLeave';
import MyTimetable from './components/teacher/Timetable/MyTimetable';

// Student
import StudentLayout from './components/student/Layout';
import StudentDashboard from './components/student/Dashboard';
import FeeDashboardStudent from './components/student/Fees/FeeDashboard';
import MyTimetableStudent from './components/student/Timetable/MyTimetable';
import AttendanceDashboard from './components/student/Attendance/AttendanceDashboard';

function ProtectedRoute({ children, allowedRole }) {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user.role !== allowedRole) return <Navigate to={`/${user.role}/dashboard`} />;
  
  return children;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<StudentList />} />
            <Route path="attendance" element={<AttendanceOverview />} />
            <Route path="fees" element={<FeeDashboard />} />
            <Route path="leave" element={<LeaveList />} />
            <Route path="admissions" element={<AdmissionsList />} />
            <Route path="exams" element={<ExamScheduler />} />
            <Route path="timetable" element={<TimetableBuilder />} />
          </Route>
          
          {/* Teacher Routes */}
          <Route path="/teacher" element={
            <ProtectedRoute allowedRole="teacher">
              <TeacherLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="attendance" element={<MarkAttendance />} />
            <Route path="timetable" element={<MyTimetable />} />
            <Route path="leave" element={<ApplyLeave />} />
          </Route>
          
          {/* Student Routes */}
          <Route path="/student" element={
            <ProtectedRoute allowedRole="student">
              <StudentLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="attendance" element={<AttendanceDashboard />} />
            <Route path="fees" element={<FeeDashboardStudent />} />
            <Route path="timetable" element={<MyTimetableStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
