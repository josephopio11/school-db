"use server";

import db from "@/lib/db";

export async function studentFilters() {
  const classes = await db.class.findMany();
  const subjects = await db.course.findMany();
  const sections = await db.section.findMany();
  const houses = [
    {
      name: "Red",
      id: "1",
    },
    {
      name: "Blue",
      id: "2",
    },
    {
      name: "Green",
      id: "3",
    },
    {
      name: "Yellow",
      id: "4",
    },
  ];

  return {
    classes: classes,
    subjects: subjects,
    streams: sections,
    houses: houses,
  };
}
