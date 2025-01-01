"use server";

import db from "@/lib/db";

export async function getAllTeachers() {
  const teachers = await db.teacher.findMany({
    include: {
      assignedTeachers: {
        include: {
          class: true,
          semester: true,
          section: true,
          course: true,
          session: true,
        },
      },
    },
  });

  return teachers;
}

export async function getTeacherById(id: string) {
  const atukot = await db.teacher.findUnique({
    where: {
      id,
    },
    include: {
      assignedTeachers: {
        include: {
          class: true,
          semester: true,
          section: true,
          course: true,
          session: true,
        },
      },
    },
  });

  return atukot;
}

// export async function createTeacher(data) {
//   const atukot = await db.teacher.create({
//     data,
//   });

//   return atukot;
// }

// export async function updateTeacher(id: string, data) {
//   const atukot = await db.teacher.update({
//     where: { id },
//     data,
//   });

//   return atukot;
// }

// export async function deleteTeacher(id: string) {
//   const atukot = await db.teacher.delete({
//     where: { id },
//   });

//   return atukot;
// }
