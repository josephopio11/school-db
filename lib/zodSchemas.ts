import { z } from "zod";

export const createAYSchema = z.object({
  name: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export type CreateAYSchema = z.infer<typeof createAYSchema>;

export const createSubjectSchema = z.object({
  name: z.string(),
  type: z.string(),
});

export type CreateSubjectSchema = z.infer<typeof createSubjectSchema>;

export const createTeacherSchema = z.object({
  firstName: z.string().min(2).max(25),
  lastName: z.string().min(2).max(25),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  maritalStatus: z.string().optional(),
  occupation: z.string().optional(),
  nationality: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string(),
  city: z.string().optional(),
  state: z.string().optional(),
  name_8157278128: z.boolean(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  profilePictureUrl: z.string().optional(),
  emergencyContact: z.string().optional(),
  emergencyPhone: z.string().optional(),
});

export type CreateTeacherSchema = z.infer<typeof createTeacherSchema>;
