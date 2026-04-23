import "./globals.css";

import { dmSerifDisplay, inter, dmSans } from "@/lib/fonts";
import { DEFAULT_METADATA } from "@/lib/metadata";

import { LenisProvider } from "@/providers/LenisProvider";
import { AnimationProvider } from "@/providers/AnimationProvider";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { BackToTop } from "@/components/shared/BackToTop";
import { BookAppointmentCTA } from "@/components/shared/BookAppointmentCTA";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { AccessibilityProvider } from "@/providers/AccessibilityProvider";
import { StickyBookingBar } from "@/components/shared/StickyBookingBar";
import { AccessibilityPanel } from "@/components/shared/AccessibilityPanel";

export const metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body className="font-sans text-charcoal bg-white antialiased">
        <AccessibilityProvider>
          <AnimationProvider>
            <LenisProvider>
              <ScrollProgressBar />
              <Navbar />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <WhatsAppButton />
              <BackToTop />
              <StickyBookingBar />
              <AccessibilityPanel />
            </LenisProvider>
          </AnimationProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
