export type AppointmentReason =
  | "Diabetes Consultation"
  | "Wound Care"
  | "Health Checkup"
  | "Cancer Screening"
  | "Other";

export interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  reason: AppointmentReason;
  message?: string;
}
