import { useParams, Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Users,
  FileText,
  Search,
  Download,
  Eye,
  ArrowLeft,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const assignments = [
  {
    id: 1,
    title: "แบบทดสอบครั้งที่ 4",
    dueDate: "19 March 2026",
    totalStudents: 45,
    submitted: 33,
    graded: 21,
    pending: 12,
  },
  {
    id: 2,
    title: "การบ้าน: ระบบความปลอดภัย",
    dueDate: "25 March 2026",
    totalStudents: 45,
    submitted: 28,
    graded: 28,
    pending: 0,
  },
  {
    id: 3,
    title: "Project Midterm",
    dueDate: "30 March 2026",
    totalStudents: 45,
    submitted: 40,
    graded: 32,
    pending: 8,
  },
];

const students = [
  {
    id: 1,
    studentId: "65412345001",
    name: "สมชาย มั่นคง",
    email: "somchai.m@spu.ac.th",
    assignments: {
      submitted: 4,
      total: 5,
      avgScore: 85,
    },
  },
  {
    id: 2,
    studentId: "65412345002",
    name: "สมหญิง ใจดี",
    email: "somying.j@spu.ac.th",
    assignments: {
      submitted: 5,
      total: 5,
      avgScore: 92,
    },
  },
  {
    id: 3,
    studentId: "65412345003",
    name: "วิชัย รักเรียน",
    email: "wichai.r@spu.ac.th",
    assignments: {
      submitted: 3,
      total: 5,
      avgScore: 78,
    },
  },
  {
    id: 4,
    studentId: "65412345004",
    name: "สุดา พยายาม",
    email: "suda.p@spu.ac.th",
    assignments: {
      submitted: 5,
      total: 5,
      avgScore: 88,
    },
  },
  {
    id: 5,
    studentId: "65412345005",
    name: "ประเสริฐ ขยัน",
    email: "prasert.k@spu.ac.th",
    assignments: {
      submitted: 4,
      total: 5,
      avgScore: 75,
    },
  },
];

export function TeacherCourseDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"assignments" | "students">("assignments");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#2e5090] text-white shadow-md">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#2e5090] px-2 py-1 rounded">
                <span className="font-bold text-sm">SPU</span>
              </div>
              <h1 className="text-xl font-semibold">DLearning SPU - Teacher Portal</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-[#2e5090]"
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
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/teacher/dashboard">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับไปหน้าหลัก
            </Button>
          </Link>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold">
                ICT3326
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              การจัดการและความปลอดภัย ระบบและเครือข่ายคอมพิวเตอร์
            </h2>
            <div className="flex gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>45 นักศึกษา</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>5 งาน</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 งานรอตรวจ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b">
            <button
              onClick={() => setActiveTab("assignments")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "assignments"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              งาน/แบบทดสอบ
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "students"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              รายชื่อนักศึกษา
            </button>
          </div>
        </div>

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="p-0">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        กำหนดส่ง: {assignment.dueDate}
                      </p>
                    </div>
                    <Link to={`/teacher/assignment/${assignment.id}`}>
                      <Button size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูรายละเอียด
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">นักศึกษาทั้งหมด</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {assignment.totalStudents}
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600">ส่งแล้ว</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">
                        {assignment.submitted}
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">ตรวจแล้ว</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">
                        {assignment.graded}
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-600">รอตรวจ</span>
                      </div>
                      <p className="text-2xl font-bold text-orange-600">
                        {assignment.pending}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${(assignment.submitted / assignment.totalStudents) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {Math.round((assignment.submitted / assignment.totalStudents) * 100)}% ส่งแล้ว
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Students Tab */}
        {activeTab === "students" && (
          <div>
            <Card className="p-0">
              <div className="p-4 border-b bg-gray-50">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="ค้นหาชื่อนักศึกษาหรือรหัสนักศึกษา..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    ตัวกรอง
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        รหัสนักศึกษา
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        ชื่อ-นามสกุล
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        อีเมล
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        งานที่ส่ง
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        คะแนนเฉลี่ย
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                        การดำเนินการ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {student.studentId}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          <span className="text-gray-900 font-medium">
                            {student.assignments.submitted}/{student.assignments.total}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              student.assignments.avgScore >= 80
                                ? "bg-green-100 text-green-800"
                                : student.assignments.avgScore >= 70
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {student.assignments.avgScore}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          <Link to={`/teacher/student/${student.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              ดูงาน
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
