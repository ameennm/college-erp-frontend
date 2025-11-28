// ============================================
// MOCK DATA FOR COLLEGE ERP SYSTEM
// ============================================

export const mockData = {
  
  // ============================================
  // 1. USERS & AUTHENTICATION
  // ============================================
  users: [
    // Admin
    {
      id: "u001",
      email: "admin@college.edu",
      password: "admin123", // Plain text for demo
      role: "admin",
      fullName: "Dr. Rajesh Kumar",
      phone: "9876543210",
      createdAt: "2023-01-15T00:00:00Z"
    },
    
    // Teachers
    {
      id: "t001",
      email: "smith@college.edu",
      password: "teacher123",
      role: "teacher",
      fullName: "Dr. John Smith",
      phone: "9876543211",
      createdAt: "2023-06-01T00:00:00Z"
    },
    {
      id: "t002",
      email: "priya@college.edu",
      password: "teacher123",
      role: "teacher",
      fullName: "Dr. Priya Sharma",
      phone: "9876543212",
      createdAt: "2023-06-01T00:00:00Z"
    },
    {
      id: "t003",
      email: "kumar@college.edu",
      password: "teacher123",
      role: "teacher",
      fullName: "Prof. Suresh Kumar",
      phone: "9876543213",
      createdAt: "2023-06-01T00:00:00Z"
    },
    
    // Students (Sample 20 - represent 1000 with pattern)
    {
      id: "s001",
      email: "cs001@student.college.edu",
      password: "student123",
      role: "student",
      fullName: "Aarav Patel",
      phone: "9876543301",
      createdAt: "2023-08-01T00:00:00Z"
    },
    {
      id: "s002",
      email: "cs002@student.college.edu",
      password: "student123",
      role: "student",
      fullName: "Ananya Singh",
      phone: "9876543302",
      createdAt: "2023-08-01T00:00:00Z"
    },
    {
      id: "s003",
      email: "cs003@student.college.edu",
      password: "student123",
      role: "student",
      fullName: "Arjun Reddy",
      phone: "9876543303",
      createdAt: "2023-08-01T00:00:00Z"
    },
  ],

  // ============================================
  // 2. DEPARTMENTS
  // ============================================
  departments: [
    {
      id: "dept001",
      name: "Computer Science & Engineering",
      code: "CSE",
      hodId: "t001"
    },
    {
      id: "dept002",
      name: "Electronics & Communication",
      code: "ECE",
      hodId: "t004"
    }
  ],

  // ============================================
  // 3. BATCHES/CLASSES
  // ============================================
  batches: [
    {
      id: "batch001",
      name: "CS-A-2023",
      departmentId: "dept001",
      semester: 3,
      academicYear: "2023-24",
      totalStudents: 60,
      section: "A"
    },
    {
      id: "batch002",
      name: "CS-B-2023",
      departmentId: "dept001",
      semester: 3,
      academicYear: "2023-24",
      totalStudents: 55,
      section: "B"
    }
  ],

  // ============================================
  // 4. COURSES/SUBJECTS
  // ============================================
  courses: [
    {
      id: "course001",
      code: "CS301",
      name: "Data Structures",
      courseType: "core",
      credits: 4,
      semester: 3,
      departmentId: "dept001"
    },
    {
      id: "course002",
      code: "CS302",
      name: "Database Management Systems",
      courseType: "core",
      credits: 4,
      semester: 3,
      departmentId: "dept001"
    }
  ],

  // ============================================
  // 5. TEACHERS
  // ============================================
  teachers: [
    {
      id: "t001",
      userId: "t001",
      employeeCode: "FAC001",
      departmentId: "dept001",
      designation: "Professor",
      workloadHours: 18,
      canMarkEngage: true,
      qualification: "Ph.D. in Computer Science",
      specialization: "Data Structures, Algorithms",
      dateOfJoining: "2010-07-01"
    },
    {
      id: "t002",
      userId: "t002",
      employeeCode: "FAC002",
      departmentId: "dept001",
      designation: "Associate Professor",
      workloadHours: 20,
      canMarkEngage: true,
      qualification: "Ph.D. in Database Systems",
      specialization: "DBMS, Data Mining",
      dateOfJoining: "2015-08-15"
    }
  ],

  // ============================================
  // 6. STUDENTS
  // ============================================
  students: [
    {
      id: "s001",
      userId: "s001",
      rollNumber: "CS23A001",
      admissionNumber: "ADM/2023/001",
      batchId: "batch001",
      dateOfBirth: "2005-03-15",
      gender: "Male",
      bloodGroup: "O+",
      address: "123, MG Road, Bangalore",
      category: "General",
      quota: "Merit",
      religion: "Hindu",
      admissionDate: "2023-08-01",
      status: "active",
      totalAttendancePercentage: 87.5,
      fatherName: "Rajesh Patel",
      fatherPhone: "9876543301",
      fatherEmail: "rajesh@email.com",
      fatherOccupation: "Business",
      motherName: "Priya Patel",
      motherPhone: "9876543302",
      motherEmail: "priya@email.com",
      previousInstitution: "ABC High School",
      tenthMarks: 92.5,
      twelfthMarks: 88.0
    },
    {
      id: "s002",
      userId: "s002",
      rollNumber: "CS23A002",
      admissionNumber: "ADM/2023/002",
      batchId: "batch001",
      dateOfBirth: "2005-07-22",
      gender: "Female",
      bloodGroup: "A+",
      address: "456, Brigade Road, Bangalore",
      category: "OBC",
      quota: "Merit",
      religion: "Hindu",
      admissionDate: "2023-08-01",
      status: "active",
      totalAttendancePercentage: 92.3,
      fatherName: "Vijay Singh",
      fatherPhone: "9876543311",
      fatherEmail: "vijay@email.com",
      fatherOccupation: "Engineer",
      motherName: "Sunita Singh",
      motherPhone: "9876543312",
      motherEmail: "sunita@email.com",
      previousInstitution: "XYZ High School",
      tenthMarks: 95.0,
      twelfthMarks: 91.5
    },
    {
      id: "s003",
      userId: "s003",
      rollNumber: "CS23A003",
      admissionNumber: "ADM/2023/003",
      batchId: "batch001",
      dateOfBirth: "2005-11-10",
      gender: "Male",
      bloodGroup: "B+",
      address: "789, Residency Road, Bangalore",
      category: "General",
      quota: "Merit",
      religion: "Hindu",
      admissionDate: "2023-08-01",
      status: "active",
      totalAttendancePercentage: 78.5,
      fatherName: "Ramesh Reddy",
      fatherPhone: "9876543321",
      fatherEmail: "ramesh@email.com",
      fatherOccupation: "Doctor",
      motherName: "Lakshmi Reddy",
      motherPhone: "9876543322",
      motherEmail: "lakshmi@email.com",
      previousInstitution: "PQR High School",
      tenthMarks: 85.0,
      twelfthMarks: 82.0
    }
  ],

  // ============================================
  // 7. TIME SLOTS
  // ============================================
  timeSlots: [
    { id: "slot001", slotNumber: 1, startTime: "09:00", endTime: "09:50", isBreak: false },
    { id: "slot002", slotNumber: 2, startTime: "09:50", endTime: "10:40", isBreak: false },
    { id: "slot003", slotNumber: 3, startTime: "10:40", endTime: "11:30", isBreak: false },
    { id: "slot004", slotNumber: 4, startTime: "11:30", endTime: "11:45", isBreak: true }, // Break
    { id: "slot005", slotNumber: 5, startTime: "11:45", endTime: "12:35", isBreak: false },
    { id: "slot006", slotNumber: 6, startTime: "12:35", endTime: "13:25", isBreak: false },
    { id: "slot007", slotNumber: 7, startTime: "13:25", endTime: "14:15", isBreak: true }, // Lunch
    { id: "slot008", slotNumber: 8, startTime: "14:15", endTime: "15:05", isBreak: false },
    { id: "slot009", slotNumber: 9, startTime: "15:05", endTime: "15:55", isBreak: false }
  ],

  // ============================================
  // 8. DAY ORDERS
  // ============================================
  dayOrders: [
    { id: "day001", dayNumber: 1, date: "2025-11-24", isHoliday: false, academicYear: "2025-26" },
    { id: "day002", dayNumber: 2, date: "2025-11-25", isHoliday: false, academicYear: "2025-26" },
    { id: "day003", dayNumber: 3, date: "2025-11-26", isHoliday: false, academicYear: "2025-26" },
    { id: "day004", dayNumber: 4, date: "2025-11-27", isHoliday: false, academicYear: "2025-26" },
    { id: "day005", dayNumber: 5, date: "2025-11-28", isHoliday: false, academicYear: "2025-26" }
  ],

  // ============================================
  // 9. TIMETABLE
  // ============================================
  timetable: [
    {
      id: "tt001",
      batchId: "batch001",
      courseId: "course001", // Data Structures
      teacherId: "t001",
      dayOrder: 1,
      timeSlotId: "slot001",
      roomNumber: "Room 301",
      isLab: false,
      academicYear: "2025-26",
      semester: 3
    },
    {
      id: "tt002",
      batchId: "batch001",
      courseId: "course002", // DBMS
      teacherId: "t002",
      dayOrder: 1,
      timeSlotId: "slot002",
      roomNumber: "Room 301",
      isLab: false,
      academicYear: "2025-26",
      semester: 3
    }
  ],

  // ============================================
  // 10. ATTENDANCE
  // ============================================
  attendance: [
    {
      id: "att001",
      studentId: "s001",
      timetableId: "tt001",
      date: "2025-11-24",
      timeSlotId: "slot001",
      attendanceType: "class",
      status: "present",
      markedBy: "t001",
      markedAt: "2025-11-24T09:10:00Z",
      remarks: ""
    }
  ],

  // ============================================
  // 11. FEES
  // ============================================
  fees: [
    {
      id: "fee001",
      studentId: "s001",
      feeType: "Tuition",
      amount: 50000,
      amountPaid: 50000,
      balance: 0,
      dueDate: "2025-08-31",
      status: "paid",
      academicYear: "2025-26",
      semester: 3,
      assignedDate: "2025-08-01",
      description: "Semester 3 Tuition Fee"
    },
    {
      id: "fee003",
      studentId: "s002",
      feeType: "Tuition",
      amount: 50000,
      amountPaid: 30000,
      balance: 20000,
      dueDate: "2025-08-31",
      status: "partial",
      academicYear: "2025-26",
      semester: 3,
      assignedDate: "2025-08-01",
      description: "Semester 3 Tuition Fee"
    }
  ],

  // ============================================
  // 12. TRANSACTIONS
  // ============================================
  transactions: [
    {
      id: "txn001",
      studentId: "s001",
      feeId: "fee001",
      amount: 50000,
      paymentDate: "2025-08-10",
      paymentMode: "Bank Transfer",
      receiptNumber: "RCP/2025/001",
      processedBy: "u001",
      remarks: "Full tuition payment"
    }
  ],

  // ============================================
  // 13. LEAVE APPLICATIONS
  // ============================================
  leaveApplications: [
    {
      id: "leave001",
      applicantId: "t001",
      applicantType: "teacher",
      leaveType: "Casual",
      fromDate: "2025-12-05",
      toDate: "2025-12-06",
      totalDays: 2,
      isHalfDay: false,
      reason: "Personal work",
      affectedClasses: ["tt001"],
      requestSubstitution: true,
      status: "pending",
      appliedAt: "2025-11-25T10:00:00Z"
    }
  ],

  // ============================================
  // 14. SUBSTITUTIONS
  // ============================================
  substitutions: [],

  // ============================================
  // 15. ADMISSIONS
  // ============================================
  admissions: [
    {
      id: "adm001",
      applicantName: "Rohan Kumar",
      email: "rohan@email.com",
      phone: "9876540001",
      dateOfBirth: "2006-05-10",
      gender: "Male",
      appliedCourse: "B.Tech Computer Science",
      appliedDate: "2025-05-15",
      status: "admitted",
      quota: "Merit",
      category: "General",
      tenthMarks: 94.0,
      twelfthMarks: 92.5,
      entranceScore: 156,
      interviewDate: "2025-06-15",
      interviewScore: 85,
      meritRank: 12,
      fatherName: "Sunil Kumar",
      fatherPhone: "9876540002",
      motherName: "Meena Kumar",
      motherPhone: "9876540003",
      address: "123, HSR Layout, Bangalore",
      enrolledStudentId: "s001",
      processedBy: "u001",
      processedDate: "2025-07-01"
    }
  ],

  // ============================================
  // 16. CERTIFICATE REQUESTS
  // ============================================
  certificateRequests: [],

  // ============================================
  // 17. EXAMS
  // ============================================
  exams: [
    {
      id: "exam001",
      examName: "End Semester - December 2025",
      examType: "External",
      academicYear: "2025-26",
      semester: 3,
      startDate: "2025-12-15",
      endDate: "2025-12-25",
      sessionTimings: [
        { session: "Morning", startTime: "09:00", endTime: "12:00" },
        { session: "Afternoon", startTime: "14:00", endTime: "17:00" }
      ],
      status: "scheduled"
    }
  ],

  // ============================================
  // 18. EXAM SCHEDULE
  // ============================================
  examSchedule: [],

  // ============================================
  // 19. EXAM ROOMS
  // ============================================
  examRooms: [],

  // ============================================
  // 20. EXAM INVIGILATORS
  // ============================================
  examInvigilators: []
};

// Helper to generate more students if needed
export function generateMoreStudents(count = 10) {
    // Basic generator logic if we needed dynamic data, 
    // but for this file I'll keep it static to match the prompt's provided mockData structure exactly
    return [];
}
