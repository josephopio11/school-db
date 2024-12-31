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
