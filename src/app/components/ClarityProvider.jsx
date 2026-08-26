"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId) {
      console.warn(
        "Microsoft Clarity Project ID is missing. Add NEXT_PUBLIC_CLARITY_PROJECT_ID to your .env.local file."
      );
      return;
    }

    Clarity.init(projectId);

    // Project identification
    Clarity.setTag("project", "raksha-bandhan");

    // Experience type
    Clarity.setTag("experience", "raksha-bandhan-surprise");

    // Version
    Clarity.setTag("version", "2026");

    // Initial visit event
    Clarity.event("raksha_bandhan_visit");
  }, []);

  return null;
}