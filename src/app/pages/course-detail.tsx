import { useParams } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  FileText,
  Video,
  Link as LinkIcon,
  Download,
  CheckCircle2,
  Circle,
  ChevronRight,
} from "lucide-react";

const courseContent = [
  {
    week: "Week 1: Introduction",
    topics: [
      { title: "Course Overview", type: "video", completed: true },
      { title: "Syllabus", type: "file", completed: true },
      { title: "Reading Materials", type: "file", completed: false },
    ],
  },
  {
    week: "Week 2: Fundamentals",
    topics: [
      { title: "Lecture Video", type: "video", completed: true },
      { title: "Assignment 1", type: "file", completed: false },
      { title: "Quiz 1", type: "quiz", completed: false },
    ],
  },
  {
    week: "Week 3: Advanced Topics",
    topics: [
      { title: "Advanced Concepts", type: "video", completed: false },
      { title: "Case Study", type: "file", completed: false },
      { title: "Discussion Forum", type: "link", completed: false },
    ],
  },
];

const announcements = [
  {
    title: "แบบทดสอบครั้งที่ 4 เปิดแล้ว",
    date: "15 March 2026",
    content: "กรุณาทำแบบทดสอบให้เสร็จภายในวันที่ 19 มีนาคม 2026 เวลา 23:59 น.",
  },
  {
    title: "อัพเดทเนื้อหา Week 3",
    date: "10 March 2026",
    content: "เนื้อหาสัปดาห์ที่ 3 ได้ถูกอัพเดทแล้ว กรุณาตรวจสอบ",
  },
];

export function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          <Card className="p-0 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h1 className="text-2xl font-bold mb-2">เทคโนโลยีสารสนเทศ</h1>
              <p className="text-sm opacity-90">
                การจัดการและความปลอดภัย ระบบและเครือข่ายคอมพิวเตอร์
              </p>
              <div className="flex gap-4 mt-4 text-sm">
                <div>
                  <span className="opacity-75">Instructor:</span> ผู้ช่วยศาสตราจารย์ ดร. สมชาย ใจดี
                </div>
                <div>
                  <span className="opacity-75">Code:</span> ICT3326
                </div>
                <div>
                  <span className="opacity-75">Term:</span> 1/2026
                </div>
              </div>
            </div>
            <div className="p-6 border-b">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  ภาพรวม
                </Button>
                <Button variant="outline" size="sm">
                  เนื้อหา
                </Button>
                <Button variant="outline" size="sm">
                  งาน
                </Button>
                <Button variant="outline" size="sm">
                  คะแนน
                </Button>
                <Button variant="outline" size="sm">
                  ผู้เรียน
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-0">
            <div className="bg-gray-200 px-6 py-3 border-b">
              <h2 className="font-semibold">Course Content</h2>
            </div>
            <div className="divide-y">
              {courseContent.map((section, index) => (
                <div key={index} className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {section.week}
                  </h3>
                  <div className="space-y-3 pl-6">
                    {section.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        {topic.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        {topic.type === "video" && (
                          <Video className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        )}
                        {topic.type === "file" && (
                          <FileText className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        )}
                        {topic.type === "quiz" && (
                          <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                        {topic.type === "link" && (
                          <LinkIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        )}
                        <span
                          className={`flex-1 ${
                            topic.completed ? "text-gray-500" : "text-gray-900"
                          }`}
                        >
                          {topic.title}
                        </span>
                        {topic.type === "file" && (
                          <Download className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-span-4">
          <Card className="p-0 mb-6">
            <div className="bg-gray-200 px-4 py-3 border-b">
              <h2 className="font-semibold text-sm">Progress</h2>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Activities:</span>
                  <span className="font-semibold">7/20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assignments Submitted:</span>
                  <span className="font-semibold">2/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quizzes Completed:</span>
                  <span className="font-semibold">3/8</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-0">
            <div className="bg-gray-200 px-4 py-3 border-b">
              <h2 className="font-semibold text-sm">Announcements</h2>
            </div>
            <div className="divide-y">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">
                        {announcement.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {announcement.date}
                      </p>
                      <p className="text-xs text-gray-700">
                        {announcement.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t">
              <Button variant="link" size="sm" className="text-blue-600 text-xs">
                See all announcements
              </Button>
            </div>
          </Card>

          <Card className="p-0 mt-6">
            <div className="bg-gray-200 px-4 py-3 border-b">
              <h2 className="font-semibold text-sm">Upcoming Deadlines</h2>
            </div>
            <div className="divide-y">
              <div className="p-4">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">Quiz 4</h3>
                    <p className="text-xs text-red-600 mb-1">
                      Due: 19 March 2026, 23:59
                    </p>
                    <Button size="sm" className="text-xs mt-2">
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">Assignment 2</h3>
                    <p className="text-xs text-orange-600 mb-1">
                      Due: 25 March 2026, 23:59
                    </p>
                    <Button size="sm" variant="outline" className="text-xs mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
