// app/users/[username]/loading.tsx
export default function UserLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-4 w-28 bg-zinc-800 rounded mb-10" />
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-10 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-28 h-28 rounded-2xl bg-zinc-800 flex-shrink-0" />
          <div className="flex-1 min-w-0 w-full">
            <div className="h-8 w-48 bg-zinc-800 rounded mb-2" />
            <div className="h-5 w-32 bg-zinc-800 rounded mb-2" />
            <div className="h-3 w-24 bg-zinc-800 rounded mb-4" />
            <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
            <div className="h-4 w-3/4 bg-zinc-800 rounded mb-4" />
            <div className="flex gap-4">
              <div className="h-4 w-24 bg-zinc-800 rounded" />
              <div className="h-4 w-24 bg-zinc-800 rounded" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-10 w-36 bg-zinc-800 rounded-xl" />
            <div className="h-10 w-36 bg-zinc-800 rounded-xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-24" />
        ))}
      </div>
      <div className="h-12 w-full bg-zinc-800 rounded-2xl mb-8" />
      <div className="h-6 w-48 bg-zinc-800 rounded mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
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
