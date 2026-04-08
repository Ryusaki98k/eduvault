import { useParams, Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  ArrowLeft,
  Download,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  User,
  Save,
} from "lucide-react";
import { useState } from "react";

const studentWork = {
  student: {
    id: 1,
    studentId: "65412345001",
    name: "สมชาย มั่นคง",
    email: "somchai.m@spu.ac.th",
    avatar: null,
  },
  assignment: {
    id: 1,
    title: "แบบทดสอบครั้งที่ 4",
    description: "แบบทดสอบเกี่ยวกับความปลอดภัยของระบบเครือข่าย",
    dueDate: "19 March 2026, 23:59",
    maxScore: 100,
  },
  submission: {
    submittedAt: "18 March 2026, 15:30",
    status: "pending", // pending, graded, late
    isLate: false,
    files: [
      { name: "assignment-4-answer.pdf", size: "2.5 MB", type: "pdf" },
      { name: "network-diagram.png", size: "1.2 MB", type: "image" },
    ],
    textAnswer: `คำตอบข้อ 1: ระบบความปลอดภัยเครือข่ายประกอบด้วย Firewall, IDS/IPS, VPN และระบบ Authentication

คำตอบข้อ 2: การทำ Network Segmentation ช่วยลดความเสี่ยงจากการถูกโจมตี โดยแบ่งแยกเครือข่ายออกเป็นส่วนๆ

คำตอบข้อ 3: Encryption Protocol ที่สำคัญ ได้แก่ SSL/TLS, IPsec และ SSH`,
  },
  currentGrade: null as number | null,
  currentFeedback: "",
};

export function TeacherStudentWork() {
  const { id } = useParams();
  const [score, setScore] = useState<string>("");
  const [feedback, setFeedback] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [graded, setGraded] = useState(false);

  const handleSubmitGrade = () => {
    setIsSaving(true);
    // Mock saving
    setTimeout(() => {
      setIsSaving(false);
      setGraded(true);
      alert(`บันทึกคะแนน ${score} คะแนน สำเร็จ`);
    }, 1000);
  };

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
          <Link to="/teacher/course/1">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับไปหน้ารายวิชา
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Student Info */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">
                    {studentWork.student.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {studentWork.student.studentId}
                  </p>
                  <p className="text-sm text-gray-600">
                    {studentWork.student.email}
                  </p>
                </div>
                <div className="text-right">
                  {studentWork.submission.status === "pending" && !graded ? (
                    <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      รอตรวจ
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      ตรวจแล้ว
                    </span>
                  )}
                </div>
              </div>
            </Card>

            {/* Assignment Info */}
            <Card className="p-0 mb-6">
              <div className="bg-gray-200 px-6 py-3 border-b">
                <h3 className="font-semibold">รายละเอียดงาน</h3>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {studentWork.assignment.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {studentWork.assignment.description}
                </p>
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>กำหนดส่ง: {studentWork.assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>คะแนนเต็ม: {studentWork.assignment.maxScore}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Submission */}
            <Card className="p-0 mb-6">
              <div className="bg-gray-200 px-6 py-3 border-b">
                <h3 className="font-semibold">งานที่ส่ง</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      ส่งเมื่อ: {studentWork.submission.submittedAt}
                    </p>
                    {studentWork.submission.isLate && (
                      <p className="text-sm text-red-600 font-semibold mt-1">
                        ⚠️ ส่งงานช้ากว่ากำหนด
                      </p>
                    )}
                  </div>
                </div>

                {/* Files */}
                {studentWork.submission.files.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      ไฟล์แนบ
                    </h4>
                    <div className="space-y-2">
                      {studentWork.submission.files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                              <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">{file.size}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            ดาวน์โหลด
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Text Answer */}
                {studentWork.submission.textAnswer && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      คำตอบ
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                        {studentWork.submission.textAnswer}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Grading Sidebar */}
          <div className="col-span-4">
            <Card className="p-0 sticky top-6">
              <div className="bg-gray-200 px-6 py-3 border-b">
                <h3 className="font-semibold">ให้คะแนนและข้อเสนอแนะ</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Label htmlFor="score">คะแนน</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      id="score"
                      type="number"
                      min="0"
                      max={studentWork.assignment.maxScore}
                      placeholder="0"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-600">
                      / {studentWork.assignment.maxScore}
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="feedback">ข้อเสนอแนะ</Label>
                  <Textarea
                    id="feedback"
                    placeholder="เขียนข้อเสนอแนะสำหรับนักศึกษา..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={8}
                    className="mt-1"
                  />
                </div>

                <div className="pt-4 border-t space-y-2">
                  <Button
                    className="w-full"
                    onClick={handleSubmitGrade}
                    disabled={!score || isSaving}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? "กำลังบันทึก..." : "บันทึกคะแนน"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    บันทึกแบบร่าง
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    เกณฑ์การให้คะแนน
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ดีเยี่ยม (A)</span>
                      <span className="font-medium">80-100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ดี (B)</span>
                      <span className="font-medium">70-79</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ปานกลาง (C)</span>
                      <span className="font-medium">60-69</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">พอใช้ (D)</span>
                      <span className="font-medium">50-59</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ไม่ผ่าน (F)</span>
                      <span className="font-medium">0-49</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    การดำเนินการอื่นๆ
                  </h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      ส่งข้อความถึงนักศึกษา
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      ดูงานอื่นๆ ของนักศึกษา
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
