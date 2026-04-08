import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MoreVertical } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การจัดการที่และความปลอดภัย ระบบและเครือข่ายของกอม...",
    image: "https://images.unsplash.com/photo-1767474604678-e32410f62d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBjb3Vyc2UlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM1NjQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
    code: "ICT3326",
  },
  {
    id: 2,
    title: "เทคโนโลยีสารสนเทศ",
    subtitle: "การจัดการและความปลอดภัย ระบบและเครือข่ายคอม...",
    image: "https://images.unsplash.com/photo-1668713447978-1e47fcfeff4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNTY0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
    code: "ICT3327",
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
  {
    id: 5,
    title: "วิจารณ์หนังโป",
    subtitle: "การวิเคราะห์และวิจารณ์ภาพยนตร์สมัยใหม่",
    image: "https://images.unsplash.com/photo-1767474604678-e32410f62d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBjb3Vyc2UlMjBibHVlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM1NjQzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-green-200 to-green-300",
    code: "HUM2201",
  },
  {
    id: 6,
    title: "การสื่อสารดิจิทัล",
    subtitle: "เทคนิคการสื่อสารในยุคดิจิทัล",
    image: "https://images.unsplash.com/photo-1668713447978-1e47fcfeff4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGxlYXJuaW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNTY0MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    code: "COM3101",
  },
];

export function MyCourses() {
  return (
    <div className="max-w-7xl mx-auto">
      <Card className="p-0">
        <div className="bg-gray-200 px-6 py-3 border-b">
          <h1 className="text-xl font-semibold">My Courses</h1>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="outline" size="sm">
                In Progress
              </Button>
              <Button variant="outline" size="sm">
                Completed
              </Button>
              <Button variant="outline" size="sm">
                Favourite
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <div className="flex flex-col gap-0.5">
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                  <div className="w-3 h-0.5 bg-gray-600"></div>
                </div>
                <span className="ml-1">List</span>
              </Button>
              <Button variant="outline" size="sm">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div>
                </div>
                <span className="ml-1">Grid</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {courses.map((course) => (
              <Link key={course.id} to={`/course/${course.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-40">
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
                    {course.code && !course.overlay && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                        {course.code}
                      </div>
                    )}
                  </div>
                  <div className="p-4 relative">
                    <h3 className="font-semibold text-sm mb-2">{course.title}</h3>
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
  );
}
