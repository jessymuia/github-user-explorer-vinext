// app/users/[username]/repos/[repo]/error.tsx
"use client";
import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function RepoError({
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
    <ErrorState message="Failed to load repository." onRetry={reset} />
  );
}
