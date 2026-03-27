import { NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const result = appointmentFormSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your input.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // Log the validated data (replace with email service like Resend when API key is available)
    console.log("=== New Appointment Request ===");
    console.log("Name:", result.data.name);
    console.log("Phone:", result.data.phone);
    console.log("Email:", result.data.email || "Not provided");
    console.log("Preferred Date:", result.data.preferredDate);
    console.log("Preferred Time:", result.data.preferredTime);
    console.log("Reason:", result.data.reason);
    console.log("Message:", result.data.message || "No message");
    console.log("Received at:", new Date().toISOString());
    console.log("================================");

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received. We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
