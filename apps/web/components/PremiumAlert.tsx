"use client";

import Link from "next/link";
import useSWR from "swr";
import { CrownIcon } from "lucide-react";
import { AlertWithButton } from "@/components/Alert";
import { Button } from "@/components/Button";
import { UserResponse } from "@/app/api/user/me/route";
import { hasUnsubscribeAccess, isPremium } from "@/utils/premium";
import { Tooltip } from "@/components/Tooltip";

export function usePremium() {
  const swrResponse = useSWR<UserResponse>("/api/user/me");

  const premium = !!(
    swrResponse.data?.premium &&
    isPremium(swrResponse.data.premium.lemonSqueezyRenewsAt)
  );

  return {
    ...swrResponse,
    isPremium: premium,
    hasUnsubscribeAccess:
      premium ||
      hasUnsubscribeAccess(swrResponse.data?.premium?.unsubscribeCredits),
  };
}

export function PremiumAlert({
  plan = "Inbox Zero Business",
  showSetApiKey,
}: {
  plan?: "Inbox Zero Business" | "Inbox Zero Pro";
  showSetApiKey: boolean;
}) {
  return (
    <AlertWithButton
      title="Premium"
      description={
        <>
          This is a premium feature.{" "}
          <Link href="/premium" className="font-semibold hover:text-gray-700">
            Upgrade
          </Link>{" "}
          to {plan}
          {showSetApiKey ? (
            <>
              {" "}
              or set an OpenAI API key on the{" "}
              <Link
                href="/settings"
                className="font-semibold hover:text-gray-700"
              >
                settings
              </Link>{" "}
              page.
            </>
          ) : (
            <>.</>
          )}
        </>
      }
      icon={<CrownIcon className="h-4 w-4" />}
      button={<Button link={{ href: "/premium" }}>Upgrade</Button>}
    />
  );
}

export function PremiumTooltip(props: {
  children: React.ReactElement;
  showTooltip: boolean;
}) {
  if (!props.showTooltip) return props.children;

  return (
    <Tooltip contentComponent={<PremiumTooltipContent />}>
      <div>{props.children}</div>
    </Tooltip>
  );
}

export function PremiumTooltipContent() {
  return (
    <div className="text-center">
      <p>You{"'"}ve hit the free tier limit 🥺</p>
      <p>Upgrade to unlock full access.</p>
      <Button className="mt-1" link={{ href: "/premium" }} size="xs">
        Upgrade
      </Button>
    </div>
  );
}
