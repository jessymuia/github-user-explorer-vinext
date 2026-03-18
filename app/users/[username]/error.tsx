// app/users/[username]/error.tsx
"use client";
import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function UserError({
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
    <ErrorState message="Failed to load user profile." onRetry={reset} />
  );
}
