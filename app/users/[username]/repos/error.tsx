// app/users/[username]/repos/error.tsx
"use client";
import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function ReposError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState message="Failed to load repositories." onRetry={reset} />
  );
}
