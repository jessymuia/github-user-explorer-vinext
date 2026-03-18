"use client";
import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <ErrorState message="Something went wrong." onRetry={reset} />;
}