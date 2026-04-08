import { ChevronLeft, ChevronRight, MoreVertical, FileText } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

const recentCourses = [
  {
    id: 1,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "ภูมิประกอบการเจริฐ [682GN-ICT33267(T)...]",
    image: "https://images.unsplash.com/photo-1767474604678-e32410f62d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBjb3Vyc2UlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM1NjQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-300 to-blue-400",
  },
  {
    id: 2,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การจัดการและความปลอดภัย ระบบและเครือข่ายคอม...",
    image: "https://images.unsplash.com/photo-1668713447978-1e47fcfeff4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNTY0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-400 to-blue-500",
  },
];

const allCourses = [
  {
    id: 1,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การจัดการที่และความปลอดภัย ระบบและเครือข่ายของกอม...",
    image: "https://images.unsplash.com/photo-1767474604678-e32410f62d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBjb3Vyc2UlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM1NjQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
  },
  {
    id: 2,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การจัดการและความปลอดภัย ระบบและเครือข่ายคอม...",
    image: "https://images.unsplash.com/photo-1668713447978-1e47fcfeff4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNTY0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
  },
  {
    id: 3,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การพัฒนาซอฟต์แวร์บนระบบ บริหารการจัดการค้าความปลอดภัย...",
    image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlY3VyaXR5JTIwZGFya3xlbnwxfHx8fDE3NzM1NjQzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "ICT3357",
    badgeColor: "bg-red-600",
    overlay: true,
  },
  {
    id: 4,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การพัฒนาซอฟต์แวร์บนระบบ บริหารการจัดการค้าความปลอดภัย...",
    image: "https://images.unsplash.com/photo-1763568258327-034710107b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwb3JhbmdlfGVufDF8fHx8MTc3MzU2NDMxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "ICT3357",
    badgeColor: "bg-orange-600",
    overlay: true,
  },
];

const timelineEvents = [
  {
    date: "Thursday, 19 March 2026",
    time: "23:59",
    title: "แบบทดสอบคอมพิวเตอร์ครั้งที่ 4...",
    subtitle: "การจัดการและความปลอดภัย ระบบเครือข่าย...",
    action: "Attempt quiz now",
    icon: "quiz",
  },
  {
    date: "Sunday, 19 April 2026",
    time: "23:59",
    title: "แบบทดสอบคอมพิวเตอร์ครั้งที่ 2...",
    subtitle: "การจัดการและความปลอดภัย ระบบเครือข่าย...",
    action: "Attempt quiz now",
    icon: "quiz",
  },
  {
    date: "Sunday, 19 April 2026",
    time: "23:59",
    title: "แบบทดสอบคอมพิวเตอร์ครั้งที่ 2...",
    subtitle: "การจัดการและความปลอดภัย ระบบเครือข่าย...",
    action: "Attempt quiz now",
    icon: "quiz",
  },
];

export function DashboardHome() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Sidebar - Navigation */}
      <div className="col-span-3">
        <Card className="p-0">
          <div className="bg-gray-200 px-4 py-2 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
              </div>
              <span className="font-semibold text-sm">Navigation</span>
            </div>
          </div>
          <div className="p-3 space-y-1">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-sm">Site home</span>
            </div>
            <div className="pl-4">
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-sm">▸</span>
                <span className="text-sm">Site pages</span>
              </div>
            </div>
            <div className="pl-4">
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-sm">▾</span>
                <span className="text-sm">My courses</span>
              </div>
              <div className="pl-6 space-y-1">
                <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded cursor-pointer">
                  <span className="text-sm">▸</span>
                  <span className="text-xs">เทคโนโลยีสารสนเทศ</span>
                </div>
                <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded cursor-pointer">
                  <span className="text-sm">▸</span>
                  <span className="text-xs">วิจารณ์หนังโป</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-0 mt-6">
          <div className="bg-gray-200 px-4 py-2 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
              </div>
              <span className="font-semibold text-sm">Timeline</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-2 mb-3">
              <Button variant="outline" size="sm" className="text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="text-xs flex-1">
                <div className="flex flex-col gap-0.5">
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                </div>
              </Button>
            </div>

            <div className="space-y-3">
              {timelineEvents.map((event, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-3">
                  <div className="text-xs font-semibold mb-1">{event.date}</div>
                  <div className="bg-gray-50 p-2 rounded space-y-1">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-red-600 mb-0.5">
                          {event.title}
                        </div>
                        <div className="text-xs text-gray-600 mb-1 truncate">
                          {event.subtitle}
                        </div>
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                          {event.action}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="col-span-9 space-y-6">
        {/* Recently Accessed Courses */}
        <Card className="p-0">
          <div className="bg-gray-200 px-4 py-2 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
              </div>
              <span className="font-semibold text-sm">Recently accessed courses</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex-1 grid grid-cols-2 gap-4 px-4">
                {recentCourses.map((course) => (
                  <Link key={course.id} to={`/course/${course.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className={`h-32 bg-gradient-to-br ${course.color} relative`}>
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover opacity-30"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                        <p className="text-xs text-gray-600 truncate">{course.subtitle}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Course Overview */}
        <Card className="p-0">
          <div className="bg-gray-200 px-4 py-2 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
                <div className="w-4 h-0.5 bg-gray-600"></div>
              </div>
              <span className="font-semibold text-sm">Course overview</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="sm" className="text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
                All (except removed from view)
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-3 h-0.5 bg-gray-600"></div>
                    <div className="w-3 h-0.5 bg-gray-600"></div>
                  </div>
                  <span className="ml-1">Course name</span>
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-2 h-2 bg-gray-400"></div>
                    <div className="w-2 h-2 bg-gray-400"></div>
                    <div className="w-2 h-2 bg-gray-400"></div>
                    <div className="w-2 h-2 bg-gray-400"></div>
                  </div>
                  <span className="ml-1">Card</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {allCourses.map((course) => (
                <Link key={course.id} to={`/course/${course.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-32">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {course.overlay && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-3">
                          {course.badge && (
                            <div className={`${course.badgeColor} text-white px-3 py-1 rounded text-xs font-bold mb-2`}>
                              {course.badge}
                            </div>
                          )}
                          <div className="text-white text-center">
                            <div className="text-xs font-semibold mb-1">CLOUD COMPUTING</div>
                            <div className="text-xs">SOFTWARE DEVELOPMENT</div>
                            <div className="text-xs">AND DATASECURITY</div>
                            <div className="text-xs mt-1">(Thai)</div>
                          </div>
                        </div>
                      )}
                      {!course.overlay && course.bgColor && (
                        <div className={`absolute inset-0 ${course.bgColor} opacity-50`}></div>
                      )}
                    </div>
                    <div className="p-3 relative">
                      <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{course.subtitle}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-auto"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
