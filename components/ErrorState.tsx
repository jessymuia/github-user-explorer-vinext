"use client";

export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="text-center py-20">
      <p className="text-5xl mb-4">⚠️</p>
      <p className="text-red-400 text-lg mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-400 transition text-sm font-medium"
        >
          Try Again
        </button>
      )}
    </div>
  );
}