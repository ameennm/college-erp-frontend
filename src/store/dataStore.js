import { create } from 'zustand';
import { mockData } from '../data/mockData';

export const useDataStore = create((set, get) => ({
  // State - Merge user data with students for easy access
  users: mockData.users,
  students: mockData.students.map(student => {
    const user = mockData.users.find(u => u.id === student.userId);
    return {
      ...student,
      fullName: user?.fullName || 'Unknown Student',
      email: user?.email || '',
      phone: user?.phone || ''
    };
  }),
  teachers: mockData.teachers,
  batches: mockData.batches,
  courses: mockData.courses,
  attendance: mockData.attendance,
  fees: mockData.fees,
  transactions: mockData.transactions,
  leaveApplications: mockData.leaveApplications,
  timetable: mockData.timetable,
  admissions: mockData.admissions,
  certificateRequests: mockData.certificateRequests,
  exams: mockData.exams,
  examSchedule: mockData.examSchedule,
  timeSlots: mockData.timeSlots,
  dayOrders: mockData.dayOrders,
  departments: mockData.departments,

  // Actions
  addStudent: (student) => set((state) => ({
    students: [...state.students, student],
    users: [...state.users, { id: student.userId, email: student.email, role: 'student', ...student }]
  })),

  updateStudent: (id, updates) => set((state) => ({
    students: state.students.map(s => s.id === id ? { ...s, ...updates } : s)
  })),

  addAttendance: (records) => set((state) => ({
    attendance: [...state.attendance, ...records]
  })),

  updateAttendance: (id, updates) => set((state) => ({
    attendance: state.attendance.map(a => a.id === id ? { ...a, ...updates } : a)
  })),

  addFee: (fee) => set((state) => ({
    fees: [...state.fees, fee]
  })),

  updateFee: (id, updates) => set((state) => ({
    fees: state.fees.map(f => f.id === id ? { ...f, ...updates } : f)
  })),

  addTransaction: (transaction) => set((state) => ({
    transactions: [...state.transactions, transaction]
  })),

  addLeaveApplication: (leave) => set((state) => ({
    leaveApplications: [...state.leaveApplications, leave]
  })),

  updateLeaveApplication: (id, updates) => set((state) => ({
    leaveApplications: state.leaveApplications.map(l => l.id === id ? { ...l, ...updates } : l)
  })),

  addTimetableEntry: (entry) => set((state) => ({
    timetable: [...state.timetable, entry]
  })),

  updateAdmission: (id, updates) => set((state) => ({
    admissions: state.admissions.map(a => a.id === id ? { ...a, ...updates } : a)
  })),

  addCertificateRequest: (request) => set((state) => ({
    certificateRequests: [...state.certificateRequests, request]
  })),

  updateCertificateRequest: (id, updates) => set((state) => ({
    certificateRequests: state.certificateRequests.map(c => c.id === id ? { ...c, ...updates } : c)
  })),

  // Helper queries
  getStudentsByBatch: (batchId) => {
    const state = get();
    return state.students.filter(s => s.batchId === batchId);
  },

  getAttendanceByStudent: (studentId, dateRange) => {
    const state = get();
    return state.attendance.filter(a => a.studentId === studentId);
  },

  getFeesByStudent: (studentId) => {
    const state = get();
    return state.fees.filter(f => f.studentId === studentId);
  },

  getTimetableByBatch: (batchId) => {
    const state = get();
    return state.timetable.filter(t => t.batchId === batchId);
  },

  getTimetableByTeacher: (teacherId) => {
    const state = get();
    return state.timetable.filter(t => t.teacherId === teacherId);
  }
}));
