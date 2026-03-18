// app/users/[username]/repos/[repo]/loading.tsx
export default function RepoLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      <div className="flex gap-2 mb-8">
        <div className="h-4 w-12 bg-zinc-800 rounded" />
        <div className="h-4 w-4 bg-zinc-800 rounded" />
        <div className="h-4 w-20 bg-zinc-800 rounded" />
        <div className="h-4 w-4 bg-zinc-800 rounded" />
        <div className="h-4 w-16 bg-zinc-800 rounded" />
        <div className="h-4 w-4 bg-zinc-800 rounded" />
        <div className="h-4 w-24 bg-zinc-800 rounded" />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-6">
        <div className="h-4 w-20 bg-zinc-800 rounded mb-2" />
        <div className="h-8 w-1/2 bg-zinc-800 rounded mb-4" />
        <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
        <div className="h-4 w-3/4 bg-zinc-800 rounded mb-6" />
        <div className="flex gap-4">
          <div className="h-4 w-24 bg-zinc-800 rounded" />
          <div className="h-4 w-24 bg-zinc-800 rounded" />
          <div className="h-4 w-24 bg-zinc-800 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-24" />
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <div className="h-6 w-32 bg-zinc-800 rounded mb-5" />
        <div className="h-3 w-full bg-zinc-800 rounded mb-6" />
        <div className="flex gap-4">
          <div className="h-4 w-20 bg-zinc-800 rounded" />
          <div className="h-4 w-20 bg-zinc-800 rounded" />
          <div className="h-4 w-20 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  );
}
