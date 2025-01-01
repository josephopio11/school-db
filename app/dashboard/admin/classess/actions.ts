"use server";

import db from "@/lib/db";

export async function getAllClassess() {
  const classess = await db.class.findMany({
    include: {
      sections: true,
    },
  });

  return classess;
}

export async function getClassById(id: string) {
  const atukot = await db.class.findUnique({
    where: {
      id,
    },
    include: {
      sections: true,
    },
  });

  return atukot;
}

// export async function createClass(data) {
//   const atukot = await db.class.create({
//     data,
//   });

//   return atukot;
// }

// export async function updateClass(id: string, data) {
//   const atukot = await db.class.update({
//     where: { id },
//     data,
//   });

//   return atukot;
// }

// export async function deleteClass(id: string) {
//   const atukot = await db.class.delete({
//     where: { id },
//   });

//   return atukot;
// }
