import { Outlet, Link, useLocation, useNavigate } from "react-router";
import {
  Home,
  LayoutDashboard,
  Calendar,
  BookOpen,
  Bell,
  MessageSquare,
  Search,
  User,
  Globe,
  Maximize,
  Eye,
  EyeOff,
  ChevronDown,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("th");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // อ่านค่า dark mode จาก localStorage หรือใช้ค่าเริ่มต้น
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // เพิ่ม/ลบ class dark จาก html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    // ล้างข้อมูลการล็อกอิน
    localStorage.removeItem("userType");
    localStorage.removeItem("teacherName");
    localStorage.removeItem("studentName");
    localStorage.removeItem("isLoggedIn");

    // นำผู้ใช้ไปหน้า login
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#2e5090] text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#2e5090] px-2 py-1 rounded">
                <span className="font-bold text-sm">SPU</span>
              </div>
              <h1 className="text-xl font-semibold">DLearning SPU</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="search Courses"
                className="bg-white text-gray-900 pr-10 dark:bg-gray-800 dark:text-white"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <Bell className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <MessageSquare className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#3d619f]"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#3d619f]"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === "th" ? "English (en)" : "ไทย (th)"}
            </Button>
            
            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-sm">ARTIT LANGPRASERT</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700">
          <div className="px-6 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Link to="/">
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 rounded-none ${
                    isActive("/")
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 rounded-none ${
                    isActive("/dashboard")
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="flex items-center gap-2 rounded-none hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </Button>
              <Link to="/my-courses">
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 rounded-none ${
                    isActive("/my-courses")
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>My Courses</span>
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="default"
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                Customise this page
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                <Eye className="w-4 h-4 mr-1" />
                Hide blocks
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                <Maximize className="w-4 h-4 mr-1" />
                Full screen
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Announcement Banner */}
      <div className="bg-gray-800 dark:bg-gray-950 text-white px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-gray-700 dark:bg-gray-800 px-3 py-1 text-sm font-semibold">
            ANNOUNCEMENTS
          </span>
          <span className="text-sm">
            นักศึกษามหาวิทยาลัย สอนลูกค้าหน้าร้านทั้งได้งานระบบ d-Learning ได้ที่ Line@ ID : @bbe3877w เพื่อทีเลือก https://lin.ee/ljke1n5
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm bg-green-600 hover:bg-green-700 px-4 py-1 rounded transition-colors"
          >
            เข้าสู่ระบบนักศึกษา
          </a>
          <a
            href="/teacher/login"
            className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded transition-colors"
          >
            เข้าสู่ระบบอาจารย์
          </a>
          <Button variant="ghost" size="sm" className="text-white">
            <div className="flex gap-0.5">
              <div className="w-1 h-4 bg-white"></div>
              <div className="w-1 h-4 bg-white"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}