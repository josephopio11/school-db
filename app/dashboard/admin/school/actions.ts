"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createFirstDummySchool() {
  const schoolInformation = await db.school.create({
    data: {
      name: "School Name",
      address: "School Address",
      phoneNumber: "School Phone Number",
      email: "School Email",
      phone: "School Phone",
      website: "School Website",
      motto: "School Motto",
      mission: "School Mission",
      vision: "School Vision",
      description: "School Description",
      active: true,
    },
  });
  revalidatePath("/dashboard/admin/school");
  return schoolInformation;
}

export async function getSchoolInformation() {
  const schoolInformation = await db.school.findMany();
  return schoolInformation;
}

export const editSchoolInformation = async (field: string, data: string) => {
  const onlySchool = await db.school.findFirst();
  if (!onlySchool) return;
  const schoolInformation = await db.school.update({
    where: {
      id: onlySchool.id,
    },
    data: {
      [field]: data,
    },
  });
  revalidatePath("/admin-panel/admin/school");
  return schoolInformation;
};
