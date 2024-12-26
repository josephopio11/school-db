import { PrismaClient } from "@prisma/client";
import { parents, school, students, teachers } from "./dummy-data";

const db = new PrismaClient();

async function schoolSeed() {
  const something = await db.school.upsert({
    where: {
      email: school.email,
    },
    update: school,
    create: school,
  });

  console.table(something);
}

async function teacherSeed() {
  teachers.map(async (teacher) => {
    const data = await db.teacher.upsert({
      where: {
        email: teacher.email,
      },
      update: {
        ...teacher,
        dateOfBirth: new Date(teacher.dateOfBirth),
        active: true,
      },
      create: {
        ...teacher,
        dateOfBirth: new Date(teacher.dateOfBirth),
        active: true,
      },
    });
    console.table(data);
  });
}

async function parentSeed() {
  parents.map(async (parent) => {
    const data = await db.parent.upsert({
      where: {
        email: parent.email,
      },
      update: {
        ...parent,
        dateOfBirth: new Date(parent.dateOfBirth),
        active: true,
      },
      create: {
        ...parent,
        dateOfBirth: new Date(parent.dateOfBirth),
        active: true,
      },
    });
    console.table(data);
  });
}

async function studentSeed() {
  students.map(async (student) => {
    const data = await db.student.upsert({
      where: {
        email: student.email,
      },
      update: {
        ...student,
        dateOfBirth: new Date(student.dateOfBirth),
        active: true,
      },
      create: {
        ...student,
        dateOfBirth: new Date(student.dateOfBirth),
        active: true,
      },
    });
    console.table(data);
  });
}

async function main() {
  await schoolSeed();
  await teacherSeed();
  await parentSeed();
  await studentSeed();
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
