"use server";

import db from "@/lib/db";
import { CreateAYSchema } from "@/lib/zodSchemas";
import { revalidatePath } from "next/cache";

export async function getAllAcademicYears() {
  const academicYears = await db.academicYears.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return academicYears;
}

export async function createAcademicYear(data: CreateAYSchema) {
  const academicYear = await db.academicYears.create({
    data,
  });

  console.log(academicYear);
  revalidatePath("/dashboard/admin/academic-years");
  return academicYear;
}

export async function updateAcademicYear(id: string, data: CreateAYSchema) {
  const academicYear = await db.academicYears.update({
    where: { id },
    data,
  });

  console.log(academicYear);
  return academicYear;
}

export async function deleteAcademicYear(id: string) {
  const academicYear = await db.academicYears.delete({
    where: { id },
  });

  console.log(academicYear);
  return academicYear;
}

export async function setAsCurrentAcademicYear(id: string) {
  try {
    await db.academicYears.updateMany({
      data: {
        status: false,
      },
    });

    await db.academicYears.update({
      where: { id },
      data: {
        status: true,
      },
    });

    revalidatePath("/dashboard/admin/academic-years");

    return { success: true, message: "Academic year set as current." };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to set" };
  }
}
