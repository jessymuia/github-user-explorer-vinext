export default function TrendingLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="h-8 w-48 bg-zinc-800 rounded-xl mb-8 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 animate-pulse">
            <div className="h-5 w-3/4 bg-zinc-800 rounded mb-3" />
            <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
            <div className="h-4 w-2/3 bg-zinc-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}