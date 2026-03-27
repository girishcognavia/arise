"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import {
  appointmentFormSchema,
  appointmentReasons,
  type AppointmentFormSchema,
} from "@/lib/schemas";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";

const timeSlotOptions = [
  { value: "Morning (7AM-12PM)", label: "Morning (7AM\u201312PM)" },
  { value: "Afternoon (12PM-4PM)", label: "Afternoon (12PM\u20134PM)" },
  { value: "Evening (4PM-7PM)", label: "Evening (4PM\u20137PM)" },
];

const reasonOptions = appointmentReasons.map((reason) => ({
  value: reason,
  label: reason,
}));

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormSchema>({
    resolver: zodResolver(appointmentFormSchema),
  });

  const onSubmit = async (data: AppointmentFormSchema) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleNewSubmission = () => {
    setStatus("idle");
    setErrorMessage("");
    reset();
  };

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split("T")[0];

  if (status === "success") {
    return (
      <ScrollReveal animation="fadeUp">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-3">
            Thank You!
          </h3>
          <p className="text-slate text-body leading-relaxed mb-6 max-w-md mx-auto">
            We have received your appointment request. Our team will contact you
            shortly to confirm your appointment.
          </p>
          <Button variant="secondary" onClick={handleNewSubmission}>
            Submit Another Request
          </Button>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal animation="fadeUp">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h2 className="font-serif text-xl sm:text-2xl text-charcoal mb-2">
          Book an Appointment
        </h2>
        <p className="text-slate text-sm mb-8">
          Fill in the form below and we will get back to you to confirm your
          appointment.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <Input
            label="Full Name *"
            {...register("name")}
            error={errors.name?.message}
          />

          <Input
            label="Phone Number *"
            type="tel"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <Input
            label="Email (optional)"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Preferred Date *"
              type="date"
              min={today}
              {...register("preferredDate")}
              error={errors.preferredDate?.message}
            />

            <Select
              label="Preferred Time *"
              options={timeSlotOptions}
              {...register("preferredTime")}
              error={errors.preferredTime?.message}
            />
          </div>

          <Select
            label="Reason for Visit *"
            options={reasonOptions}
            {...register("reason")}
            error={errors.reason?.message}
          />

          <Textarea
            label="Message (optional)"
            {...register("message")}
            error={errors.message?.message}
          />

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </span>
            ) : (
              "Request Appointment"
            )}
          </Button>
        </form>
      </div>
    </ScrollReveal>
  );
}
