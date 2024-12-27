import {
  Clock,
  Contact,
  Globe,
  Home,
  Mail,
  Medal,
  Paperclip,
  UniversityIcon,
  UserCircle,
  Users2Icon,
} from "lucide-react";

export const navData = {
  navMain: [
    {
      index: 100,
      title: "Dashboard",
      icon: Home,
      url: "/dashboard",
    },
    {
      index: 0,
      title: "Admin",
      icon: UniversityIcon,
      url: "/dashboard/admin",
      items: [
        { title: "Statistics", url: "/dashboard/admin" },
        { title: "Academic Years", url: "/dashboard/admin/academic-years" },
        { title: "Classes", url: "/dashboard/admin/classess" },
        { title: "Subjects", url: "/dashboard/admin/subjects" },
        { title: "Teachers", url: "/dashboard/admin/teachers" },
        { title: "Parents", url: "/dashboard/admin/parents" },
        { title: "Students", url: "/dashboard/admin/students" },
        { title: "School Info", url: "/dashboard/admin/school" },
        { title: "User Roles", url: "/dashboard/admin/user-roles" },
      ],
    },
    {
      index: 1,
      title: "Results",
      icon: Paperclip,
      url: "/dashboard/results",
      items: [
        { title: "Results Home", url: "/dashboard/results" },
        { title: "Marksheets", url: "/dashboard/results/marksheets" },
        {
          title: "Performance Reports",
          url: "/dashboard/results/performance-reports",
        },
        {
          title: "Report Comments",
          url: "/dashboard/results/report-comments",
        },
        {
          title: "Assessment Progress",
          url: "/dashboard/results/assessment-progress",
        },
        {
          title: "Reports",
          url: "/dashboard/results/reports",
        },
      ],
    },
    {
      index: 2,
      title: "Attendance",
      icon: Contact,
      url: "/dashboard/attendance",
      items: [
        {
          title: "Day Attendance",
          url: "/dashboard/attendance/day",
        },
        {
          title: "Lesson Attendance",
          url: "/dashboard/attendance/lesson",
        },
        {
          title: "Analytics",
          url: "/dashboard/attendance/analytics",
        },
      ],
    },
    {
      index: 3,
      title: "My Students",
      icon: Users2Icon,
      url: "/dashboard/students",
      items: [
        {
          title: "My Students",
          url: "/dashboard/students",
        },
        {
          title: "My Classes",
          url: "/dashboard/students/classes",
        },
        {
          title: "My Lessons",
          url: "/dashboard/students/lessons",
        },
        {
          title: "Lesson Archive",
          url: "/dashboard/students/lessons/archive",
        },
      ],
    },
    {
      index: 4,
      title: "Pastoral",
      icon: Medal,
      url: "/dashboard/pastoral",
    },
    {
      index: 5,
      title: "Communications",
      icon: Mail,
      url: "/dashboard/comms",
      items: [
        { title: "Notices", url: "/dashboard/comms/notices" },
        {
          title: "Announcements",
          url: "/dashboard/comms/announcements",
        },
        { title: "Inbox", url: "/dashboard/comms/inbox" },
        { title: "Calendar", url: "/dashboard/comms/calendar" },
      ],
    },

    {
      index: 6,
      title: "Scheduling",
      icon: Clock,
      url: "/dashboard/scheduling",
      items: [
        {
          title: "Timetable",
          url: "/dashboard/scheduling/timetable",
        },
        {
          title: "Rooms",
          url: "/dashboard/scheduling/rooms",
        },
        {
          title: "PTCs",
          url: "/dashboard/scheduling/ptcs",
        },
      ],
    },
    {
      index: 7,
      title: "Profile",
      icon: UserCircle,
      url: "/dashboard/profile",
    },
    {
      index: 8,
      title: "Useful Links",
      icon: Globe,
      url: "/dashboard/links",
      items: [
        {
          title: "Nankani",
          url: "/dashboard/links/timetable",
        },
        {
          title: "Rooms",
          url: "/dashboard/links/rooms",
        },
        {
          title: "PTCs",
          url: "/dashboard/links/ptcs",
        },
      ],
    },
  ],
};
