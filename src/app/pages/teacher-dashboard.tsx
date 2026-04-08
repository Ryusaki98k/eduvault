import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  Users,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  BookOpen,
  Calendar,
  TrendingUp,
  Moon,
  Sun,
} from "lucide-react";

const courses = [
  {
    id: 1,
    code: "ICT3326",
    name: "การจัดการและความปลอดภัย ระบบและเครือข่ายคอมพิวเตอร์",
    students: 45,
    assignments: 5,
    pendingGrade: 12,
    image: "https://images.unsplash.com/photo-1767474604678-e32410f62d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBjb3Vyc2UlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM1NjQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    code: "ICT3357",
    name: "การพัฒนาซอฟต์แวร์บนระบบคลาวด์",
    students: 38,
    assignments: 4,
    pendingGrade: 8,
    image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlY3VyaXR5JTIwZGFya3xlbnwxfHx8fDE3NzM1NjQzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    code: "ICT2201",
    name: "โครงสร้างข้อมูลและอัลกอริทึม",
    students: 52,
    assignments: 6,
    pendingGrade: 15,
    image: "https://images.unsplash.com/photo-1763568258327-034710107b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwb3JhbmdlfGVufDF8fHx8MTc3MzU2NDMxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const recentSubmissions = [
  {
    student: "สมชาย มั่นคง",
    studentId: "65412345001",
    course: "ICT3326",
    assignment: "แบบทดสอบครั้งที่ 4",
    submittedAt: "2 hours ago",
    status: "pending",
  },
  {
    student: "สมหญิง ใจดี",
    studentId: "65412345002",
    course: "ICT3357",
    assignment: "Project Milestone 2",
    submittedAt: "5 hours ago",
    status: "pending",
  },
  {
    student: "วิชัย รักเรียน",
    studentId: "65412345003",
    course: "ICT3326",
    assignment: "แบบทดสอบครั้งที่ 4",
    submittedAt: "1 day ago",
    status: "graded",
  },
  {
    student: "สุดา พยายาม",
    studentId: "65412345004",
    course: "ICT2201",
    assignment: "Lab Assignment 3",
    submittedAt: "1 day ago",
    status: "pending",
  },
];

export function TeacherDashboard() {
  const teacherName = localStorage.getItem("teacherName") || "อาจารย์";
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-[#2e5090] dark:bg-gray-800 text-white shadow-md">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#2e5090] dark:bg-gray-700 dark:text-white px-2 py-1 rounded">
                <span className="font-bold text-sm">SPU</span>
              </div>
              <h1 className="text-xl font-semibold">DLearning SPU - Teacher Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-[#3d619f] dark:hover:bg-gray-700"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <span className="text-sm">{teacherName}</span>
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-[#2e5090] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                  localStorage.removeItem("userType");
                  localStorage.removeItem("teacherName");
                  window.location.href = "/teacher/login";
                }}
              >
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            ยินดีต้อนรับ, {teacherName}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">ภาพรวมของรายวิชาและงานที่ต้องตรวจ</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">รายวิชาทั้งหมด</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{courses.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">นักศึกษาทั้งหมด</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {courses.reduce((sum, c) => sum + c.students, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">รอตรวจ</p>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {courses.reduce((sum, c) => sum + c.pendingGrade, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">งานทั้งหมด</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {courses.reduce((sum, c) => sum + c.assignments, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* My Courses */}
          <div className="col-span-8">
            <Card className="p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="bg-gray-200 dark:bg-gray-700 px-6 py-3 border-b dark:border-gray-600">
                <h3 className="font-semibold dark:text-white">รายวิชาที่สอน</h3>
              </div>
              <div className="p-6 space-y-4">
                {courses.map((course) => (
                  <Link key={course.id} to={`/teacher/course/${course.id}`}>
                    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-700 dark:border-gray-600">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-semibold mb-2">
                                {course.code}
                              </div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {course.name}
                              </h4>
                              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  <span>{course.students} นักศึกษา</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="w-4 h-4" />
                                  <span>{course.assignments} งาน</span>
                                </div>
                              </div>
                            </div>
                            {course.pendingGrade > 0 && (
                              <div className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {course.pendingGrade} รอตรวจ
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Submissions */}
          <div className="col-span-4">
            <Card className="p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="bg-gray-200 dark:bg-gray-700 px-6 py-3 border-b dark:border-gray-600">
                <h3 className="font-semibold dark:text-white">งานที่ส่งล่าสุด</h3>
              </div>
              <div className="divide-y dark:divide-gray-700 max-h-[600px] overflow-y-auto">
                {recentSubmissions.map((submission, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                          {submission.student}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {submission.studentId}
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mb-1 truncate">
                          {submission.assignment}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {submission.submittedAt}
                          </span>
                          {submission.status === "pending" ? (
                            <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded">
                              รอตรวจ
                            </span>
                          ) : (
                            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">
                              ตรวจแล้ว
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t dark:border-gray-700">
                <Button variant="link" size="sm" className="text-blue-600 dark:text-blue-400 text-xs w-full">
                  ดูทั้งหมด
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
