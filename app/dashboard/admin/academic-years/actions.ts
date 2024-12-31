"use server";

import db from "@/lib/db";
import { CreateAYSchema } from "@/lib/zodSchemas";

export async function getAllAcademicYears() {
  const academicYears = await db.academicYears.findMany();
  return academicYears;
}

export async function createAcademicYear(data: CreateAYSchema) {
  const academicYear = await db.academicYears.create({
    data,
  });

  console.log(academicYear);
  return academicYear;
}
