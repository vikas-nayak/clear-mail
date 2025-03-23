import { Suspense } from "react";
import { Metadata } from "next";
import { Hero } from "@/app/(landing)/home/Hero";
// import { LogoCloud } from "@/app/(landing)/home/LogoCloud";
import { Testimonials } from "@/app/(landing)/home/Testimonials";
import { Pricing } from "@/app/(app)/premium/Pricing";
import { FAQs } from "@/app/(landing)/home/FAQs";
import { CTA } from "@/app/(landing)/home/CTA";
import { FeaturesAutomation } from "@/app/(landing)/home/Features";
import { BasicLayout } from "@/components/layouts/BasicLayout";

export const metadata: Metadata = {
  title: "AI Email Automation | Clear Mail",
  description:
    "Clear Mail's AI automation simplifies your email management. It smartly handles repetitive queries, automates responses, and efficiently organizes your inbox, streamlining your email workflow for maximum efficiency.",
  alternates: { canonical: "/ai-automation" },
};

export default function AiAutomation() {
  return (
    <BasicLayout>
      <Hero
        title="Automate your email inbox with AI automation"
        subtitle="Clear Mail's AI automation simplifies your email management. It smartly handles repetitive queries, automates responses, and efficiently organizes your inbox, streamlining your email workflow for maximum efficiency."
        image="/images/rules.png"
      />
      {/* <LogoCloud /> */}
      <Testimonials />
      <FeaturesAutomation />
      <Suspense>
        <Pricing />
      </Suspense>
      <FAQs />
      <CTA />
    </BasicLayout>
  );
}
