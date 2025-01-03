"use server";

import db from "@/lib/db";
import { CreateSubjectSchema } from "@/lib/zodSchemas";
import { revalidatePath } from "next/cache";

export async function getAllSubjects() {
  const course = await db.course.findMany({
    orderBy: {
      type: "asc",
    },
  });

  return course;
}

export async function getSubjectById(id: string) {
  const course = await db.course.findUnique({
    where: {
      id,
    },
  });

  return course;
}

export async function createSubject(data: CreateSubjectSchema) {
  console.table(data);
  const course = await db.course.create({
    data,
  });

  console.table(course);

  revalidatePath("/dashboard/admin/subjects");

  return course;
}

// export async function updateClass(id: string, data) {
//   const course = await db.class.update({
//     where: { id },
//     data,
//   });

//   return course;
// }

// export async function deleteClass(id: string) {
//   const course = await db.class.delete({
//     where: { id },
//   });

//   return course;
// }
