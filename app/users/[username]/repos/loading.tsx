// app/users/[username]/repos/loading.tsx
export default function ReposLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-4 w-24 bg-zinc-800 rounded mb-8" />
      <div className="h-8 w-64 bg-zinc-800 rounded mb-2" />
      <div className="h-4 w-40 bg-zinc-800 rounded mb-8" />
      <div className="flex gap-3 mb-6">
        <div className="h-10 w-32 bg-zinc-800 rounded-xl" />
        <div className="h-10 w-40 bg-zinc-800 rounded-xl" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="h-5 w-3/4 bg-zinc-800 rounded mb-3" />
            <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
            <div className="h-4 w-2/3 bg-zinc-800 rounded mb-4" />
            <div className="flex gap-3">
              <div className="h-3 w-16 bg-zinc-800 rounded" />
              <div className="h-3 w-16 bg-zinc-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
