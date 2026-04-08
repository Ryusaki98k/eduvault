import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/dashboard-layout";
import { DashboardHome } from "./pages/dashboard-home";
import { MyCourses } from "./pages/my-courses";
import { CourseDetail } from "./pages/course-detail";
import { Profile } from "./pages/profile";
import { StudentLogin } from "./pages/student-login";
import { TeacherLogin } from "./pages/teacher-login";
import { TeacherDashboard } from "./pages/teacher-dashboard";
import { TeacherCourseDetail } from "./pages/teacher-course-detail";
import { TeacherStudentWork } from "./pages/teacher-student-work";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: StudentLogin,
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardHome },
      { path: "my-courses", Component: MyCourses },
      { path: "course/:id", Component: CourseDetail },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/teacher/login",
    Component: TeacherLogin,
  },
  {
    path: "/teacher/dashboard",
    Component: TeacherDashboard,
  },
  {
    path: "/teacher/course/:id",
    Component: TeacherCourseDetail,
  },
  {
    path: "/teacher/student/:id",
    Component: TeacherStudentWork,
  },
]);