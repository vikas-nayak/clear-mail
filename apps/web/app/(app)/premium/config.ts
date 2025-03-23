import { env } from "@/env.mjs";
import { PremiumTier } from "@prisma/client";

export const frequencies = [
  { value: "monthly" as const, label: "Monthly", priceSuffix: "/month" },
  { value: "annually" as const, label: "Annually", priceSuffix: "/year" },
];

export const pricing: Record<PremiumTier, string> = {
  [PremiumTier.PRO_MONTHLY]: "$0",
  [PremiumTier.PRO_ANNUALLY]: "$0",
  [PremiumTier.BUSINESS_MONTHLY]: "$0",
  [PremiumTier.BUSINESS_ANNUALLY]: "$0",
  [PremiumTier.LIFETIME]: "$0",
};

export const pricingAdditonalEmail: Record<PremiumTier, string> = {
  [PremiumTier.PRO_MONTHLY]: "$0",
  [PremiumTier.PRO_ANNUALLY]: "$0",
  [PremiumTier.BUSINESS_MONTHLY]: "$0",
  [PremiumTier.BUSINESS_ANNUALLY]: "$0",
  [PremiumTier.LIFETIME]: "$0",
};

export const tiers = [
  {
    name: "Free",
    href: { monthly: "/welcome", annually: "/welcome" },
    price: { monthly: "$0", annually: "$0" },
    description: "Try Clear Mail for free.",
    features: [
      `Unsubscribe from ${env.NEXT_PUBLIC_UNSUBSCRIBE_CREDITS} emails per month`,
      "Email analytics",
      "Newsletter cleaner",
      "New senders",
      "Inbox view",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    tiers: {
      monthly: PremiumTier.PRO_MONTHLY,
      annually: PremiumTier.PRO_ANNUALLY,
    },
    href: {
      monthly: env.NEXT_PUBLIC_PRO_MONTHLY_PAYMENT_LINK,
      annually: env.NEXT_PUBLIC_PRO_ANNUALLY_PAYMENT_LINK,
    },
    checkout: true,
    price: { monthly: pricing.PRO_MONTHLY, annually: pricing.PRO_ANNUALLY },
    priceAdditional: {
      monthly: pricingAdditonalEmail.PRO_MONTHLY,
      annually: pricingAdditonalEmail.PRO_ANNUALLY,
    },
    description: "Unlock full newsletter cleaner access.",
    features: [
      "Everything in free",
      "Unlimited unsubscribes",
      "Cold email blocker with personal OpenAI key",
      "AI with personal OpenAI key",
      "Priority support",
    ],
    cta: "Upgrade",
    mostPopular: true,
  },
  {
    name: "Business",
    tiers: {
      monthly: PremiumTier.BUSINESS_MONTHLY,
      annually: PremiumTier.BUSINESS_ANNUALLY,
    },
    href: {
      monthly: env.NEXT_PUBLIC_BUSINESS_MONTHLY_PAYMENT_LINK,
      annually: env.NEXT_PUBLIC_BUSINESS_ANNUALLY_PAYMENT_LINK,
    },
    checkout: true,
    price: {
      monthly: pricing.BUSINESS_MONTHLY,
      annually: pricing.BUSINESS_ANNUALLY,
    },
    priceAdditional: {
      monthly: pricingAdditonalEmail.BUSINESS_MONTHLY,
      annually: pricingAdditonalEmail.BUSINESS_ANNUALLY,
    },
    description: "Unlock full platform access.",
    features: [
      "Everything in pro",
      "Cold email blocker",
      "AI automations",
      "AI categorization",
      "AI planning mode",
    ],
    cta: "Upgrade",
    mostPopular: false,
    hideFrequency: false,
  },
  // {
  //   name: "Enterprise",
  //   id: "tier-enterprise",
  //   href: env.NEXT_PUBLIC_CALL_LINK,
  //   price: { monthly: "Book a call", annually: "Book a call" },
  //   description: "For help self-hosting, and dedicated support.",
  //   features: ["Self-hosted", "Everything in pro", "Dedicated support"],
  //   hideFrequency: true,
  //   cta: "Book a call",
  // },
];

export const lifetimeFeatures = [
  "Everything in Clear Mail Business",
  "Priority support",
  "$100 of AI credits",
  "Early access to new features",
];
