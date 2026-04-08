import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Lock, User, GraduationCap } from "lucide-react";

export function StudentLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Mock authentication - ในระบบจริงจะเชื่อมต่อกับ backend
    setTimeout(() => {
      if (
        credentials.username === "student" &&
        credentials.password === "student123"
      ) {
        // เก็บข้อมูล session
        localStorage.setItem("userType", "student");
        localStorage.setItem("studentName", "ARTIT LANGPRASERT");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            DLearning SPU
          </h1>
          <p className="text-sm text-gray-600">ระบบสำหรับนักศึกษา</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">ชื่อผู้ใช้</Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="username"
                type="text"
                placeholder="กรอกชื่อผู้ใช้"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">รหัสผ่าน</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="กรอกรหัสผ่าน"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="pl-10"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">ข้อมูลทดสอบ:</p>
          <p className="text-xs text-gray-700">
            <strong>Username:</strong> student
          </p>
          <p className="text-xs text-gray-700">
            <strong>Password:</strong> student123
          </p>
        </div>

        <div className="mt-6 text-center space-y-2">
          <a
            href="/teacher/login"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline block"
          >
            เข้าสู่ระบบสำหรับอาจารย์
          </a>
        </div>
      </Card>
    </div>
  );
}
