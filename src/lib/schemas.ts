import { z } from "zod";

export const appointmentReasons = [
  "Diabetes Consultation",
  "Wound Care",
  "Health Checkup",
  "Cancer Screening",
  "Other",
] as const;

export const appointmentFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),

  phone: z
    .string()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid Indian phone number (e.g. +91 98765 43210)"
    ),

  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),

  preferredDate: z
    .string()
    .min(1, "Please select a preferred date"),

  preferredTime: z
    .string()
    .min(1, "Please select a preferred time slot"),

  reason: z.enum(appointmentReasons, {
    message: "Please select a reason for your visit",
  }),

  message: z
    .string()
    .max(500, "Message must be under 500 characters")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormSchema = z.infer<typeof appointmentFormSchema>;
